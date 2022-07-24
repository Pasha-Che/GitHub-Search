import React from 'react'
import {useSearchUsersQuery} from '../store/github/github.api'

function HomePage() {
  const { isLoading, isError, data } = useSearchUsersQuery('Pasha');
  console.log(data);
  return (
    <div>HomePage</div>
  )
}

export default HomePage