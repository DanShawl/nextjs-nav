import React, { useState } from 'react'
import { MdMenu, MdChevronLeft, MdOutlineShoppingBag } from 'react-icons/md'
import Link from 'next/link'
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false)

  return (
    <nav className=" sticky top-0 z-20 h-10 flex-col  px-3 md:flex md:h-screen md:px-6 md:pt-3">
      <div className="flex items-center justify-between">
        <a href="/" className="">
          BOYS WILL BE
        </a>
        <div className="flex">
          {openNav ? null : (
            <MdOutlineShoppingBag className="block h-10 w-10 cursor-pointer p-2 md:hidden" />
          )}
          {openNav ? (
            <MdChevronLeft
              onClick={() => setOpenNav(!openNav)}
              className="block h-10 w-10 cursor-pointer p-2 md:hidden"
            />
          ) : (
            <MdMenu
              onClick={() => setOpenNav(!openNav)}
              className="block h-10 w-10 cursor-pointer p-2 md:hidden"
            />
          )}
        </div>
      </div>

      <ul
        className={
          (openNav ? 'left-0 px-3' : '-left-full') +
          ' fixed bottom-0 top-10 w-full items-center space-y-2 bg-white pt-5  text-black transition-left duration-500 md:static md:w-auto md:space-y-1 md:bg-transparent'
        }
        // className="flex items-center justify-between space-x-7 p-2 text-gray-700"
      >
        <li className="text-sm md:text-xs">
          <Link href="/">
            <a>SHOP BAGS</a>
          </Link>
        </li>
        <li className="text-sm  md:text-xs">
          <Link href="/about">
            <a>SHOP HOODIES</a>
          </Link>
        </li>
        <li className="text-sm md:text-xs">
          <Link href="/about">
            <a>SHOP HATS</a>
          </Link>
        </li>
        <br />
        <li className="text-sm  md:text-xs">
          <Link href="/about">
            <a>COLLECTIONS</a>
          </Link>
        </li>
        <li className="text-sm  md:text-xs">
          <Link href="/about">
            <a>BAG</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

// <nav className="  sticky top-0 z-20 items-center justify-between bg-gray-300 md:flex">
// <div className="flex items-center justify-between">
//   <a href="/" className="">
//     Logo
//   </a>
//   {openNav ? (
//     <MdChevronLeft
//       onClick={() => setOpenNav(!openNav)}
//       className="block h-10 w-10 cursor-pointer p-2 md:hidden"
//     />
//   ) : (
//     <MdMenu
//       onClick={() => setOpenNav(!openNav)}
//       className="block h-10 w-10 cursor-pointer p-2 md:hidden"
//     />
//   )}
// </div>

// <ul
//   className={
//     (openNav ? 'left-0' : '-left-full') +
//     ' fixed bottom-0 top-10 w-10/12 items-center space-y-5 bg-gray-500 p-2 text-white transition-left duration-500 md:static md:flex md:w-auto md:space-y-0 md:space-x-7 md:bg-transparent md:text-gray-500'
//   }
//   // className="flex items-center justify-between space-x-7 p-2 text-gray-700"
// >
//   <li className="text-lg font-semibold">
//     <a href="/">Home</a>
//   </li>
//   <li className="text-lg font-semibold">
//     <a href="/">About</a>
//   </li>
//   <li className="text-lg font-semibold">
//     <a href="/">Shop</a>
//   </li>
//   <li className="text-lg font-semibold">
//     <a href="/">Contact</a>
//   </li>
// </ul>
// </nav>
