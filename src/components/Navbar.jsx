import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets/assets';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav className={`sticky top-0 z-20 py-3 backdrop-blur-lg ${isActive ? "bg-custom-white" : ""} duration-300 transition`}>
            <div className="container px-4 mx-auto relative">
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <Link className='flex items-center' to="/">
                            <img className='w-14 h-14  bg-custom-green' src={logo} alt="Real-State-logo" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className='hidden md:flex  space-x-12 space-x-reverse'>
                        <li><Link className='text-black font-bold hover:text-custom-green transition duration-300' to="/">الرئيسية</Link></li>
                        <li><Link className='text-black font-bold hover:text-custom-green transition duration-300' to="#">عن الموقع</Link></li>
                        <li><Link className='text-black font-bold hover:text-custom-green transition duration-300' to="#">الوحدات المتاحة</Link></li>
                        <li><Link className='text-black font-bold hover:text-custom-green transition duration-300' to="#">اتصل بنا</Link></li>
                        <li><Link className='text-black font-bold hover:text-custom-green transition duration-300' to="/reservation"> حجز الوحدات</Link></li>
                    </ul>

                    {/* Login Button */}
                    <div className='hidden md:flex justify-center space-x-12 space-x-reverse items-center'>
                        <Link className='bg-custom-green py-3 px-6 rounded font-medium text-white' to={'/login'}>تسجيل الدخول</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className='text-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='md:hidden bg-custom-white absolute top-16 left-0 right-0 shadow-lg container px-4 mx-auto '>
                    <ul className='flex flex-col gap-4 space-y-4 py-4 mr-2 my-7'>
                        <li><Link className='text-black font-bold hover:text-custom-green transition duration-300' to="/">الرئيسية</Link></li>
                        <li><Link className='text-black font-bold hover:text-custom-green transition duration-300' to="#">عن الموقع</Link></li>
                        <li><Link className='text-black font-bold hover:text-custom-green transition duration-300' to="#">الوحدات المتاحة</Link></li>
                        <li><Link className='text-black font-bold hover:text-custom-green transition duration-300' to="#">اتصل بنا</Link></li>
                    </ul>
                    <div className='flex  items-center mb-5'>
                        <Link className='bg-custom-green py-3 px-6 rounded font-medium text-white' to={'/login'}>تسجيل الدخول</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
