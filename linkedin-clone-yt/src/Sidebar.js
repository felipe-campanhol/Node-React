import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => {
        return (<div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>)
    };

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
          <img src="https://media-exp1.licdn.com/dms/image/C4D16AQEMJ82Cq49Wkg/profile-displaybackgroundimage-shrink_350_1400/0/1556022273109?e=1655337600&v=beta&t=clXoiDTufU10_luiHjtbOOLYdbFdvKDYr7n9SJdtlWQ" alt="" />
          <Avatar className="sidebar__avatar" />
          <h2>Felipe Campanhol</h2>
          <h4>fcampanhol@hotmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">15</p>
        </div>
        <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">13</p>
        </div>
      </div>

      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("reactjs")}
          {recentItem("programming")}
          {recentItem("softwareengineering")}
          {recentItem("design")}
          {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar
