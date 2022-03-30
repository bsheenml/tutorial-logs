import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";



function convertUnixTime(unix) {
  let a = new Date(unix * 1000),
      year = a.getFullYear(),
      months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
      month = months[a.getMonth()],
      date = a.getDate(),
      hour = a.getHours(),
      min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(),
      sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
  return `${month} ${date}, ${year}, ${hour}:${min}:${sec}`;
}

export default function CardTableDark({ posts },{ color }) {
  const resultArr = posts.results;
  color = 'light'
  console.log(posts);
  const Rows = resultArr.slice(10,20).map((d) => {
    return (

      <tr>
        
        <td className="border-t-0 px-6 align-middle border-l-0 font-bold border-r-0 text-xs whitespace-nowrap p-4">
          <a href={d.values.tutorial_url} target="_blank">{d.values.tutorial_name}</a>
        </td>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
          <img
            src={d.values.tutorial_provider_logo}
            className="h-8 w-8 bg-white rounded-full border"
            alt="..."
          ></img>{" "}
          <span
            className={
              "ml-3 font-bold " +
              +(color === "light" ? "text-blueGray-600" : "text-white")
            }
          >
            {d.values.tutorial_provider}
          </span>
        </th>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <i className="fas fa-circle text-orange-500 mr-2"></i> {new Date(d.values.tutorial_publish_date).toLocaleDateString("en-US")}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
         
        </td>
        

        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
          <button
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-1 py-1 p-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-z ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Share
                </button>
          <TableDropdown />
        </td>
      </tr>
      
      
    );
  });
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-2 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-2 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg p-2 " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Popular tutorials
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                
                  
                    
                  </div>
              </h3>
              
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Title
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Provider
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Publish Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Description
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Actions
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {Rows}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTableDark.defaultProps = {
  color: "light",
};

CardTableDark.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
