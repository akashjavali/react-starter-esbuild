import React, { createContext, useContext } from 'react';
// import { useQueryClient } from 'react-query';
import { hooks } from 'utils';

const UserManagementContext = createContext<any>(null);

interface ProvideUserManagementI {
  children: React.ReactNode;
}

export const useUser = () => useContext(UserManagementContext);

function useUserData() {
  const { user } = hooks.useAuth();
  const [openAddUser, setOpenAddUser] = hooks.useHashRouteToggle('add-modal');
  const [openEditUser, setOpenEditUser] = hooks.useHashRouteToggle('edit-modal');

  // const queryClient = useQueryClient();

  /**
   * A mutation hook that creates a user.
   * @param {Function} createUser - The mutation function.
   * @param {Object} [options={}] - The options object.
   * @param {Function} [options.onSuccess] - The function to run when the mutation succeeds.
   * @param {Function} [options.onError] - The function to run when the mutation fails.
   * @param {Function} [options.onSettled] - The function to run when the mutation is settled.
   * @returns {Object} The mutation hook object.
   */
  // const { mutate: mutateCreateUser, isLoading: isMutateUserCreateLoading } = useMutation(
  //   createUser,
  //   {
  //     onSuccess: () => {
  //       setOpenAddUser(false);
  //       queryClient.invalidateQueries('users');
  //       queryClient.invalidateQueries('vendor_users');
  //       queryClient.invalidateQueries('vendors');
  //       queryClient.invalidateQueries('vendorSpaceData');
  //       queryClient.invalidateQueries('propertyVendorUsers');
  //     },
  //     onError: (err: any) => {},
  //     onSettled: () => {},
  //   },
  // );

  /**
   * Handles the save of a new user.
   * @param {any} data - the data to save.
   * @returns None
   */
  const handleSaveAddUser = (data: any) => {
    const roleID = data?.role_id.id;
    const managerData = data.reporting_managers?.id;
    const formData = new FormData();
    if (data.display_picture) {
      formData.append('file', data.display_picture);
    }
    if (data.access_key_id) {
      formData.append('access_key_id', data.access_key_id);
    }
    if (data.designation.label === 'Other' ? data.other_designation : data.designation.label) {
      formData.append(
        'designation',
        data.designation.label === 'Other' ? data.other_designation : data.designation.label,
      );
    }
    formData.append('email', data.email);
    formData.append('is_other_designation', data.designation.label === 'Other' ? 'true' : 'false');
    formData.append('name', data.name);
    formData.append('phone', data.phone);
    formData.append('properties', JSON.stringify(data.properties));
    if (managerData) {
      if (user?.role?.type !== 'admin' || managerData !== undefined) {
        formData.append('reporting_managers', JSON.stringify([managerData]));
      }
    }
    formData.append('role_id', roleID);
    formData.append('spaces', JSON.stringify(data.spaces));

    if (!data.vendors.includes('')) {
      formData.append('vendors', JSON.stringify(data.vendors));
    }
    if (data?.role?.length >= 1) {
      const ids = data?.role?.map((obj: object) => obj?.id);
      if (data?.role?.length === 1) {
        formData.append('roles', JSON.stringify(ids));
      } else {
        formData.append('roles', JSON.stringify(ids));
      }
    }
    // mutateCreateUser(formData);
  };

  return {
    openAddUser,
    setOpenAddUser,
    openEditUser,
    setOpenEditUser,
    handleSaveAddUser,
  };
}

export function ProvideUserManagement({ children }: ProvideUserManagementI) {
  const userData = useUserData();
  return (
    <UserManagementContext.Provider value={userData}>{children}</UserManagementContext.Provider>
  );
}
