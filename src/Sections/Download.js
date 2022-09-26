import React from 'react'

const Download = () => {

    function comingsoon() {
        alert("Coming soon!")
    }

  return (
    <section className="download" id="download">


        <div className="column">

            <div className="image">
                <img src="./d.png" alt="" />
            </div>

            <div className="content">
                <h1 style={{color:"black"}} className="heading"> Download </h1>

                <h3>One Step solution for your finacial freedom</h3>
                <p>
                    We help our clients with best returns
                </p>
                <div className="buttons" onClick={()=>comingsoon()}>
                    <a href="#" className="btn"> <i className="fab fa-apple"></i> app store </a>
                    <a href="#" className="btn"> <i className="fab fa-google-play"></i> google-play </a>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Download