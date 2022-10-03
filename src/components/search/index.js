import React from 'react'
import CountryDropdown from '../dropdown/countryDropdown'

import { RiSearch2Line} from 'react-icons/ri'

const Search = () => {
  return (
    <div className='px-[30px] py-6 max-w-[1370px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
<CountryDropdown/>
<CountryDropdown/>
<CountryDropdown/>
<CountryDropdown/>
<button
className='bg-green-700 lg:max-w-[150px] text-white transition w-full h-16 rounded-lg flex justify-center items-center text-lg'
><RiSearch2Line/></button>
    </div>
  )
}

export default Search