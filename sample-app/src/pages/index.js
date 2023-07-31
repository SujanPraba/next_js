import React, { useState } from "react";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-600 w-[90%] py-[15px] mx-auto">
        <p className="text-[24px] text-white ">Hai Welcome .... !</p>
      </div>
      <div>
        <div class="w-full h-full flex justify-center items-center py-[50px]">
          <table class="border-collapse w-2/3">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-2 px-4 border">Components</th>
                <th class="py-2 px-4 border">Url's</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="py-2 px-4 border">Amerian Website</td>
                <td class="py-2 px-4 border">/amwebsite</td>
              </tr>
              <tr class="bg-white">
                <td class="py-2 px-4 border">Form</td>
                <td class="py-2 px-4 border">/form</td>
              </tr>
              <tr class="bg-white">
                <td class="py-2 px-4 border">Image Zoon in out with Tabbar</td>
                <td class="py-2 px-4 border">/imgzoom</td>
              </tr>
              <tr class="bg-white">
                <td class="py-2 px-4 border">Side Tab with Condent Change In left</td>
                <td class="py-2 px-4 border">/sidetab</td>
              </tr>
              <tr class="bg-white">
                <td class="py-2 px-4 border">changing image button and condent</td>
                <td class="py-2 px-4 border">/imgcont</td>
              </tr>
              <tr class="bg-white">
                <td class="py-2 px-4 border">Button With Sliding Card</td>
                <td class="py-2 px-4 border">/buttoncard</td>
              </tr>
              {/* <!-- Add more rows as needed --> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
