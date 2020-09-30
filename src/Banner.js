import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <header
        className="banner"
        style={{
            backgroundSize:"cover",
           backgroundImage:`url("https://www.elearningserv.com/blog/wp-content/uploads/2014/11/banner.jpg")`,
           backgroundPosition:"center center",
        }}
        >
      

        <div className="banner-contents">
             <h1>What would you love to learn?</h1>
             </div>
         
       
        </header>
    )
}

export default Banner
