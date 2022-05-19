import Head from 'next/head'
import Header from '../components/Header'
import {BrowserRouter, useRoutes, Navigate  } from "react-router-dom"
import { AccessType } from "../typings";
import ATPage from "./subscription/AccessType"
import Queue from "./subscription/queue"

interface Props{
  access_type: [AccessType];
}

export default function Home({access_type}: Props){

  const mainRoutes = {
    path: '/subscription/AccessType',
    element: <ATPage access_type={access_type}/>,
    children: [
      {path: '*', element: <Navigate to='/404' />},
      {path: '/subscription/queue', element: <Navigate to='/subscription/queue' />},
    ],
  };

  const queueRoutes = {
    path: '/subscription/queue',
    element: <Queue />,
    children: [
      {path: '*', element: <Navigate to='/404' />},
    ],
  };

  const RouterLink = () => {
    let routes = useRoutes([mainRoutes, queueRoutes])
    return routes;
  };

  return (

      <div className="max-w-7xl mx-auto">

        <Head>
          <title>Subscription system</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <BrowserRouter>

        <Header />
        <RouterLink />
        </BrowserRouter>

      </div>
  );
}

export const getServerSideProps = async () => {
  
  var access_type

  await fetch('http://localhost:3001/api')
			.then(response => {
				return response.json();
			}).then(result => {
				access_type = JSON.stringify(result)
			});

  return {
    props: {
      access_type,
    },
  };
};