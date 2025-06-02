import React from 'react'

function RightContent() {
    return (
        <div className="md:col-span-2 space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700">
                <div className="flex items-center mb-2">
                    <span className="text-cyan-400 mr-2">$</span>
                    <span className="text-purple-400 mx-2">cat</span>
                    <span className="text-yellow-400">about.txt</span>
                </div>
                <div className="pl-4 text-gray-300 space-y-2 text-sm">
                    <p>
                        I've been fascinated by and using computers for as long as
                        I can remember, which naturally led me to pursue Computer
                        Science at RUET. I love building apps and sites, diving
                        into new technologies, and exploring the depths of AI.
                    </p>
                    <p>
                        As I have a bit more than a year left to graduate, I'm
                        looking for various opportunities where I can put my
                        skills to real use while continuing to learn from
                        experienced professionals.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Education */}
                <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700">
                    <div className="flex items-center mb-2">
                        <span className="text-cyan-400 mr-2">$</span>
                        <span className="text-purple-400 mx-2">cat</span>
                        <span className="text-yellow-400">education</span>
                    </div>
                    <div className="pl-4">
                        <div className="text-blue-400 text-sm font-bold">
                            (B.Sc.) Computer Science & Engineering
                        </div>
                        <div className="text-gray-400 text-xs mt-1">
                            RUET, Bangladesh
                        </div>
                        <div className="text-gray-500 text-xs">
                            Expected graduation: 2026
                        </div>
                    </div>
                </div>

                {/* Experience */}
                <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700">
                    <div className="flex items-center mb-2">
                        <span className="text-cyan-400 mr-2">$</span>
                        <span className="text-purple-400 mx-2">cat</span>
                        <span className="text-yellow-400">experience</span>
                    </div>
                    <div className="pl-4">
                        <div className="text-green-500 font-bold text-sm">
                            App & Web Development
                        </div>
                        <div className="text-gray-400 text-xs mt-1">
                            1+ years experience
                        </div>
                        <div className="text-gray-500 text-xs">
                            Various projects & freelance work
                        </div>
                    </div>
                </div>

                {/* Interests */}
                <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700 md:col-span-2">
                    <div className="flex items-center mb-2">
                        <span className="text-cyan-400 mr-2">$</span>
                        <span className="text-purple-400 mr-2">grep</span>
                        <span className="text-yellow-400">"interests"</span>
                    </div>
                    <div className="pl-4 flex flex-wrap gap-2">
                        {[
                            "AI",
                            "Web Development",
                            "App Development",
                            "Gaming",
                            "Computers",
                            "Research",
                        ].map((interest) => (
                            <span
                                key={interest}
                                className="bg-gray-800 text-pink-400 px-2 py-1 text-xs rounded-md border border-gray-700"
                            >
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightContent