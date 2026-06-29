import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function AboutPreview() {
  const features = [
    'Accredited postgraduate programs',
    'Expert faculty and mentors',
    'State-of-the-art facilities',
    'International recognition',
    'Research opportunities',
    'Professional development'
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-blue-900 font-bold text-xl">W</span>
                    </div>
                    <div>
                      <h3 className="font-bold">West African Postgraduate</h3>
                      <p className="text-sm text-blue-200">College of Pharmacists</p>
                    </div>
                  </div>
                  <p className="text-blue-100 leading-relaxed">
                    Dedicated to advancing pharmaceutical education and practice across West Africa 
                    through excellence in training, research, and professional development.
                  </p>
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="text-sm text-blue-200">Rated Excellent</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-lg -z-10"></div>
            </div>
          </div>

          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-4">
              Excellence in Pharmaceutical <br />Education
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Abuja Branch of WAPCP is committed to producing highly skilled pharmacists who 
              will lead the pharmaceutical industry in West Africa and beyond.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary inline-block">
              Read More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}