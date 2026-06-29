import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaEnvelope, FaPhone, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { teamMembers } from '@/components/data';

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

// Make the component async and await params
export default async function TeamMemberPage({ params }) {
  // ✅ CORRECT: Await the params Promise
  const { slug } = await params;
    
  // Find the person with case-insensitive matching
  const person = teamMembers.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!person) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors mb-8 group"
        >
          <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header with Image */}
          <div className="relative h-32 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="absolute -bottom-12 left-8">
              <div className="relative">
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  width={128}
                  height={128}
                  className="rounded-full border-4 border-white shadow-lg bg-white"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-16 pb-8 px-8">
            <div className="border-b border-gray-200 pb-6 mb-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{person.name}</h1>
                  <p className="text-lg text-blue-600 font-semibold mt-1">{person.role}</p>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  )}
                  {person.twitter && (
                    <a
                      href={person.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                {person.email && (
                  <a href={`mailto:${person.email}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <FaEnvelope className="w-4 h-4" />
                    {person.email}
                  </a>
                )}
                {person.phone && (
                  <a href={`tel:${person.phone}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <FaPhone className="w-4 h-4" />
                    {person.phone}
                  </a>
                )}
              </div>
            </div>

            {/* Bio */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">About</h2>
              <p className="text-gray-700 leading-relaxed">{person.bio}</p>
            </div>

            {/* Education */}
            {person.education && person.education.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Education</h2>
                <ul className="space-y-2">
                  {person.education.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Certifications */}
            {person.certifications && person.certifications.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Professional Memberships</h2>
                <ul className="space-y-2">
                  {person.certifications.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements */}
            {person.achievements && person.achievements.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Skills & Expertise</h2>
                <ul className="space-y-2">
                  {person.achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="text-blue-600 font-bold mt-1">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}