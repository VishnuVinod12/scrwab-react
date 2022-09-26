import React from 'react'

const Home = () => {
  return (
    <section className="home" id="home">

        <div className="content">
            <h3>best mobile app<span> for investment</span></h3>
            <h2>New App For your finacial freedom</h2>
            <button className="btn">
                <a href="#download" style={{color:"white",textDecoration: "none"}}> download now</a>
            </button>
        </div>

        <div className="image">
            <img src="./phonepreview2 - Copy.png" alt="" />
        </div>

    </section>
  )
}

export default Home