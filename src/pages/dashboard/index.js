import React from 'react'
import Banner from '../../components/banner'
import HouseContextProv from '../../components/house/houseContext'
import HouseList from '../../components/house/houseList'

const Dashboard = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner/>
      <HouseList/>
    </div>
  )
}

export default Dashboard