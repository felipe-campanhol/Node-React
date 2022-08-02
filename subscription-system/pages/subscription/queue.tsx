import { useState } from "react";
import Header from '../../components/Header'
import {useForm, SubmitHandler} from "react-hook-form"
import { dateType } from "aws-sdk/clients/iam";
import { useRouter } from "next/router";

interface IFormInput{
  _id: string,
  date: dateType
}

function queue() {
  const { query } = useRouter();

  const [submitted, setSubmitted] = useState(false);

  const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch("localhost:3001/api", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => {
      setSubmitted(true)
    }).catch((err) => {
      console.log(err)
      setSubmitted(false)
    })
  };
  
  return <main>
    <Header />
    <p>{query.access}</p>
    {submitted? (
      <div>

      </div>
    ) : (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='max-w-7xl mx-auto bg-blue-400 items-center border-black lg:py-0'>
          <p className="text-center text-lg font-bold py-5">
            <span>Please select a date in order to view the seats</span>
          </p>
          <p className="text-center pb-5">
            <input type="date" name="seatDate" id="seatDate" />
          </p>
          <p className="text-center pb-5">
            <input type="submit" className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer" />
          </p>
        </div>
      </form>
    )}
  </main>;
}

export default queue
