import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./generic-modal.css";
import { toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
import { AppleLogo, ArrowUpRight, Globe, GooglePlayLogo, X } from "@phosphor-icons/react";

const GenericModal = ({
    title,
    description,
    img_modal = [],
    galleryLayout = 'web',
    stack = [],
    onClose,
    useWeb,
    useIos,
    useAndroid,
    link_web,
}) => {
    const { t } = useTranslation();
    const closeRef = useRef(null);
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        const previousFocus = document.activeElement;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();

        const onKeyDown = (e) => {
            if (e.key === 'Escape') onCloseRef.current();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
            previousFocus?.focus?.();
        };
    }, []);

    // Prints de celular são altos: mostramos várias telas lado a lado em vez de uma por vez.
    const isMobileGallery = galleryLayout === 'mobile';
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: isMobileGallery ? 3 : 1,
        slidesToScroll: isMobileGallery ? 3 : 1,
        autoplay: true,
        autoplaySpeed: 3500,
        adaptiveHeight: !isMobileGallery,
        responsive: isMobileGallery
            ? [{ breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } }]
            : undefined,
    };

    const warnUnavailable = () => {
        toast.warn(t('appUnavailable'), { theme: 'dark', position: 'top-right', autoClose: 4000 });
    };

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="modal-header">
                    <h2 id="modal-title">{title}</h2>
                    <button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label={t('close')}>
                        <X size={20} weight="bold" />
                    </button>
                </header>

                {img_modal.length > 0 && (
                    <div className={`modal-gallery ${isMobileGallery ? 'modal-gallery--mobile' : ''}`}>
                        <Slider {...settings}>
                            {img_modal.map((url, index) => (
                                <div key={url}>
                                    <img src={url} alt={`${title} — ${index + 1}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}

                <p className="modal-description">{description}</p>

                {stack.length > 0 && (
                    <ul className="tags">
                        {stack.map((tech) => (
                            <li key={tech} className="tag">{tech}</li>
                        ))}
                    </ul>
                )}

                {(useWeb || useAndroid || useIos) && (
                    <div className="modal-actions">
                        {useWeb && link_web && (
                            <a href={link_web} target="_blank" rel="noreferrer" className="btn btn-primary">
                                <Globe size={18} /> {t('visitSite')} <ArrowUpRight size={16} weight="bold" />
                            </a>
                        )}
                        {useAndroid && (
                            <button type="button" className="btn btn-ghost" onClick={warnUnavailable}>
                                <GooglePlayLogo size={18} /> Play Store
                            </button>
                        )}
                        {useIos && (
                            <button type="button" className="btn btn-ghost" onClick={warnUnavailable}>
                                <AppleLogo size={18} /> App Store
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
};

export default GenericModal;
