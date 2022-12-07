import Skeleton from 'react-loading-skeleton';
import { v4 as uuid } from 'uuid';

import { ItemSkeleton } from './styles';

interface ILoadSkeletonProps {
  count?: number;
}

export const LoadSkeleton = ({ count }: ILoadSkeletonProps): JSX.Element => (
  <>
    {Boolean(count) &&
      Array(count)
        .fill({})
        .map(() => (
          <ItemSkeleton key={uuid()}>
            <Skeleton count={2} />
          </ItemSkeleton>
        ))}
  </>
);
