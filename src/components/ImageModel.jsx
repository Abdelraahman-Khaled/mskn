import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageModel = ({ images }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const modalSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        initialSlide: selectedImageIndex,
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isModalOpen]);


    return (
        <div className="image-gallery container mx-auto p-6">

            {/* Slick Slider */}
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={image.id} className="px-2">
                        <div className="relative group cursor-pointer">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="  rounded-lg shadow group-hover:opacity-80"
                                onClick={() => openModal(index)}
                            />
                            <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button
                                    onClick={() => openModal(index)}
                                    className="text-white text-lg font-semibold py-2 px-4 bg-custom-green rounded"
                                >
                                    عرض الصورة
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Image Viewer"
                ariaHideApp={false}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    },
                    content: {
                        padding: 0,
                        background: 'transparent',
                        border: 'none',
                    },
                }}
            >
                <div className="relative top-2/4 transform -translate-y-1/2 w-11/12 sm:w-4/5 lg:w-1/2 max-h-[80vh] bg-white rounded-lg shadow-lg mx-auto p-4 flex flex-col">
                    <button
                        onClick={closeModal}
                        className="absolute z-20 top-2 right-2 text-white text-2xl bg-black bg-opacity-50 px-3 py-1 rounded-full"
                    >
                        &times;
                    </button>
                    <Slider
                        {...{
                            dots: false,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 1,
                            initialSlide: selectedImageIndex,
                        }}
                    >
                        {images.map((image) => (
                            <div key={image.id} className="w-full h-full flex items-center justify-center">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </Modal>
        </div>
    );
};


export default ImageModel;
