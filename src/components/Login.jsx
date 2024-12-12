import React, { useState } from "react";
import { logo } from '../assets/assets';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-green-200">
            {/* Card Container */}
            <div className="bg-white mx-3 p-6 sm:p-10 rounded-xl shadow-2xl w-full max-w-lg lg:max-w-2xl">
                <div className="mb-8">
                    <img className='w-14 h-14  bg-custom-green' src={logo} alt="Real-State-logo" />
                </div>
                <form className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2 text-lg">
                            البريد الإلكتروني
                        </label>
                        <input
                            type="email"
                            placeholder="أدخل بريدك الإلكتروني"
                            className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required

                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2 text-lg">
                            كلمة المرور
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="أدخل كلمة المرور"
                            className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    {/* Show Password */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="show-password"
                            className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-400 ml-3 accent-green-600  "
                            onChange={(e) => setShowPassword(e.target.checked)}
                        />
                        <label htmlFor="show-password" className="text-gray-700 text-lg ">
                            إظهار كلمة المرور
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 text-xl font-semibold rounded-md hover:bg-green-700 transition duration-300"

                    >
                        تسجيل الدخول
                    </button>
                </form>

                {/* Links */}
                <div className="text-center text-base text-gray-600 mt-6">
                    <a
                        href="#"
                        className="text-green-600 hover:underline transition duration-300"
                    >
                        هل نسيت كلمة السر؟
                    </a>
                </div>
                <div className="text-center text-base text-gray-600 mt-2">
                    ليس لديك حساب {"/  "}
                    <a
                        href="/register"
                        className="text-green-600 hover:underline transition duration-300"
                    >
                        إنشاء حساب جديد
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
