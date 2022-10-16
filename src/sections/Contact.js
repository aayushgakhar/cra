import React from "react";
import axios from "axios";

class Contact extends React.Component {
  myRequest = (url) => {
    let response;
    try {
      response = axios.post(url, null, {
        withCredentials: true,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
    } catch (e) {
      response = e;
    }
    console.log(response);
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    const data = {
      ...this.state,
    };
    const id = "1miRnSpRNnlKC-rnb3h0iiq2ZcmPp3H-58U1IZkZ2mQo";
    e.preventDefault();
    const formUrl = "https://docs.google.com/forms/d/" + id + "/formResponse";
    const queryString = require("query-string");
    const q = queryString.stringifyUrl({
      url: formUrl,
      query: data,
    });
    this.myRequest(q);
  };
  render() {
    return (
      <section name="contact" className="items-center p-4">
        <form
          className="flex flex-col max-w-[600px] w-full"
          target="_blank"
          action="https://docs.google.com/forms/d/1miRnSpRNnlKC-rnb3h0iiq2ZcmPp3H-58U1IZkZ2mQo/formResponse"
          method="POST"
        >
          {/* 
        > */}
          <div className="pb-8">
            <p className="hover-2 text-4xl font-bold inline border-b-4 border-primary">
              Contact
            </p>
            <p className="py-4">Submit the form below.</p>
          </div>
          <input
            className="input bg-[#ccd6f6] p-2"
            type="text"
            name="entry.2005620554"
            placeholder="Name"
            onChange={this.handleChange}
          />
          <input
            className="input bg-[#ccd6f6] p-2 my-4"
            type="email"
            name="entry.1045781291"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <textarea
            className="input bg-[#ccd6f6] p-2 pb-10"
            placeholder="Message"
            name="entry.839337160"
            onChange={this.handleChange}
          ></textarea>
          <button
            className="button bg-primary hover:opacity-80 p-2 my-4 text-white font-bold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default Contact;
