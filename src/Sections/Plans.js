import React from 'react'

const Plans = () => {
  return (
    <section className="features" id="features">

    <h1 className="heading"> Investment plans </h1>

    <div className="box-container">

        <div className="box">
            <img src="./e.png" alt="" />
            <h3>falcon Scheme</h3>
            <a href="#" className="btn">read more</a>
        </div>

        <div className="box">
            <img src="./b.png" alt="" />
            <h3>Future Benefit Scheme</h3>
            <a href="#" className="btn">read more</a>
        </div>

        <div className="box">
            <img src="./a.png" alt="" />
            <h3>Harvest Scheme</h3>
            <a href="#" className="btn">read more</a>
        </div>

    </div>

</section>
  )
}

export default Plans