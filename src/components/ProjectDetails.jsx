import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ImageModel from './ImageModel';

const ProjectDetails = () => {

    const { id } = useParams(); // Get the dynamic ID from the URL
    const [ProjectDetails, setProjectDetails] = useState(null);
    const navigate = useNavigate();
    // fetching data
    useEffect(() => {
        // Fetch local JSON data (assuming the file is in the public/data/ folder)
        fetch(`/project.json`) // Adjust the path to where the JSON is located
            .then((response) => response.json())
            .then((data) => {
                // Find the project matching the id from the data
                const project = data.find((project) => project.id === id);
                if (project) {
                    setProjectDetails(project);
                } else {
                    // If no project is found, redirect to home or show an error
                    navigate('/');
                }
            })
            .catch((error) => {
                // Log the error properly
                console.error('Error fetching project details:', error);
            });
    }, [id, navigate]);


    if (!ProjectDetails) {
        return <div>Loading...</div>; // Show loading while the data is being fetched
    }

    return (
        <div className="card-details container mx-auto py-6 px-4">
            <h1 className='text-center text-3xl font-bold my-4 bg-custom-green text-custom-white py-5 rounded'>{ProjectDetails.city}</h1>
            <div className="card bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                    src={ProjectDetails.image}
                    alt={ProjectDetails.city}
                    className="w-full h-96 object-contain my-4"
                />
                <div className="p-6">
                    <h2 className="text-3xl font-bold">وصف الموقع</h2>
                    <p className="text-lg text-gray-600 mt-4"> {ProjectDetails.description} </p>
                    <h2 className="text-3xl font-bold"> حدود المشروع</h2>
                    <ul>
                        <li><span className='font-bold text-xl'>{">"}</span> الحد الشمالي:{ProjectDetails.top}</li>
                        <li><span className='font-bold text-xl'>{">"}</span> الحد الجنوبي:{ProjectDetails.bottom}</li>
                        <li><span className='font-bold text-xl'>{">"}</span> الحد الشرقي:{ProjectDetails.right}</li>
                        <li><span className='font-bold text-xl'>{">"}</span> الحد الغربي:{ProjectDetails.left}</li>
                    </ul>
                    <h2 className="text-3xl font-bold"> مزايا الموقع</h2>
                    <p className="text-lg text-gray-600 mt-4"><span className='font-bold text-xl'>{">"}</span> {ProjectDetails.special} </p>
                    <h2 className="text-3xl font-bold"> مكونات المشروع</h2>
                    <p className="text-lg text-gray-600 mt-4"><span className='font-bold text-xl'>{">"}</span> {ProjectDetails.quantity} </p>
                    <h2 className="text-3xl font-bold"> معرض الصور</h2>

                </div>
                <div className='p-6'>
                    <ImageModel images={ProjectDetails.images} />
                    <div className=' text-center my-5'>
                        <Link className='bg-custom-green py-3 px-6 rounded font-medium text-white'
                            state={{ res: ProjectDetails }} // Pass data using `state`
                            to={'/reservation'}>تقديم طلب حجز جديد </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails