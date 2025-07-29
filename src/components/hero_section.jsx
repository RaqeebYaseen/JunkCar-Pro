'use client'

import Image from "next/image"
import Link from "next/link"
import Button from "@/components/ui/button"
import themeColors from "@/lib/utils/theme_colors"
import FilterBar from "./filter_bar";
const HeroSection = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Sports car on road with city lights"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Navigation */}
            <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12">
                {/* <nav className="flex justify-between px-6 py-4 lg:px-12 items-start md:items-center"> */}

                {/* Logo */}
                {/* <div className="flex items-center space-x-2"> */}
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={160}
                    height={90}
                    className="object-cover"
                    priority
                />
                {/* <div className="relative w-[160px] h-[90px]">
           <Image
          src="/images/logo.png"
          alt="logo"
          fill
          className="object-cover"
          priority
        />
          </div> */}
                {/* </div> */}

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-white hover:text-orange-400 transition-colors">Home</Link>
                    <Link href="#about" className="text-white hover:text-orange-400 transition-colors">About Us</Link>
                    <Link href="#features" className="text-white hover:text-orange-400 transition-colors">Services</Link>
                    <Link href="#inventory" className="text-white hover:text-orange-400 transition-colors">Inventory</Link>
                    <Link href="#contact" className="text-white hover:text-orange-400 transition-colors">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Find Your Perfect Car with <span className="block text-[themeColors.accent]">Junk Car</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
                        Discover a wide range of vehicles tailored to meet your needs and budget
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        



                              
                        <Button
                            size="lg"
                            textColor={themeColors.primary}
                            borderColor={themeColors.primary}
                            hoverBorderColor={themeColors.primary}
                            hoverFillColor={themeColors.primary}
                            hoverTextColor='#ffffff'
                        >
                            Get Financing
                        </Button>

                        <Button
                            size="lg"
                            textColor='#ffffff'
                            borderColor='#ffffff'
                            hoverBorderColor='#ffffff'
                            hoverFillColor='#ffffff'
                            hoverTextColor={themeColors.primary}
                        >
                            Browse Cars
                        </Button>
                    </div>

                </div>
            </div>
            <FilterBar />
        </div>
    );
};

export default HeroSection;



