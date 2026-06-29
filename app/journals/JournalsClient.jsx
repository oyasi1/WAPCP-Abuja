// app/journals/JournalsClient.jsx
'use client'

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaSearch, 
  FaCalendarAlt, 
  FaUser, 
  FaBookOpen,
  FaFilePdf,
  FaTag,
  FaChevronRight,
  FaDownload
} from 'react-icons/fa';
import { journals, getJournalCategories, getJournalYears } from '@/components/data';

export default function JournalsClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const categories = getJournalCategories();
  const years = getJournalYears();

  // Filter journals
  const filteredJournals = useMemo(() => {
    return journals.filter(journal => {
      const matchesSearch = journal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           journal.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           journal.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || journal.category === selectedCategory;
      const matchesYear = selectedYear === 'All' || new Date(journal.publishDate).getFullYear().toString() === selectedYear;
      
      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchTerm, selectedCategory, selectedYear]);

  return (
    <div>
      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search journals by title, author, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-auto px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'All' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full md:w-auto px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === 'All' ? 'All Years' : year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <p className="text-gray-600">
          Showing <span className="font-semibold">{filteredJournals.length}</span> journals
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          {selectedYear !== 'All' && ` from ${selectedYear}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>

      {/* Journals Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredJournals.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No journals found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredJournals.map((journal) => (
                <Link 
                  key={journal.id}
                  href={`/journals/${journal.slug}`}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="flex flex-col h-full">
                    {/* Cover Image */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                      {journal.coverImage ? (
                        <Image
                          src={journal.coverImage}
                          alt={journal.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                          📚
                        </div>
                      )}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                          {journal.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                          Vol. {journal.volume}
                        </span>
                        <span className="bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                          No. {journal.issue}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {journal.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                        {journal.description}
                      </p>

                      {/* Authors */}
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <FaUser className="w-3 h-3" />
                        <span>{journal.authors.join(', ')}</span>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="w-3 h-3" />
                          {new Date(journal.publishDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaBookOpen className="w-3 h-3" />
                          {journal.pages}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaTag className="w-3 h-3" />
                          {journal.citations} citations
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                        <span className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          View Journal
                          <FaChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                        // app/journals/JournalsClient.jsx - Update the PDF button
<button 
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent the Link from navigating
    window.open(journal.pdfUrl, '_blank');
  }}
  className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors"
  aria-label="Download PDF"
>
  <FaFilePdf className="w-4 h-4" />
  <span>PDF</span>
</button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Submit Your Research
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Are you a researcher or practitioner? Submit your work to our journals and 
            contribute to the advancement of pharmaceutical knowledge.
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 inline-block"
          >
            Submit Now
          </Link>
        </div>
      </section>
    </div>
  );
}