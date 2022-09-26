import React from 'react'

const Footer = () => {
  return (
    <div className="footer">

    <div className="box-container">

        <div className="box">
            <h3>about us</h3>
            <p>Scrwab Expert Service Pvt.Itd
            Jayanagar, Bangalore
            </p>
        </div>

        <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">features</a>
            <a href="#">download</a>

            <a href="#">about</a>

            <a href="#">contact</a>
        </div>

        <div className="box">
            <h3>follow us</h3>
            <a href="https://instagram.com/scrwabinvestment?igshid=YmMyMTA2M2Y=">instagram</a>
            <a href="https://api.whatsapp.com/send/?phone=917847024667&text=Hello&type=phone_number&app_absent=0">whatsapp</a>
            <a href="https://www.linkedin.com/company/scrwabinvestment/">linkedIn</a>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <div className="info">
                <i className="fas fa-phone"></i>
                <p> +91-7896523112<br /> +91-9756892314 </p>
            </div>
            <div className="info">
                <i className="fas fa-envelope"></i>
                <p> scrwabinvestement@gmail.com </p>
            </div>
            <div className="info">
                <i className="fas fa-map-marker-alt"></i>
                <p> Bangalore, india - 590064 </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer