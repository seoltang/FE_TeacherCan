import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import route from '@Utils/route';

import { ROUTE_PATH } from '@Constant/routePath';

import { UserInfo } from '@Types/user';

type UserInfoContext = UserInfo | null;

type UserInfoActionsContext = {
  signIn: (userInfo: UserInfoContext) => void;
  signOut: () => void;
} | null;

export const UserInfoContext = createContext<UserInfoContext>(null);

export const UserInfoActionsContext =
  createContext<UserInfoActionsContext>(null);

const UserProvider = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserInfoContext>(null);

  const [main] = route.getPathnames(pathname);
  const token = localStorage.getItem('token');

  const actions: UserInfoActionsContext = useMemo(
    () => ({
      signIn: (userInfo: UserInfoContext) => setUserInfo(userInfo),

      signOut: () => {
        setUserInfo(null);
        localStorage.removeItem('token');
        navigate(route.calculatePath([ROUTE_PATH.auth, ROUTE_PATH.signIn]));
      },
    }),
    [navigate],
  );

  const fetchUserInfo = useCallback(async () => {
    const response = await fetch('/user/info', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw Error('로그인 정보가 없습니다.');

    const data = (await response.json()) as UserInfoContext;

    actions.signIn(data);
  }, [actions, token]);

  useEffect(() => {
    if (userInfo) return;
    if (main === ROUTE_PATH.auth) return;

    if (!token) {
      navigate(route.calculatePath([ROUTE_PATH.auth, ROUTE_PATH.signIn]));
      return;
    }

    fetchUserInfo();
  }, [fetchUserInfo, main, navigate, token, userInfo]);

  return (
    <UserInfoContext.Provider value={userInfo}>
      <UserInfoActionsContext.Provider value={actions}>
        {children}
      </UserInfoActionsContext.Provider>
    </UserInfoContext.Provider>
  );
};

export default UserProvider;
