import React, { useState } from "react";

export default function MenuButton({ onClick }) {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
        if (onClick) onClick();
    };

    return (
        <button onClick={toggle} className="relative group md:hidden block">
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transition-all duration-300 origin-center overflow-hidden">
                    {/* --- Top Line --- */}
                    <div
                        className={`bg-white h-[2px] w-7 transition-all duration-300 origin-left ${open ? "translate-x-10" : ""
                            }`}
                    ></div>

                    {/* --- Middle Line --- */}
                    <div
                        className={`bg-white h-[2px] w-7 rounded transition-all duration-300 ${open ? "translate-x-10 delay-75" : "delay-75"
                            }`}
                    ></div>

                    {/* --- Bottom Line --- */}
                    <div
                        className={`bg-white h-[2px] w-7 transition-all duration-300 origin-left ${open ? "translate-x-10 delay-150" : "delay-150"
                            }`}
                    ></div>

                    {/* --- X Shape --- */}
                    <div
                        className={`absolute items-center justify-between flex w-12 top-2.5 transition-all duration-500 ${open ? "translate-x-0" : "-translate-x-10"
                            }`}
                    >
                        <div
                            className={`absolute bg-white h-[2px] w-5 transition-all duration-500 ${open ? "rotate-45 delay-300" : "rotate-0 delay-300"
                                }`}
                        ></div>
                        <div
                            className={`absolute bg-white h-[2px] w-5 transition-all duration-500 ${open ? "-rotate-45 delay-300" : "-rotate-0 delay-300"
                                }`}
                        ></div>
                    </div>
                </div>
                {open &&
                    <>
                        {/* <!-- Example of a modal-like window --> */}
                        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
                            {/* <!-- Backdrop --> */}
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>

                            {/* <!-- Window --> */}
                            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm relative z-10">
                                <h2 className="text-2xl font-bold mb-4">New Window</h2>
                                <p className="mb-4">This is the content of your new window.</p>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Close</button>
                            </div>
                        </div>
                    </>}
            </div>
        </button>
    );
}
