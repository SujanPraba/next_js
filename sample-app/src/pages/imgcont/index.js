/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import React, { useState, useEffect } from "react";
import clientbackimage from "../../../public/logos/client-backimage.svg";
import dockketclient from "../../../public/logos/dockket-client.svg";
import sandesh from "../../../public/logos/sandesh.svg";
// import sureshbabu from "../public/logos/sureshbabu.svg";
import prabhuramselvaraj from "../../../public/logos/prabhuramselvaraj.svg";
import quatationtop from "../../../public/icons/quatation-top.svg";
import quatationbottom from "../../../public/icons/quatation-bottom.svg";

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeContent, setActiveContent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prevImage) => (prevImage + 1) % 3);
      setActiveContent((prevContent) => (prevContent + 1) % 3);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const handlePaginationClick = (index) => {
    setActiveImage(index);
    setActiveContent(index);
  };

  return (
    <section className="mt-1 lg:mt-[60px] bg-gray-500">
      <div className="container m-auto relative w-[90%] lg:w-full">
        <div className=" rounded-3xl bg-none  lg:bg-textDarkBlue">
          <h2 className="text-[20px] md:text-[42px] pt-14 text-center text-textDarkBlue lg:text-textWhite   font-bold mb-[30px] lg:mb-[60px]">
            Voices of Volumes —
            <span className="text-bgPrimaryRed"> What Our Clients Say</span>
          </h2>

          <div className="flex justify-between w-[100%]  bg-textDarkBlue rounded-[50px] ">
            <div className="flex lg:relative absolute    -mt-[10px] -ml-[40px] ">
              <Image
                src={clientbackimage}
                alt="clientbackimage"
                className="mt-8 absolute  hidden lg:block h-[350px] lg:h-[450px] ml-[30px] "
                width={275}
                // height={200}
              />

              {activeImage === 0 && (
                <Image
                  src={dockketclient}
                  alt="dockketclient"
                  className="sm:mr-10  mb-20 fade-in-out z-40 lg:h-[360px] lg:w-[250px] h-[150px] ml-[190px] mt-[30px] hidden sm:block sm:mt-[60px] sm:ml-[35px]  lg:ml-[190px] lg:mt-[60px] "
                />
              )}

              {activeImage === 1 && (
                <Image
                  src={prabhuramselvaraj}
                  alt="prabhuramselvaraj"
                  className="sm:mr-10  sm:mb-20  fade-in-out z-40 lg:h-[360px] lg:w-[250px] hidden sm:block h-[150px] ml-[190px] mt-[30px] sm:mt-[60px] sm:ml-[35px]  lg:ml-[190px] lg:mt-[60px] "
                />
              )}
              {/* {activeImage === 2 && (
                <Image
                  src={sureshbabu}
                  alt="sureshbabu"
                  className="sm:mr-10  sm:mb-20 fade-in-out z-40 lg:h-[360px] lg:w-[250px] h-[150px] ml-[190px] mt-[30px] hidden sm:block sm:mt-[60px] sm:ml-[35px]  lg:ml-[190px] lg:mt-[60px] "
                />
              )} */}
              {activeImage === 2 && (
                <Image
                  src={sandesh}
                  alt="sandesh"
                  className="sm:mr-10  sm:mb-20 fade-in-out z-40 lg:h-[360px] lg:w-[250px] h-[150px] hidden sm:block ml-[190px] mt-[30px] sm:mt-[60px] sm:ml-[35px] lg:ml-[190px] lg:mt-[60px] "
                />
              )}
            </div>

            <div className="relative pb-[20px]  border-4 lg:border-bgPrimaryRed rounded-[36px]  w-[100%]  border-textDarkBlue 2xl:w-[63%]  lg:w-[57%] lg:h-[490px] h-[890px]  sm:h-[540px]  lg:mr-[40px] xl:mr-[100px] ">
              <Image
                src={quatationtop}
                alt="quotation top"
                className="absolute bottom-[355px] left-12   right-[300px] -top-[50px] hidden lg:block"
              />

              <div
                className={`fade-in-out  transition-opacity min-w-[270px] ${
                  activeContent !== 0 ? "hidden" : ""
                }`}
              >
                <div className="flex w-[100%] justify-center mt-[80px] sm:mt-[0px] ">
                  <Image
                    src={dockketclient}
                    alt="dockketclient"
                    className="sm:hidden block h-[120px]  "
                  />
                </div>

                <h4 className="text-xl  font-medium text-textprimarywhite lg:mt-[30px] mt-[20px] text-center sm:text-left sm:ml-[210px] sm:mt-[50px]   lg:ml-[20px] ">
                  JayaPrakash Nachiannan
                </h4>
                <h5 className="font-normal text-base  text-textprimarywhite sm:ml-[210px] mt-[10px] text-center sm:text-left lg:ml-[20px]  ">
                  Dockket Web application
                </h5>
                <h2 className="    text-textprimarywhite mx-6 font-normal my-3 text-xl sm:ml-[210px] lg:ml-[20px] lg:mt-[5px] lg:font-semibold">
                  They always delivered within the agreed timeline with
                  uncompromised quality within the budget
                </h2>
                <p className="text-base font-normal  text-textprimarywhite mx-6 mt-[15px] sm:mt-[60px] sm:mx-12 ml-[20px] lg:mt-[20px] lg:ml-[20px] ">
                  Hi, this is Jayaprakash Nachiannan founder of Dockket.com,
                  Ireland. Dockket is a complete retail business solution
                  product providing end-to-end Customer Invoicing and
                  double-entry Accounting features. Our association with Pirai
                  as our offshore development partner started in 2019. They
                  always delivered within the agreed timeline with uncompromised
                  quality within budget. Their in-house trained resources with
                  highly talented young minds are very productive and
                  impressive.
                </p>
              </div>
              <div
                className={`fade-in-out transition-opacity min-w-[270px] ${
                  activeContent !== 1 ? "hidden" : ""
                }`}
              >
                <div className="flex w-[100%] justify-center mt-[40px] sm:mt-[0px] ">
                  <Image
                    src={prabhuramselvaraj}
                    alt="prabhuramselvaraj"
                    className="sm:hidden block h-[120px] mt-[40px] sm:mt-[0px] "
                  />
                </div>
                <h4 className="text-xl font-medium text-textprimarywhite mt-[20px] text-center sm:text-left lg:mt-[30px] sm:ml-[210px] sm:mt-[50px]  lg:ml-[20px]">
                  Prabhuram Selvaraj
                </h4>
                <h5 className="font-normal text-base  text-textprimarywhite sm:ml-[210px] mt-[10px] text-center sm:text-left  lg:ml-[20px] ">
                   CEO Blue Endeavour
                </h5>
                <h2 className=" lg:text-2xl  text-textprimarywhite my-3 mx-6  lg:ml-[20px] lg:mt-[5px] sm:ml-[210px] font-normal text-xl lg:font-semibold">
                  They Understood our business priorities and transformed the
                  legacy infrastructure into an efficient cloud design
                  brilliantly.
                </h2>
                <p className="text-base font-normal sm:mt-[50px] mx-6 mt-[15px] sm:mx-12 text-textprimarywhite    lg:ml-[20px] ">
                  We had an amazing experience with the guys at Pirai Infotech
                  when we had planned to adopt Cloud. They understood our
                  business priorities and transformed the legacy infrastructure
                  into an efficient Cloud design brilliantly. I am totally
                  impressed with their skill, attitude and most of all, their
                  approach in handling their business. I will be happy to vouch
                  for them to anyone looking for anything related to Cloud and
                  DevOps.
                </p>
              </div>
              {/* <div
                className={`fade-in-out transition-opacity  min-w-[270px] ${
                  activeContent !== 2 ? "hidden" : ""
                }`}
              >
                <div className="flex w-[100%] justify-center mt-[40px] sm:mt-[0px] ">
                  <Image
                    src={sureshbabu}
                    alt="sureshbabu"
                    className="sm:hidden block h-[120px] mt-[40px] sm:mt-[0px] "
                  />
                </div>
                <h4 className="text-xl font-medium text-textprimarywhite mt-[20px] text-center  sm:text-left lg:mt-[30px] sm:ml-[210px] sm:mt-[50px] lg:ml-[20px] ">
                  Sureshbabu Nallappan
                </h4>
                <h5 className="font-normal text-base  text-textprimarywhite sm:ml-[210px] mt-[10px] text-center sm:text-left lg:ml-[20px] ">
                  Co-Founder of Contract IO
                </h5>
                <h2 className="sm:ml-[210px] lg:text-2xl  my-3 text-textprimarywhite mx-6  lg:ml-[20px] lg:mt-[5px] font-normal text-xl lg:font-semibold">
                  Our Experience with Pirai was remarkable.
                </h2>
                <p className="text-base font-normal sm:mt-[90px] mx-6 sm:mx-12 text-textprimarywhite mt-[15px] lg:ml-[20px] lg:mt-[20px] ">
                  Our experience with Pirai was remarkable. The team has not
                  only ensured the on-time delivery with high standards but
                  always complimented it with many astonishing achievements
                  before time. Lead by the industry experts together with
                  enthusiastic pool of engineers, Pirai is high on customer
                  satisfaction.
                </p>
              </div> */}
              <div
                className={`fade-in-out transition-opacity min-w-[270px] ${
                  activeContent !== 2 ? "hidden" : ""
                }`}
              >
                <div className="flex w-[100%] justify-center mt-[40px] sm:mt-[0px] ">
                  <Image
                    src={sandesh}
                    alt="sandeesh"
                    className="sm:hidden block h-[120px] mt-[40px] sm:mt-[0px] "
                  />
                </div>
                <h4 className="text-xl font-medium text-textprimarywhite mt-[20px] text-center  sm:text-left lg:mt-[30px] sm:ml-[210px] sm:mt-[50px] lg:ml-[20px] ">
                  Sandesh
                </h4>
                <h5 className="font-normal text-base  text-textprimarywhite sm:ml-[210px] mt-[10px] text-center sm:text-left lg:ml-[20px]">
                  MIDF - Web Application
                </h5>
                <h2 className="lg:text-2xl  sm:ml-[210px] my-3   text-textprimarywhite mx-6  lg:ml-[20px] lg:mt-[5px]  font-normal text-xl lg:font-semibold">
                  Their professionalism and responsiveness have resulted in a
                  smooth project execution process{" "}
                </h2>
                <p className="text-base font-normal sm:mt-[60px] mx-6 mt-[15px] sm:mx-12 text-textprimarywhite lg:mt-[20px]  lg:ml-[20px] ">
                  Pirai Infotech has consistently produced high-quality work
                  while adhering to project deadlines and expectations. Their
                  professionalism and responsiveness have resulted in a smooth
                  project execution process, and the top-tier resources they
                  have recruited are phenomenal. They are dependable, timely,
                  and flexible. Their developers are skilled and eager to share
                  their ideas, even if it means challenging ours in order to
                  achieve our goals. Overall, we are pleased with Pirai&rsquo;s
                  contribution as a technology partner.
                </p>{" "}
              </div>
              <Image
                src={quatationbottom}
                alt="quotation bottom"
                className="absolute top-[350px] right-12  lg:top-[460px] hidden lg:block xl:top-[460px]"
              />
            </div>
          </div>

          <div className="flex  mt-[30px] justify-center    lg:pb-[30px]  ">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`h-1 w-20 rounded-full ${
                  activeImage === index
                    ? "bg-red-500 h-[6px]"
                    : "bg-black lg:bg-textWhite  w-8 h-[6px]"
                } cursor-pointer mr-2`}
                onClick={() => handlePaginationClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-[#031555] {
          background-color: #031555;
        }
        .text-textprimarywhite {
          color: #ffffff;
        }
        .hidden {
          display: none;
        }
      `}</style>
      <style jsx global>{`
        .fade-in-out {
          animation: 1s ease-in infinite;
        }
        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}