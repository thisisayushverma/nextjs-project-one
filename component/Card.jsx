import React from 'react'

function Card(data) {
    console.log("hello",data);
  return (
    <div className=' w-full border rounded-md flex flex-col p-2'>
      <img src={data?.data?.image} className='h-[300px] w-[200px] object-fit'/>
      <div className='w-full p-2'>
        <p className='text-md'>{data?.data.city}</p>
        <p className='font-bold text-xl'>{data?.data.name}</p>
        <p className='text-sm'>{data?.data.address}</p>
      </div>
    </div>
  )
}

export default Card
