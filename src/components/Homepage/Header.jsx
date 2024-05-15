// import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import HSIlogo from "/Maagad-HSI-Engage/HSI_Logo.png";

const navigation = [
  { icon: <FaFacebookSquare />, href: "https://facebook.com", current: false },
  { icon: <FaTwitter />, href: "https://twitter.com", current: false },
  { icon: <FaInstagram />, href: "https://instagram.com", current: false },
  { icon: <FaLinkedin />, href: "https://linkedin.com", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NHeader() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8 w-full justify-between">
            <div className="relative flex items-center justify-between">
              <div className="flex my-10 flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-16 w-auto"
                    src={HSIlogo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden mmxl:flex flex-shrink-0 items-center space-x-2 text-3xl ml-6">
                  <span className="text-gray-600 font-sans mr-3">
                    HIGHLY SUCCEED
                  </span>
                  <span className="text-[#e4b61a] font-sans font-bold">
                    ENGAGE
                  </span>
                </div>
              </div>

              <div className="justify-end">
                <div className="content-center hidden xl:ml-6 md:block ">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-slate-200"
                            : "text-gray-600 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-2xl font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel>
            <div className="sm:hidden flex justify-center">
              <div className="flex content-center px-66  bg-gray-100 rounded-md">
                {navigation.map((item, index) => (
                  <Disclosure.Button
                    key={index}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-slate-200 rounded-md"
                        : "text-gray-600 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-4 py-3 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.icon}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
