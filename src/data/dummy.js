
import { AiFillHome } from 'react-icons/ai';
import { IoIosPeople  } from 'react-icons/io';
import { MdOutlinePeopleAlt  } from 'react-icons/md';
import { BsBookHalf, BsPersonLinesFill, BsFillCartCheckFill  } from 'react-icons/bs';
import { SiAffinitypublisher  } from 'react-icons/si';

import { BiCategory, BiDollar  } from 'react-icons/bi';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { FiBarChart } from 'react-icons/fi';
import { HiOutlineRefresh } from 'react-icons/hi';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';

import { GrLocation } from 'react-icons/gr';


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
          name: 'customers',
          icon: <MdOutlinePeopleAlt />,
        },
        
      ],
    },
    {
      title: 'PRODUCTS',
      links: [
        {
          name: 'Books',
          icon: <BsBookHalf />,
        },
        {
          name: 'Publishers',
          icon: <SiAffinitypublisher />,
        },
        {
          name: 'authors',
          icon: <BsPersonLinesFill />,
        },
        {
          name: 'Fields',
          icon: <BiCategory />,
        },
      ],
    },
    {
      title: 'SALES',
      links: [
        {
          name: 'Purchase orders',
          icon: <BsFillCartCheckFill />,
        },
        {
          name: 'Sale',
          icon: <BiDollar />,
        },
      ],
    },
  ];

  export const earningData = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: '39,354',
      percentage: '-4%',
      title: 'Customers',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
      link: "See all employees"
    },
    {
      icon: <BsBoxSeam />,
      amount: '4,396',
      percentage: '+23%',
      title: 'Products',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'green-600',
      link: "See all Customers"
    },
    {
      icon: <FiBarChart />,
      amount: '423,39',
      percentage: '+38%',
      title: 'Sales',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
  
      pcColor: 'green-600',
      link: "View all products"
    },
    {
      icon: <HiOutlineRefresh />,
      amount: '39,354',
      percentage: '-12%',
      title: 'Refunds',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
      pcColor: 'red-600',
      link: "View details"
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


  // export const customersData = [
  //   {
  //     CustomerID: 1001,
  //     CustomerName: 'Nirav Joshi',
  //     CustomerEmail: 'nirav@gmail.com',
  //     CustomerImage:
  //       avatar2,
  //     ProjectName: 'Hosting Press HTML',
  //     Status: 'Active',
  //     StatusBg: '#8BE78B',
  //     Weeks: '40',
  //     Budget: '$2.4k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1002,
  
  //     CustomerName: 'Sunil Joshi',
  //     CustomerEmail: 'sunil@gmail.com',
  //     ProjectName: 'Elite Admin',
  //     Status: 'Active',
  //     CustomerImage:
  //       avatar3,
  
  //     StatusBg: '#8BE78B',
  //     Weeks: '11',
  //     Budget: '$3.9k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1003,
  
  //     CustomerName: 'Andrew McDownland',
  //     CustomerEmail: 'andrew@gmail.com',
  //     ProjectName: 'Real Homes WP Theme',
  //     Status: 'Pending',
  //     CustomerImage:
  //       avatar4,
  //     StatusBg: '#FEC90F',
  //     Weeks: '19',
  //     Budget: '$24.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1004,
  
  //     CustomerName: 'Christopher Jamil',
  //     CustomerEmail: 'jamil@gmail.com',
  //     ProjectName: 'MedicalPro WP Theme',
  //     Status: 'Completed',
  //     CustomerImage:
  //       avatar,
  //     StatusBg: '#8BE78B',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1005,
  
  //     CustomerName: 'Michael',
  //     CustomerEmail: 'michael@gmail.com',
  //     ProjectName: 'Weekly WP Theme',
  //     Status: 'Cancel',
  //     CustomerImage:
  //       avatar2,
  //     StatusBg: 'red',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1006,
  //     CustomerName: 'Nirav Joshi',
  //     CustomerEmail: 'nirav@gmail.com',
  //     CustomerImage:
  //       avatar2,
  //     ProjectName: 'Hosting Press HTML',
  //     Status: 'Active',
  //     StatusBg: '#8BE78B',
  //     Weeks: '40',
  //     Budget: '$2.4k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1007,
  
  //     CustomerName: 'Sunil Joshi',
  //     CustomerEmail: 'sunil@gmail.com',
  //     ProjectName: 'Elite Admin',
  //     Status: 'Active',
  //     CustomerImage:
  //       avatar3,
  
  //     StatusBg: '#8BE78B',
  //     Weeks: '11',
  //     Budget: '$3.9k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1008,
  
  //     CustomerName: 'Andrew McDownland',
  //     CustomerEmail: 'andrew@gmail.com',
  //     ProjectName: 'Real Homes WP Theme',
  //     Status: 'Pending',
  //     CustomerImage:
  //       avatar4,
  //     StatusBg: '#FEC90F',
  //     Weeks: '19',
  //     Budget: '$24.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1009,
  
  //     CustomerName: 'Christopher Jamil',
  //     CustomerEmail: 'jamil@gmail.com',
  //     ProjectName: 'MedicalPro WP Theme',
  //     Status: 'Completed',
  //     CustomerImage:
  //       avatar,
  //     StatusBg: '#8BE78B',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1010,
  
  //     CustomerName: 'Michael',
  //     CustomerEmail: 'michael@gmail.com',
  //     ProjectName: 'Weekly WP Theme',
  //     Status: 'Cancel',
  //     CustomerImage:
  //       avatar2,
  //     StatusBg: 'red',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1011,
  //     CustomerName: 'Nirav Joshi',
  //     CustomerEmail: 'nirav@gmail.com',
  //     CustomerImage:
  //       avatar2,
  //     ProjectName: 'Hosting Press HTML',
  //     Status: 'Active',
  //     StatusBg: '#8BE78B',
  //     Weeks: '40',
  //     Budget: '$2.4k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1012,
  
  //     CustomerName: 'Sunil Joshi',
  //     CustomerEmail: 'sunil@gmail.com',
  //     ProjectName: 'Elite Admin',
  //     Status: 'Active',
  //     CustomerImage:
  //       avatar3,
  
  //     StatusBg: '#8BE78B',
  //     Weeks: '11',
  //     Budget: '$3.9k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1013,
  
  //     CustomerName: 'Andrew McDownland',
  //     CustomerEmail: 'andrew@gmail.com',
  //     ProjectName: 'Real Homes WP Theme',
  //     Status: 'Pending',
  //     CustomerImage:
  //       avatar4,
  //     StatusBg: '#FEC90F',
  //     Weeks: '19',
  //     Budget: '$24.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1014,
  
  //     CustomerName: 'Christopher Jamil',
  //     CustomerEmail: 'jamil@gmail.com',
  //     ProjectName: 'MedicalPro WP Theme',
  //     Status: 'Completed',
  //     CustomerImage:
  //       avatar,
  //     StatusBg: '#8BE78B',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1015,
  
  //     CustomerName: 'Michael',
  //     CustomerEmail: 'michael@gmail.com',
  //     ProjectName: 'Weekly WP Theme',
  //     Status: 'Cancel',
  //     CustomerImage:
  //       avatar2,
  //     StatusBg: 'red',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1016,
  //     CustomerName: 'Nirav Joshi',
  //     CustomerEmail: 'nirav@gmail.com',
  //     CustomerImage:
  //       avatar2,
  //     ProjectName: 'Hosting Press HTML',
  //     Status: 'Active',
  //     StatusBg: '#8BE78B',
  //     Weeks: '40',
  //     Budget: '$2.4k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1017,
  
  //     CustomerName: 'Sunil Joshi',
  //     CustomerEmail: 'sunil@gmail.com',
  //     ProjectName: 'Elite Admin',
  //     Status: 'Active',
  //     CustomerImage:
  //       avatar3,
  
  //     StatusBg: '#8BE78B',
  //     Weeks: '11',
  //     Budget: '$3.9k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1018,
  
  //     CustomerName: 'Andrew McDownland',
  //     CustomerEmail: 'andrew@gmail.com',
  //     ProjectName: 'Real Homes WP Theme',
  //     Status: 'Pending',
  //     CustomerImage:
  //       avatar4,
  //     StatusBg: '#FEC90F',
  //     Weeks: '19',
  //     Budget: '$24.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1019,
  
  //     CustomerName: 'Christopher Jamil',
  //     CustomerEmail: 'jamil@gmail.com',
  //     ProjectName: 'MedicalPro WP Theme',
  //     Status: 'Completed',
  //     CustomerImage:
  //       avatar,
  //     StatusBg: '#8BE78B',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1020,
  
  //     CustomerName: 'Michael',
  //     CustomerEmail: 'michael@gmail.com',
  //     ProjectName: 'Weekly WP Theme',
  //     Status: 'Cancel',
  //     CustomerImage:
  //       avatar2,
  //     StatusBg: 'red',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1021,
  //     CustomerName: 'Nirav Joshi',
  //     CustomerEmail: 'nirav@gmail.com',
  //     CustomerImage:
  //       avatar2,
  //     ProjectName: 'Hosting Press HTML',
  //     Status: 'Active',
  //     StatusBg: '#8BE78B',
  //     Weeks: '40',
  //     Budget: '$2.4k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1022,
  
  //     CustomerName: 'Sunil Joshi',
  //     CustomerEmail: 'sunil@gmail.com',
  //     ProjectName: 'Elite Admin',
  //     Status: 'Active',
  //     CustomerImage:
  //       avatar3,
  
  //     StatusBg: '#8BE78B',
  //     Weeks: '11',
  //     Budget: '$3.9k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1023,
  
  //     CustomerName: 'Andrew McDownland',
  //     CustomerEmail: 'andrew@gmail.com',
  //     ProjectName: 'Real Homes WP Theme',
  //     Status: 'Pending',
  //     CustomerImage:
  //       avatar4,
  //     StatusBg: '#FEC90F',
  //     Weeks: '19',
  //     Budget: '$24.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1024,
  
  //     CustomerName: 'Christopher Jamil',
  //     CustomerEmail: 'jamil@gmail.com',
  //     ProjectName: 'MedicalPro WP Theme',
  //     Status: 'Completed',
  //     CustomerImage:
  //       avatar,
  //     StatusBg: '#8BE78B',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1025,
  
  //     CustomerName: 'Michael',
  //     CustomerEmail: 'michael@gmail.com',
  //     ProjectName: 'Weekly WP Theme',
  //     Status: 'Cancel',
  //     CustomerImage:
  //       avatar2,
  //     StatusBg: 'red',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1026,
  //     CustomerName: 'Nirav Joshi',
  //     CustomerEmail: 'nirav@gmail.com',
  //     CustomerImage:
  //       avatar2,
  //     ProjectName: 'Hosting Press HTML',
  //     Status: 'Active',
  //     StatusBg: '#8BE78B',
  //     Weeks: '40',
  //     Budget: '$2.4k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1027,
  
  //     CustomerName: 'Sunil Joshi',
  //     CustomerEmail: 'sunil@gmail.com',
  //     ProjectName: 'Elite Admin',
  //     Status: 'Active',
  //     CustomerImage:
  //       avatar3,
  
  //     StatusBg: '#8BE78B',
  //     Weeks: '11',
  //     Budget: '$3.9k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1028,
  
  //     CustomerName: 'Andrew McDownland',
  //     CustomerEmail: 'andrew@gmail.com',
  //     ProjectName: 'Real Homes WP Theme',
  //     Status: 'Pending',
  //     CustomerImage:
  //       avatar4,
  //     StatusBg: '#FEC90F',
  //     Weeks: '19',
  //     Budget: '$24.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1029,
  
  //     CustomerName: 'Christopher Jamil',
  //     CustomerEmail: 'jamil@gmail.com',
  //     ProjectName: 'MedicalPro WP Theme',
  //     Status: 'Completed',
  //     CustomerImage:
  //       avatar,
  //     StatusBg: '#8BE78B',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1030,
  
  //     CustomerName: 'Michael',
  //     CustomerEmail: 'michael@gmail.com',
  //     ProjectName: 'Weekly WP Theme',
  //     Status: 'Cancel',
  //     CustomerImage:
  //       avatar2,
  //     StatusBg: 'red',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1031,
  //     CustomerName: 'Nirav Joshi',
  //     CustomerEmail: 'nirav@gmail.com',
  //     CustomerImage:
  //       avatar2,
  //     ProjectName: 'Hosting Press HTML',
  //     Status: 'Active',
  //     StatusBg: '#8BE78B',
  //     Weeks: '40',
  //     Budget: '$2.4k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1032,
  
  //     CustomerName: 'Sunil Joshi',
  //     CustomerEmail: 'sunil@gmail.com',
  //     ProjectName: 'Elite Admin',
  //     Status: 'Active',
  //     CustomerImage:
  //       avatar3,
  
  //     StatusBg: '#8BE78B',
  //     Weeks: '11',
  //     Budget: '$3.9k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1033,
  
  //     CustomerName: 'Andrew McDownland',
  //     CustomerEmail: 'andrew@gmail.com',
  //     ProjectName: 'Real Homes WP Theme',
  //     Status: 'Pending',
  //     CustomerImage:
  //       avatar4,
  //     StatusBg: '#FEC90F',
  //     Weeks: '19',
  //     Budget: '$24.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1034,
  
  //     CustomerName: 'Christopher Jamil',
  //     CustomerEmail: 'jamil@gmail.com',
  //     ProjectName: 'MedicalPro WP Theme',
  //     Status: 'Completed',
  //     CustomerImage:
  //       avatar,
  //     StatusBg: '#8BE78B',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1035,
  
  //     CustomerName: 'Michael',
  //     CustomerEmail: 'michael@gmail.com',
  //     ProjectName: 'Weekly WP Theme',
  //     Status: 'Cancel',
  //     CustomerImage:
  //       avatar2,
  //     StatusBg: 'red',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1036,
  //     CustomerName: 'Nirav Joshi',
  //     CustomerEmail: 'nirav@gmail.com',
  //     CustomerImage:
  //       avatar2,
  //     ProjectName: 'Hosting Press HTML',
  //     Status: 'Active',
  //     StatusBg: '#8BE78B',
  //     Weeks: '40',
  //     Budget: '$2.4k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1037,
  
  //     CustomerName: 'Sunil Joshi',
  //     CustomerEmail: 'sunil@gmail.com',
  //     ProjectName: 'Elite Admin',
  //     Status: 'Active',
  //     CustomerImage:
  //       avatar3,
  
  //     StatusBg: '#8BE78B',
  //     Weeks: '11',
  //     Budget: '$3.9k',
  //     Location: 'India',
  //   },
  //   {
  //     CustomerID: 1038,
  
  //     CustomerName: 'Andrew McDownland',
  //     CustomerEmail: 'andrew@gmail.com',
  //     ProjectName: 'Real Homes WP Theme',
  //     Status: 'Pending',
  //     CustomerImage:
  //       avatar4,
  //     StatusBg: '#FEC90F',
  //     Weeks: '19',
  //     Budget: '$24.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1039,
  //     CustomerName: 'Christopher Jamil',
  //     CustomerEmail: 'jamil@gmail.com',
  //     ProjectName: 'MedicalPro WP Theme',
  //     Status: 'Completed',
  //     CustomerImage:
  //       avatar,
  //     StatusBg: '#8BE78B',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  //   {
  //     CustomerID: 1040,
  //     CustomerName: 'Michael',
  //     CustomerEmail: 'michael@gmail.com',
  //     ProjectName: 'Weekly WP Theme',
  //     Status: 'Cancel',
  //     CustomerImage:
  //       avatar2,
  //     StatusBg: 'red',
  //     Weeks: '34',
  //     Budget: '$16.5k',
  //     Location: 'USA',
  //   },
  
  // ];

  // export const customersGrid = [
  //   { type: 'checkbox', width: '50' },
  //   { headerText: 'Name',
  //     width: '150',
  //     template: customerGridImage,
  //     textAlign: 'Center' },
  //   { field: 'ProjectName',
  //     headerText: 'Project Name',
  //     width: '150',
  //     textAlign: 'Center' },
  //   { field: 'Status',
  //     headerText: 'Status',
  //     width: '130',
  //     format: 'yMd',
  //     textAlign: 'Center',
  //     template: customerGridStatus },
  //   {
  //     field: 'Weeks',
  //     headerText: 'Weeks',
  //     width: '100',
  //     format: 'C2',
  //     textAlign: 'Center' },
  //   { field: 'Budget',
  //     headerText: 'Budget',
  //     width: '100',
  //     format: 'yMd',
  //     textAlign: 'Center' },
  
  //   { field: 'Location',
  //     headerText: 'Location',
  //     width: '150',
  //     textAlign: 'Center' },
  
  //   { field: 'CustomerID',
  //     headerText: 'Customer ID',
  //     width: '120',
  //     textAlign: 'Center',
  //     isPrimaryKey: true,
  //   },
  
  // ];
  const gridEmployeeProfile = (props) => (
    <div className="flex items-center gap-2">
      <img
        className="rounded-full w-10 h-10"
        src={props.EmployeeImage}
        alt="employee"
      />
      <p>{props.Name}</p>
    </div>
);

  
const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

  export const employeesData = [
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar3,
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar,
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      EmployeeImage:
        avatar2,
    },
  ];


export const employeesGrid = [
    { headerText: 'Employee',
      width: '150',
      template: gridEmployeeProfile,
      textAlign: 'Center' },
    { field: 'Name',
      headerText: '',
      width: '0',
      textAlign: 'Center',
    },
    { field: 'Title',
      headerText: 'Designation',
      width: '170',
      textAlign: 'Center',
    },
    { headerText: 'Country',
      width: '120',
      textAlign: 'Center',
      template: gridEmployeeCountry },
  
    { field: 'HireDate',
      headerText: 'Hire Date',
      width: '135',
      format: 'yMd',
      textAlign: 'Center' },
  
    { field: 'ReportsTo',
      headerText: 'Reports To',
      width: '120',
      textAlign: 'Center' },
    { field: 'EmployeeID',
      headerText: 'Employee ID',
      width: '125',
      textAlign: 'Center' },
  ];



// const customerGridImage = (props) => (
//   <div className="image flex gap-4">
//     <img
//       className="rounded-full w-10 h-10"
//       src={props.CustomerImage}
//       alt="employee"
//     />
//     <div>
//       <p>{props.CustomerName}</p>
//       <p>{props.CustomerEmail}</p>
//     </div>
//   </div>
// );

// const customerGridStatus = (props) => (
//   <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
//     <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
//     <p>{props.Status}</p>
//   </div>
// );