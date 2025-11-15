"use client";
import { useState } from "react";
import Link from "next/link";
import { appMetadata } from "@/lib/metadata";
import Login from "./login";
const navLinks = [
    { href: "/characters", label: "Personaggi" },
    { href: "/campaigns", label: "Campagna" },
];

export default function Topbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <Link href="/" className="btn btn-ghost text-xl">
                    {appMetadata.title as string}
                </Link>

                {/* Menu desktop */}
                <ul className="hidden lg:flex gap-4 menu-horizontal">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="btn btn-ghost rounded-btn">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <Login />
                </ul>

                {/* Bottone menu mobile */}
                <button
                    className="btn btn-ghost lg:hidden"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Menu mobile */}
                {open && (
                    <div className="absolute top-full left-0 w-full bg-base-100 shadow-md lg:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="btn btn-ghost w-full text-left"
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <Login />
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    );
}
