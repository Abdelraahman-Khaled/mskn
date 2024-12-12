import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        nationalId: "",
        governorate: "",
        phone: "",
        address: "",
        email: "",
        confirmEmail: "",
        maritalStatus: "",
        password: "",
        confirmPassword: "",
        idCardFile: null,
    });


    const governorates = [
        "القاهرة",
        "الجيزة",
        "الإسكندرية",
        "أسوان",
        "الأقصر",
        "السويس",
        // Add all governorates here...
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "idCardFile") {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save the form data to LocalStorage
        const storedData = { ...formData, idCardFile: formData.idCardFile?.name || "" };
        localStorage.setItem("registrationData", JSON.stringify(storedData));
        console.log("Data saved to LocalStorage!");
        navigate('/')
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-green-200">
            <div className="bg-white p-10 m-10 rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-center text-3xl font-bold text-green-600 mb-6">
                    تسجيل مستخدم
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            الاسم الرباعي طبقا للرقم القومي *
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="أدخل الاسم الرباعي"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    {/* National ID */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            الرقم القومي *
                        </label>
                        <input
                            type="text"
                            name="nationalId"
                            value={formData.nationalId}
                            onChange={handleChange}
                            placeholder="أدخل الرقم القومي"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    {/* Governorate */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            محافظة محل الإقامة *
                        </label>
                        <select
                            name="governorate"
                            value={formData.governorate}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            <option value="">اختر المحافظة</option>
                            {governorates.map((gov, index) => (
                                <option key={index} value={gov}>
                                    {gov}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            رقم الهاتف المحمول *
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="أدخل رقم الهاتف"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            عنوان محل الإقامة الحالي (المراسلات الرسمية) *
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="أدخل العنوان"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            البريد الإلكتروني *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="أدخل البريد الإلكتروني"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    {/* Confirm Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            تأكيد البريد الإلكتروني *
                        </label>
                        <input
                            type="email"
                            name="confirmEmail"
                            value={formData.confirmEmail}
                            onChange={handleChange}
                            placeholder="أعد إدخال البريد الإلكتروني"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    {/* Marital Status */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            الحالة الاجتماعية *
                        </label>
                        <select
                            name="maritalStatus"
                            value={formData.maritalStatus}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        >
                            <option value="" disabled>
                                اختر حالتك الاجتماعية
                            </option>
                            <option value="single">أعزب</option>
                            <option value="married">متزوج</option>
                            <option value="divorced">مطلق</option>
                            <option value="widowed">أرمل</option>
                        </select>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            كلمة المرور (لا تقل عن 8 أحرف أو أرقام) *
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="أدخل كلمة المرور"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            تأكيد كلمة المرور *
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="أعد إدخال كلمة المرور"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    {/* ID Card Upload */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            يجب ان تكون صيغة الملف (pdf,jpg,jpeg) صورة البطاقة الشخصية (وجه وظهر على ورقة واحدة) *
                        </label>
                        <input
                            type="file"
                            name="idCardFile"
                            onChange={handleChange}
                            accept=".pdf, .jpg, .jpeg"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 font-semibold rounded-md hover:bg-green-700 transition duration-300"
                    >
                        إنشاء حساب
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registration;
