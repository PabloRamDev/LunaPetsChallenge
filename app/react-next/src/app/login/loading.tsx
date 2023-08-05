import React from 'react'
import { SyncLoader } from 'react-spinners'

const loading = () => {
  return (
    <div className='h-full flex items-center justify-center'>
        <SyncLoader color='#dc2626'/>
    </div>
  )
}

export default loading