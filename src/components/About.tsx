import { motion } from "motion/react";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Profile Image */}
        <motion.div
          className="md:col-span-1 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden border-2 border-neon-blue/50 shadow-lg shadow-neon-blue/20">
            <div className="absolute inset-0 z-10"></div>
            <img
              src="/public/images/profile.jpg"
              alt="Profile Picture"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div className="md:col-span-2" variants={itemVariants}>
          <h2 className="text-3xl font-display text-neon-pink mb-4 animate-text-glow">
            Hello, I'm{" "}
            <span className="text-neon-blue">Atik Mouhtasim Rahi</span>
          </h2>

          <p className="text-gray-300 mb-4">
            I've been fascinated by and using computers for as long as I can
            remember, which naturally led me to pursue Computer Science at RUET.
            I love building apps and sites, diving into new technologies, and
            exploring the depths of AI. I enjoy working on
            new projects or an emerging tech trend, I’m always
            open to take on challenges, adapt, and push my limits.
          </p>

          <p className="text-gray-300 mb-4">

            As I have a bit more than a year left to graduate, I’m looking for various
            opportunities where I can put my skills to real use while
            continuing to learn from experienced professionals.
          </p>

          {/* education */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-neon-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-neon-blue font-mono text-sm">EDUCATION</h3>
              <p className="text-white">
                B.S. in Computer Science, RUET, Bangladesh
              </p>
            </div>
          </div>

          {/* experience */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-neon-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-neon-green font-mono text-sm">
                  EXPERIENCE
                </h3>
                <p className="text-white">1+ years in app, web development</p>
              </div>
            </div>


            {/* Interests */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-neon-pink/20 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-neon-pink"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-neon-pink font-mono text-sm">INTERESTS</h3>
                <p className="text-white">
                  AI, Web Development, App Development, Gaming, Computers
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Section */}
      <motion.div
        className="mt-12 bg-terminal-gray/50 p-6 rounded-lg border border-gray-700"
        variants={itemVariants}
      >
        <h3 className="text-xl font-display text-neon-blue mb-4">
          Comfortable with
          {/* Primary Tech Stack */}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {["React Native", "Expo", "React", "Next.js", "Supabase", "Tailwind CSS"].map(
            (tech) => (
              <div
                key={tech}
                className="bg-terminal-black/50 px-4 py-3 rounded-md text-center border border-gray-700 hover:border-neon-blue/50 transition-colors"
              >
                <span className="text-white font-mono text-sm">{tech}</span>
              </div>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
