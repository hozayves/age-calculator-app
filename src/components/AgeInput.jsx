import React from 'react'

function AgeInput() {
  return (
    <section className='flex flex-col gap-10'>
        <div className='flex justify-between font-poppins w-full'>
            <div className='flex flex-col w-[90px] gap-1'>
                <label htmlFor="day" className='uppercase text-SmokeyGrey font-semibold tracking-wide text-sm'>day</label>
                <input 
                    className='rounded-lg px-3 py-1 border border-LightGrey uppercase text-xl font-bold outline-none'
                    type="text"
                    placeholder='dd' 
                    id='day' />
            </div>
            <div className='flex flex-col w-[90px] gap-1'>
                <label htmlFor="day" className='uppercase text-SmokeyGrey font-semibold tracking-wide text-sm'>month</label>
                <input 
                    className='rounded-lg px-3 py-1 border border-LightGrey uppercase text-xl font-bold outline-none'
                    type="text"
                    placeholder='mm' 
                    id='day' />
            </div>
            <div className='flex flex-col w-[90px] gap-1'>
                <label htmlFor="day" className='uppercase text-SmokeyGrey font-semibold tracking-wide text-sm'>year</label>
                <input 
                    className='rounded-lg px-3 py-1 border border-LightGrey uppercase text-xl font-bold outline-none'
                    type="text"
                    placeholder='yyyy' 
                    id='day' />
            </div>
        </div>
        <div className='border border-LightGrey relative mb-16'>
            <button className='bg-purple absolute w-[50px] h-[50px] rounded-full left-[40%] -top-[25px] p-3 cursor-pointer'>
                <img src="/icon-arrow.svg" alt="" />
            </button>
        </div>
    </section>
  )
}

export default AgeInput