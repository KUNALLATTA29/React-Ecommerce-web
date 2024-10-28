import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" 
              style={({isActive}) => ({
                color: isActive ? '#007bff' : 'black',
                textDecoration: isActive ? 'underline' : 'none'
            })}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact"
              style={({isActive}) => ({
                color: isActive ? '#007bff' : 'black',
                textDecoration: isActive ? 'underline' : 'none'
            })}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart"
              style={({isActive}) => ({
                color: isActive ? '#007bff' : 'black',
                textDecoration: isActive ? 'underline' : 'none'
            })}>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
