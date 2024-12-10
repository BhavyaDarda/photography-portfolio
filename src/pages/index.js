import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useScrollAnimation from '../utils/useScrollAnimation';

export default function Home() {
  const galleryRef = useRef();

  useScrollAnimation(galleryRef);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Photography Portfolio</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">My Photography Portfolio</h1>
      <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {['image1.jpg', 'image2.jpg', 'image3.jpg'].map((img) => (
          <motion.div
            key={img}
            className="overflow-hidden rounded-lg shadow-lg transition-transform transform opacity-0 -translate-y-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={`/images/${img}`} alt={img} width={500} height={300} className="object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}