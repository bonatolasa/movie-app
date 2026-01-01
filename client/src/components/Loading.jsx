import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const Loading = () => {

  const { nextUrl} = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    if(nextUrl){
      setTimeout(() => {
       navigate('/'+nextUrl)
      }, 8000);
    }
    }, []);

  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className='w-14 h-14 border-2 border-t-primary 
       rounded-full animate-spin'></div>
    </div>
  )
}

export default Loading
