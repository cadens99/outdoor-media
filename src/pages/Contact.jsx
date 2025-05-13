// src/pages/Contact.jsx
import NavBar from '../components/NavBar';
import SocialLinks from '../components/SocialLinks';

export default function Contact() {
  return (
    <div className="bg-[#0f1b14] text-white min-h-screen pt-16">
      <NavBar />

      <div className="max-w-xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
        <p className="text-center text-gray-400 mb-12">
          Whether you're looking to collaborate, hire for a project, or just say hello — reach out!
        </p>

        <div className="bg-[#1e2b23] p-6 rounded-2xl shadow-lg">
          <p className="mb-4">
            <strong>Email:</strong>{' '}
            <a href="mailto:example@example.com" className="text-green-400 hover:underline">
              example@example.com
            </a>
          </p>
          <p className="mb-4"><strong>Location:</strong> Bozeman, MT</p>
          <p className="mb-4">
            <strong>Instagram:</strong>{' '}
            <a href="https://instagram.com/yourhandle" className="text-green-400 hover:underline">
              @outdoor.reach.media
            </a>
          </p>
        </div>

        <div className="mt-8 text-center">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
