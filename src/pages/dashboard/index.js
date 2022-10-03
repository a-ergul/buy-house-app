import React from 'react'
import Banner from '../../components/banner'
import HouseContextProv from '../../components/house/houseContext'

const Dashboard = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner/>
      <HouseContextProv/>
    </div>
  )
}

export default Dashboard