'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="pt-0 pb-16 px-4 sm:px-6 md:px-12 bg-[#F9F9F9] relative">
            <div className=" relative">
                {/* GO UP Button */}
                <div className="flex justify-end">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-black text-white px-4 sm:px-7 py-4 sm:py-6 text-xs font-medium tracking-wider hover:bg-gray-800 transition-colors"
                    >
                        GO<br />UP
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-24 pt-6">
                    <nav className="flex flex-col space-y-3 min-w-[200px] font-normal leading-tight">
                        <Link href="/shop" className="text-base sm:text-lg text-black hover:text-gray-600 transition-colors">
                            Shop
                        </Link>
                        <Link href="/about" className="text-base sm:text-lg text-black hover:text-gray-600 transition-colors">
                            About
                        </Link>
                        <Link href="/journal" className="text-base sm:text-lg text-black hover:text-gray-600 transition-colors">
                            Journal
                        </Link>
                        <Link href="/support" className="text-base sm:text-lg text-black hover:text-gray-600 transition-colors">
                            Support
                        </Link>
                        <Link href="/covid-19" className="text-base sm:text-lg text-black hover:text-gray-600 transition-colors">
                            COVID-19 Info
                        </Link>
                        <Link href="/order-status" className="text-base sm:text-lg text-black hover:text-gray-600 transition-colors">
                            Order Status
                        </Link>
                        <Link href="/corporate-sales" className="text-base sm:text-lg text-black hover:text-gray-600 transition-colors">
                            Corporate Sales
                        </Link>
                    </nav>

                    <div className="space-y-4 max-w-md">
                        <h3 className="text-base sm:text-lg text-black">Newsletter Signup</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Sign up to our Newsletter to hear about new product releases, learn about our design process,
                            and everything else going on behind the scenes at Grovemade.
                        </p>
                        <div>
                            <div className="border-b border-gray-300 pb-1 w-full sm:w-80">
                                <input
                                    type="email"
                                    placeholder=""
                                    className="w-full bg-transparent text-black focus:outline-none text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 sm:mt-20">
                    <div className="flex justify-center sm:justify-end">
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-center sm:text-left">
                            <span className="text-gray-500">©2025 Grovemade</span>
                            <Link href="/terms" className="text-gray-500 hover:text-gray-700 transition-colors">
                                Terms & Conditions
                            </Link>
                            <Link href="/privacy" className="text-gray-500 hover:text-gray-700 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="https://github.com/imflawlezz" className="text-black hover:text-gray-700 transition-colors">
                                Site by imflawlezz
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}