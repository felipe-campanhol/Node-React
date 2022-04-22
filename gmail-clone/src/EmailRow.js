import { Checkbox, IconButton } from '@mui/material'
import React, { forwardRef } from 'react'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined'
import "./EmailRow.css"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { selectMail } from './features/mailSlice'

const EmailRow = forwardRef(({id, title, subject, description, time}, ref) => {

  const history = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({
      id,
      title,
      subject,
      description,
      time,
    }))
    history("/mail")
  }
  return (
    <div ref={ref} onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
            <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
            <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">
        {title}
      </h3>
      <div className="emailRow__message">
        <h4>{subject}{" "}
            <span className="emailRow__description">
             - {description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}
      </p>
    </div>
  )
})

export default EmailRow
