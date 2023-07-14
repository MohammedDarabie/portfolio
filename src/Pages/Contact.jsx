import React, { useRef } from "react";
import Layout from "../Components/Layout";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
function Contact() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ak6catg",
        "template_duowsn4",
        form.current,
        "CfM6n2nn2W6W8VUa2"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <Layout>
      <div className="pt-20 pb-20 bg-theme">
        <h1 className="text-4xl text-white font-mono text-center md:text-2xl">
          Socials
        </h1>
        <div className=" grid md:grid-cols-2 grid-cols-5 w-full m-auto">
          <a
            href="https://twitter.com/Mohammed_ihsan_"
            target="_blank"
            className="flex flex-col items-center justify-center hover:shadow-2xl "
          >
            <img
              src="./img/twitter-logo.png"
              alt="twitterLogo"
              className="w-52"
            ></img>
            <h1 className="text-center text-2xl text-white font-semibold font-mono py-2 md:text-sm">
              Twitter
            </h1>
          </a>
          <a
            href="https://wa.me/966552220151"
            target="_blank"
            className="flex flex-col items-center justify-center hover:shadow-2xl"
          >
            <img
              className="w-52"
              src="./img/whatsapp-logo.png"
              alt="twitterLogo"
            ></img>
            <h1 className="text-center text-2xl text-white font-semibold font-mono py-2 md:text-sm">
              WhatsApp
            </h1>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-darabie-13603a232/"
            target="_blank"
            className="flex flex-col items-center justify-center hover:shadow-2xl"
          >
            <img
              className="w-52"
              src="./img/linkedin-logo.png"
              alt="twitterLogo"
            ></img>
            <h1 className="text-center text-2xl text-white font-semibold font-mono py-2 md:text-sm">
              LinkedIn
            </h1>
          </a>
          <a
            href="https://www.instagram.com/darabie3/"
            target="_blank"
            className="flex flex-col items-center justify-center hover:shadow-2xl"
          >
            <img
              className="w-52"
              src="./img/instagram-logo.png"
              alt="twitterLogo"
            ></img>
            <h1 className="text-center text-2xl text-white font-semibold font-mono py-2 md:text-sm">
              Instagram
            </h1>
          </a>
          <a
            href="./cv.pdf"
            target="_blank"
            className="flex flex-col items-center justify-center hover:shadow-2xl"
          >
            <img className="w-52 " src="./img/cv.png" alt="twitterLogo"></img>
            <h1 className="text-center text-2xl text-white font-semibold font-mono py-2 md:text-sm">
              C.V
            </h1>
          </a>
        </div>
      </div>
      <div className="">
        <div className="h-screen mt-10 md:-mb-[500px]">
          <img src="./img/contact-us.gif" alt="contactUs" className="m-auto " />
        </div>
        <div className="w-screen flex justify-center">
          <div className="w-[50%] lg:w-full p-10 shadow-2xl bg-gray-50">
            <h1 className="text-2xl font-semibold">Contact :</h1>
            <form ref={form} onSubmit={sendEmail}>
              <input
                name="user_name"
                type="text"
                className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
                placeholder="Name"
              ></input>
              <input
                type="email"
                name="user_email"
                className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
                placeholder="Email"
              ></input>
              <textarea
                type="text"
                name="message"
                className=" resize-none w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
                placeholder="Body"
                rows={5}
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 px-5 rounded py-2 text-white mt-3 hover:bg-theme hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
