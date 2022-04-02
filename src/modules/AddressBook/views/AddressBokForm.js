import React from 'react';
import { AddressbookContext } from '../business';
import { userSearch, userFocusSearch } from '../business/action';
import AddressBookLoader from './AddressBookLoader';

const AddressBookForm = () => {
  return (
    <AddressbookContext.Consumer>
      {({ dispatch, state }) => {
        const { loading } = state;

        return (
          <form name="AdressBook-search-form" className="AdressBook-search-form">
            <div className="AdressBook-search-form-bar">
              {loading ? (
                <AddressBookLoader width={20} height={20} />
              ) : (
                <i className="AdressBook-search-form-icon fa fa-search"></i>
              )}
              <input
                type="text"
                className="AdressBook-search-form-input"
                id="search-term"
                aria-describedby="emailHelp"
                placeholder="SEARCH (Client Name / Policy Number)"
                onChange={(e) => userSearch(e.target.value)(dispatch)}
                onFocus={() => userFocusSearch(true)(dispatch)}
                disabled={state.loading}
              />
            </div>
          </form>
        );
      }}
    </AddressbookContext.Consumer>
  );
};

export default AddressBookForm;
