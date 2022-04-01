import React from 'react';
import { AddressbookProvider } from './business';
import AddressBook from './views/AddressBook';

const AddressBookModule = () => (
  <AddressbookProvider>
    <AddressBook></AddressBook>
  </AddressbookProvider>
);

export default AddressBookModule;
