"use client";
import { useState, useEffect } from "react";
import { headerNavLinks } from "@constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const HomePageBottomHeader = () => {
	const pathname = usePathname();

	return (
		<nav className="hidden slg:flex justify-center items-center w-full py-4 bg-gray-100 backdrop-blur-sm shadow-lg">
			<div className="flex items-center justify-center w-full max-w-6xl mx-auto px-6">
				{/* Navigation Links */}
				<div className="flex items-center gap-10">
					{headerNavLinks.map((link, index) => (
						<Link
							key={link.id}
							href={link.href}
							className={`relative text-base font-light tracking-wide transition-all duration-300 hover:text-primary group ${
								pathname === link.href ? "text-primary" : "text-black/90"
							}`}
						>
							{link.text}
							
							{/* Animated underline */}
							<span
								className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-300 ease-out ${
									pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
								}`}
							/>
							
							{/* Hover glow effect */}
							<span
								className={`absolute inset-0 rounded-md transition-all duration-300 ${
									pathname === link.href 
										? "bg-primary/10 scale-110" 
										: "bg-transparent group-hover:bg-white/5 group-hover:scale-105"
								}`}
							/>
						</Link>
					))}
				</div>
			</div>

			{/* Optional: Decorative elements */}
			<div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute -top-2 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute -bottom-2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
			</div>
		</nav>
	);
};

export default HomePageBottomHeader;