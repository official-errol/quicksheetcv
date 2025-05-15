import React from "react";

const Header = ({ onExportPdf }) => {
  return (
    <header className="mb-4 px-6 py-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-blue-500 leading-tight">
            QuickSheet CV
          </h1>
          <p className="text-sm text-zinc-300 leading-none mt-1">
          Instantly create a polished resume with our builder!
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full border border-zinc-700">
              
              Free
            </span>
            <span className="flex items-center px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full border border-zinc-700">
              
              No Account Required
            </span>
          </div>
          
          <button
            onClick={onExportPdf}
            className="pr-6 pl-4 py-2 flex gap-2 text-sm font-semibold text-zinc-900 rounded-3xl bg-blue-500 hover:bg-white transition disabled:opacity-10"
          >
          <svg className="w-4 h-4 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 17H21M21 17L19 19M21 17L19 15M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11.0228" stroke="#18181b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            Export
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
