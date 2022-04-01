import PropTypes from 'prop-types';
import React from 'react';

/**
 * Layout component.
 * @name            Layout
 * @param {object}  children - The children elements.
 * @example
 * <Layout><div>Hello World</div></Layout>
 */
const Layout = ({ children }) => {
  return <div className="container">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node
};

Layout.defaultProps = {
  children: <p>layout</p>
};

export default Layout;
