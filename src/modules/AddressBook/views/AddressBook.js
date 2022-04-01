import React, { useContext, useEffect } from 'react';
import { AddressbookContext } from '../business';
import { fetchAddressbook } from '../business/action';

const AddressBook = () => {
  const { dispatch, state } = useContext(AddressbookContext);
  const { data, loading, error } = state;

  console.log(data, loading, error);

  useEffect(() => {
    fetchAddressbook()(dispatch);
  }, [dispatch]);

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
