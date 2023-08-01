// import React,{useState} from "react";

// function Index() {
//     const [show, setShow] = useState(null)
//     return (
//         <>
//             <div className="w-full sm:px-6">
//                 <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
//                     <div className="sm:flex items-center justify-between">
//                         <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Projects</p>
//                         <div>
//                             <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
//                                 <p className="text-sm font-medium leading-none text-white">New Project</p>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
//                     <table className="w-full whitespace-nowrap">
//                         <thead>
//                             <tr className="h-16 w-full text-sm leading-none text-gray-800">
//                                 <th className="font-normal text-left pl-4">Project</th>
//                                 <th className="font-normal text-left pl-12">Progress</th>
//                                 <th className="font-normal text-left pl-12">Tasks</th>
//                                 <th className="font-normal text-left pl-20">Budget</th>
//                                 <th className="font-normal text-left pl-20">Deadline</th>
//                                 <th className="font-normal text-left pl-16">Members</th>
//                             </tr>
//                         </thead>
//                         <tbody className="w-full">
//                             <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
//                                 <td className="pl-4 cursor-pointer">
//                                     <div className="flex items-center">
//                                         <div className="w-10 h-10">
//                                             <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects.png" />
//                                         </div>
//                                         <div className="pl-4">
//                                             <p className="font-medium">UX Design &amp; Visual Strategy</p>
//                                             <p className="text-xs leading-3 text-gray-600 pt-2">Herman Group</p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="text-sm font-medium leading-none text-gray-800">72%</p>
//                                     <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
//                                         <div className="w-20 h-3 bg-green-progress rounded-full" />
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="font-medium">32/47</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">$13,000</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">22.12.21</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
//                                 </td>
//                                 <td className="pl-16">
//                                     <div className="flex items-center">
//                                         <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
//                                     </div>
//                                 </td>
//                                 <td className="px-7 2xl:px-0">
//                                     {
//                                         show==0 ? <button onClick={()=>setShow(null)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>:<button onClick={()=>setShow(0)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>
//                                     }
//                                    {show==0 &&  <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Edit</p>
//                                         </div>
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Delete</p>
//                                         </div>
//                                     </div>}
//                                 </td>
//                             </tr>
//                             <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
//                                 <td className="pl-4 cursor-pointer">
//                                     <div className="flex items-center">
//                                         <div className="w-10 h-10">
//                                             <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(1).png" />
//                                         </div>
//                                         <div className="pl-4">
//                                             <p className="font-medium">Branding</p>
//                                             <p className="text-xs leading-3 text-gray-600 pt-2">Cassin, Bradtke and Jacobson</p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="text-sm font-medium leading-none text-gray-800">18%</p>
//                                     <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
//                                         <div className="w-6 h-3 bg-green-progress rounded-full" />
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="font-medium">09/47</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">$13,000</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">22.12.21</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
//                                 </td>
//                                 <td className="pl-16">
//                                     <div className="flex items-center">
//                                         <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
//                                     </div>
//                                 </td>
//                                 <td className="px-7 2xl:px-0">
//                                     {
//                                         show==1 ? <button onClick={()=>setShow(null)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>:<button onClick={()=>setShow(1)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>
//                                     }
//                                    {show==1 &&  <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Edit</p>
//                                         </div>
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Delete</p>
//                                         </div>
//                                     </div>}
//                                 </td>
//                             </tr>
//                             <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
//                                 <td className="pl-4 cursor-pointer">
//                                     <div className="flex items-center">
//                                         <div className="w-10 h-10">
//                                             <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(2).png" />
//                                         </div>
//                                         <div className="pl-4">
//                                             <p className="font-medium">Dev Ops</p>
//                                             <p className="text-xs leading-3 text-gray-600 pt-2">Weissnat Group</p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="text-sm font-medium leading-none text-gray-800">28%</p>
//                                     <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
//                                         <div className="w-8 h-3 bg-green-progress rounded-full" />
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="font-medium">32/47</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">$13,000</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">22.12.21</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
//                                 </td>
//                                 <td className="pl-16">
//                                     <div className="flex items-center">
//                                         <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
//                                     </div>
//                                 </td>
//                                 <td className="px-7 2xl:px-0">
//                                     {
//                                         show==2 ? <button onClick={()=>setShow(null)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>:<button onClick={()=>setShow(2)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>
//                                     }
//                                    {show==2 &&  <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Edit</p>
//                                         </div>
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Delete</p>
//                                         </div>
//                                     </div>}
//                                 </td>
//                             </tr>
//                             <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
//                                 <td className="pl-4 cursor-pointer">
//                                     <div className="flex items-center">
//                                         <div className="w-10 h-10">
//                                             <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(3).png" />
//                                         </div>
//                                         <div className="pl-4">
//                                             <p className="font-medium">Backend Services</p>
//                                             <p className="text-xs leading-3 text-gray-600 pt-2">Hoeger - Hirthe</p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="text-sm font-medium leading-none text-gray-800">94%</p>
//                                     <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
//                                         <div className="w-24 h-3 bg-green-progress rounded-full" />
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="font-medium">32/47</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">$13,000</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">22.12.21</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
//                                 </td>
//                                 <td className="pl-16">
//                                     <div className="flex items-center">
//                                         <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
//                                     </div>
//                                 </td>
//                                 <td className="px-7 2xl:px-0">
//                                     {
//                                         show==3 ? <button onClick={()=>setShow(null)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>:<button onClick={()=>setShow(3)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>
//                                     }
//                                    {show==3 &&  <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Edit</p>
//                                         </div>
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Delete</p>
//                                         </div>
//                                     </div>}
//                                 </td>
//                             </tr>
//                             <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
//                                 <td className="pl-4 cursor-pointer">
//                                     <div className="flex items-center">
//                                         <div className="w-10 h-10">
//                                             <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(4).png" />
//                                         </div>
//                                         <div className="pl-4">
//                                             <p className="font-medium">UI Design</p>
//                                             <p className="text-xs leading-3 text-gray-600 pt-2">Batz - Yundt</p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="text-sm font-medium leading-none text-gray-800">81%</p>
//                                     <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
//                                         <div className="w-20 h-3 bg-green-progress rounded-full" />
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="font-medium">32/47</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">$13,000</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">22.12.21</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
//                                 </td>
//                                 <td className="pl-16">
//                                     <div className="flex items-center">
//                                         <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
//                                     </div>
//                                 </td>
//                                 <td className="px-7 2xl:px-0">
//                                     {
//                                         show==4 ? <button onClick={()=>setShow(null)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>:<button onClick={()=>setShow(4)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>
//                                     }
//                                    {show==4 &&  <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Edit</p>
//                                         </div>
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Delete</p>
//                                         </div>
//                                     </div>}
//                                 </td>
//                             </tr>
//                             <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
//                                 <td className="pl-4 cursor-pointer">
//                                     <div className="flex items-center">
//                                         <div className="w-10 h-10">
//                                             <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(5).png" />
//                                         </div>
//                                         <div className="pl-4">
//                                             <p className="font-medium">UX Strategy</p>
//                                             <p className="text-xs leading-3 text-gray-600 pt-2">Erdman Group</p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="text-sm font-medium leading-none text-gray-800">37%</p>
//                                     <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
//                                         <div className="w-14 h-3 bg-green-progress rounded-full" />
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="font-medium">32/47</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">$13,000</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">22.12.21</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
//                                 </td>
//                                 <td className="pl-16">
//                                     <div className="flex items-center">
//                                         <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
//                                     </div>
//                                 </td>
//                                 <td className="px-7 2xl:px-0">
//                                     {
//                                         show==5 ? <button onClick={()=>setShow(null)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>:<button onClick={()=>setShow(5)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>
//                                     }
//                                    {show==5 &&  <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Edit</p>
//                                         </div>
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Delete</p>
//                                         </div>
//                                     </div>}
//                                 </td>
//                             </tr>
//                             <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
//                                 <td className="pl-4 cursor-pointer">
//                                     <div className="flex items-center">
//                                         <div className="w-10 h-10">
//                                             <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(6).png" />
//                                         </div>
//                                         <div className="pl-4">
//                                             <p className="font-medium">Website Development</p>
//                                             <p className="text-xs leading-3 text-gray-600 pt-2">Dickens - Pacocha</p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="text-sm font-medium leading-none text-gray-800">58%</p>
//                                     <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
//                                         <div className="w-16 h-3 bg-green-progress rounded-full" />
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="font-medium">32/47</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">$13,000</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">22.12.21</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
//                                 </td>
//                                 <td className="pl-16">
//                                     <div className="flex items-center">
//                                         <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
//                                     </div>
//                                 </td>
//                                 <td className="px-7 2xl:px-0">
//                                     {
//                                         show==6 ? <button onClick={()=>setShow(null)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>:<button onClick={()=>setShow(6)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>
//                                     }
//                                    {show==6 &&  <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Edit</p>
//                                         </div>
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Delete</p>
//                                         </div>
//                                     </div>}
//                                 </td>
//                             </tr>
//                             <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
//                                 <td className="pl-4 cursor-pointer">
//                                     <div className="flex items-center">
//                                         <div className="w-10 h-10">
//                                             <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(7).png" />
//                                         </div>
//                                         <div className="pl-4">
//                                             <p className="font-medium">Mobile App Development</p>
//                                             <p className="text-xs leading-3 text-gray-600 pt-2">O'Kon Inc</p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="text-sm font-medium leading-none text-gray-800">42%</p>
//                                     <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
//                                         <div className="w-12 h-3 bg-green-progress rounded-full" />
//                                     </div>
//                                 </td>
//                                 <td className="pl-12">
//                                     <p className="font-medium">32/47</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">$13,000</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
//                                 </td>
//                                 <td className="pl-20">
//                                     <p className="font-medium">22.12.21</p>
//                                     <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
//                                 </td>
//                                 <td className="pl-16">
//                                     <div className="flex items-center">
//                                         <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
//                                         <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
//                                     </div>
//                                 </td>
//                                 <td className="px-7 2xl:px-0">
//                                     {
//                                         show==7 ? <button onClick={()=>setShow(null)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>:<button onClick={()=>setShow(7)} className="focus:outline-none pl-7">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
//                                             <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>
//                                     }
//                                    {show==7 &&  <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Edit</p>
//                                         </div>
//                                         <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
//                                             <p>Delete</p>
//                                         </div>
//                                     </div>}
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Index;
import React from "react";

export default function (){
    return(
        <>
        {/* <!-- component --> */}
<section class="bg-white dark:bg-gray-800">
        <div class="container px-6 py-8 mx-auto">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Simple, transparent pricing</h2>
                    <p class="mt-4 text-gray-500 dark:text-gray-400">No Contracts. No surorise fees.</p>
                </div>

                <div class="overflow-hidden p-0.5 mt-6 border rounded-lg dark:border-gray-700">
                    <div class="sm:-mx-0.5 flex">
                        <button class=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-blue-500 rounded-lg">Monthly</button>
                        <button class=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 bg-transparent rounded-lg hover:bg-gray-200">Yearly</button>
                    </div>
                </div>
            </div>

            <div class="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    <p class="text-lg font-medium text-gray-800 dark:text-gray-100">Intro</p>
                    <h4 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">$19 <span class="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>
                    <p class="mt-4 text-gray-500 dark:text-gray-300">For most businesses that want to optimaize web queries.</p>

                    <div class="mt-8 space-y-8">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">All limited links</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Own analytics platform</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
                        </div>
                    </div>

                    <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Choose plan
                    </button>
                </div>

                <div class="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    <p class="text-lg font-medium text-gray-800 dark:text-gray-100">Base</p>
                    <h4 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">$39 <span class="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>
                    <p class="mt-4 text-gray-500 dark:text-gray-300">For most businesses that want to optimaize web queries.</p>

                    <div class="mt-8 space-y-8">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">All limited links</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Own analytics platform</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
                        </div>
                    </div>

                    <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Choose plan
                    </button>
                </div>

                <div class="px-6 py-4 transition-colors duration-200 transform bg-gray-700 rounded-lg dark:bg-gray-600">
                    <p class="text-lg font-medium text-gray-100">Popular</p>
                    <h4 class="mt-2 text-4xl font-semibold text-gray-100">$99 <span class="text-base font-normal text-gray-400">/ Month</span></h4>
                    <p class="mt-4 text-gray-300">For most businesses that want to optimaize web queries.</p>

                    <div class="mt-8 space-y-8">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-300">All limited links</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-300">Own analytics platform</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-300">Chat support</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-300">Optimize hashtags</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-300">Unlimited users</span>
                        </div>
                    </div>

                    <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Choose plan
                    </button>
                </div>

                <div class="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    <p class="text-lg font-medium text-gray-800 dark:text-gray-100">Exterprise</p>
                    <h4 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">$199 <span class="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>
                    <p class="mt-4 text-gray-500 dark:text-gray-300">For most businesses that want to optimaize web queries.</p>

                    <div class="mt-8 space-y-8">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">All limited links</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Own analytics platform</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
                        </div>
                    </div>

                    <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Choose plan
                    </button>
                </div>
            </div>
        </div>
    </section>

<section className="dark:bg-gray-800 dark:text-gray-100 py-[200px]">
	<div className="container mx-auto p-6 overflow-x-auto">
		<table className="w-full border-separate">
			<caption className="sr-only">Pricing plan comparison</caption>
			<thead>
				<tr>
					<th></th>
					<th scope="col">
						<h2 className="px-2 text-lg font-medium">Starter</h2>
						<p className="mb-3">
							<span className="text-2xl font-bold sm:text-4xl dark:text-gray-50">0€</span>
							<span className="font-medium dark:text-gray-400">/mo</span>
						</p>
					</th>
					<th scope="col">
						<h2 className="px-2 text-lg font-medium">Standard</h2>
						<p className="mb-3">
							<span className="text-2xl font-bold sm:text-4xl dark:text-gray-50">19€</span>
							<span className="font-medium dark:text-gray-400">/mo</span>
						</p>
					</th>
					<th scope="col">
						<h2 className="px-2 text-lg font-medium">Premium</h2>
						<p className="mb-3">
							<span className="text-2xl font-bold sm:text-4xl dark:text-gray-50">49€</span>
							<span className="font-medium dark:text-gray-400">/mo</span>
						</p>
					</th>
				</tr>
			</thead>
			<tbody className="space-y-6 text-center divide-y divide-gray-700">
				<tr>
					<th scope="row" className="text-left">
						<h3 className="py-3">Euismod</h3>
					</th>
					<td>
						<span className="block text-sm">1</span>
					</td>
					<td>
						<span className="block text-sm">10</span>
					</td>
					<td>
						<span className="block text-sm">100</span>
					</td>
				</tr>
				<tr>
					<th scope="row" className="text-left   ">
						<h3 className="py-3">Principes et</h3>
					</th>
                    
					<td className="bg-[#E3E6ED]">
						<span className="block text-sm ">0,5 GB</span>
					</td>
					<td className="bg-[#E3E6ED]">
						<span className="block text-sm">5 GB</span>
					</td>
					<td className="bg-[#E3E6ED]">
						<span className="block text-sm">500 GB</span>
					</td>
				</tr>
				<tr>
					<th scope="row" className="text-left">
						<h3 className="py-3">Et mel porro</h3>
					</th>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-400">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto dark:text-violet-400">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
				</tr>
				<tr>
					<th scope="row" className="text-left">
						<h3 className="py-3">Veniam suscipiantur</h3>
					</th>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-600">
							<path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto dark:text-violet-400">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
				</tr>
				<tr>
					<th scope="row" className="text-left">
						<h3 className="py-3">Ornatus tacimates</h3>
					</th>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-600">
							<path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Standard plan" className="w-5 h-5 mx-auto dark:text-gray-600">
							<path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
				</tr>
				<tr>
					<th scope="row" className="text-left">
						<h3 className="py-3">Aliquam fastidii in mei</h3>
					</th>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-600">
							<path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Standard plan" className="w-5 h-5 mx-auto dark:text-gray-600">
							<path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>


<section>

    
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="border-b bg-gray-300 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="border-b bg-gray-300 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</section>
        </>
    )
}

