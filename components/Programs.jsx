import Link from 'next/link'
import { BookOpen, Users, Briefcase, Microscope } from 'lucide-react'

export default function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Fellowship Programs',
      description: 'Advanced training for experienced pharmacists seeking specialization',
      duration: '2-3 years',
      link: '/programs/fellowship'
    },
    {
      icon: Users,
      title: 'Membership Programs',
      description: 'Professional development for practicing pharmacists',
      duration: '1-2 years',
      link: '/programs/membership'
    },
    {
      icon: Briefcase,
      title: 'Continuing Education',
      description: 'Stay current with latest pharmaceutical practices and research',
      duration: 'Flexible',
      link: '/programs/continuing-education'
    },
    {
      icon: Microscope,
      title: 'Research Programs',
      description: 'Cutting-edge research opportunities in pharmaceutical sciences',
      duration: '2-4 years',
      link: '/programs/research'
    }
  ]

  return (
    <section className="py-20">
      <div className="container">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider text-center block">
          Our Programs
        </span>
        <h2 className="section-title">Academic Programs & Training</h2>
        <p className="section-subtitle">
          Discover our comprehensive range of postgraduate programs designed to elevate your 
          pharmaceutical career and professional expertise.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{program.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {program.duration}
                  </span>
                  <Link 
                    href={program.link} 
                    className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/programs" className="btn-secondary">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}