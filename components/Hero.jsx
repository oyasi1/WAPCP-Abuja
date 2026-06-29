import Link from 'next/link'
import { GraduationCap, Users, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-yellow-500 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Excellence in Pharmacy Education
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Advancing Pharmaceutical <br />
              <span className="text-yellow-400">Education in West Africa</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Welcome to the Abuja Branch of the West African Postgraduate College of Pharmacists 
              – your gateway to excellence in pharmaceutical education and professional development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/apply" className="btn-primary bg-yellow-500 text-blue-900 hover:bg-yellow-400">
                Apply Now
              </Link>
              <Link href="/about" className="btn-primary bg-transparent border-2 border-white hover:bg-white hover:text-blue-900">
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <p className="text-3xl font-bold text-yellow-400">15+</p>
                <p className="text-sm text-blue-200">Years of Excellence</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">500+</p>
                <p className="text-sm text-blue-200">Alumni</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">100%</p>
                <p className="text-sm text-blue-200">Professional Success</p>
              </div>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <GraduationCap className="w-8 h-8 text-yellow-400 mb-3" />
                <h3 className="font-semibold">Fellowship Programs</h3>
                <p className="text-sm text-blue-200">Advanced training for pharmacists</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Award className="w-8 h-8 text-yellow-400 mb-3" />
                <h3 className="font-semibold">Certifications</h3>
                <p className="text-sm text-blue-200">Recognized professional credentials</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Users className="w-8 h-8 text-yellow-400 mb-3" />
                <h3 className="font-semibold">Networking</h3>
                <p className="text-sm text-blue-200">Connect with industry leaders</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mb-3">
                  <span className="text-blue-900 font-bold">CE</span>
                </div>
                <h3 className="font-semibold">Continuing Education</h3>
                <p className="text-sm text-blue-200">Stay updated with latest practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}