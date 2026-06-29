
//import Image from 'next/image';
import Link from 'next/link';
import { 
  FaArrowLeft, 
  FaHistory, 
  FaBuilding, 
  FaUsers, 
  FaGraduationCap, 
  FaAward,
  FaGlobeAfrica,
  FaBookOpen,
  FaHandsHelping,
  FaChevronRight,
  FaCalendarAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

export const metadata = {
  title: 'About WAPCP FCT Zone | West African Postgraduate College of Pharmacists',
  description: 'Learn about the West African Postgraduate College of Pharmacists (WAPCP) FCT Zone - advancing pharmaceutical education and practice in West Africa.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 overflow-hidden">
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
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <FaGlobeAfrica className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-100">WAPCP</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              West African Postgraduate College of Pharmacists - FCT Zone
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                The West African Postgraduate College of Pharmacists (WAPCP) is a 
                prestigious professional body established to advance pharmaceutical 
                education, training, and practice across the West African sub-region.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                The FCT Zone represents the College's commitment to excellence in the 
                Federal Capital Territory, bringing together distinguished pharmacists 
                dedicated to professional development and healthcare advancement.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">2024</div>
                  <div className="text-sm text-gray-600 mt-1">Year Established</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600">FCT</div>
                  <div className="text-sm text-gray-600 mt-1">Zone Location</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">West Africa</div>
                  <div className="text-sm text-gray-600 mt-1">Regional Reach</div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-600">Excellence</div>
                  <div className="text-sm text-gray-600 mt-1">Professional Standard</div>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">At a Glance</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <FaHistory className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Our Heritage</div>
                    <p className="text-white/80 text-sm">
                      A legacy of pharmaceutical excellence spanning West Africa
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <FaGraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Professional Development</div>
                    <p className="text-white/80 text-sm">
                      Advancing pharmacy practice through continuous education
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <FaBuilding className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">FCT Zone</div>
                    <p className="text-white/80 text-sm">
                      Serving the pharmaceutical community in the Federal Capital Territory
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Focus Areas
            </h2>
            <p className="text-gray-600">
              Key pillars that define our commitment to pharmaceutical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-blue-100 rounded-xl text-blue-600 w-fit mb-4">
                <FaGraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Postgraduate Education
              </h3>
              <p className="text-gray-600">
                Providing advanced training and certification programs for pharmacists 
                to enhance their professional competencies.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-purple-100 rounded-xl text-purple-600 w-fit mb-4">
                <FaBookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Research &amp; Innovation
              </h3>
              <p className="text-gray-600">
                Promoting pharmaceutical research and innovation to advance 
                healthcare delivery and patient outcomes.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-green-100 rounded-xl text-green-600 w-fit mb-4">
                <FaHandsHelping className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Professional Collaboration
              </h3>
              <p className="text-gray-600">
                Fostering partnerships and collaboration among pharmacists across 
                West Africa for collective growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our History
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The West African Postgraduate College of Pharmacists was established 
                  to address the growing need for specialized pharmaceutical education 
                  and professional development in the West African region.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The FCT Zone was created to extend the College's reach to the Federal 
                  Capital Territory, ensuring that pharmacists in the region have access 
                  to world-class postgraduate training and professional networking 
                  opportunities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, the WAPCP FCT Zone stands as a beacon of pharmaceutical 
                  excellence, committed to producing skilled pharmacists who can 
                  meet the evolving healthcare needs of the region.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Milestones</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full" />
                      <div className="w-0.5 h-full bg-blue-200 mt-1" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue-600">2024</div>
                      <div className="text-gray-700">WAPCP FCT Zone Established</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-blue-400 rounded-full" />
                      <div className="w-0.5 h-full bg-blue-200 mt-1" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue-600">2024</div>
                      <div className="text-gray-700">Leadership Team Inaugurated</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-blue-300 rounded-full" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue-600">Present</div>
                      <div className="text-gray-700">Growing Community of Pharmacy Professionals</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Join the WAPCP Community
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Be part of a prestigious network of pharmacy professionals dedicated to 
            advancing pharmaceutical practice in West Africa.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/#team" 
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Meet Our Team
            </Link>
            <Link 
              href="/" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}