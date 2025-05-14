// src/pages/Contact.jsx
import NavBar from '../components/NavBar';
import SocialLinks from '../components/SocialLinks';
import { Mail, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[#0f1b14] text-white min-h-screen pt-16">
      <NavBar />

      <div className="max-w-xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6 font-serif">Get in Touch</h1>
        <p className="text-center text-gray-400 mb-12">
          Whether you're looking to collaborate, hire for a project, or just say hello — reach out!
        </p>

        {/* Contact Info Box */}
        <div className="bg-[#1e2b23] p-6 rounded-2xl shadow-lg space-y-4 text-sm md:text-base">
          <div className="flex items-start gap-3">
            <Mail className="text-green-400 mt-1" size={20} />
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:outdoormedia@gmail.com" className="text-green-400 hover:underline">
                outdoormedia@gmail.com
              </a>
            </p>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="text-green-400 mt-1" size={20} />
            <p>
              <strong>Location:</strong> Bozeman, MT | USA
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Instagram className="text-green-400 mt-1" size={20} />
            <p>
              <strong>Instagram:</strong>{' '}
              <a href="https://instagram.com/yourhandle" className="text-green-400 hover:underline">
                @outdoor.reach.media
              </a>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-4">
            I read every message. Don't be shy — reach out.
          </p>
          <SocialLinks />
        </div>

        {/* Optional CTA or Quote */}
        <div className="mt-12 text-center text-sm italic text-gray-500">
          “Don't shoot yourself in the foot. It hurts.”
        </div>
      </div>
    </div>
  );
}
