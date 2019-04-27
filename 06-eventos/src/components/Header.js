import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-3">
        <a className="brand-logo center" href="localhost:3000">{props.titulo}</a>
      </div>
    </nav>
  )
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default Header;
