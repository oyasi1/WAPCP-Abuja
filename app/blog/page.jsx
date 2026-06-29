// app/blog/page.jsx
import Link from 'next/link';
import { FaArrowLeft, FaNewspaper } from 'react-icons/fa';
import BlogClient from './BlogClient';

export const metadata = {
  title: 'News & Blog | WAPCP FCT Zone',
  description: 'Latest news, updates, and insights from the West African Postgraduate College of Pharmacists, FCT Zone.',
};

export default function BlogPage() {
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
                <FaNewspaper className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              News &amp; Blog
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Stay updated with the latest news, events, and insights from the 
              WAPCP FCT Zone community.
            </p>
          </div>
        </div>
      </section>

      {/* Client Component with all interactivity */}
      <BlogClient />
    </div>
  );
}