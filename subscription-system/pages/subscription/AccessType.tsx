import React from 'react'
import { AccessType as AccessTyping } from "../../typings";
import Image from 'next/image'
import Link from 'next/link'
import front from '../../img/front1.jpg'

interface Props {
  access_type: [AccessTyping];
}

// function AccessType({ access_type }: Props) {
  function AccessType() {
  // console.log(access_type)
  return (
    <main>
      <div className='flex justify-between items-center bg-blue-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'><span className='underline decoration-black decoration-4'>Cláudio Ricardo</span> is a TV show presented by the greatest showman ever</h1>
          <h2>Take the opportunity and schedule your sit right now!.</h2>
        </div>
        <Image src={front} className='hidden md:inline-flex h-64 lg:h-64' height={256} width={180} alt="" />
      </div>

      {/* Studio access */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">

        <Link
          href={{
            pathname: '/subscription/queue',
            query: { access: "bronze" },
          }} passHref 
        >
          <div className="border rounded-lg group cursor-pointer overflow-hidden">
            <Image src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-bronze-medal-achievements-flaticons-flat-flat-icons-2.png" className='h-96 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' height={380} width={370} alt="" />
            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold">Bronze subscription</p>
                <p className="text-xs">
                  For only $19,90 you will get C access sessions of the studios
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href={{
            pathname: '/subscription/queue',
            query: { access: "silver" },
          }} passHref 
        >
          <div className="border rounded-lg group cursor-pointer overflow-hidden">
            <Image src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-medals-achievements-flaticons-flat-flat-icons-2.png" className='h-96 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' height={380} width={370} alt="" />
            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-xs">
                  For only $39,99 you will get C access sessions of the studios
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href={{
            pathname: '/subscription/queue',
            query: { access: "gold" },
          }} passHref 
        >
          <div className="border rounded-lg group cursor-pointer overflow-hidden">
            <Image src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-gold-medal-achievements-flaticons-flat-flat-icons-2.png" className='h-96 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' height={380} width={370} alt="" />
            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold">Gold subscription</p>
                <p className="text-xs">
                  For only $59,99 you will get C access sessions of the studios
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default AccessType
