import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { Link } from 'react-router-dom'
const CardList = () => {
    const { cards, loading, error } = useContext(CardContext); // Use context to access card data

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='container px-4 mx-auto '>
            <h1 className='text-center text-black font-bold text-3xl mt-10 mb-6 custom-font'>المشاريع القائمة حاليا</h1>
            <div className="flex flex-wrap justify-center gap-12 p-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="group relative w-96 h-[450px] rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    >
                        {/* Image with scale effect on hover */}
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />

                        {/* Always Visible Title and Description */}
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-6">
                            <h2 className="text-lg font-semibold text-white">{card.title}</h2>
                            <p className="text-sm text-gray-200">{card.description}</p>
                            <div className='mt-5 z-10'>
                                <Link
                                    to={`/details/${card.id}`}
                                    className="  bg-custom-green text-white py-2 px-4 rounded "
                                >

                                    التفاصيل {">>"}
                                </Link>
                            </div>
                        </div>

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardList;
