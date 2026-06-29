'use client'

import Image from 'next/image';
import Link from 'next/link';
import { teamMembers } from '@/components/data';

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our WAPCP Abuja Zonal Leadership Team
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Providing Strategic Direction and Administrative Oversight for the Organization.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {teamMembers.map((person) => (
            <li key={person.id}>
              <Link href={`/team/${person.slug}`} className="group flex items-center gap-x-6">
                <div className="relative cursor-pointer">
                  <Image
                    alt={person.name}
                    src={person.imageUrl}
                    width={64}
                    height={64}
                    className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5 transition-transform duration-200 group-hover:scale-105"
                    priority={person.id === 1}
                  />
                  <div className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
                </div>
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}