import React from 'react'
import LeftContent from './LeftContent'
import RigthContent from './RigthContent'

const Page1Content = (props) => {
  return (
    
    <div className=' flex gap-10 items-center py-10 px-18 h-[90vh]'>
        <LeftContent/>
        <RigthContent users={props.users}/>
    </div>
  )
}

export default Page1Content