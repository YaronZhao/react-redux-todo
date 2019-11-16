import React from 'react'
import Link from './Link'

const Footer = () =>
    <nav className="navbar navbar-light bg-light w-50 mt-4">
      <span className="navbar-text">
        0 items to be done
      </span>
      <ul className="nav nav-tabs justify-content-end">
          <Link filter='All'/>
          <Link filter='Active'/>
          <Link filter='Completed'/>
      </ul>
    </nav>;

export default Footer;
