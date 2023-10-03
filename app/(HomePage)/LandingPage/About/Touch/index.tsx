'use client'
import React from "react";
import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../style.css";

const Touch: React.FC = () => {
  const [sent, setSent] = useState<boolean>(false);
  const [sentError, setSentError] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userEmail || !userName || !userMessage) {
      setSentError(true);
      return;
    }

    emailjs
      .sendForm(
        "service_a5rh5xh",
        "template_vz0ss37",
        e.currentTarget,
        "pTcETt4XvK4M7IYQv"
      )
      .then(
        (result) => {
          console.log(result);
          if (formRef.current) {
            formRef.current.reset();
          }
          setSentError(false);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
          setSentError(true);
        }
      );
  };

  return (
    <div className="About_right dark:bg-white bg-[#202020] TabletSm:w-[50%] Tablet:w-[48%] PC:w-[45%] py-10 SmartphonesSm:px-2 Tablet:px-10 SmartphonesSm:w-[95%]">
      <form onSubmit={sendEmail} ref={formRef}>
        <div>
          <h1 className="Tablet:text-[20px] PC:text-[30px] text-white dark:text-[#000] font-bold">
            Get In Touch
          </h1>
          <p className="my-5 SmartphonesSm:w-[100%] PC:w-[70%] leading-7 text-white dark:text-[#000] pb-5 SmartphonesSm:text-[11px] Tablet:text-[13px] PC:text-[15px]">
            Currently, I am searching for new career opportunities. If you have
            any questions or would like to just say hello, please do not
            hesitate to contact me and I will do my best to respond as soon as
            possible.
          </p>
        </div>
        <div className="flex flex-col gap-y-10 mt">
          <div className="inputbox relative SmartphonesSm:w-[90%] Tablet:w-[70%] PC:w-1/2 bg-white dark:bg-[#202020] z-10">
            <input
              className="z-10 px-5 py-3 dark:text-white"
              type="text"
              name="user_name"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <span className={userName === "" ? "" : "has-content"}>
              Your Name
            </span>
            <i></i>
          </div>
          <div className="inputbox relative SmartphonesSm:w-[90%] Tablet:w-[70%] PC:w-1/2 bg-white dark:bg-[#202020] z-10">
            <input
              className="z-10 px-5 py-3 dark:text-white"
              type="email"
              name="user_email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <span className={userEmail === "" ? "" : "has-content"}>
              Your Email
            </span>
            <i></i>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <textarea
            className="SmartphonesSm:w-[90%] Tablet:w-[70%] PC:w-1/2 h-[150px] outline-none dark:bg-[#202020] bg-white dark:text-white text-black px-2 py-2"
            name="message"
            onChange={(e) => setUserMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="fancy mt-10">
          <span className="top-key"></span>
          <span className="text text-white dark:text-black Tablet:text-[13px] PC:text-[15px] SmartphonesSm:text-[10px]">
            Buy Tickets
          </span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
        {sent && (
          <div className="text-white mt-3 font-bold font-Rubik">
            Your email has been sent
          </div>
        )}
        {sentError && (
          <div className="text-white mt-3 font-bold font-Rubik">
            Something went wrong
          </div>
        )}
      </form>
    </div>
  );
};

export default Touch;
