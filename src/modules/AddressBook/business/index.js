import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialState, addressbook } from './reducer';

export const AddressbookContext = createContext({});

/**
 * Addressbook xhr provider.
 * @name  AddressbookProvider
 * @param {Node} children To be rendered node.
 * @example
 * <AddressbookProvider>
 *  <p>content</p>
 * </AddressbookProvider>
 */
export const AddressbookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addressbook, initialState);

  return (
    <AddressbookContext.Provider value={{ state, dispatch }}>
      {children}
    </AddressbookContext.Provider>
  );
};

AddressbookProvider.propTypes = {
  children: PropTypes.node
};

AddressbookProvider.defaultProps = {};
