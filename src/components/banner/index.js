import React from 'react'

const Banner = () => {
  return (
    <div className='h-full max-h-[640px] mb-8 xl:mb-24'>
        <div className='flex flex-col lg:flex-row'>
            <div className='lg:ml-8 xl:ml-[180px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                <h1 className='text-2xl lg:text-[48px] font-semibold leading-none mb-6'>
                    <span className="text-green-700">Rent and Buy House</span>
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Banner