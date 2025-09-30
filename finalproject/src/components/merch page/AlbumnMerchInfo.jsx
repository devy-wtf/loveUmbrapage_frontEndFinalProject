import React from 'react'
import items from './ItemsArray'

function AlbumnMerchInfo() {
  return (
    <div className='merchGrid'>
      {items.map((item, index) => (
        <MerchCard
          key={index}
          title={item.title}
          description={item.description}
        />  
      ))}
      
    </div>
  )
}

export default AlbumnMerchInfo