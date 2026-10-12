import "./auto-card.css";
import { useState } from "react";
import GenericModal from "../generic-modal/generic-modal";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

export default function AutoCard({
    title,
    description,
    cover,
    stack = [],
    useIos,
    useAndroid,
    useWeb,
    inDevelopment,
    img_modal = [],
    galleryLayout = 'web',
    link_web,
}) {
    const { t } = useTranslation();
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            {openModal && (
                <GenericModal
                    title={title}
                    description={description}
                    onClose={() => setOpenModal(false)}
                    img_modal={img_modal}
                    galleryLayout={galleryLayout}
                    stack={stack}
                    useWeb={useWeb}
                    useIos={useIos}
                    useAndroid={useAndroid}
                    link_web={link_web}
                />
            )}
            <article className="card">
                <div className="card-cover">
                    <img src={cover} alt="" loading="lazy" />
                    {inDevelopment && <span className="card-status">{t('inDevelopment')}</span>}
                </div>

                <div className="card-body">
                    <h3>
                        <button type="button" className="card-open" onClick={() => setOpenModal(true)}>
                            {title}
                        </button>
                    </h3>

                    <p className="card-description">{description}</p>

                    <ul className="tags">
                        {stack.map((tech) => (
                            <li key={tech} className="tag">{tech}</li>
                        ))}
                    </ul>

                    <div className="card-footer">
                        <span className="card-more">
                            {t('seeMore')} <ArrowRight size={16} weight="bold" />
                        </span>
                        {link_web && (
                            <a
                                href={link_web}
                                target="_blank"
                                rel="noreferrer"
                                className="card-link"
                                aria-label={`${t('visitSite')}: ${title}`}
                            >
                                <ArrowUpRight size={18} weight="bold" />
                            </a>
                        )}
                    </div>
                </div>
            </article>
        </>
    );
}
