import React from 'react'

const Footer = () =>
    <nav className="navbar navbar-light bg-light w-50 mt-4">
      <span className="navbar-text">
        0 items to be done
      </span>
      <ul className="nav nav-tabs justify-content-end">
          <li className="nav-item">
              <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Completed</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">All</a>
          </li>
      </ul>
    </nav>;

export default Footer;
