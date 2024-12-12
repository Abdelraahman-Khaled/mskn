import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const CardDetails = () => {
    const { id } = useParams(); // Get the dynamic ID from the URL
    const [cardDetails, setCardDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch local JSON data (assuming the file is in the public/data/ folder)
        fetch(`/details.json`) // Adjust the path to where the JSON is located
            .then((response) => response.json())
            .then((data) => {
                // Find the card matching the id from the data
                const card = data.find((card) => card.id === id);
                if (card) {
                    setCardDetails(card);
                } else {
                    // If no card is found, redirect to home or show an error
                    navigate('/');
                }
            })
            .catch((error) => {
                // Log the error properly
                console.error('Error fetching card details:', error);
            });
    }, [id, navigate]);


    if (!cardDetails) {
        return <div>Loading...</div>; // Show loading while the data is being fetched
    }
    return (
        <div className="card-details container mx-auto py-6 px-4">
            <h1 className='text-center text-3xl font-bold my-4 bg-custom-green text-custom-white py-5 rounded'>{cardDetails.city}</h1>
            <div className="card bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                    src={cardDetails.image}
                    alt={cardDetails.city}
                    className="w-full h-96 object-contain my-4"
                />
                <div className="p-6">
                    <h2 className="text-3xl font-bold">الموقع العام للمدينة</h2>
                    <p className="text-lg text-gray-600 mt-4">{cardDetails.description}</p>
                </div>
                <div className='p-6'>
                    <h2 className="text-3xl font-bold">المشاريع المطروحة في المدينة</h2>
                    {/* projects */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {cardDetails.projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative w-72 h-[350px] rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out my-5 mx-3"
                            >
                                {/* Image with scale effect on hover */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto  transition-transform duration-300 transform group-hover:scale-110 object-contain p-6"
                                />

                                {/* Always Visible Title and Description */}
                                <div className="absolute inset-0 flex flex-col justify-end   to-transparent p-6">
                                    <h2 className="text-lg font-semibold ">{project.city}</h2>
                                    <p className="text-sm">{project.location}</p>
                                    <div className='mt-5 z-10'>
                                        <Link
                                            to={`/project/${project.id}`}
                                            className="  bg-custom-green  py-2 px-4 rounded text-white"
                                        >
                                            التفاصيل {">>"}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
