import React from 'react';
import useFetchAdressBook from '../business/useFetchAdressBook';

const AddressBook = () => {
  const [response] = useFetchAdressBook();
  console.log(response);
  return (
    <div className="row">
      <div className="col">
        <p>
          react app <i className="fa fa-thumbs-up"></i>
        </p>
      </div>
    </div>
  );
};

export default AddressBook;
