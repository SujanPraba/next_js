import React, { useState } from "react";

export default function Form() {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    emailError: "",
    phoneno: "",
    phoneNumberError: "",
    textarea: "",
    selectedSubject: "",
    showErrorPopup: false,
  };

  const [formState, setFormState] = useState(initialState);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formState.email)) {
      setFormState((prevState) => ({
        ...prevState,
        emailError: "Please enter a valid email address",
      }));
      return false;
    }
    setFormState((prevState) => ({
      ...prevState,
      emailError: "",
    }));
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Firstname: formState.firstname,
      Lastname: formState.lastname,
      Emailid: formState.email,
      PhoneNumber: formState.phoneno,
      TextArea: formState.textarea,
      Subject: formState.selectedSubject,
    };

    const response = await fetch(
      "https://sheet.best/api/sheets/f8d58de8-6779-426c-8911-333e3c1a97fa",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();

    if (response.ok) {
      console.log("Form submitted successfully!", res);
      setFormState(initialState); // Reset form state to initial values
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    } else {
      setFormState((prevState) => ({
        ...prevState,
        showErrorPopup: true,
      }));
      setTimeout(() => {
        setFormState((prevState) => ({
          ...prevState,
          showErrorPopup: false,
        }));
      }, 2000);
      console.error("Error submitting form");
    }
  };

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
    {/* <Header/> */}
    <section className="mt-16 lg:mt-[120px]" id="form">
      <div className="container m-auto w-[90%]">
        <div className="lg:bg-textprimarywhite lg:rounded-[12px] lg:shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] lg:justify-between lg:flex lg:w-[100%]">
          <div className=" bg-textDarkBlue lg:rounded-[12px] rounded-t-xl lg:my-[10px] lg:ml-2 text-center lg:w-[35%] ">
            <h3 className="text-base sm:text-lg lg:text-[28px]  xl:leading-[40px] font-semibold text-textprimarywhite pt-12">
              Accelerate Your Success <br />
              <span className="text-bgPrimaryRed">With Us</span>
            </h3>
            <div className="flex justify-center py-10 lg:pb-32 xl:pb-10 lg:h-[620px] ">
              {/* <Image src={contactinformation} alt="contact" className="" /> */}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="lg:w-[60%]">
            <div className="rounded-b-[10px] border-textWhite lg:border-textDarkBlue border-2 p-10 sm:pl-36 lg:p-0 lg:m-0 lg:border-none lg:rounded-none">
              <div className="lg:flex lg:mt-20 lg:ml-4 ">
                <div className="lg:w-[50%]">
                  <label className="block font-medium text-xs text-[#000000]">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-[100%] border-b focus:outline-none border-[#8D8D8D] lg:mt-2   sm:w-[80%] mt-3"
                    placeholder="First name"
                    required
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        firstname: e.target.value,
                      }))
                    }
                    value={formState.firstname}
                  ></input>
                </div>
                <div className="lg:ml-10 lg:w-[50%]">
                  <label className="block font-medium text-xs text-[#000000] mt-5 lg:mt-0">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-[100%] border-b focus:outline-none border-[#8D8D8D] lg:mt-2   sm:w-[80%] mt-3"
                    placeholder="Last name"
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        lastname: e.target.value,
                      }))
                    }
                    value={formState.lastname}
                    required
                  ></input>
                </div>
              </div>

              <div className="lg:flex lg:mt-20 lg:ml-4">
                <div className="lg:w-[50%]">
                  <label className="block font-medium text-xs text-[#000000] mt-5 lg:mt-0">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-[100%] border-b focus:outline-none border- ${
                      formState.emailError ? "red-500" : "#8D8D8D"
                    } border-[#8D8D8D] lg:mt-2 sm:w-[80%] mt-3`}
                    placeholder="example@gmail.com"
                    required
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                      }))
                    }
                    value={formState.email}
                  ></input>
                  {formState.emailError && (
                    <p className="text-red-500 text-xs mt-1">
                      {formState.emailError}
                    </p>
                  )}
                </div>
                <div className="lg:ml-10 lg:w-[50%]">
                  <label
                    className={`block font-medium text-xs text-[#000000] ${
                      formState.phoneNumberError ? "red-500" : "#8D8D8D"
                    }  mt-5 lg:mt-0`}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-[100%] border-b focus:outline-none border-[#8D8D8D] lg:mt-2 sm:w-[80%] mt-3"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    placeholder="+0 123 456 789"
                    required
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        phoneno: e.target.value,
                      }))
                    }
                    value={formState.phoneno}
                  ></input>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-[#011C2A] mt-[30px] lg:mt-20 lg:ml-4">
                Select Subject?
              </h3>
              <div className="flex-wrap md:flex mt-6 lg:ml-4">
                <div className="flex items-center mb-4">
                  <input
                    name="toclick"
                    type="radio"
                    className="sm:w-4 sm:h-4 text-[#011C2A]"
                    value="generalInquiry"
                    checked={formState.selectedSubject === "generalInquiry"}
                    onChange={() =>
                      setFormState((prevState) => ({
                        ...prevState,
                        selectedSubject: "generalInquiry",
                      }))
                    }
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-[8px] text-[12px] lg:text-[16px] font-medium lg:font-normal"
                  >
                    General Inquiry
                  </label>
                </div>

                <div className="flex items-center mb-4 lg:ml-2 sm:ml-5">
                  <input
                    name="toclick"
                    type="radio"
                    className="sm:w-4 sm:h-4 text-[#011C2A]"
                    value="SalesInquiry"
                    checked={formState.selectedSubject === "SalesInquiry"}
                    onChange={() =>
                      setFormState((prevState) => ({
                        ...prevState,
                        selectedSubject: "SalesInquiry",
                      }))
                    }
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="focus:ring-blue-500 ml-[8px] text-[12px] lg:text-[16px] font-medium lg:font-normal"
                  >
                    Sales Inquiry
                  </label>
                </div>

                <div className="flex items-center mb-4 lg:ml-2 sm:ml-5">
                  <input
                    name="toclick"
                    type="radio"
                    className="sm:w-4 sm:h-4 text-[#011C2A]"
                    value="careerInquiry"
                    checked={formState.selectedSubject === "careerInquiry"}
                    onChange={() =>
                      setFormState((prevState) => ({
                        ...prevState,
                        selectedSubject: "careerInquiry",
                      }))
                    }
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="focus:ring-blue-500 ml-[8px] text-[12px] lg:text-[16px] font-medium lg:font-normal"
                  >
                    Career Inquiry
                  </label>
                </div>
              </div>

              <div className="mt-5 lg:mt-14 lg:ml-4">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-[#000000]"
                >
                  Message
                </label>{" "}
                <textarea
                  name="message"
                  className="w-[100%] text-sm border-b border-[#8D8D8D] outline-none mt-3 lg:mt-2"
                  placeholder="Enter your message"
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      textarea: e.target.value,
                    }))
                  }
                  value={formState.textarea}
                ></textarea>
              </div>
              <div className="flex justify-center  lg:float-right">
                <button
                  type="submit"
                  className="text-textprimarywhite bg-textDarkBlue font-medium rounded-md lg:text-[18px] text-[12px] lg:px-20 lg:py-6 mt-[45px] lg:mr-20 px-[20px] py-[10px]"
                >
                  Send Message
                </button>
                {showPopup && (
                  <div className="w-full h-screen bg-[rgba(0,0,0,.3)] fixed left-0 top-0 z-50 flex justify-center items-center">
                    <div className=" bg-[#fff] p-8 rounded-md text-[15px] flex justify-center items-center w-[40%]">
                      {/* <Image
                        src={Success}
                        alt="Success Image"
                        className="w-[30px] h-[30px] mr-5 "
                      ></Image> */}
                      <p>Form submitted successfully!</p>
                    </div>
                  </div>
                )}

                {formState.showErrorPopup && (
                  <div className="w-full h-screen bg-[rgba(0,0,0,.3)] fixed left-0 top-0 z-50 flex justify-center items-center">
                    <div className=" bg-[#fff] p-8 rounded-md text-[15px] flex justify-center items-center w-[40%]">
                      {/* <Image src={Success} alt="Success Image" className="w-[30px] h-[30px] mr-5 "></Image> */}
                      <p>Something went wrong. Try again.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}