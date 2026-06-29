import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

export default function News() {
  const news = [
    {
      title: '2024 Fellowship Admissions Now Open',
      excerpt: 'Applications are now being accepted for the 2024 Fellowship programs. Apply before the deadline.',
      date: 'January 15, 2024',
      category: 'Admissions',
      link: '/news/fellowship-2024'
    },
    {
      title: 'Annual Pharmacy Conference 2024',
      excerpt: 'Join us for the largest pharmaceutical conference in West Africa featuring industry leaders.',
      date: 'February 20, 2024',
      category: 'Events',
      link: '/news/conference-2024'
    },
    {
      title: 'Research Excellence Award Winners',
      excerpt: 'Congratulations to our outstanding researchers who received the prestigious excellence award.',
      date: 'March 5, 2024',
      category: 'Achievements',
      link: '/news/research-awards'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider text-center block">
          Latest News
        </span>
        <h2 className="section-title">News & Updates</h2>
        <p className="section-subtitle">
          Stay informed about the latest developments, events, and achievements at the 
          West African Postgraduate College of Pharmacists Abuja Branch.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                  <Link href={item.link}>{item.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.excerpt}</p>
                <Link 
                  href={item.link} 
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/news" className="btn-primary inline-block">
            View All News
          </Link>
        </div>
      </div>
    </section>
  )
}