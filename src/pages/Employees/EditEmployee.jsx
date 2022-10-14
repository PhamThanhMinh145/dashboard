import { BrightnessAuto, Event, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import React from 'react'
import Datatable from '../../components/datatable/Datatable'
import './style/edit.scss'
const EditEmployee = () => {
  return (
    <div className='employee'>
      <div className='employeeTitleContainer'>
        <h1 className='employeeTitle'>Edit Employee</h1>
        <button className='employeeAddButton'>Create</button>
      </div>

      <div className='employeeContainer'>
        <div className='show'>
          <div className="showTop">
            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
               alt="avatar" className="employeeShowImg" />

            <div className="showTopTitle">
                <span className='showUserName'>Anna Becker</span>
                <span className="showRole">Admin</span>
            </div>   
          </div>
          
          <div className="showBottom">
            <span className="showTitle">
              Account Details
            </span>

            <div className="showInfo">
              <PermIdentity className='showIcon' />
              <span className="showInfoTitle">annabeck99</span>
            </div>

            <div className="showInfo">
              <Event className='showIcon' />
              <span className="showInfoTitle">10.12.1999</span>
            </div>

            <span className="showTitle">
              Contact Details
            </span>

            <div className="showInfo">
              <MailOutline className='showIcon' />
              <span className="showInfoTitle">annabeck99@gmail.com</span>
            </div>

            
           
            <div className="showInfo">
              <PhoneAndroid className='showIcon' />
              <span className="showInfoTitle">0963153985</span>
            </div>

            <div className="showInfo">
              <LocationSearching className='showIcon' />
              <span className="showInfoTitle">District 9</span>
            </div>

            <div className="showInfo">
              <BrightnessAuto className='showIcon' />
              <span className="showInfoTitle">active</span>
            </div>
           

          </div>
        </div>
        <div className='update'>
            <span className="updateTitle">Edit</span>
            <form action="" className="updateForm">
              <div className="updateLeft">
                <div className="updateItem">
                  <label>Name</label>
                  <input type="text" placeholder='annabeck' className='employeeUpdateInput' />
                </div>


                <div className="updateItem">
                  <label>Email</label>
                  <input type="email" placeholder='annabeck@gmail.com' className='employeeUpdateInput' />
                </div>

                <div className="updateItem">
                  <label>Date of birth</label>
                  <input type="Date"  className='employeeUpdateInput' />
                </div>

                <div className="updateItem">
                  <label>Phone</label>
                  <input type="text" placeholder='annabeck' className='employeeUpdateInput' />
                </div>

                <div className="updateItem">
                  <label>Address</label>
                  <input type="text" placeholder='District 9' className='employeeUpdateInput' />
                </div>

                <div className="updateItem">
                  <label>Role</label>
                  <input type="text" placeholder='annabeck' className='employeeUpdateInput' />
                </div>
              </div>

              <div className='updateRight'>
                <div className="updateUpload">
                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
                    alt="avatar" className="updateIMG" />

                    <label htmlFor='file' ><Publish style={{textAlign: "center", cursor: "pointer"}}/></label>
                    <input type="file" id='file' style={{display:"none"}}/>
                </div>

                <div className="updateButton">Update</div>
              </div>
            </form>

        </div>
      </div>


    </div>
  )
}

export default EditEmployee