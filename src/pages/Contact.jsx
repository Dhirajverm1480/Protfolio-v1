import React from "react"
const Contact = () => {
    return(
        <div className="section contact-box">
            <h2 className="contact-heading">Get in touch</h2>
                <div className="contact-container">
                    <div className="contact-col-left">
                        <div className="phone contact">
                            <h2>Phone</h2>
                            <p>+91 6391732413</p>
                        </div>
                        <div className="email contact">
                            <h2>Email</h2>
                            <p>dhirajv418@gmail.com</p>
                        </div>
                        <div className="location contact">
                            <h2>Phone</h2>
                            <p>+91 6391732413</p>
                        </div>
                    </div>
                    <div className="contact-col-right">
                        <form action="" method="">
                            <div className="top-row">
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="second-row"> 
                                <input type="text" placeholder="Subject" />
                                <textarea rows="6" cols="50" placeholder="Message"></textarea>
                            </div>
                            <button className="contact-btn bx bxl-telegram">Send message</button>
                        </form>
                    </div>
                </div>
        </div>
    )
}
export default Contact