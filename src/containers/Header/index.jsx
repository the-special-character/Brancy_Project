import React from 'react';
import PersonIcon from '../../../public/icons/person.svg';
import SearchIcon from '../../../public/icons/search.svg';
import ShoppingBasketIcon from '../../../public/icons/shopping_basket.svg';

function Header() {
  return (
    <header className="flex gap-10 items-center px-container bg-yellow-50 py-5">
      <a href="#">
        <img
          src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
          alt="logo"
        />
      </a>
      <nav className="flex-1 ">
        <ul className="gap-10 hidden md:flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#pages">Pages</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-6">
        <button type="button">
          <PersonIcon height={40} width={40} />
        </button>
        <button type="button">
          <SearchIcon height={40} width={40} />
        </button>
        <button type="button">
          <ShoppingBasketIcon height={40} width={40} />
        </button>
      </div>
    </header>
  );
  // return (
  //   <div className="container fixed z-50 flex items-center justify-between w-full bg-white/30 backdrop-blur-sm">
  //     <div className="flex justify-between gap-16 mx-3 my-2">

  //       <img
  //         className="h-14"
  //         src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
  //         alt="Logo"
  //       />
  //       <div className="flex items-center max-md:hidden">
  //         <ul className="flex font-semibold gap-7">
  //           <li className="hover:text-[#ff6565] cursor-pointer">Home</li>
  //           <li className="hover:text-[#ff6565] cursor-pointer">About</li>
  //           <li className="hover:text-[#ff6565] cursor-pointer">Shop</li>
  //           <li className="hover:text-[#ff6565] cursor-pointer">Blog</li>
  //           <li className="hover:text-[#ff6565] cursor-pointer">Pages</li>
  //           <li className="hover:text-[#ff6565] cursor-pointer">Contact</li>
  //         </ul>
  //       </div>
  //     </div>
  //     <div className="flex mx-5 text-xl gap-9">
  //       <FaSearch className="hover:text-[#ff6565] cursor-pointer" />
  //       <FaShoppingBasket className="hover:text-[#ff6565] cursor-pointer" />
  //       <FaRegUser className="hover:text-[#ff6565] cursor-pointer" />
  //     </div>
  //   </div>
  // );
}

export default Header;
