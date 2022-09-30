import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar, Footer, Sidebar, ThemeSetting} from './components'


import {Home, Employees, Customers, Books, Publishers, Authors, Fields,
PurchaseOrders, Sale} from './pages'

import { useStateContext } from './contexts/ContextProvider';
import ListEmployees from './pages/Employees/ListEmployees';
import NewEmployee from './pages/Employees/NewEmployee';
import  EditEmployee  from './pages/Employees/EditEmployee'
import ListCustomers from './pages/Customers/ListCustomers'
import Single from './pages/Customers/Single'
import {userInputs} from "./data/formSource"



const App = () => {

  const {activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();


  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
            <TooltipComponent content="Settings" position='Top'>
              <button type='button' className='text-2xl p-2 
              hover:drop-shadow-xl hover:bg-light-gray text-white'
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}>
                <FiSettings/>
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg
             bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
              
            </div>
          )}
          <div className={
            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
            ${activeMenu 
              ? 'md:ml-72' 
              : 'flex-2'}`
          }>
            <div className='fixed md:static bg-main-bg 
            dark:bg-main-dark-bg navbar '>
              <Navbar />
            </div>

          <div>

           { themeSettings && <ThemeSetting/>}
            <Routes>
              {/*Dashboard */}
             
              <Route path='/' >
                <Route index element={<Home />} />
                <Route  path='home' element={<Home />} />
              </Route>

              {/* Accounts */}
              <Route path="employee">
                 <Route index element={<ListEmployees />} />
                 <Route path='new' element={<NewEmployee inputs={userInputs} title="Add new Employee"/>} />
                 <Route path=':userId' element={<Single />} />
              </Route>

              <Route path="customer">
                 <Route index element={<ListCustomers />} />
                 <Route path=':userId' element={<Single />} />
              </Route>
   

   
              <Route path="/employees" element={<Employees />}  />

              <Route path="/customers"  />

              {/* Products */}
              <Route path="/books" element={<Books />} />
              <Route path="/publishers" element={<Publishers />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/Fields" element={<Fields />} />

              {/* Sales */}
              <Route path="/purchase-orders" element={<PurchaseOrders />} />
              <Route path="/sale" element={<Sale />}/>




            </Routes>
          </div>
        </div>

      </div>
      
    </BrowserRouter>
    </div>
    
  )
}

export default App