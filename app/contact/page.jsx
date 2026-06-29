// app/contact/page.jsx
import Link from 'next/link';
import { 
  FaArrowLeft, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane
} from 'react-icons/fa';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us | WAPCP FCT Zone',
  description: 'Get in touch with the West African Postgraduate College of Pharmacists, FCT Zone. We\'d love to hear from you.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
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
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <FaPaperPlane className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Us</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Have questions, suggestions, or want to get involved? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Address */}
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Visit Us</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  WAPCP FCT Zone Office<br />
                  Federal Capital Territory<br />
                  Abuja, Nigeria
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-green-100 rounded-xl text-green-600">
                    <FaPhone className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  <a href="tel:+2348034567890" className="hover:text-blue-600 transition-colors">
                    +234 803 456 7890
                  </a>
                </p>
                <p className="text-gray-600 text-sm">
                  <a href="tel:+2348034567891" className="hover:text-blue-600 transition-colors">
                    +234 803 456 7891
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  <a href="mailto:info@wapcpfct.org" className="hover:text-blue-600 transition-colors">
                    info@wapcpfct.org
                  </a>
                </p>
                <p className="text-gray-600 text-sm">
                  <a href="mailto:contact@wapcpfct.org" className="hover:text-blue-600 transition-colors">
                    contact@wapcpfct.org
                  </a>
                </p>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-yellow-100 rounded-xl text-yellow-600">
                    <FaClock className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 5:00 PM</p>
                  <p><span className="font-medium">Saturday:</span> 10:00 AM - 2:00 PM</p>
                  <p><span className="font-medium">Sunday:</span> Closed</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill in the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Find Us on the Map
          </h2>
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.982288579723!2d7.4962143!3d9.0716748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b0c9f5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="WAPCP FCT Zone Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How can I join WAPCP FCT Zone?',
                a: 'You can join by contacting our membership department through the form above or emailing us at membership@wapcpfct.org.'
              },
              {
                q: 'When are the next events?',
                a: 'Check our events calendar on the homepage or follow us on social media for the latest updates on upcoming events.'
              },
              {
                q: 'How can I partner with WAPCP FCT Zone?',
                a: 'We welcome partnerships! Please reach out to our collaboration team through the contact form and we\'ll get back to you.'
              },
              {
                q: 'Where are you located?',
                a: 'We are located in the Federal Capital Territory, Abuja, Nigeria. Visit us during our office hours.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}