import React from 'react'

function TechStack() {
    return (
        <div className="mt-6 bg-gray-900/50 p-4 rounded-md border border-gray-700">
            <div className="flex items-center mb-3">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-purple-400">find</span>
                <span className="text-yellow-400 mx-2">~/comfortable-with</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {[
                    "React Native",
                    "Expo",
                    "React",
                    "Next.js",
                    "Supabase",
                    "Tailwind CSS",
                    "C++",
                    "Latex",
                    "Laravel",
                    "Strapi CMS",
                ].map((tech) => (
                    <div
                        key={tech}
                        className="bg-gray-800 p-2 text-center text-xs rounded-md border border-gray-700 hover:border-blue-500/50 transition-colors flex items-center justify-center"
                    >
                        <span className="text-blue-400">{tech}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack