import React from 'react';
import PropTypes from 'prop-types';

/**
 * Layout component.
 * @name            Layout
 * @param {object}  children - The children elements.
 * @example
 * <Layout><div>Hello World</div></Layout>
 */
const Layout = ({ children }) => {
  return <main className="container-fluid">{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.node
};

Layout.defaultProps = {
  children: <p>layout</p>
};

export default Layout;
