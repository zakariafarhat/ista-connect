import React from "react";
import { Search, Bell, UserRound } from "lucide-react";

function Navbar() {

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-blue-50 border-b border-gray-200 px-6 py-2">

      <div className=" relative w-112.5 max-w-full">

        <Search
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Rechercher un stagiaire par nom, email ou code..."
          className="w-full border border-gray-200 rounded-lg py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
        />

      </div>


      <div className="flex items-center gap-5">

        <button className="text-gray-600 hover:text-blue-600">
          <Bell size={22} />
        </button>

        <div className="flex items-center gap-2">

          <UserRound size={22} className="text-blue-600" />

          <select className="outline-none text-sm text-gray-700 bg-white">
            <option>Administrateur</option>
          </select>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
