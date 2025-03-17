import { ExternalLink } from 'lucide-react'

function ProfileSection() {
    return (
        <div className="md:col-span-1 flex flex-col items-center space-y-3 bg-gray-900/50 p-4 rounded-md border border-gray-700">
            <div className="text-center mb-2">
                <p className="text-xs text-gray-400">~/profile.jpg</p>
            </div>
            <div className="border-2 border-purple-500/30 rounded-md p-1 w-48 h-48">
                <div className=" rounded-md flex items-center justify-center text-gray-500">
                    <img
                        src="/images/profile.jpg"
                        alt="Profile Picture"
                        className="rounded-md"
                    />
                </div>
            </div>

            <div className="text-center space-y-1 w-full">
                <h3 className="text-purple-400 text-lg font-bold">
                    Atik Mouhtasim Rahi
                </h3>
                <p className="text-green-400 text-sm">
                    CSE Student
                </p>
                <div className="border-t border-gray-700 my-2"></div>
                <div className="text-gray-400 text-xs">
                    Status: <span className="text-green-400">Online</span>
                </div>
                <div className="text-gray-400 text-xs">
                    Location:{" "}
                    <span className="text-yellow-400">Bangladesh</span>
                </div>
                <div className="text-gray-400 text-xs">
                    CV:{" "}
                    <a
                        href="https://flowcv.com/resume/ske29udov5vv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:underline inline-flex items-center"
                    >
                        FlowCV
                        <ExternalLink size={9} className="ml-1" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProfileSection