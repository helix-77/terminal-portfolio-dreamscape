import React from "react";

function ResumeSkills() {
    return (
        <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700">
            <div className="flex items-center mb-3">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-yellow-400 mx-2">~/technical-skills</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                <div className="bg-gray-800/60 p-3 rounded-md border border-gray-700">
                    <h5 className="font-semibold mb-2 text-green-400">Frontend</h5>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "React Native",
                            "React",
                            "TypeScript",
                            "Next.js",
                            "Tailwind CSS",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="bg-gray-900 text-pink-400 px-2 py-1 text-xs rounded-md border border-gray-700"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-800/60 p-3 rounded-md border border-gray-700">
                    <h5 className="font-semibold mb-2 text-green-400">Backend</h5>
                    <div className="flex flex-wrap gap-2">
                        {["Supabase", "Laravel", "Firebase", "Node.js"].map((skill) => (
                            <span
                                key={skill}
                                className="bg-gray-900 text-pink-400 px-2 py-1 text-xs rounded-md border border-gray-700"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-800/60 p-3 rounded-md border border-gray-700">
                    <h5 className="font-semibold mb-2 text-green-400">SE</h5>
                    <div className="flex flex-wrap gap-2">
                        {["Cpp", "Python", "Tkinter", "Numpy", "Matplotlib"].map(
                            (skill) => (
                                <span
                                    key={skill}
                                    className="bg-gray-900 text-pink-400 px-2 py-1 text-xs rounded-md border border-gray-700"
                                >
                                    {skill}
                                </span>
                            )
                        )}
                    </div>
                </div>

                <div className="bg-gray-800/60 p-3 rounded-md border border-gray-700">
                    <h5 className="font-semibold mb-2 text-green-400">Tools</h5>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Linux",
                            "Git",
                            "Latex",
                            "MS Office",
                            "GPTs",
                            "Canva",
                            "Notion",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="bg-gray-900 text-pink-400 px-2 py-1 text-xs rounded-md border border-gray-700"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumeSkills;
