import { useCallback, useEffect, useState } from 'react';

import { boxService, IGetTrendingTopicsResponse } from 'src/api/services/box';

export interface IUseControllerParams {
  newsId: number | string;
}

interface IUSeControllerResponse {
  list: IGetTrendingTopicsResponse;
  loading: boolean;
}

export const useController = (props: IUseControllerParams): IUSeControllerResponse => {
  const [list, setList] = useState<IGetTrendingTopicsResponse>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAll = useCallback(async (newsId: number | string) => {
    setLoading(true);

    try {
      const { data } = await boxService.getTrendingTopics({
        params: {
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
    getAll(props.newsId);
  }, [getAll, props.newsId]);

  return { loading, list };
};
