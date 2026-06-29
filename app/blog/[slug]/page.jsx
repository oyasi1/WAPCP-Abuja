// app/blog/[slug]/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  FaArrowLeft, 
  FaCalendarAlt, 
  FaClock,
  FaTag,
  FaShareAlt,
  FaTwitter,
  FaLinkedin,
  FaFacebook
} from 'react-icons/fa';
import { blogPosts } from '@/components/data';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Find related posts
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
        >
          <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Image */}
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-blue-100 to-purple-100">
          {post.imageUrl ? (
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-8xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
              📰
            </div>
          )}
          {post.featured && (
            <span className="absolute top-4 left-4 bg-yellow-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
          <span className="flex items-center gap-2">
            <FaClock className="w-4 h-4" />
            {post.readTime}
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-200">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            {post.author.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{post.author}</div>
            <div className="text-sm text-gray-500">{post.authorRole}</div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {post.content || 'Full article content goes here. This is where you would add the complete article text with proper formatting, images, and other rich content.'}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200">
          <span className="flex items-center gap-2 text-gray-600 font-medium mr-2">
            <FaTag className="w-4 h-4" />
            Tags:
          </span>
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200">
          <span className="text-gray-600 font-medium flex items-center gap-2">
            <FaShareAlt className="w-4 h-4" />
            Share:
          </span>
          <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
            <FaTwitter className="w-4 h-4" />
          </button>
          <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
            <FaLinkedin className="w-4 h-4" />
          </button>
          <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
            <FaFacebook className="w-4 h-4" />
          </button>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link 
                key={related.id}
                href={`/blog/${related.slug}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-40 bg-gradient-to-br from-blue-100 to-purple-100">
                  {related.imageUrl ? (
                    <Image
                      src={related.imageUrl}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      📰
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {related.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                    <FaCalendarAlt className="w-3 h-3" />
                    {new Date(related.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}