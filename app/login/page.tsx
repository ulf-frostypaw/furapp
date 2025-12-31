import { FaTelegram, FaGoogle, FaApple } from "react-icons/fa6";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            {/* Main Container - Combined Image and Form */}
            <div className="w-full max-w-5xl">
                <div className="rounded-2xl overflow-hidden shadow-2xl min-h-[600px] grid grid-cols-1 md:grid-cols-2">
                    {/* Left Side - Image */}
                    <div className="hidden md:block relative bg-cover bg-center" style={{
                        backgroundImage: `url('https://placehold.co/800x800/png')`,
                    }}>
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent"></div>
                        
                        {/* Text Content */}
                        <div className="relative h-full flex flex-col justify-center p-12 text-white">
                            <div className="space-y-6">
                                <h2 className="text-5xl font-bold">Welcome Back</h2>
                                <p className="text-lg text-blue-100 leading-relaxed">
                                    Join thousands of users managing their projects efficiently
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form Card */}
                    <div className="bg-white flex items-center justify-center p-8">
                        <div className="w-full max-w-sm">
                                {/* Header */}
                                <div className="mb-8">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Log In</h1>
                                    <p className="text-sm text-gray-600">
                                        New to Entail?&nbsp;
                                        <a
                                            href="/signup"
                                            className="text-blue-600 hover:text-blue-700 font-semibold transition"
                                        >
                                            Sign up here!
                                        </a>
                                    </p>
                                </div>

                                {/* Form Fields */}
                                <div className="space-y-4 mb-8">
                                {/* Username Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Username
                                    </label>
                                    <input
                                        placeholder="Enter your username"
                                        className="w-full text-gray-900 border border-gray-300 rounded-lg p-3 bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        type="text"
                                        name="username"
                                        id="username"
                                    />
                                </div>

                                {/* Password Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <input
                                        placeholder="Enter your password"
                                        className="w-full text-gray-900 border border-gray-300 rounded-lg p-3 bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        type="password"
                                        name="password"
                                        id="password"
                                    />
                                </div>

                                {/* Remember & Forgot */}
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center text-sm text-gray-700">
                                        <input type="checkbox" className="mr-2 rounded" />
                                        Remember me
                                    </label>
                                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            {/* Primary Button */}
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 mb-6 shadow-md hover:shadow-lg">
                                Sign In
                            </button>

                            {/* Divider */}
                            <div className="flex items-center pb-6 text-gray-400">
                                <div className="flex-1">
                                    <hr className="border-gray-300" />
                                </div>
                                <div className="px-3 text-sm font-medium">or</div>
                                <div className="flex-1">
                                    <hr className="border-gray-300" />
                                </div>
                            </div>

                            {/* Social Login Buttons */}
                            <div className="grid grid-cols-1 gap-3">
                                <button className=" outline-none hover:bg-gray-50 flex items-center justify-center py-2.5 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition duration-200 text-gray-700 font-medium">
                                    <FaTelegram className="text-lg text-blue-600 mr-2" /> Continue with Telegram
                                </button>
                            </div>

                            {/* Terms */}
                            <p className="text-xs text-gray-500 mt-6 text-center">
                                By signing in, you agree to our&nbsp;
                                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                                    Terms of Service
                                </a>
                                &nbsp;and&nbsp;
                                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}