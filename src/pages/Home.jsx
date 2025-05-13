import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import SocialLinks from '../components/SocialLinks';
import PhotoGallery from '../components/PhotoGallery';
import ShotStories from '../components/ShotStories';
import FieldLoadouts from '../components/FieldLoadouts';
import useScrollToHash from '../hooks/useScrollToHash';


export default function Home() {
    useScrollToHash();
    return (
        <div className="bg-[#0f1b14] text-white">
            {/* Navbar */}
            <NavBar />

            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <section className="py-16 px-4 bg-[#1e2b23]  mx-auto text-center">
                <h2 className="text-3xl font-bold font-serif mb-4">Meet the Lens Behind the Hunt</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    I'm Gabe Robinson — a hunter, outdoorsman, and visual storyteller. With a camera slung next to my rifle,
                    I capture the raw, unfiltered moments that define the backcountry experience. Every photo is a piece
                    of the untamed world — honest, visceral, and unforgettable. Yada yada yada. I’m here to share the stories
                    of the wild, the thrill of the chase, and the beauty of nature through my lens. Whether it's a close-up or a wide shot,
                    I aim to evoke the emotions and experiences that come with being in the great outdoors. you get the idea, you can add whatever text you want here
                </p>
            </section>

            {/* Photo Gallery */}
            <section id="gallery" className="py-16 px-4 bg-[#0d1a13]">
                <PhotoGallery />
            </section>

            {/* Shot Stories */}
            <ShotStories />

            {/* Field Loadout - what we are rocking w now */}
            <FieldLoadouts />

           

            {/* Call-to-Action */}
            <section className="py-16 bg-[#1e2b23] text-center">
                <h2 className="text-3xl font-bold mb-4 font-serif">Like What You See?</h2>
                <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                    I'm available for editorial work, backcountry media projects, and commercial outdoor campaigns.
                </p>
                <a
                    href="/contact"
                    className="inline-block font-serif bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition"
                >
                    Contact Me
                </a>
            </section>

            {/* Footer */}
            <footer className="pb-12 text-center border-t border-[#1a2a20] pt-8">
                <p className="text-gray-400 font-serif">Follow the journey, support the work.</p>
                <div className="mt-4">
                    <SocialLinks />
                </div>
                <p className="mt-6 text-sm text-gray-600 font-serif">
                    &copy; {new Date().getFullYear()} Outdoor Reach Media
                </p>
            </footer>
        </div>
    );
}
