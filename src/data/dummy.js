
import { AiFillHome } from 'react-icons/ai';
import { IoIosPeople  } from 'react-icons/io';
import { MdOutlinePeopleAlt  } from 'react-icons/md';
import { BsBookHalf, BsPersonLinesFill, BsFillCartCheckFill  } from 'react-icons/bs';
import { SiAffinitypublisher  } from 'react-icons/si';

import { BiCategory, BiDollar  } from 'react-icons/bi';


export const links = [
    {
      title: 'DASHBOARD',

      
      links: [
        {
          name: 'home',
          icon: <AiFillHome />,
        },
      ],
    },
  
    {
      title: 'ACCOUNTS',
      links: [
        {
          name: 'employee',
          icon: <IoIosPeople />,
        },
        {
          name: 'customer',
          icon: <MdOutlinePeopleAlt />,
        },
        
      ],
    },
    {
      title: 'PRODUCTS',
      links: [
        {
          name: 'books',
          icon: <BsBookHalf />,
        },
        {
          name: 'publishers',
          icon: <SiAffinitypublisher />,
        },
        {
          name: 'authors',
          icon: <BsPersonLinesFill />,
        },
        {
          name: 'fields',
          icon: <BiCategory />,
        },
      ],
    },
    {
      title: 'SALES',
      links: [
        {
          name: 'orders',
          icon: <BsFillCartCheckFill />,
        },
        {
          name: 'Sale',
          icon: <BiDollar />,
        },
      ],
    },
  ];

  
  export const themeColors = [
    {
      name: 'blue-theme',
      color: '#1A97F5',
    },
    {
      name: 'green-theme',
      color: '#12E86B',
    },
    {
      name: 'purple-theme',
      color: '#7352FF',
    },
    {
      name: 'red-theme',
      color: '#FF5C8E',
    },
    {
      name: 'indigo-theme',
      color: '#1E4DB7',
    },
    {
      color: '#FB9678',
      name: 'orange-theme',
    },
  ];

  export const getRoleCollection = () => (
    [
        {id: '1' , title: 'Admin'},
        {id: '3' , title: 'Staff'},
        
    ]
)

