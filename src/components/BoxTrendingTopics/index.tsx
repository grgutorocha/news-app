import { useController, IUseControllerParams } from './useController';
import View from './View';

const BoxTrendingTopics = ({ newsId }: IUseControllerParams) => {
  const { list, loading } = useController({ newsId });

  return <View title="Trending Topics" list={list} loading={loading} />;
};

export default BoxTrendingTopics;
