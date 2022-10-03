import React from 'react'
import Search from '../search'

import Image from '../../assets/house.jpg'
const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
        <div className='flex flex-col lg:flex-row'>
            <div className='lg:ml-8 xl:ml-[180px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                <h1 className='text-2xl lg:text-[48px] font-semibold leading-none mb-6 text-rose-300'>
                    <span className="text-green-700">Rent and Buy </span> House
                </h1>
                <p className='max-2-[480px] mb-8 text-lg text-stone-400'>
                  Search properties for buy & rent
                </p>
            </div>
            <div className='hidden flex-1 lg:flex justify-end items-end'>
              <img src={Image}  className="rounded-tl-logo"/>
            </div>
        </div>
        <Search/>
    </section>
  )
}

export default Banner