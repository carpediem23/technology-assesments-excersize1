import React from 'react';
import PropTypes from 'prop-types';

/**
 * @name  AddressBookListItem
 * @param {string} firstname  Firstname of the address book item
 * @param {string} lastname   Lastname of the address book item
 * @param {string} phone      Phone of the address book item
 * @param {string} email      Email of the address book item
 * @param {string} policy     Policy number of the address book item
 * @example
 * <AddressBookListItem firstname="John" lastname="Doe" phone="+4912" email="a@borrows.com" policy="001223" />
 */
const AddressBookListItem = ({ firstname, lastname, phone, email, policy }) => {
  return (
    <li className="AdressBook-list-item" onClick={(e) => e.stopPropagation()}>
      <section className="AdressBook-list-item-name-area">
        <p>{`${firstname} ${lastname}`}</p>
      </section>
      <address className="AdressBook-list-item-info-area">
        <p>
          <i className="fa fa-phone"></i>
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
        <p>
          <i className="fa fa-envelope"></i>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          <i className="fa fa-file"></i>
          Policy No: {policy}
        </p>
      </address>
    </li>
  );
};

AddressBookListItem.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  policy: PropTypes.string
};

AddressBookListItem.defaultProps = {};

export default AddressBookListItem;
