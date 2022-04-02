import React, { useContext, useEffect } from 'react';
import { AddressbookContext } from '../business';
import { fetchAddressbook } from '../business/action';
import AddressBookForm from './AddressBokForm';
import AddressBookList from './AddressBookList';

const AddressBook = () => {
  const { dispatch } = useContext(AddressbookContext);

  useEffect(() => {
    fetchAddressbook()(dispatch);
  }, [dispatch]);

  return (
    <div className="AddressBook shadow rounded border">
      <div className="row">
        <div className="col">
          <AddressBookForm />
          <AddressBookList />
        </div>
      </div>
    </div>
  );
};

export default AddressBook;
