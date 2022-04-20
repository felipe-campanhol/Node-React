import React from 'react'
import "./SendMail.css"
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form"

function SendMail() {

    const {register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
          <h3>New message</h3>
          <CloseIcon className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="to" placeholder="To" type="text" ref={register("test",{required: true})} />
        <input name="subject" placeholder="Subject" type="text" ref={register("test",{required: true})} />
        <input name="message" placeholder="Message..." type="text" className="sendMail__message" ref={register("test",{required: true})} />

        <div className="sendMail__options">
            <Button className="sendMail__send" variant="contained" color="primary" type="submit" >Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
