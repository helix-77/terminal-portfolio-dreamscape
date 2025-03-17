import React from 'react'

function Education() {
    return (
        <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700 mb-4">
            <div className="flex items-center mb-3">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-yellow-400">education.txt</span>
            </div>

            <div className="pl-4">
                <div className="flex justify-between items-start">
                    <h5 className="font-semibold text-blue-400">B.Sc. Computer Science & Engineering (CSE)</h5>
                    <span className="text-sm text-gray-400">Dec, 2021 - present</span>
                </div>
                <p className="text-gray-400 text-sm">Rajshahi University of Engineering & Technology</p>
            </div>
        </div>
    )
}

export default Education