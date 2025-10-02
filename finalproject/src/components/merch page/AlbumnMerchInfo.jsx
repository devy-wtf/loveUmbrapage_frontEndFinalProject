import React from 'react'
import Items from './ItemsArray'
import MerchCard from './MerchCard'

function AlbumnMerchInfo() {
  return (
    <div className='merchGrid'>
      {Items.map((item, index) => (
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