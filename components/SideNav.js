import React from 'react'
import Link from 'next/link'

const SideNav = () => {
  return (
    <div className="flex flex-col px-3 pt-12 md:h-screen md:items-end md:px-6">
      <ul className="space-y-1 ">
        <li className="text-sm md:text-xs">
          <Link href="/">
            <a>ABOUT</a>
          </Link>
        </li>
        <li className="text-sm md:text-xs">
          <Link href="/about">
            <a>DONATE</a>
          </Link>
        </li>

        <br />
        <li className="text-sm md:text-xs">
          <Link href="/about">
            <a>FACEBOOK</a>
          </Link>
        </li>
        <li className="text-sm  md:text-xs">
          <Link href="/about">
            <a>TWITTER</a>
          </Link>
        </li>
        <li className="text-sm  md:text-xs">
          <Link href="/about">
            <a>INSTAGRAM</a>
          </Link>
        </li>
        <li className="text-sm  md:text-xs">
          <Link href="/about">
            <a>TIK TOK</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
