import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./Widgets.css"

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        )}

  return (
    <div className="widgets">
      <div className="widgets__header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
      </div>
      {newsArticle("React is back", "Top news - 100 readers")}
      {newsArticle("If you were a member of the Bloods ", "If you work for an ad agency and getting paid for it")}
      {newsArticle("Thank you for using my words in your work", "Henrik Lundqvist and Joffrey Lupul on i")}
    </div>
  )
}

export default Widgets
