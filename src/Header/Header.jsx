import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import SearchBar from "../SearchBar/SearchBar";
import { LanguageContext } from "../LanguageContext.jsx";

function Header({ activeSearchBar, setActiveSearchBar }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [fullSearch, setFullSearch] = useState(false);
  const searchWrapperRef = useRef(null);

  const context = useContext(LanguageContext);
  const { lang, setLang, t } = context;

  useEffect(() => {
    setFullSearch(false);
    setActiveSearchBar(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        fullSearch &&
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(event.target)
      ) {
        setFullSearch(false);
        setActiveSearchBar(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [fullSearch, setActiveSearchBar]);

  return (
    <div className="w-full h-12 bg-[#0A2E5D] p-2 md:h-17 md:p-4  ">
      {fullSearch ? (
        <div ref={searchWrapperRef} className="flex items-center gap-3 w-full">
          <SearchBar
            id="header"
            wrapperClass="w-full"
            inputClass="h-12 rounded-md bg-white px-4"
            dropdownClass="absolute top-14 left-0 right-0 bg-white border rounded-md z-50"
            itemClass="p-3 hover:bg-gray-100 cursor-pointer"
            placeholder={t.placeholder}
            activeSearchBar={activeSearchBar}
            setActiveSearchBar={setActiveSearchBar}
          />

          <button
            onClick={() => {
              setFullSearch(false);
              setActiveSearchBar(null);
            }}
            className="text-white text-2xl px-3"
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center gap-3">
          {/* ✅ LOGO click par home navigate + 3-line close */}
          <img
            src="/1000046237-removebg-preview.png"
            alt="logo"
            className="h-10 w-25 cursor-pointer"
            onClick={
              () => navigate("/", { state: { service: "home" } }) // 👈 yahan add kiya gaya
            }
          />

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className=" bg-[#0A2E5D] text-white "
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>

          <button
            onClick={() => setFullSearch(true)}
            className="py-2 bg-white text-blue-500 rounded-full flex items-center gap-2 px-4"
          >
            <span className="hidden md:block">{t.search}</span>
            <IoSearch />
          </button>

          <button className="text-white">{t.signIn}</button>
        </div>
      )}
    </div>
  );
}

export default Header;
