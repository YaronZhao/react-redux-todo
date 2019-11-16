import React from 'react'
import PropTypes from 'prop-types'

const Link = ({filter, selected, onClick}) =>
    <li className="nav-item">
        <a className={selected ? "nav-link active" : "nav-link"}
           href="#"
           onClick={onClick}>
            {filter}
        </a>
    </li>;

Link.propTypes = {
  filter: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired
};

export default Link
