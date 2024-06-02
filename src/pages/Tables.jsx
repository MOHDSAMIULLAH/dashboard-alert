import React, { useEffect, useState } from "react";

import { processAlertData } from "../utils/utils";

import { Link } from "react-router-dom";
import { TbAlertSquareRounded } from "react-icons/tb";

function Home() {
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState({});
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const { summary } = processAlertData(data);
        setSummary(summary);
      });
  }, []);

  return (
    <div class="flex bg-gray-800 ">
      <aside class="z-20 flex-shrink-0 hidden w-60 pl-2 overflow-y-auto bg-gray-800 md:block">
        <div>
          <div class="text-white">
            <div class="flex p-2  bg-gray-800">
              <div class="flex py-3 px-2 items-center">
                <p class="text-2xl text-green-500 font-semibold">Alert</p>
                <p class="ml-2 font-semibold italic">DASHBOARD</p>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="">
                <img
                  class=" h-24 w-24 rounded-full sm:block object-cover mr-2 border-4 border-green-400"
                  src="/icon-256x256.png"
                  alt=""
                />
                <p class="font-bold text-base  text-gray-400 pt-2 text-center w-24">
                  Mohd Samiullah
                </p>
              </div>
            </div>
            <div>
              <ul class="mt-6 leading-10">
                <li class="relative px-2 py-1 ">
                  <a
                    class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500"
                    href=" #"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <Link to={"/"} class="ml-4">
                      DASHBOARD
                    </Link>
                  </a>
                </li>
                <li class="relative px-2 py-1 ">
                  <a
                    class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500"
                    href=" #"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="w-6 h-6 text-inherit"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <Link to={"/tables"} class="ml-4">
                      Tables
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>

      <aside
        class={`fixed md:hidden inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto  bg-gray-900 dark:bg-gray-800 ${
          isSideMenuOpen ? "block" : "hidden"
        } `}
      >
        <div>
          <div class="text-white">
            <div class="flex p-2  bg-gray-800">
              <div class="flex py-3 px-2 items-center">
                <p class="text-2xl text-green-500 font-semibold">Alert</p>
                <p class="ml-2 font-semibold italic">DASHBOARD</p>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="">
                <img
                  class=" h-24 w-24 rounded-full sm:block object-cover mr-2 border-4 border-green-400"
                  src="/icon-256x256.png"
                  alt=""
                />
                <p class="font-bold text-base  text-gray-400 pt-2 text-center w-24">
                  Mohd Samiullah
                </p>
              </div>
            </div>
            <div>
              <ul class="mt-6 leading-10">
                <li class="relative px-2 py-1 ">
                  <a
                    class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500"
                    href=" #"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <Link to={"/"} class="ml-4">
                      DASHBOARD
                    </Link>
                  </a>
                </li>
                <li class="relative px-2 py-1 ">
                  <a
                    class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500"
                    href=" #"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="w-6 h-6 text-inherit"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <Link to={"/tables"} class="ml-4">
                      Tables
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>

      <div class="flex flex-col flex-1 w-full overflow-y-auto">
        <header class="z-40 py-4  bg-gray-800  ">
          <div class="flex items-center justify-between h-8 px-6 mx-auto">
            <button
              class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
              aria-label="Menu"
              onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
            >
              <x-heroicon-o-menu class="w-6 h-6 text-white" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>

            <div class="flex justify-center  mt-2 mr-4">
              <div class="relative flex w-full flex-wrap items-stretch mb-3"></div>
            </div>
          </div>
        </header>
        <main>
          <div class="grid mb-4 pb-10 px-2 sm:px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-green-400">
            <div class="grid grid-cols-12 gap-6">
              <div class="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                <div class="col-span-12 mt-8">
                  <div class="flex items-center h-10 intro-y">
                    <h2 class="mr-5 text-lg font-medium truncate">Dashboard</h2>
                  </div>
                  <div class="grid grid-cols-12 gap-6 mt-5">
                    <a
                      class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div class="p-5">
                        <div class="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                            />
                          </svg>
                          <div class="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span class="flex items-center">Today</span>
                          </div>
                        </div>
                        <div class="ml-2 w-full flex-1">
                          <div>
                            <div class="mt-3 text-3xl font-bold leading-8">
                              {summary.totalAlerts}
                            </div>

                            <div class="mt-1 text-base text-gray-600">
                              Total Alerts
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div class="p-5">
                        <div class="flex justify-between">
                          <TbAlertSquareRounded class="h-7 w-7 text-blue-400" />
                          <div class="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span class="flex items-center">
                              {summary.mostFrequentCategoryPercentage}%
                            </span>
                          </div>
                        </div>
                        <div class="ml-2 w-full flex-1">
                          <div>
                            <div class="mt-3 text-3xl font-bold leading-8">
                              {summary.mostFrequentCategory}
                            </div>

                            <div class="mt-1 text-base text-gray-600">
                              Most Frequent Category
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div class="p-5">
                        <div class="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                          <div class="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span class="flex items-center">
                              {summary.mostFrequentSrcIpPercentage}%
                            </span>
                          </div>
                        </div>
                        <div class="ml-2 w-full flex-1">
                          <div>
                            <div class="mt-3 text-3xl font-bold leading-8">
                              {summary.mostFrequentSrcIp}
                            </div>

                            <div class="mt-1 text-base text-gray-600">
                              Most Frequent Source IP
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div class="p-5">
                        <div class="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-pink-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                            />
                          </svg>
                          <div class="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span class="flex items-center">
                              {summary.mostTargetedPortPercentage}%
                            </span>
                          </div>
                        </div>
                        <div class="ml-2 w-full flex-1">
                          <div>
                            <div class="mt-3 text-3xl font-bold leading-8">
                              {summary.mostTargetedPort}
                            </div>

                            <div class="mt-1 text-base text-gray-600">
                              Most Targeted Port
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* table */}
                <div class="col-span-12 mt-5">
                  <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                    <div class="bg-white p-4 shadow-lg rounded-lg">
                      <h1 class="font-bold text-base">Alert Table</h1>
                      <div class="mt-4">
                        <div class="flex flex-col">
                          <div class="-my-2 overflow-x-auto">
                            <div class="py-2 align-middle inline-block min-w-full">
                              <div class="shadow overflow-hidden overflow-x-auto border-b border-gray-200 sm:rounded-lg bg-white">
                                <table class="min-w-full divide-y divide-gray-200">
                                  <thead>
                                    <tr>
                                      <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex cursor-pointer">
                                          <span class="mr-2">Timestamp</span>
                                        </div>
                                      </th>
                                      <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex cursor-pointer">
                                          <span class="mr-2">Source IP</span>
                                        </div>
                                      </th>
                                      <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex cursor-pointer">
                                          <span class="mr-2">Source Port</span>
                                        </div>
                                      </th>
                                      <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex cursor-pointer">
                                          <span class="mr-2">
                                            Destination IP
                                          </span>
                                        </div>
                                      </th>
                                      <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex cursor-pointer">
                                          <span class="mr-2">
                                            Destination Port
                                          </span>
                                        </div>
                                      </th>
                                      <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex cursor-pointer">
                                          <span class="mr-2">Protocol</span>
                                        </div>
                                      </th>
                                      <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex cursor-pointer">
                                          <span class="mr-2">Signature</span>
                                        </div>
                                      </th>
                                      <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex cursor-pointer">
                                          <span class="mr-2">Category</span>
                                        </div>
                                      </th>
                                      <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex cursor-pointer">
                                          <span class="mr-2">Severity</span>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody class="bg-white divide-y divide-gray-200">
                                    {data &&
                                      data.map((alert, index) => (
                                        <tr key={index}>
                                          <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5">
                                            <p class="text-xs text-gray-400">
                                              {new Date(
                                                alert.timestamp
                                              ).toLocaleString()}
                                            </p>
                                          </td>
                                          <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5">
                                            <p>{alert.src_ip}</p>
                                          </td>
                                          <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5">
                                            <p>{alert.src_port}</p>
                                          </td>
                                          <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5">
                                            <p>{alert.dest_ip}</p>
                                          </td>
                                          <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5">
                                            <p>{alert.dest_port}</p>
                                          </td>
                                          <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5">
                                            <div class="flex text-green-500">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-5 h-5 mr-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  stroke-width="2"
                                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                              </svg>
                                              <p>{alert.proto}</p>
                                            </div>
                                          </td>
                                          <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5">
                                            <p class="text-blue-500 hover:text-blue-600">
                                              {alert.alert?.signature}
                                            </p>
                                          </td>
                                          <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5">
                                            <p class="">
                                              {alert.alert?.category}
                                            </p>
                                          </td>
                                          <td class="px-6 py-2 whitespace-no-wrap text-sm leading-5">
                                            <p class="text-red-500 hover:text-red-600">
                                              {alert.alert?.severity}
                                            </p>
                                          </td>
                                        </tr>
                                      ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
