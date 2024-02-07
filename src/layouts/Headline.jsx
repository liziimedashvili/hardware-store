/* eslint-disable no-unused-vars */
import React from 'react'
import PhoneIcon from "../assets/header-phone.svg"
export default function Headline() {
  return (
    <div className='bg-[#ec5e2a]'>
    <div className='custom-container py-[10px] flex flex-row justify-between'>
     <div className='flex items-center gap-4 cursor-pointer'>
      <img src={PhoneIcon}/>
      <span className='text-white font-medium text-xs opacity-90 leading-4 hover:opacity-100'>*7007 / +995 (32) 2 60 30 60</span>
     </div>
     <div className='flex flex-row items-center gap-5'>
      <span className='text-white font-medium text-xs  leading-4 opacity-70 cursor-pointer hover:opacity-100'>სავაჭრო პოლიტიკა</span>
      <span className='text-white font-medium text-xs  leading-4 opacity-70 cursor-pointer hover:opacity-100'>განვადება</span>
      <span className='text-white font-medium text-xs  leading-4 opacity-70 cursor-pointer hover:opacity-100'>კარიერა</span>
      <span className='text-white font-medium text-xs  leading-4 opacity-70 cursor-pointer hover:opacity-100'>Trade In</span>
      <span className='text-white font-medium text-xs  leading-4 opacity-70 cursor-pointer hover:opacity-100'>ფილიალები</span>
     </div>
    </div>
    </div>
  )
}
