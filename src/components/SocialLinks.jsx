import { FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 text-2xl text-white">
      <a href="https://instagram.com/outdoor.reach.medio" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
        <FaInstagram />
      </a>
      <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
        <FaYoutube />
      </a>
      <a href="mailto:outdoorreachmedia@gmail.com" className="hover:text-green-400">
        <FaEnvelope />
      </a>
    </div>
  );
}