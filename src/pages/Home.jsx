import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';

import { useStateContext } from '../contexts/ContextProvider';

import { earningData } from '../data/dummy';
import {ReactComponent as ReactLogo} from '../data/welcome-bg.svg';

const Home = () => {

  const {currentColor} = useStateContext();
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-green-300 
          dark:text-gray-200
          dark:bg-secondary-dark-bg h-45
          rounded-xl w-full lg:w-56 p-8 pt-9 m-3 
           bg-no-repeat bg-cover
          bg-center'>
        
              <div className='flex justify-between items-center'>
                <div>
                  <p className="font-bold text-gray-400 mb-2">Earnings</p>
                  <p className='text-2xl'>$ 63,448.78</p>
                 
                </div>
              </div>
              <div  className='mt-6'>
              <a href='#' className='font-normal italic hover:not-italic underline underline-offset-1  ' >View net earning</a>
              </div>
        </div>

        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div key={item.title}
                className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
                md:w-56 p-4 pt-9 rounded-2xl">
                  <button type='button' style={{color:item.iconColor, backgroundColor: item.iconBg}}
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl" >
                    {item.icon}
                  </button>
                  <p className='mt-3'>
                    <span className='text-lg font-semibold'>
                       {item.amount}
                    </span>
                    <span className={`text-sm text-${item.pcColor} ml-2`}>
                      {item.percentage}
                    </span>
                  </p>
                  <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
                  <div  className='mt-4'>
              <a href='#' className='font-normal italic hover:not-italic
                 underline underline-offset-1'>
                  {item.link}</a>
              </div>
                </div>
          ))}
        </div>
          
          

             
        
       
              
       
      </div>
    </div>
  )
}

export default Home