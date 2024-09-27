import React from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" 
              style={({isActive}) => ({
                color:isActive ? '#007bff' :'black',
                textDecoration: isActive ? 'underline' : 'none'
            })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" 
              style={({isActive}) => ({
                color:isActive ? '#007bff' :'black',
                textDecoration: isActive ? 'underline' : 'none'
            })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact"
              style={({isActive}) => ({
                color:isActive ? '#007bff' :'black',
                textDecoration: isActive ? 'underline' : 'none'
            })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
