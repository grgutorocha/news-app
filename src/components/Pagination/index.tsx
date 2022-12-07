import React from 'react';
import { Pagination as PaginationUI, PaginationProps } from 'antd';
import { useRouter } from 'next/router';

import 'antd/lib/pagination/style/index.css';

interface CustomPaginationProps extends PaginationProps {
  route: string;
}

const Pagination = ({ route, ...rest }: CustomPaginationProps) => {
  const router = useRouter();

  const onChangePage = (page: number, pageSize?: number | undefined) => {
    router.push({
      pathname: route,
      query: {
        page,
      },
    });
  };

  return <PaginationUI {...rest} onChange={onChangePage} />;
};

export default Pagination;
