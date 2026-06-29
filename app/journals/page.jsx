// app/journals/page.jsx
import Link from 'next/link';
import { FaBookOpen, FaArrowLeft, FaSearch, FaFilter } from 'react-icons/fa';
import JournalsClient from './JournalsClient';

export const metadata = {
  title: 'Journals | WAPCP FCT Zone',
  description: 'Explore our collection of pharmaceutical journals, research papers, and publications from the West African Postgraduate College of Pharmacists.',
};

export default function JournalsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <FaBookOpen className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Journals
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Browse our collection of peer-reviewed journals, research papers, 
              and publications advancing pharmaceutical knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Journals Content */}
      <JournalsClient />
    </div>
  );
}