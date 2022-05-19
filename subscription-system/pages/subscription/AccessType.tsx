import React from 'react'
import { Link, Outlet } from "react-router-dom"
import { AccessType as AccessTyping } from "../../typings";
import Image from 'next/image'

interface Props{
    access_type: [AccessTyping];
}

function AccessType({access_type}: Props) {
  // function AccessType() {
    console.log(access_type)
  return (
      <main>
          <div className='flex justify-between items-center bg-blue-400 border-y border-black py-10 lg:py-0'>
              <div className='px-10 space-y-5'>
                  <h1 className='text-6xl max-w-xl font-serif'><span className='underline decoration-black decoration-4'>Cláudio Ricardo</span> is a TV show presented by the greatest showman ever</h1>
                  <h2>Take the opportunity and schedule your sit right now!.</h2>
              </div>
              <Image src="https://scontent.fcpq2-1.fna.fbcdn.net/v/t31.18172-8/20248407_1404839269610984_978984648332237435_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=9267fe&_nc_ohc=bu0ovcXh4HIAX_2G4UY&_nc_ht=scontent.fcpq2-1.fna&oh=00_AT8w13Ge7qkQAaz0KDi17wGNMe7UfU20dN0Dk6VWv2qNDQ&oe=629031C8" className='hidden md:inline-flex h-64 lg:h-64' height={256} width={180} alt=""/>
          </div>
          
          {/* Studio access */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">

            <Link to="/subscription/queue" state={{"access": "bronze"}}>
                <div className="border rounded-lg group cursor-pointer overflow-hidden">
                  <Image src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-bronze-medal-achievements-flaticons-flat-flat-icons-2.png" className='h-96 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' height={380} width={370} alt=""/>
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

              <Link to="/subscription/queue" state={{"access": "silver"}}>
                <div className="border rounded-lg group cursor-pointer overflow-hidden">
                <Image src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-medals-achievements-flaticons-flat-flat-icons-2.png" className='h-96 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' height={380} width={370} alt=""/>
                  <div className="flex justify-between p-5 bg-white">
                    <div>
                      <p className="text-lg font-bold">Silver subscription</p>
                      <p className="text-xs">
                        For only $39,99 you will get C access sessions of the studios
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/subscription/queue" state={{"access": "gold"}}>
                <div className="border rounded-lg group cursor-pointer overflow-hidden">
                  <Image src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-gold-medal-achievements-flaticons-flat-flat-icons-2.png" className='h-96 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' height={380} width={370} alt=""/>
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
        <Outlet />
      </main>
  );
}

export default AccessType
