import React from 'react'

function Education() {
    return (
        <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700 mb-4">
            <div className="flex items-center mb-3">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-yellow-400">education.txt</span>
            </div>

            <div className="pl-4">
                <div>

                    <div className="flex justify-between items-start">
                        <h5 className="font-semibold text-blue-400">B.Sc. Computer Science & Engineering (CSE)</h5>
                        <span className="text-sm text-gray-400">Dec, 2021 - present</span>
                    </div>
                    <p className="text-gray-400 text-sm">Rajshahi University of Engineering & Technology</p>
                    <p className="text-green-500 mt-1 text-xs"> CGPA 3.58/4.0, SGPA 3.81/4.00</p>
                </div>
                <div>
                    <div className="flex mt-4 justify-between items-start">
                        <h5 className="font-semibold text-blue-400">HSC(science)</h5>
                        <span className="text-sm text-gray-400">2018 - 2020</span>
                    </div>
                    <p className="text-gray-400 text-sm">Notre Dame College, Dhaka</p>
                    <p className="text-green-500 mt-1 text-xs"> GPA 5.00/5.00</p>

                </div>
            </div>
        </div>
    )
}

export default Education