// components/RealFooter.jsx
import Image from 'next/image';
import Link from 'next/link';
import logo from './logo.svg';

const RealFooter = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900">
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                {/* Back to Top Button */}
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <a
                        className="inline-block rounded-full bg-teal-600 p-2 text-white shadow-sm transition hover:bg-teal-500 sm:p-3 lg:p-4 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600"
                        href="#top"
                    >
                        <span className="sr-only">Back to top</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                <div className="lg:flex lg:items-end lg:justify-between">
                    {/* Logo and Description */}
                    <div>
                        <div className="flex justify-center text-teal-600 lg:justify-start dark:text-teal-300">
                            <Image
                                src={logo}
                                className="h-24 sm:h-32 md:h-40 w-auto"
                                alt="WAPCP FCT Zone Logo"
                                priority
                            />
                        </div>

                        <div className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left dark:text-gray-400">
                            <h2 className="text-sm sm:text-base md:text-lg font-semibold leading-tight text-gray-700 dark:text-gray-300">
                                THE OBJECTIVE OF THE JOURNAL
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                                Pharmacists as health researchers play a pivotal role
                                in advancing patient outcomes and enhancing
                                healthcare service delivery through their expertise
                                in pharmaceutical sciences and clinical practice.
                                Their responsibilities encompass designing and
                                conducting pharmaceutical research, including Pharmacotherapy interventions, clinical trials, drug efficacy and safety evaluations, and pharmacoeconomic studies, which collectively contribute to the development of new medications and improvement of existing therapies.
                            </p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                        <li>
                            <Link
                                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="/about"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="/journals"
                            >
                                Journals
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="/blog"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Copyright */}
                <p className="mt-12 text-center text-sm text-gray-500 lg:text-right dark:text-gray-400">
                    Copyright &copy; {new Date().getFullYear()}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default RealFooter;