import React from 'react'
import './Header.css'
import MenuIcon from "@mui/icons-material/Menu"
import { Avatar, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iphonehacks.com%2Fwp-content%2Fuploads%2F2020%2F06%2FGmail-Icon.jpg&f=1&nofb=1" alt="" />
      </div>
      <div className="header__middle">
          <SearchIcon />
          <input placeholder="Search mail" type="text" />
          <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar />
      </div>
    </div>
  )
}

export default Header
