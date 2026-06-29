import Link from 'next/link'
import { FaYoutube, FaPhoneVolume, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { LuMapPin } from 'react-icons/lu';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">WAPCP Abuja</h3>
                <p className="text-sm text-gray-400">Excellence in Pharmacy</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advancing pharmaceutical education and professional development in West Africa since 2010.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/programs/fellowship" className="hover:text-white transition-colors">Fellowship</Link></li>
              <li><Link href="/programs/membership" className="hover:text-white transition-colors">Membership</Link></li>
              <li><Link href="/programs/continuing-education" className="hover:text-white transition-colors">Continuing Education</Link></li>
              <li><Link href="/programs/research" className="hover:text-white transition-colors">Research</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <LuMapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Abuja, Nigeria</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhoneVolume className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-start space-x-3">
                <CiMail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>info@wapcpabuja.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} West African Postgraduate College of Pharmacists Abuja Branch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}