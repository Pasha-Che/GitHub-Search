/* eslint-disable func-call-spacing */
/* eslint-disable no-spaced-func */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useSearchUsersQuery } from '../store/github/github.api';

function HomePage() {
  const { isLoading, isError, data } = useSearchUsersQuery('Pasha');
  console.log(data);

  return (
    <div>HomePage</div>
  );
}

export default HomePage;
