import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex items-center border-2  focus-within:border-blue-500 rounded-xl overflow-hidden w-fit">
        <input type="text"  placeholder=' 🔍 search here' className='border-none px-2 rounded-2xl outline-none' />
        <button className='bg-blue-500 px-4 py-1 rounded-xl ml-2 border-2 border-blue-500  text-white'>Search</button>
      
    </div>
  )
}

export default SearchBar


