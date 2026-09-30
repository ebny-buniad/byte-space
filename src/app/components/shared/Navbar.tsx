import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function BagIcon() {
    return (
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 6h14l1 14H2L3 6z" />
            <path d="M7 9V4a3 3 0 016 0v5" />
        </svg>
    );
}

export default function Navbar() {
    // Common nav links
    const navLinks = (
        <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/creators">Creators</Link></li>
        </>
    )
    const authLinks = (
        <>
            <li><Link href="/auth/sign-in">Sign In</Link></li>
            <li><Link href="/auth/sign-up">Join Us</Link></li>
        </>
    )

    return (
        <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full z-50">
            {/* container and mx-auto now properly center the navbar */}
            <div className="max-w-330 mx-auto">
                <div className="navbar px-0 py-5 bg-transparent text-white">

                    {/* Start Section (Mobile Menu & Logo) */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0 mr-2">
                                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-gray-900 text-white rounded-box z-10 mt-3 w-52 p-3 shadow-2xl border border-white/10"
                            >
                                {navLinks}
                            </ul>
                        </div>

                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/Header_Logo.png"
                                width={150}
                                height={40}
                                alt="Header Logo"
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Center Section (Desktop Menu) */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2 text-sm font-medium">
                            {navLinks}
                        </ul>
                    </div>

                    {/* End Section (Auth Links & Shop) */}
                    <div className="navbar-end flex items-center gap-2">
                        <ul className="menu menu-horizontal px-1 gap-1 items-center sm:flex text-sm font-medium">
                            {authLinks}
                        </ul>

                        <button type="button" aria-label="Cart" className="text-white">
                            <BagIcon />
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )
}