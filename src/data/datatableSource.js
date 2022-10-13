//temporary data
export const  employeeColums = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: "username", headerName: "Name", width:240, renderCell: (params)=> {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        )
        }
    },
    {
        field: "email" , headerName: "Email", width: 240
    },
    {
        field: "age" , headerName: "Age", width: 100
    },

    {
        field: "status" , headerName: "Status", width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },

];


export const employeeRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "active",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "passive",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];

  export const  authorColums = [
    { field: 'id', headerName: 'Author ID', width: 125, renderCell: (params) => {
      return (
        <div className="cellId">
            <span>
          {params.row.id}
        </span>
        </div>
        
      )
    } },
    { field: "authorName", headerName: "Author Name", width:400, renderCell: (params)=> {
        return (
            <div className="cellWithImg">
                <img className="cellImgg" src={params.row.img} alt="avatar" />
                <span>
                {params.row.authorName}
                </span>
            </div>
        )
        }
    },
   


];


export const authorRows = [
    {
      id: 1,
      authorName: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 2,
      authorName: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      
    },
    {
      id: 3,
      authorName: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 4,
      authorName: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 5,
      authorName: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      
    },
    {
      id: 6,
      authorName: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 7,
      authorName: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      
    },
    {
      id: 8,
      authorName: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 9,
      authorName: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       
    },
    {
      id: 10,
      authorName: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];

  //temporary data
export const  publisherColums = [
  { field: 'id', headerName: 'Publisher ID', width: 125, renderCell: (params) => {
    return (
      <div className="cellId">
          <span>
        {params.row.id}
      </span>
      </div>
      
    )
  } },
  { field: "publisherName", headerName: "Publisher Name", width:400, renderCell: (params)=> {
      return (
          <div className="cellWithImg">
              <img className="cellImg" src={params.row.img} alt="avatar" />
              <span>
              {params.row.publisherName}
              </span>
              
          </div>
      )
      }
  },


];


export const publisherRows = [
  {
    id: 1,
    publisherName: "Kim Đồng",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 2,
    publisherName: "Nhà Xuất Bản Trẻ",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 3,
    publisherName: "Hội Nhà Văn",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 4,
    publisherName: "Lao Động",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 5,
    publisherName: "Wiley",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    
  },
  {
    id: 6,
    publisherName: "Springer Nature",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 7,
    publisherName: "Cambridge",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    
  },
  {
    id: 8,
    publisherName: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 9,
    publisherName: "Pearson",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
     
  },
  {
    id: 10,
    publisherName: "Bertelsmann",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

export const  fieldColums = [
  { field: 'id', headerName: 'Field ID', width: 125, renderCell: (params) => {
    return (
      <div className="cellId">
          <span>
        {params.row.id}
      </span>
      </div>
      
    )
  } 
  },
  { field: "fieldName", headerName: "Field Name", width:400, renderCell: (params)=> {
      return (
          <div className="cellWithImg">
              <img className="cellImg" src={params.row.img} alt="avatar" />
              <span>
              {params.row.fieldName}
              </span>
              
          </div>
      )
      }
  },
  {
    field: "description" , headerName: "Field Description", width: 240, renderCell: (params) => {
      return (
        <div className="cellDes">
            <span>
          {params.row.description}
        </span>
        </div>
        
      )
    }
  },


];


export const fieldRows = [
  {
    id: 1,
    fieldName: "Kim Đồng",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Cools",

  },
  {
    id: 2,
    fieldName: "Nhà Xuất Bản Trẻ",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Cools",
  },
  {
    id: 3,
    fieldName: "Hội Nhà Văn",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Cools",
  },
  {
    id: 4,
    fieldName: "Lao Động",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Cools",
  },
  {
    id: 5,
    fieldName: "Wiley",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Cools",
    
  },
  {
    id: 6,
    fieldName: "Springer Nature",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Cools",
  },
  {
    id: 7,
    fieldName: "Cambridge",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Cools",
    
  },
  {
    id: 8,
    fieldName: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Cools",
  },
  {
    id: 9,
    fieldName: "Pearson",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Cools",
     
  },
  {
    id: 10,
    fieldName: "Bertelsmann",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Cools",
  },
];