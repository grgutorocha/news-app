import { useCallback, useEffect, useState } from 'react';

import { boxService, IGetNaHoraResponse } from 'src/api/services/box';

export interface IUseControllerParams {
  categories: number[];
  newsId: number | string;
}

interface IUSeControllerResponse {
  list: IGetNaHoraResponse;
  loading: boolean;
}

export const useController = (props: IUseControllerParams): IUSeControllerResponse => {
  const [list, setList] = useState<IGetNaHoraResponse>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAll = useCallback(async (categories: number[], newsId: number | string) => {
    setLoading(true);

    try {
      const { data } = await boxService.getNahora({
        params: {
          categories: categories.join('-'),
          newsId,
        },
      });

      setList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAll(props.categories, props.newsId);
  }, [getAll, props.categories, props.newsId]);

  return { loading, list };
};
