// Hook (use-auth.js)
import React, { useState, useContext, createContext } from 'react';
import { interfaces } from '@Utils';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import useToken from '../../hooks/useToken';
import LocalStorageService from '../../misc/localStorage';
import { logIn } from '../../controllers/auth';

interface Role {}
interface User {}

type AuthType = 'login' | 'loginViaOTP' | 'register';
type SignInMobileType = 'login' | 'otp';

type OnSignInT = (data: interfaces.SignInDataI) => void;
type OnSendOtpT = (data: interfaces.SignInViaMobileDataI) => void;
type OnResendOtpT = () => void;
type OnSignUpT = () => void;
type OnSignOutT = () => void;

type OnClickForgotPasswordT = () => void;
type OnClickSignInOtpT = () => void;
type OnClickRegisterT = () => void;
type OnClickSignInViaEmailT = () => void;

interface StateI {
  user: interfaces.UserI | null;
  roles: Role[] | null;
  useGetRolesData?: any;
  authType: AuthType;
  // rest api call functions
  onSignIn: OnSignInT;
  onSendOtp: OnSendOtpT;
  onResendOtp: OnResendOtpT;
  onSignUp: OnSignUpT;
  onSignOut: OnSignOutT;
  updateUserAndLSuser: (data: any) => void;

  // ui change functions
  onClickForgotPassword: OnClickForgotPasswordT;
  onClickSignInOtp: OnClickSignInOtpT;
  onClickRegister: OnClickRegisterT;
  onClickSignInViaEmail: OnClickSignInViaEmailT;

  signInViaOTP: {
    type: SignInMobileType;
    setType: (value: SignInMobileType) => void;

    otp: string;
    handleOTPChange: (e: any) => void;

    mobileNumber: string;
    loadingOTPcheck: boolean;
  };
  getRoleById: any;
  isCenterManager: boolean;
  isUserLoading: boolean;
  setIsUserLoading: (value: boolean) => void;
}

const authContext = createContext<any>(null);

interface ProvideAuthI {
  children: React.ReactNode;
}

export const useAuth = (): StateI => useContext(authContext);

const LocalStorage = LocalStorageService.getService();

function useProvideAuth() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [user, setUser] = useState(LocalStorage.getUser());

  const [authType] = useState<AuthType>('login');

  const [signInMobileType, setSignInMobileType] = useState<SignInMobileType>('login');
  const [otp] = useState('');
  const [mobileNumber] = useState('');
  const [loadingOTPcheck] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(false);

  const { setToken } = useToken();

  // To update user in local storage
  const updateUserAndLSuser = async (updatedUser: User) => {
    LocalStorage.setUser(updatedUser);
    setUser(updatedUser);
  };

  // Login via Email
  const { mutate: mutateSignin, isLoading: isSignInLoading } = useMutation(logIn, {
    onSuccess: async ({ data }) => {
      setToken({ access_token: data.token, refresh_token: data.token });

      const updatedUser = { ...data };

      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;

      updateUserAndLSuser(updatedUser);
      queryClient.clear();
      if (updatedUser.role) {
        if (updatedUser.role.type === 'customer') {
          navigate('/customer', { replace: true });
        } else if (updatedUser.role.type === 'vendor') {
          navigate('/vendor', { replace: true });
        } else if (updatedUser.role.name === 'Sales Manager') {
          navigate('/admin/vendor', { replace: true });
        }
      }

      // }
    },
    onError: () => {},
  });

  const onSignIn: OnSignInT = (data) => {
    const finalData = {
      ...data,
      email: data.email.toLowerCase(),
    };
    mutateSignin(finalData);
  };

  /**
   *  Add a request interceptor
   *  For: Call the notification api before any actions are perform
   */
  axios.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error),
  );

  axios.interceptors.response.use(
    (response) => {
      if (response.status === 200 && user) {
        queryClient.invalidateQueries('notifications');
      }
      return response;
    },
    async (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          // Do something, call refreshToken() request for example;
        }
      }
      return Promise.reject(error);
    },
  );

  return {
    // api data state
    user,
    isUserLoading,
    setIsUserLoading,

    // ui state
    authType,

    signInViaOTP: {
      type: signInMobileType,
      setType: setSignInMobileType,

      otp,

      mobileNumber,
      loadingOTPcheck,
    },

    onSignIn,
    isSignInLoading,

    updateUserAndLSuser,
  };
}

export function ProvideAuth({ children }: ProvideAuthI) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
