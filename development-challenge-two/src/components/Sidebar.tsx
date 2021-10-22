import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../utils/utils';

import '../styles/Sidebar.css';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <div className="inside-navbar">
          <h1>Medcloud</h1>
          <Link to='#' className="hamburguer">
            <MenuIcon onClick={showSidebar} style={{ color: '#e3f2fd'}}/>
          </Link>  
        </div>
        <AccountCircleIcon className="acc" style={{ color: '#e3f2fd', marginRight: 20}}/>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to='#' className='menu-bars'>
              <CloseIcon style={{ color: '#e3f2fd'}}/>
            </Link>
          </li>
          {SidebarData.map((link, index) => {
            return (
              <li key={index} className={link.className}>
                <Link to={link.path}>
                  <span>{link.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

