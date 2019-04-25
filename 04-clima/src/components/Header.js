import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper light-blue darken-2">
          <a className="brand-logo" href="localhost:3000">{props.titulo}</a>
        </div>
      </nav>
    </header>
  )
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default Header;
