import { ProvideAuth, useAuth } from '@Utils/context/auth';
import { ProvideUserManagement, useUser } from '@Utils/context/admin/user-management/useUser';
import { useDebounce } from './useDebounce';
import useToken from './useToken';
import { useHashRouteToggle } from './useHashRouteToggle';
import { useOnClickOutside } from './useOnclickOutside';

export {
  useToken,
  useDebounce,
  useAuth,
  ProvideAuth,
  useUser,
  ProvideUserManagement,
  useHashRouteToggle,
  useOnClickOutside,
};
