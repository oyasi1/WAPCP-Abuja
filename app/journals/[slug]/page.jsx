// app/journals/[slug]/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  FaArrowLeft, 
  FaCalendarAlt, 
  FaUser, 
  FaBookOpen,
  FaTag
} from 'react-icons/fa';
import { journals } from '@/components/data';
import JournalActions from './JournalActions';

export async function generateStaticParams() {
  return journals.map((journal) => ({
    slug: journal.slug,
  }));
}

export default async function JournalPage({ params }) {
  const { slug } = await params;
  const journal = journals.find((j) => j.slug === slug);

  if (!journal) {
    notFound();
  }

  // Find related journals (same category)
  const relatedJournals = journals
    .filter(j => j.id !== journal.id && j.category === journal.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/journals" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
        >
          <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Journals
        </Link>
      </div>

      {/* Journal Content */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header with Image */}
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-100 to-purple-100">
            {journal.coverImage ? (
              <Image
                src={journal.coverImage}
                alt={journal.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-8xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                📚
              </div>
            )}
            <div className="absolute top-4 right-4 flex gap-2">
              <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium px-4 py-2 rounded-full">
                {journal.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="w-4 h-4" />
                Published: {new Date(journal.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <FaBookOpen className="w-4 h-4" />
                Vol. {journal.volume}, Issue {journal.issue}
              </span>
              <span className="flex items-center gap-2">
                <FaTag className="w-4 h-4" />
                {journal.citations} citations
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {journal.title}
            </h1>

            {/* Authors */}
            <div className="flex flex-wrap items-center gap-6 pb-6 mb-6 border-b border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <FaUser className="w-4 h-4" />
                <span className="font-medium">Authors:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {journal.authors.map((author, index) => (
                  <span key={index} className="text-gray-700">
                    {author}{index < journal.authors.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
            </div>

            {/* Abstract */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Abstract</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {journal.abstract}
              </p>
            </div>

            {/* Keywords */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {journal.keywords.map((keyword) => (
                  <span 
                    key={keyword}
                    className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Journal Actions - Client Component */}
            <JournalActions pdfUrl={journal.pdfUrl} title={journal.title} />
          </div>
        </div>

        {/* Related Journals */}
        {relatedJournals.length > 0 && (
          <section className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Journals</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedJournals.map((related) => (
                <Link 
                  key={related.id}
                  href={`/journals/${related.slug}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-32 bg-gradient-to-br from-blue-100 to-purple-100">
                    {related.coverImage ? (
                      <Image
                        src={related.coverImage}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                        📚
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {related.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                      <FaCalendarAlt className="w-3 h-3" />
                      {new Date(related.publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short' 
                      })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}