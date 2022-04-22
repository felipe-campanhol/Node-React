import React from 'react'
import "./SendMail.css"
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';

function SendMail() {

  const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
        setDoc(doc(collection(db, "emails")), {
          to: formData.To,
          subject: formData.Subject,
          message: formData.Message,
          timestamp: serverTimestamp(),
        });

        dispatch(closeSendMessage())
    };

    const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
          <h3>New message</h3>
          <CloseIcon onClick={()=> dispatch(closeSendMessage())} className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="To" type="email" {...register("To",{required: "To is required!"})} />
        <ErrorMessage  errors={errors} name="To" render={({ message }) => <p 
        className="sendMail__error">{message}</p>}
      />
        <input placeholder="Subject" type="text" {...register("Subject",{required: "Subject is required!"})} />
        <ErrorMessage  errors={errors} name="Subject" render={({ message }) => <p 
        className="sendMail__error">{message}</p>}
      />
        <input placeholder="Message..." type="text" className="sendMail__message" {...register("Message",{required: "Message is required!!"})} />
        <ErrorMessage  errors={errors} name="Message" render={({ message }) => <p 
        className="sendMail__error">{message}</p>}
      />

        <div className="sendMail__options">
            <Button className="sendMail__send" variant="contained" color="primary" type="submit" >Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
