import React from 'react'
import List from '../../components/table/Table'
import './style/single.scss'

const Single = () => {
  return (
    <div className='singleContainer'>
        <div className='top'>
          <div className='center'>
                <h1 className='title'>Information</h1>
                <div className='item'>
                  <img
                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt=""
                    className="itemImg"
                  />
                  <div className="details">
                    <h1 className="itemTitle">Thanh Minh</h1>
                    <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">thanhminh1452000@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+84 912303985</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">
                      249 Le Thi Rieng st. Thoi An Ward District 12 
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">Viet Nam</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>  
    </div>
  )
}

export default Single