import React, { useEffect } from 'react'

const Loading = () => {
  useEffect(() => {
    console.log('Loading Page');
  }, []);
  return (
    <div>
      Loading...
    </div>
  )
}

export default Loading
