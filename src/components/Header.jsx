import React from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-emerald-950 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-200">Next</span>
            <span className="text-slate-500">Imóveis</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 text-black rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Buscar Imóveis"
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button>
            <FaSearch className="text-slate-700 cursor-pointer hover:text-slate-500" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link href="/">
            <li className="hidden md:inline text-slate-300 font-bold hover:underline cursor-pointer">
              Página inicial
            </li>
          </Link>
          <Link href="/Sobre">
            <li className="hidden md:inline text-slate-300 font-bold hover:underline cursor-pointer">
              Sobre
            </li>
          </Link>
          <Link href="/inscrever">
            <li className="hidden md:inline text-slate-300 font-bold hover:underline cursor-pointer">
              Inscreva-se
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
