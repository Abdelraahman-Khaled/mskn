import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Order = () => {
    const [isDisabled, setIsDisabled] = useState(false);

    // email from db
    const registrationData = JSON.parse(localStorage.getItem("registrationData")) || {};

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleClick = () => {
        setIsDisabled(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedFile) {
            toast.error("Upload File First")
            setIsDisabled(false);
            return;
        }
        const formData = new FormData();
        formData.append('email', registrationData.email);
        formData.append('file', selectedFile); // Append the file

        try {
            const response = await axios.post('http://localhost:5000/send-email', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setIsDisabled(false);
            toast.success(response.data.message)

            setSelectedFile(null);

        } catch (error) {
            toast.error("Error sending email")

        }
    };
    return (
        <div className="App">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} /><br /> {/* Single file input */}
                <button onClick={handleClick} className={`bg-custom-green px-5 py-2 my-3 rounded text-white ${isDisabled && "opacity-90"}`} type="submit">{!isDisabled ? "Send Email" : "Loading..."}</button>
            </form>
        </div>)
}

export default Order