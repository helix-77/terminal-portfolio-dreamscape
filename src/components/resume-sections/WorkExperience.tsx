import React from 'react'

function WorkExperience() {
    return (
        <div className="bg-gray-900/50 p-4 rounded-md border border-gray-700 mb-4">
            <div className="flex items-center mb-3">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-yellow-400">work & experiences.txt</span>
            </div>

            <div className="pl-4 space-y-4">
                <div>
                    <div className="flex justify-between items-start">
                        <h5 className="font-semibold text-green-400">Industrial Trainee</h5>
                        <span className="text-sm text-gray-400">March, 2025</span>
                    </div>
                    <p className="text-purple-400 mb-1 text-sm">TEXLAB IT</p>
                    <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Learned industry best practices, team collaboration, and agile workflows. </li>
                        <li>• Gained hands-on experience in a professional software development environment</li>
                        <li>• Developed a strong foundation in professionalism and workplace ethics before graduation.</li>
                        <li>• Learned collaboration, issue tracking, and async communication using GitHub, Slack, etc.</li>
                    </ul>
                </div>

                <div>
                    <div className="flex justify-between items-start">
                        <h5 className="font-semibold text-green-400">Cross-Platform App Developer</h5>
                        <span className="text-sm text-gray-400">2024 - Present</span>
                    </div>
                    <p className="text-gray-400 mb-1 text-sm">Independent</p>
                    <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Developing a React Native mobile app to streamline academic processes for students and teachers.</li>
                        <li>• Integrated Supabase for authentication, real-time database, and cloud storage.</li>
                        <li>• Built class management, attendance tracking, and messaging features.</li>
                        <li>• Future enhancements include Google Classroom integration and gamification.</li>
                    </ul>
                </div>

                <div>
                    <div className="flex justify-between items-start">
                        <span className="font-semibold text-gray-400">Other miscelonus works </span>
                        <span className="text-sm text-gray-400">2023 - Present</span>
                    </div>
                    <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Built a Population Prediction Model using Newton’s Interpolation and curve fitting on historical data.</li>
                        <li>• Created a Utility Software using Python & Tkinter with multiple productivity tools.</li>
                        <li>• Built class management, attendance tracking, and messaging features.</li>
                        <li>• Developed various web apps, including a food delivery website and a portfolio site.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience