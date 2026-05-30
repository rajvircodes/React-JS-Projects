import React from 'react'
import { RightcardContent } from './RightcardContent'

export const RightCard = (props) => {
  return (
    <div className='h-full w-70 overflow-hidden relative bg-red-500 rounded-4xl shrink-0'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
       <RightcardContent id={props.id} tag={props.tag}/>
    </div>
  )
}
