import { ProvideAuth, useAuth } from 'utils/context/auth';
import { ProvideUserManagement, useUser } from 'utils/context/admin/user-management/useUser';
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
