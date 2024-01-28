import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (78)
            </div>
        </div>
        <div className="desciptionbox-description">
            <p>An e-commerce website is an online platform that facilitates the
                buying and selling of products or services over the internet, It
                serves as a virtual marketplace where businesses and individual can
                showcase their products, interact with customers, and conduct
                transactions without the need for a physical presence. E-commerce
                websites have gained immense popularity due to their convenient
                accessibility, and global reach they offer.
            </p>
            <p>
                E-commere websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g. sizes, colors) Each products usually has its own dedicated relevant informaton
            </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
