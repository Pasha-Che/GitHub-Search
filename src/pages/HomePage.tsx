import React, {useEffect, useState } from 'react'
import { useDebounce } from '../hooks/debounce';
import {useSearchUsersQuery} from '../store/github/github.api'

function HomePage() {
  const [search, setSearch] = useState('')
  const debouced = useDebounce(search, 300)

  const { isLoading, isError, data } = useSearchUsersQuery('Pasha');

  useEffect(() => {
    console.log(search);
    
  }, [debouced])

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

          <div className='absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md  bg-green' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, commodi.
          </div>
       </div>
     </div>


  )
}

export default HomePage