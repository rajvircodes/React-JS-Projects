import React from 'react'

export const RightcardContent = (props) => {
  return (
    <div>
         <div className='absolute top-0 left-0  h-full w-full p-8 flex flex-col justify-between'>
            <h1 className='flex items-center justify-center h-12 w-12 bg-amber-50 rounded-4xl text-2xl font-semibold'>{props.id+1}</h1>
            <div>
                <p className='text-lg leading-[1.2] text-white mb-10 text-left w[90%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates officia ipsum obcaecati in assumenda laboriosam.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium py-2 px-8 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium py-2 px-4 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}
