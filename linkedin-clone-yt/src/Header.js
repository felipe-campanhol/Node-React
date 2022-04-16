import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>

      <div className="header__left">
        <img src="https://algomine.pl/wp-content/uploads/LinkedIn-Icon-380x380.png" alt="" />

        <div className="header__search">
            <SearchIcon />
            <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="BusinessCenter"/>
        <HeaderOption Icon={ChatIcon} title="Messagins"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4D03AQGH3GgIms1OqQ/profile-displayphoto-shrink_100_100/0/1613999843622?e=1655337600&v=beta&t=s6tA3WA9bknjuj8d7uby4Af3_cnrgkxGKWdAaE2gPss" title="me"/>
      </div>

    </div>
  )
}

export default Header

