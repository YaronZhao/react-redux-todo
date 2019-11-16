import React from 'react'

const Link = ({filter, selected, onClick}) =>
    <li className="nav-item">
        <a className={selected ? "nav-link active" : "nav-link"}
           href="#"
           onClick={onClick}>
            {filter}
        </a>
    </li>;

export default Link
