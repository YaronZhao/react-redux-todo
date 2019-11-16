import React from 'react'
import Link from './Link'
import {VisibilityFilters} from "../actions";
import PropTypes from 'prop-types'

const Footer = ({activeCount, currentFilter, setVisibilityFilter}) =>
    <nav className="navbar navbar-light bg-light w-50 mt-4">
      <span className="navbar-text">
          <span id="activeCount">{activeCount}</span> items to be done
      </span>
      <ul className="nav nav-tabs justify-content-end">
          <Link
              filter='All'
              selected={currentFilter === VisibilityFilters.SHOW_ALL}
              onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ALL)}/>
          <Link
              filter='Active'
              selected={currentFilter === VisibilityFilters.SHOW_ACTIVE}
              onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)}/>
          <Link
              filter='Completed'
              selected={currentFilter === VisibilityFilters.SHOW_COMPLETED}
              onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)}/>
      </ul>
    </nav>;

Footer.propTypes = {
    activeCount: PropTypes.number.isRequired,
    currentFilter: PropTypes.string.isRequired,
    setVisibilityFilter: PropTypes.func.isRequired
};

export default Footer;
