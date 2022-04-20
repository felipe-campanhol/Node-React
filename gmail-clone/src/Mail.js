import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DeleteIcon from '@mui/icons-material/Delete'
import EmailIcon from '@mui/icons-material/Email'
import ErrorIcon from '@mui/icons-material/Error'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import LabelImportantIcon from '@mui/icons-material/LabelImportant'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import PrintIcon from '@mui/icons-material/Print'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import { IconButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Mail.css"

function Mail() {
  const history = useNavigate();

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history("/")}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>

        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>

          <IconButton>
            <PrintIcon />
          </IconButton>

          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>Subject</h2>
          <LabelImportantIcon className="mail__important" />
          <p>Title</p>
          <p className="mail__time">05am</p>
        </div>

        <div className="mail__message">
          <p>
            This is the message
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mail
