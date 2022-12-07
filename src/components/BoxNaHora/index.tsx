import { useController, IUseControllerParams } from './useController';
import View from './View';

interface IBoxNaHoraProps extends IUseControllerParams {
  title: string;
  subtitle?: string | React.ReactNode;
}

const BoxNaHora = ({ categories, newsId, title, subtitle }: IBoxNaHoraProps) => {
  const { list, loading } = useController({ categories, newsId });

  return <View title={title} subtitle={subtitle} list={list} loading={loading} />;
};

export default BoxNaHora;
