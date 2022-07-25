import React, {useEffect, useState } from 'react'
import { useDebounce } from '../hooks/debounce';
import {useSearchUsersQuery} from '../store/github/github.api'

function HomePage() {
  const [search, setSearch] = useState('')
  const debounced = useDebounce(search, 300)
  const [dropdown, setDropdown] = useState(false)

  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3
  });

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0)
  }, [debounced, data])

  return (
     < div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
       {isError && <p className='text-center text-red-600'>Ups...</p>}

       <div className='relative w-[560px]'>
         <input
          type='text'
          className='border py-2 px-4 w-full h-[42px] mb-2'
          placeholder='Search user...'
          value={search}
          onChange={e=> setSearch(e.target.value)}
          />

          { dropdown &&  <ul className='list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md  bg-green' >
            {isLoading && <p className='text-center'>Loading...</p>}
            {data?.map(user => (
              <li
              key={user.id}
              className="py-2 px-4 hover:bg-green-500 hover:text-white transition-colors cursor-pointer"
              >{user.login}</li>
            ))}
          </ul>}
       </div>
     </div>


  )
}

export default HomePage