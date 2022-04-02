import React from 'react';
import PropTypes from 'prop-types';

/**
 * @name  AddressBookListItem
 * @param {number} width    width
 * @param {number} height   height
 * @example
 * <AddressBook width={20} height={20} />
 */
const AddressBook = ({ width, height }) => {
  return (
    <section className="AddressBook-loader">
      <div style={{ width: width, height: height }} className="AddressBook-loader-spiner"></div>
    </section>
  );
};

AddressBook.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

AddressBook.defaultProps = {
  children: <p>layout</p>
};

export default AddressBook;
