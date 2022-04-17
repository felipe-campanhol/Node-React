import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { logout } from './features/userSlice';

function Header() {


  const dispatch = useDispatch()

  const logOutApp = () => {
    dispatch(logout())
    getAuth().signOut()
  }

  return (
    <div className='header'>

      <div className="header__left">
        <img src="https://algomine.pl/wp-content/uploads/LinkedIn-Icon-380x380.png" alt="" />

        <div className="header__search">
            <SearchIcon />
            <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="BusinessCenter"/>
        <HeaderOption Icon={ChatIcon} title="Messagins"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar={true} title="me" onClick={logOutApp}/>
      </div>

    </div>
  )
}

export default Header

