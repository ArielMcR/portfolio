import "./auto-card.css";
import whiteCheck from "../../assets/white-check-solid.svg";
import check from "../../assets/check-solid.svg";
import { useState } from "react";
import GenericModal from "../generic-modal/generic-modal";

export default function AutoCard({
    title,
    description,
    img,
    alt,
    link,
    useReact,
    useReactNative,
    useNode,
    useIos,
    useAndroid,
    useWeb,
    useMysql,
    inDevelopment,
    img_modal = [],
    link_web = '/',
}) {
    const [openModal, setOpenModal] = useState(false);
    const truncateDescription = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <>
            {openModal && (
                <GenericModal
                    title={title}
                    description={description}
                    img={img}
                    onClose={() => setOpenModal(false)}
                    onOpen={() => openModal}
                    img_modal={img_modal}
                    useWeb={useWeb}
                    useAndroid={useAndroid}
                    link_web={link_web}
                />
            )}
            <div className="card" onClick={() => setOpenModal(true)}>
                <div className="header-card ">
                    <img src={img} alt={alt || "Logo do aplicativo"} className="logo" />
                    <h2>{title}</h2>
                </div>
                <div className="content">
                    <p>{truncateDescription(description, 390)}</p>
                </div>
                <div className="tags">
                    {useReact && (
                        <div className="tag react">
                            <img src={whiteCheck} alt="check" />
                            <span>React</span>
                        </div>
                    )}
                    {useReactNative && (
                        <div className="tag react">
                            <img src={whiteCheck} alt="check" />
                            <span>React Native</span>
                        </div>
                    )}
                    {useNode && (
                        <div className="tag node">
                            <img src={whiteCheck} alt="check" />
                            <span>Node</span>
                        </div>
                    )}
                    {useIos && (
                        <div className="tag ios">
                            <img src={check} alt="check" />
                            <span>iOS</span>
                        </div>
                    )}
                    {useAndroid && (
                        <div className="tag android">
                            <img src={whiteCheck} alt="check" />
                            <span>Android</span>
                        </div>
                    )}
                    {useWeb && (
                        <div className="tag ios">
                            <img src={check} alt="check" />
                            <span >Web</span>
                        </div>
                    )}
                    {useMysql && (
                        <div className="tag mysql">
                            <img src={whiteCheck} alt="check" />
                            <span>MySQL</span>
                        </div>
                    )}
                    {inDevelopment && (
                        <div className="tag in-development">
                            <img src={whiteCheck} alt="check" />
                            <span>Em desenvolvimento</span>
                        </div>
                    )}
                </div>

            </div>
        </>
    );
}
