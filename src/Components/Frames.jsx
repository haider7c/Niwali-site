import React from 'react'

const Frames = ({imge, heading, btntitle, desc}) => {
  return (
   <div className='flex justify-center'>
     <div className='w-[250px] h-[320px] bg-framcol rounded-md mb-5 shadow-lg '>
      <div className='flex justify-center'>
        <img className='bg-cover rounded-full h-[14rem] mt-3 w-[14rem] object-cover' src={imge} alt="" />
        </div>
        <div className='flex justify-between mx-3'>
          <h1 className='text-white text-xl'>{heading}</h1>
          <button className='text-shopbtncol underline'>{btntitle}</button>
        </div>
        <div>
          <p className='text-white mx-3 my-3'>{desc}</p>
        </div>
      </div>
   </div>
  )
}

export default Frames
