// // 'use client';

// // import Image from 'next/image';
// // import { motion } from 'framer-motion';

// // const blogPosts = [
// //   {
// //     id: 1,
// //     title: '3 Things to Know Before Starting an Email List',
// //     image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
// //   },
// //   {
// //     id: 2,
// //     title: 'How to Create Content That Converts',
// //     image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
// //   },
// //   {
// //     id: 3,
// //     title: 'Wild Wonders: Exploring the Hidden Gems of Nature',
// //     image: 'https://images.pexels.com/photos/1181181/pexels-photo-1181181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
// //   },
// // ];

// // const BlogPosts = () => {
// //   return (
// //     <section className="py-16 px-6 md:px-20 bg-white text-center">
// //       {/* Section Title */}
// //       <h2 className="text-4xl font-bold mb-10">Blogs</h2>
      
// //       {/* Blog Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //         {blogPosts.map((post, index) => (
// //           <motion.div
// //             key={post.id}
// //             className="overflow-hidden rounded-lg shadow-lg bg-gray-100 cursor-pointer hover:shadow-2xl transition"
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: index * 0.2 }}
// //             viewport={{ once: true }}
// //           >
// //             <div className="relative h-96">
// //               <Image
// //                 src={post.image}
// //                 alt={post.title}
// //                 layout="fill"
// //                 className="object-cover hover:scale-105 transition-transform duration-500"
// //               />
// //             </div>
// //             <div className="p-5">
// //               <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
// //               <p className="text-gray-600 text-sm underline cursor-pointer">Read the Post</p>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default BlogPosts;


// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const blogPosts = [
//   {
//     id: 1,
//     title: '3 Things to Know Before Starting an Email List',
//     image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     id: 2,
//     title: 'How to Create Content That Converts',
//     image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     id: 3,
//     title: 'Wild Wonders: Exploring the Hidden Gems of Nature',
//     image: 'https://images.pexels.com/photos/1181181/pexels-photo-1181181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
// ];

// const BlogPosts = () => {
//   return (
//     <section className="py-16 px-6 md:px-20 bg-white text-center">
//       {/* Section Title */}
//       <motion.h2
//         className="text-4xl font-bold mb-10"
//         initial={{ opacity: 0, scale: 0.5 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.5 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: false, amount: 0.3 }}
//       >
//         Blogs
//       </motion.h2>

//       {/* Blog Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {blogPosts.map((post, index) => {
//           // Define animations based on index
//           const variants = {
//             hidden: index === 0 ? { x: -100, opacity: 0 } : index === 2 ? { x: 100, opacity: 0 } : { scale: 0.5, opacity: 0 },
//             visible: index === 0 ? { x: 0, opacity: 1 } : index === 2 ? { x: 0, opacity: 1 } : { scale: 1, opacity: 1 },
//             exit: index === 0 ? { x: -100, opacity: 0 } : index === 2 ? { x: 100, opacity: 0 } : { scale: 0.5, opacity: 0 },
//           };

//           return (
//             <motion.div
//               key={post.id}
//               className="overflow-hidden rounded-lg shadow-lg bg-gray-100 cursor-pointer hover:shadow-2xl transition"
//               initial="hidden"
//               whileInView="visible"
//               exit="exit"
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: false, amount: 0.3 }}
//               variants={variants}
//             >
//               <div className="relative h-96">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   layout="fill"
//                   className="object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-5">
//                 <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//                 <p className="text-gray-600 text-sm underline cursor-pointer">Read the Post</p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default BlogPosts;


'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: '3 Things to Know Before Starting an Email List',
    image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'How to Create Content That Converts',
    image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Wild Wonders: Exploring the Hidden Gems of Nature',
    image: 'https://images.pexels.com/photos/1181181/pexels-photo-1181181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const BlogPosts = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Blogs
      </motion.h2>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => {
          // Define animations and delays
          const variants = {
            hidden:
              index === 0
                ? { x: -100, opacity: 0 } // Left card slides in from left
                : index === 2
                ? { x: 100, opacity: 0 } // Right card slides in from right
                : { scale: 0.5, opacity: 0 }, // Center card pops in

            visible:
              index === 0
                ? { x: 0, opacity: 1 }
                : index === 2
                ? { x: 0, opacity: 1 }
                : { scale: 1, opacity: 1 },

            exit:
              index === 0
                ? { x: -100, opacity: 0 }
                : index === 2
                ? { x: 100, opacity: 0 }
                : { scale: 0.5, opacity: 0 },
          };

          // Delays: left (0.3s), center (0.5s), right (0.7s)
          const delays = [0.3, 0.5, 0.7];

          return (
            <motion.div
              key={post.id}
              className="overflow-hidden rounded-lg shadow-lg bg-gray-100 cursor-pointer hover:shadow-2xl transition"
              initial="hidden"
              whileInView="visible"
              exit="exit"
              transition={{ duration: 0.6, delay: delays[index] }}
              viewport={{ once: false, amount: 0.3 }}
              variants={variants}
            >
              <div className="relative h-96">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm underline cursor-pointer">Read the Post</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogPosts;
