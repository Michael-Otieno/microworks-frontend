import { BiSearch } from 'react-icons/bi';

function Search() {

  return (
    <div className='relative'>
      <input className='bg-inputs rounded-lg py-1.5 px-8 text-sm font-normal' type="search" placeholder="Search by email"/>
      <BiSearch className='absolute top-2 w-10'/>
    </div>
  )
}

export default Search;
