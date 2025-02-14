import { useQuery } from '@tanstack/react-query';

import { LunchMenuListRequest, getLunchMenuList } from '@Api/school/lunchMenu';

export const useLunchMenuList = (
  lunchMenuListRequest: LunchMenuListRequest,
) => {
  const { data: lunchMenuList, isLoading } = useQuery({
    queryKey: ['lunchMenuList', lunchMenuListRequest],
    queryFn: () =>
      getLunchMenuList(lunchMenuListRequest).then((response) => response.data),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  const getOrigins = () => {
    if (!lunchMenuList) return [];

    const originsMap = new Map();
    lunchMenuList
      .flatMap((item) => item.origin)
      .forEach(({ ingredient, place }) => {
        originsMap.set(ingredient, place);
      });

    const originsObject = Object.fromEntries(originsMap.entries());

    return Object.entries<string>(originsObject);
  };

  return {
    lunchMenuList: lunchMenuList || [],
    origins: getOrigins(),
    isLoading,
  };
};
