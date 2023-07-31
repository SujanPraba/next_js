import React, { useState } from "react";
import Image from "next/image";
import Header from "../../../components/header";
import Add from "../../../public/icons/Add.svg";
import Sub from "../../../public/icons/Subtract.svg"

const Dropdown = () => {
  const [dropdownStates, setDropdownStates] = useState(
    new Array(2).fill(false) // Two dropdowns initially set to false (closed)
  );

  const handleDropdownClick = (index) => {
    const newDropdownStates = dropdownStates.map((state, i) => i === index ? !state : false);
    setDropdownStates(newDropdownStates);
  };
 



  return (
    <>
      <section className="py-[30px]">
        <Header />
      </section>

      <section className="w-[90%] mx-auto pt-[120px]">
        <div className="w-[40%]">
          <h4 className="font-bold text-[48px]">
            Drive Cloud Transformation With Cutting-Edge DevOps Solutions
          </h4>
          <p className="text-[16px] font-normal ml-[110px] pt-[34px] text-[#4A494D]">
            Our DevOps services help you deliver applications at high velocity
            while ensuring operational efficiency.{" "}
          </p>
        </div>
      </section>

      <section className="w-[90%] mx-auto mt-[90px] flex justify-between">
        <div className="w-[30%]">
          <h4 className="text-[32px] font-semibold ">
            Integrate Every Business Action With IT for Unparalleled Efficiency
          </h4>
        </div>
        <div className="w-[37%]">
          <p className="text-[20px] font-normal">
            Leverage IT-Business alignment with Pirai Infotech to help your team
            achieve shared business goals, such as faster time-to-market for new
            services and digital products with ease.
          </p>
          <p className="text-[20px] font-normal py-[16px]">
            Experience the power of seamless and continuous code delivery with
            Pirai Infotech's DevOps services. Partner with a future-ready team
            that handles end-to-end development and deployment strategies across
            the cloud in one place – all with the goal to help you maximize
            productivity and reduce costs.
          </p>
          <p className="text-[20px] font-normal">
            Our goal is to digitize every repetitive day-to-day task in your
            business that would normally be done by a human being so you can
            experience true automation across the board.
          </p>
        </div>
      </section>

      <section className="bg-[#031555] mt-[120px] min-h-[700px]">
        <div className="flex w-[90%] justify-between mx-auto pt-[140px] max-h-[600px] text-white">
          <div className="w-[35%]">
            <h4 className="font-500 text-[54px] tracking-normal ">Service</h4>
            <h5 className="text-[28px]  mt-[-10px]">We offer</h5>
            <p className="pl-[90px] py-[50px] font-normal ">
              Achieve Digital Transformation with DevOps From Code to Cloud -
              Continuous Delivery and Deployment
            </p>
            <p className="text-[16px] font-normal">
              At Pirai Infotech, we leverage your digital transformation journey
              and enable you to deliver and deploy hassle-free code
              continuously. Our DevOps services bring you better and faster time
              to market. We help you increase your efficiency and optimize your
              processes. We automate end-to-end development and deployment
              strategy across the cloud for efficient and optimized processes.
              We furnish solutions for all your DevOps needs. Get started today!
            </p>
          </div>

          <div className="w-[55%] overflow-y-auto scrollbar-icon">
          <div className="py-[10px]  border-b-[3px] border-b-[white] s-1">
              <div className="flex items-baseline justify-center">
                <h4 className="px-[5px] text-[24px]">01/</h4>
                <div className="flex justify-between items-center">
                  <h5 className="w-[75%] text-[36px] px-[30px]">
                    Assessment & Strategy Planning
                  </h5>
                  <div
                    onClick={() => handleDropdownClick(0)}
                    tabIndex={0}
                    className="cursor-pointer"
                  >
                    {dropdownStates[0] ? ( // Use dropdownStates[0] instead of isOpen
        <Image src={Sub} alt="Subtraction" className="w-[36px] h-[36px] transition-all"/>
      ) : (
        <Image src={Add} alt="Addition" className="transition-all" />
      )}
                  </div>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-600 ${
                  dropdownStates[0] ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <div className="p-4">
                  <p>
                    We help you increase your efficiency and optimize your
                    processes. We automate end-to-end development and deployment
                    strategy across the cloud for efficient and optimized
                    processes. We furnish solutions for all your DevOps needs.
                    Get started today!
                  </p>
                </div>
              </div>
            </div>
            <div className="py-[10px]  border-b-[3px] border-b-[white] s-1">
              <div className="flex items-baseline justify-center">
                <h4 className="px-[5px] text-[24px]">01/</h4>
                <div className="flex justify-between items-center">
                  <h5 className="w-[75%] text-[36px] px-[30px]">
                    Assessment & Strategy Planning
                  </h5>
                  <div
                    onClick={() => handleDropdownClick(1)}
                    tabIndex={1}
                    className="cursor-pointer"
                  >
                   {dropdownStates[1] ? ( // Use dropdownStates[0] instead of isOpen
        <Image src={Sub} alt="Subtraction" className="w-[36px] h-[36px] transition-all"/>
      ) : (
        <Image src={Add} alt="Addition" className="transition-all" />
      )}
                  </div>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  dropdownStates[1] ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <div className="p-4">
                  <p>
                    We help you increase your efficiency and optimize your
                    processes. We automate end-to-end development and deployment
                    strategy across the cloud for efficient and optimized
                    processes. We furnish solutions for all your DevOps needs.
                    Get started today!
                  </p>
                </div>
              </div>
            </div>
            <div className="py-[10px]  border-b-[3px] border-b-[white] s-1">
              <div className="flex items-baseline justify-center">
                <h4 className="px-[5px] text-[24px]">01/</h4>
                <div className="flex justify-between items-center">
                  <h5 className="w-[75%] text-[36px] px-[30px]">
                    Assessment & Strategy Planning
                  </h5>
                  <div
                    onClick={() => handleDropdownClick(2)}
                    tabIndex={2}
                    className="cursor-pointer"
                  >
                   {dropdownStates[2] ? ( // Use dropdownStates[0] instead of isOpen
        <Image src={Sub} alt="Subtraction" className="w-[36px] h-[36px] transition-all"/>
      ) : (
        <Image src={Add} alt="Addition" className="transition-all" />
      )}
                  </div>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  dropdownStates[2] ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <div className="p-4">
                  <p>
                    We help you increase your efficiency and optimize your
                    processes. We automate end-to-end development and deployment
                    strategy across the cloud for efficient and optimized
                    processes. We furnish solutions for all your DevOps needs.
                    Get started today!
                  </p>
                </div>
              </div>
            </div>
            <div className="py-[10px]  border-b-[3px] border-b-[white] s-1">
              <div className="flex items-baseline justify-center">
                <h4 className="px-[5px] text-[24px]">01/</h4>
                <div className="flex justify-between items-center">
                  <h5 className="w-[75%] text-[36px] px-[30px]">
                    Assessment & Strategy Planning
                  </h5>
                  <div
                    onClick={() => handleDropdownClick(3)}
                    tabIndex={3}
                    className="cursor-pointer"
                  >
                   {dropdownStates[3] ? ( // Use dropdownStates[0] instead of isOpen
        <Image src={Sub} alt="Subtraction" className="w-[36px] h-[36px] transition-all"/>
      ) : (
        <Image src={Add} alt="Addition" className="transition-all" />
      )}
                  </div>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  dropdownStates[3] ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <div className="p-4">
                  <p>
                    We help you increase your efficiency and optimize your
                    processes. We automate end-to-end development and deployment
                    strategy across the cloud for efficient and optimized
                    processes. We furnish solutions for all your DevOps needs.
                    Get started today!
                  </p>
                </div>
              </div>
            </div>
            <div className="py-[10px]  border-b-[3px] border-b-[white] s-1">
              <div className="flex items-baseline justify-center">
                <h4 className="px-[5px] text-[24px]">01/</h4>
                <div className="flex justify-between items-center">
                  <h5 className="w-[75%] text-[36px] px-[30px]">
                    Assessment & Strategy Planning
                  </h5>
                  <div
                    onClick={() => handleDropdownClick(4)}
                    tabIndex={4}
                    className="cursor-pointer"
                  >
                   {dropdownStates[4] ? ( // Use dropdownStates[0] instead of isOpen
        <Image src={Sub} alt="Subtraction" className="w-[36px] h-[36px] transition-all"/>
      ) : (
        <Image src={Add} alt="Addition" className="transition-all" />
      )}
                  </div>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  dropdownStates[4] ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <div className="p-4">
                  <p>
                    We help you increase your efficiency and optimize your
                    processes. We automate end-to-end development and deployment
                    strategy across the cloud for efficient and optimized
                    processes. We furnish solutions for all your DevOps needs.
                    Get started today!
                  </p>
                </div>
              </div>
            </div>

           
          </div>
            
            
         
        </div>
      </section>
    </>
  );
};

export default function Home() {
  return <Dropdown />;
}
