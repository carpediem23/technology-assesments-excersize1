import React, { useContext, useEffect } from 'react';
import { AddressbookContext } from '../business';
import { fetchAddressbook, userSearch } from '../business/action';

const AddressBook = () => {
  const { dispatch, state } = useContext(AddressbookContext);
  const { data, loading, error } = state;

  const onSearch = (e) => userSearch(e.target.value)(dispatch);

  console.log(data, loading, error);

  useEffect(() => {
    fetchAddressbook()(dispatch);
  }, [dispatch]);

  return (
    <div className="AddressBook shadow rounded">
      <div className="row">
        <div className="col">
          <form name="AdressBook-search-form" className="AdressBook-search-form">
            <div className="AdressBook-search-form-bar">
              <i className="AdressBook-search-form-icon fa fa-search"></i>
              <input
                type="text"
                className="AdressBook-search-form-input"
                id="search-term"
                aria-describedby="emailHelp"
                placeholder="SEARCH (Client Name / Policy Number)"
                onChange={onSearch}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddressBook;
