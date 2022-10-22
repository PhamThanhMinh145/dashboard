import React from "react";

import BookTable from "../../components/datatable/datatableBook/BookTable";

const listBook = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-xl h-screen">
      <BookTable />
    </div>
  );
};

export default listBook;
