import React from 'react'

function UserInfo({name,email,dp}) {
  
  return (
    <div className="flex gap-2 border-b-2 border-accent lg:border-none pb-2 md:pb-0 items-center">
      <img  src="/bel.svg" className="w-10 p-2 bg-white rounded-full" alt="Notification" />
  <img   src={dp} className="w-10" alt="User Avatar" />
  <div className="flex flex-col gap-[2px] text-accent">
      <p className="font-semibold">{name}</p>
      <p className="text-sm">{email}</p>
  </div>
                           
                        </div>
  )
}

export default UserInfo