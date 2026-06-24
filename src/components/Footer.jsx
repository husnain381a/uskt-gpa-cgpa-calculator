'use client';

import Link from 'next/link';
import { Heart, Calculator, Image } from 'lucide-react';

const quickLinks = [
  { name: 'GPA Calculator', to: '/gpa', description: 'Calculate single semester GPA' },
  { name: 'CGPA Calculator', to: '/cgpa', description: 'Calculate cumulative GPA' },
  { name: 'About Us', to: '/about', description: 'Learn about our team' },
  { name: 'Contact', to: '/contact', description: 'Get in touch with us' },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900/50 via-indigo-900/50 to-blue-800/50 backdrop-blur-xl border-t border-white/20 mt-10">
      <div className="mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-8 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/USKTLogo.webp"
                alt="University of Sialkot Logo"
                className="w-12 h-12 object-contain drop-shadow-lg"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                USKT GPA & CGPA Calculator
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Accurate and user-friendly GPA & CGPA calculator designed
              specifically for University of Sialkot students. Completely free,
              ad-free, and easy to use. No sign-up required, just fast, simple,
              and accurate academic tracking.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-amber-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.to}
                    className="group text-left w-full block"
                  >
                    <div className="text-gray-300 hover:text-amber-300 transition-colors duration-200 group-hover:translate-x-1 transform transition-transform">
                      <div className="font-medium">{link.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-amber-200">
                        {link.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Image className="w-5 h-5 text-amber-400" />
              Features
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                Official USKT Grading System
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                Accurate GPA & CGPA results
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                Fast, free & ad-free
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                Real-time calculations
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                Semester-wise GPA Tracking
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                No Registration or Login Required
              </li>
              
              <li className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                Mobile responsive design
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-200 text-m mb-1">
                Made with <Heart className="w-5 h-5 text-red-400 inline mx-1" />{' '}
                for the dreamers and achievers of the University of Sialkot.
              </p>
              <p className="text-gray-300 text-sm">
                Developed by{' '}
                <span className="text-amber-300 font-semibold">
                  <a
                    href="https://husnainmazhar.site"
                    className="hover:underline"
                  >
                    Husnain
                  </a>{' '}
                  &amp;{' '}
                  <a
                    href="https://aimen-ansari.github.io/portfolio1/"
                    className="hover:underline"
                  >
                    Aimen
                  </a>
                </span>
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>© 2026 USKT GPA & CGPA Calculator</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
