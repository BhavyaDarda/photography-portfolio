import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useScrollAnimation from '../../utils/useScrollAnimation';

export default function Home() {
  const galleryRef = useRef();

  useScrollAnimation(galleryRef);

  const images = [
    { src: '/images/image1.jpg', alt: 'Sunset over the mountains' },
    { src: '/images/image2.jpg', alt: 'Forest pathway in autumn' },
    { src: '/images/image3.jpg', alt: 'City skyline at night' },
    { src: '/images/image4.jpg', alt: 'Desert dunes under the stars' },
    { src: '/images/image5.jpg', alt: 'Ocean waves crashing on rocks' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>My Photography Portfolio</title>
        <meta name="description" content="Explore a curated collection of my photography, capturing moments from around the world." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="text-center py-8">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">My Photography Portfolio</h1>
        <p className="text-lg text-gray-600">Capturing moments, one frame at a time.</p>
      </header>
      <main className="container mx-auto px-4">
        <section ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105 bg-white"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                layout="responsive"
                width={600}
                height={400}
                className="object-cover"
              />
            </motion.div>
          ))}
        </section>
      </main>
      <footer className="w-full text-center py-6 mt-8 bg-gray-800 text-gray-100">
        <p>&copy; {new Date().getFullYear()} My Photography Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
