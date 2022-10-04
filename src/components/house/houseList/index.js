import React, { useContext } from 'react'

import { HouseCont } from '../houseContext';
import House from '../house';
import { ImSpinner2 } from 'react-icons/im';

import { Link } from 'react-router-dom';


const HouseList = () => {
  const { houses, loading} = useContext(HouseCont);

  if (loading) {
    return (
      <ImSpinner2/>
    )
  }

  if (houses.length < 1) {
    return (
      <div className='text-center'>Sorry</div>
    )
  }
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-14'>
          {houses.map((house, index)=> {
            return (
              <Link to={`/property/${house.id}`} key={index}>
              <House house={house}/>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HouseList