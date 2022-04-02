import React from 'react';
import { AddressbookContext } from '../business';
import AddressBookListItem from './AddressBookListItem';
import AddressBookLoader from './AddressBookLoader';

const AddressBookList = () => {
  return (
    <AddressbookContext.Consumer>
      {({ state }) => {
        const { loading, userInputFocus } = state;

        return (
          <ul
            className={userInputFocus ? 'AdressBook-list-open AdressBook-list' : 'AdressBook-list'}>
            {loading ? (
              <AddressBookLoader width={50} height={50} />
            ) : (
              state.data.map((d) => (
                <AddressBookListItem
                  key={d.id}
                  firstname={d.first_name}
                  lastname={d.last_name}
                  phone={d.phone}
                  email={d.email}
                  policy={d.policy_number}
                />
              ))
            )}
          </ul>
        );
      }}
    </AddressbookContext.Consumer>
  );
};

export default AddressBookList;
