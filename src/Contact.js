import React, { useState, useEffect } from "react";
import "./styles/contact.css";
const Contact = () => {
  const [namefocus, setNamefocus] = useState(false);
  const [emailfocus, setEmailfocus] = useState(false);
  const [messagefocus, setMessagefocus] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

		useEffect(()=>{
				document.title = "Contact Me - Tarique Nasar"

		},[])
  return (
    <div className="contact-container">
      <div className="contactme">
        <p className="contactme-header">CONTACT ME</p>
      </div>
      <div className="contactinput-container">
			  <form action="https://formsubmit.co/8dd903d1d652c74593e9882b28f4a632" method="POST">
        <div className="contactinput">
          <div className="input-group">
            <label
              htmlFor="name" style={namefocus ? { color: "#d0a854" } : { color: "#101112" }}
            >
              NAME
			</label>
				  <input type="hidden" name="_url" value="https://tariquenasar.herokuapp.com/contact/"></input>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={(e) => {
                setFormdata({
                  ...formdata,
                  name: e.target.value,
                });
              }}
              onFocus={() => setNamefocus(true)}
              onBlur={() => setNamefocus(false)}
            />
          </div>
          <div className="input-group">
            <label
              htmlFor="email"
              style={emailfocus ? { color: "#d0a854" } : { color: "#101112" }}
            >
              EMAIL
            </label>
            <input
              type="text"
              name="email"
              value={formdata.email}
              onChange={(e) => {
                setFormdata({
                  ...formdata,
                  email: e.target.value,
                });
              }}
              onFocus={() => setEmailfocus(true)}
              onBlur={() => setEmailfocus(false)}
            />
          </div>
          <div className="input-group">
            <label
              htmlFor="message"
              style={messagefocus ? { color: "#d0a854" } : { color: "#101112" }}
            >
              MESSAGE
            </label>
            <textarea
              id="message-area"
              name="message"
              cols="30"
              rows="10"
              onChange={(e) => {
                setFormdata({
                  ...formdata,
                  message: e.target.value,
                });
              }}
              value={formdata.message}
              onFocus={() => setMessagefocus(true)}
              onBlur={() => setMessagefocus(false)} ></textarea>
          </div>
          <input
            className="submit-button"
            type="submit"
            value="SEND"
          />
        </div>
				  </form>
      </div>
    </div>
  );
};

export default Contact;
