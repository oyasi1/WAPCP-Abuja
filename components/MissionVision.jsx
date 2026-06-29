'use client'

import { FaBullseye, FaEye, FaArrowRight } from 'react-icons/fa';
import { missionData } from '@/components/data';

export default function MissionVision() {
  const { mission, vision, values, stats } = missionData;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Mission</span> &amp;{' '}
            <span className="text-purple-600">Vision</span>
          </h2>
          <p className="text-lg text-gray-600">
            Guiding principles that drive our commitment to excellence in pharmaceutical care
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side - Decorative with Stats */}
          <div className="lg:col-span-2 relative">
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Our Purpose</h2>
                <p className="text-white/80 mb-6">
                  Guiding principles that shape every decision we make and every action we take.
                </p>
                
                {/* Stats */}
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3 text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <div>
                        <span className="font-bold text-xl">{stat.number}</span>
                        <span className="ml-2 text-white/80">{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Values Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {values.map((value, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-white/20 rounded-full text-sm text-white/90"
                    >
                      {value.icon} {value.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Mission & Vision */}
          <div className="lg:col-span-3 space-y-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <FaBullseye className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{mission.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{mission.description}</p>
                  
                  {/* Mission Pillars */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {mission.pillars.map((pillar, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm flex items-center gap-1"
                      >
                        <span>{pillar.icon}</span>
                        <span>{pillar.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-xl text-purple-600 group-hover:scale-110 transition-transform duration-300">
                  <FaEye className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{vision.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{vision.description}</p>
                  
                  {/* Vision Goals */}
                  <div className="mt-4 space-y-2">
                    {vision.goals.map((goal, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}