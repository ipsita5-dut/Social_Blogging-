// // 'use client';

// // import { useState, useEffect } from 'react';
// // import Image from 'next/image';
// // import { motion } from 'framer-motion';

// // const images = [
// //   'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
// //   'https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/09/Blogging-in-Digital-Marketing.jpg',
// //   'https://media.istockphoto.com/id/1477183258/photo/woman-holding-ai-icons-with-laptop.jpg?s=1024x1024&w=is&k=20&c=k3DlRGGOL93m-81KFowGBcW2LzYYEDtBU7-MaH6s6ls=',
// // ];

// // const BlogSection = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-20 bg-gray-50">
// //       {/* Image Slider */}
// //       <div className="w-full md:w-1/2 flex justify-center items-center relative h-72 md:h-96">
// //         {images.map((src, index) => (
// //           <motion.div
// //             key={index}
// //             className={`absolute w-full h-full transition-opacity duration-1000 ${
// //               index === currentIndex ? 'opacity-100' : 'opacity-0'
// //             }`}
// //           >
// //             <Image src={src} alt="Blogging" fill className="rounded-lg object-cover" />
// //           </motion.div>
// //         ))}
// //       </div>
      
// //       {/* Blog Info */}
// //       <div className="w-full md:w-1/2 text-gray-800 text-center md:text-left mt-10 md:pl-10">
// //         <h2 className="text-3xl font-bold mb-4">Why Start Blogging?</h2>
// //         <p className="text-lg text-gray-600">
// //           Blogging is a powerful way to share your thoughts, knowledge, and experiences with the world.
// //           It helps you establish authority, build connections, and even monetize your content.
// //           Whether you're writing about personal experiences or professional insights, blogging can make a difference!
// //         </p>
// //       </div>
// //     </section>
// //   );
// // };

// // export default BlogSection;


// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { motion, useInView } from 'framer-motion';

// const images = [
//   'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   'https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/09/Blogging-in-Digital-Marketing.jpg',
//   'https://media.istockphoto.com/id/1477183258/photo/woman-holding-ai-icons-with-laptop.jpg?s=1024x1024&w=is&k=20&c=k3DlRGGOL93m-81KFowGBcW2LzYYEDtBU7-MaH6s6ls=',
// ];

// const BlogSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { triggerOnce: false, margin: '-100px 0px' });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       ref={ref}
//       className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-20 bg-gray-50 overflow-hidden"
//     >
//       {/* Image Slider */}
//       <motion.div
//         className="w-full md:w-1/2 flex justify-center items-center relative h-72 md:h-96"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//       >
//         {images.map((src, index) => (
//           <motion.div
//             key={index}
//             className={`absolute w-full h-full transition-opacity duration-1000 ${
//               index === currentIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <Image src={src} alt="Blogging" fill className="rounded-lg object-cover shadow-lg" />
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Blog Info */}
//       <motion.div
//         className="w-full md:w-1/2 text-gray-800 text-center md:text-left mt-10 md:pl-10"
//         initial={{ opacity: 0, x: 50 }}
//         animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//       >
//         <h2 className="text-3xl font-bold mb-4">Why Start Blogging?</h2>
//         <p className="text-lg text-gray-600">
//           Blogging is a powerful way to share your thoughts, knowledge, and experiences with the world.
//           It helps you establish authority, build connections, and even monetize your content.
//           Whether you're writing about personal experiences or professional insights, blogging can make a difference!
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default BlogSection;


'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const images = [
  'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/09/Blogging-in-Digital-Marketing.jpg',
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px 0px' });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-20 bg-gray-50 overflow-hidden"
    >
      {/* Image Slider (Appears First) */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center relative h-72 md:h-96"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image src={src} alt="Blogging" fill className="rounded-lg object-cover shadow-lg" />
          </motion.div>
        ))}
      </motion.div>

      {/* Blog Info (Delayed Appearance) */}
      <motion.div
        className="w-full md:w-1/2 text-gray-800 text-center md:text-left mt-10 md:pl-10"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }} // 300ms delay
      >
        <h2 className="text-3xl font-bold mb-4">Why Start Blogging?</h2>
        <p className="text-lg text-gray-600">
          Blogging is a powerful way to share your thoughts, knowledge, and experiences with the world.
          It helps you establish authority, build connections, and even monetize your content.
          Whether you're writing about personal experiences or professional insights, blogging can make a difference!
        </p>
      </motion.div>
    </section>
  );
};

export default BlogSection;
