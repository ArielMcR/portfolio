import React from "react";
import "./generic-modal.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import android from '../../assets/android.svg';
import ios from '../../assets/apple.svg';
import arrow from '../../assets/arrow-up.svg';
import site from '../../assets/site.svg';
import close from '../../assets/close.svg';
import { ToastContainer, toast, Bounce } from 'react-toastify';

const GenericModal = ({
    onOpen,
    title,
    description,
    img,
    img_modal,
    onClose,
    useWeb,
    useAndroid,
    link_web = '/'
}) => {
    if (!onOpen) return null;

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: useAndroid && !useWeb ? 3 : 1,
        slidesToScroll: useAndroid && !useWeb ? 3 : 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const getImageStyle = (useAndroid) => {
        return useAndroid && !useWeb
            ? { width: "95%", height: "auto", borderRadius: "10px" }
            : { width: "100%", height: "auto", borderRadius: "10px" };
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <img src={close} alt="" />
                </button>
                {img && <img src={img} alt="Imagem do Modal" />}
                <h2>{title}</h2>
                <p>{description}</p>
                <Slider {...settings}>
                    {img_modal.map((url, index) => (
                        <div key={index}>
                            <img
                                src={url}
                                alt={`Slide ${index + 1}`}
                                style={getImageStyle(useAndroid)}
                            />
                        </div>
                    ))}
                </Slider>
                <div className="union modal-union">
                    {useAndroid && (
                        <>
                            {/* https://play.google.com/store/apps/details?id=br.com.apicesistemas.apicepdv4&hl=pt_BR */}
                            <a href="" onClick={(e) => {
                                e.preventDefault();
                                toast.warn('Aplicativo ainda não disponível', {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "dark",
                                    transition: Bounce,
                                });
                            }}>
                                <div className="union default union-android">
                                    <img src={android} alt="" /> &nbsp;
                                    <span> Ver na playstore</span>
                                    <img src={arrow} alt="" className="arrow" />
                                </div>
                            </a>


                            <a href="" onClick={(e) => {
                                e.preventDefault();
                                toast.warn('Aplicativo ainda não disponível', {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "dark",
                                    transition: Bounce,
                                });
                            }}>
                                <div className="union default union-ios">
                                    <img src={ios} alt="" />
                                    <span> Ver na App Store</span>
                                    <img src={arrow} alt="" className="arrow" />
                                </div>
                            </a>
                        </>
                    )}
                    {useWeb && (
                        <a href={link_web}>
                            <div className="union default union-web">
                                <img src={site} alt="" />
                                <span> Ver o site</span>
                                <img src={arrow} alt="" className="arrow" />
                            </div>
                        </a>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default GenericModal;
