import React from 'react'

const Contact = () => {

    const sendmail = async () => {
        let name = document.getElementById("contactname").value;
        let message = document.getElementById("contactmessage").value;
        let email = document.getElementById("contactemail").value;
        console.log(name, message, email);
        const result = await fetch(`http://localhost:9000/text-mail?name=${name}&msg=${message}&to=${email}`, {
            method: "POST",
        }).then((res) => {
            console.log(res.data);
            alert("Message sent");
            document.getElementById("contactname").value = "";
            document.getElementById("contactph").value = "";

            document.getElementById("contactmessage").value = "";
            document.getElementById("contactemail").value = "";
        }).catch((error) =>{
            console.log(error);
            alert("Failed");
        });
    }

  return (
    <section className="contact" id="contact">

    <div className="image">
        <img src="./c.png" alt="" />
    </div>

    <div className="myform">

        <h1 className="heading">contact us</h1>

        <div className="inputBox">
            <input id="contactname" type="text" required />
            <label>name</label>
        </div>

        <div className="inputBox">
            <input id="contactemail" type="email" required />
            <label>email</label>
        </div>

        <div className="inputBox">
            <input id="contactph" type="number" required />
            <label>phone</label>
        </div>

        <div className="inputBox">
            <textarea id="contactmessage" required name="" cols="30" rows="10"></textarea>
            <label>message</label>
        </div>

        <button onClick={()=>sendmail()} className="btn">send message</button>

    </div>

</section>
  )
}

export default Contact