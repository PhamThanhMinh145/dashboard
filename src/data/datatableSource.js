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
      img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
      email: "3snow@gmail.com",
      status: "active",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
      email: "snow@gmail.com",
      status: "passive",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];


  export const  bookColums = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: "bookname", headerName: "Book name", width:250, renderCell: (params)=> {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.bookname}
            </div>
        )
        }
    },

    {
      field: "field" , headerName: "Field", width: 200
  },
    {
        field: "quantity" , headerName: "Quantity", width: 240
    },
   

    {
      field: "price" , headerName: "Price", width: 200
    },

];

export const bookRows = [
  {
    id: 1,
    bookname: "Khong gia dinh",
    img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
    field: "Tam Ly",
    quantity: 200,
    price: 99000,
  },
  {
    id: 2,
    bookname: "Khong gia dinh",
    img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
    field: "Tam Ly",
    quantity: 200,
    price: 99000,
  },
  {
    id: 3,
    bookname: "Khong gia dinh",
    img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
    field: "Tam Ly",
    quantity: 200,
    price: 99000,
  },
  {
    id: 4,
    bookname: "Khong gia dinh",
    img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
    field: "Tam Ly",
    quantity: 200,
    price: 99000,
  },
  {
    id: 5,
    bookname: "Khong gia dinh",
    img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
    field: "Tam Ly",
    quantity: 200,
    price: 99000,
  },
  {
    id: 6,
    bookname: "Khong gia dinh",
    img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
    field: "Tam Ly",
    quantity: 200,
    price: 99000,
  },
  {
    id: 6,
    bookname: "Khong gia dinh",
    img: "http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/khong-gia-dinh.png",
    field: "Tam Ly",
    quantity: 200,
    price: 99000,
  }, 
]