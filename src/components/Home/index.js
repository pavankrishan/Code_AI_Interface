import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import Repositories from '../Repositories';
import './index.css';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='repo-container'>
      <div className='header-container'>
        <div className='header'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXBrM6OuMFTRj22Z-C7loWr78wbJczjXpPgiQpo-8TP__hA99XQe0MRI6EV3Q8AQsCjE&usqp=CAU'
            alt='codeant-ai'
            className='icon hamburger-menu'
          />
          <h1 className='heading hamburger-menu'>CodeAnt AI</h1>

          <button
            className='hamburger-menu'
            onClick={toggleSidebar}
            aria-label='Toggle Sidebar'
          >
            &#9776;
          </button>
        </div>
      </div>

      <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
        <div className='sidebar-header'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXBrM6OuMFTRj22Z-C7loWr78wbJczjXpPgiQpo-8TP__hA99XQe0MRI6EV3Q8AQsCjE&usqp=CAU'
            alt='codeant-ai'
            className='icon'
          />
          <h1 className='heading'>CodeAnt AI</h1>
          <button
            className='hamburger-menu'
            onClick={toggleSidebar}
            aria-label='Close Sidebar'
          >
            <FaTimes />
          </button>
        </div>

        <select className='selector'>
          <option className='options'>UtkarshDhairyaPa...</option>
        </select>

        <ul className='menu-list'>
          <li className='menu-item active'>
            <img
              src='https://img.icons8.com/ios-filled/50/000000/home.png'
              alt='Home Icon'
              className='icon'
            />
            Repositories
          </li>
          <li className='menu-item'>
            <img
              src='https://img.icons8.com/ios-filled/50/000000/source-code.png'
              alt='Code Icon'
              className='icon'
            />
            AI Code Review
          </li>
          <li className='menu-item'>
            <img
              src='https://img.icons8.com/ios-filled/50/000000/cloud.png'
              alt='Cloud Icon'
              className='icon'
            />
            Cloud Security
          </li>
          <li className='menu-item'>
            <img
              src='https://img.icons8.com/ios-filled/50/000000/book.png'
              alt='Book Icon'
              className='icon'
            />
            How to Use
          </li>
          <li className='menu-item'>
            <img
              src='https://img.icons8.com/ios-filled/50/000000/settings.png'
              alt='Settings Icon'
              className='icon'
            />
            Settings
          </li>
        </ul>

        <div className='bottom-items'>
          <li className='menu-item'>
            <img
              src='https://img.icons8.com/ios-filled/50/000000/phone.png'
              alt='Support Icon'
              className='icon'
            />
            Support
          </li>
          <Link to='/login'>
            <li className='menu-item'>
              <img
                src='https://img.icons8.com/ios-filled/50/000000/logout-rounded.png'
                alt='Logout Icon'
                className='icon'
              />
              <button className='logout'>Logout</button>
            </li>
          </Link>
        </div>
      </div>

      <div className={`repo-section ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Repositories />
      </div>
    </div>
  );
};

export default Home;
