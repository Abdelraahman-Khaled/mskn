import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Order from "./Order";
import PDFDocument from "./PDFDocument";

const Reservation = () => {
    const location = useLocation(); // to get data from link
    const res = location?.state?.res || {}; // Extract data from `state`

    const [formData, setFormData] = useState({
        city: res.location || "",
        project: res.city || "",
        floor: "",
        isSpecialNeeds: false,
        file: null,
        code: "260207030200743788",
        price: "100,500,00"
    });
    const [error, setError] = useState("");
    const [findUser, setFindUser] = useState(true)
    const navigate = useNavigate();

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else if (type === "file") {
            setFormData({ ...formData, file: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Handle form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Validate form data
    //     if (!formData.city || !formData.project || !formData.floor) {
    //         setError("Please fill out all required fields.");
    //         return;
    //     }
    //     setError("");

    //     // Prepare form data to send to backend
    //     const formDataToSend = new FormData();
    //     formDataToSend.append("city", formData.city);
    //     formDataToSend.append("project", formData.project);
    //     formDataToSend.append("floor", formData.floor);
    //     formDataToSend.append("isSpecialNeeds", formData.isSpecialNeeds);
    //     if (formData.file) {
    //         formDataToSend.append("file", formData.file);
    //     }

    //     // Send form data to backend (replace URL with your API endpoint)
    //     fetch("https://example.com/api/reservation", {
    //         method: "POST",
    //         body: formDataToSend,
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             alert("Reservation submitted successfully!");
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error submitting reservation:", error);
    //             alert("An error occurred. Please try again.");
    //         });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save the form data to LocalStorage
        const storedData = { ...formData, file: formData.file?.name || "" };
        localStorage.setItem("reservationData", JSON.stringify(storedData));
        console.log("Data saved to LocalStorage!");
        console.log(storedData);
    };
    if (!findUser) {
        navigate('/');
    }
    // check the user then nav to login if he didnt
    useEffect(() => {
        if (!findUser) {
            navigate('/');
        }
    }, [])

    return (
        <div className="container mx-auto py-6 px-4">

            <h1 className="text-center text-3xl font-bold my-6">تقديم طلب حجز جديد</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4 mb-6">
                {/* City Dropdown */}
                <div>
                    <label className="block font-bold mb-2">
                        المدينة<span className="text-red-500">*</span>
                    </label>
                    <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    >
                        <option value={res.location || " اختر المدينة"}>{res.location || " اختر المدينة"}</option>
                        <option value="السادس من أكتوبر الجديدة">السادس من أكتوبر </option>
                        <option value="القاهرة الجديدة">القاهرة الجديدة</option>
                    </select>
                </div>
                {/* Project Dropdown */}
                <div>
                    <label className="block font-bold mb-2">
                        المشروع<span className="text-red-500">*</span>
                    </label>
                    <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    >
                        <option value={res.city || " اختر المشروع"}>{res.city || " اختر المشروع"} </option>
                        <option value="سكن مصر">سكن مصر</option>
                        <option value="دار مصر">دار مصر</option>
                    </select>
                </div>
                {/* Floor Radio Buttons */}
                <div>
                    <label className="block font-bold mb-2">الطابق<span className="text-red-500">*</span></label>
                    <div className="flex space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="floor"
                                value="الطابق الأرضي"
                                onChange={handleChange}
                                className="mr-2 accent-green-600 "
                                required
                            />
                            الطابق الأرضي
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="floor"
                                value="طابق متكرر"
                                onChange={handleChange}
                                className="mr-2 accent-green-600 "
                            />
                            طابق متكرر
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="floor"
                                value="الطابق الأخير"
                                onChange={handleChange}
                                className="mr-2 accent-green-600 "
                            />
                            الطابق الأخير
                        </label>
                    </div>
                </div>

                {/* Special Needs Checkbox */}
                <div>
                    <label className="block font-bold mb-2">المتقدم بطلب الحجز من ذوي الهمم؟</label>
                    <div className="flex space-x-4 gap-4">
                        <label>
                            <input
                                type="checkbox"
                                name="isSpecialNeeds"
                                onChange={handleChange}
                                className="mr-2 accent-green-600"
                            />
                            نعم
                        </label>
                        {formData.isSpecialNeeds && (<p className="font-bold text-red-500">يرجي رفع صورة بطاقة الخدمات المتكاملة مع المستندات</p>)}
                    </div>
                </div>

                {/* File Upload */}
                <div>
                    <label className="block font-bold mb-2">
                        المستندات<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="file"
                        name="file"
                        onChange={handleChange}
                        accept=".pdf"
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        جميع المستندات في ملف بصيغة PDF لا يتعدى حجمه 2 ميجا
                    </p>
                </div>

                {/* Error Message */}
                {error && <p className="text-red-500">{error}</p>}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-custom-green text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300"
                >
                    تقديم طلب حجز جديد
                </button>
            </form>
            <PDFDownloadLink
                document={<PDFDocument />}
                fileName="registration.pdf"
                className="bg-green-500 cursor-pointer mx-4 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
            >
                تحميل بيانات التسجيل كملف PDF
            </PDFDownloadLink>
            <Order />
        </div>
    );
};

export default Reservation;
