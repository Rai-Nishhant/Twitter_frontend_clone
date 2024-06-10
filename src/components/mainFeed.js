import React from 'react'
import NewPost from './NewPost'
import Tweet from './tweet'

const mainFeed = () => {
  return (
    <div className='w-[45%] border border-gray-200'>
      <NewPost/>
      <Tweet/>
    </div>
  )
}

export default mainFeed
