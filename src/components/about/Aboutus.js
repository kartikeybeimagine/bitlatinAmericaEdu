import React from 'react'
import "./Aboutus.css"
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
const Aboutus = () => {
    const { t } = useTranslation(i18next.language);
    return (
        <div className='verifypage'>
            <div className="responsive-container-block bigContainer">
                <div className="responsive-container-block Container bottomContainer">
                    <div className="allText bottomText">
                        <p className="text-blk headingText">{t("Aboutus.main")}</p>
                        <p style={{ color: "white" }} className="text-blk subHeadingText">{t("Aboutus.head")}</p>
                        <p style={{ color: "white" }} className="text-blk description">
                            {t("Aboutus.content")}
                        </p>
                        <a target='_blank' href='https://www.bitindiaofficial.tech/'>
                            <button className="">{t("Aboutus.button")}</button>
                        </a>
                    </div>
                    <div className="videoContainer">
                        <iframe
                            allowFullScreen="allowfullscreen"
                            className="mainVideo"
                            controls="controls"
                            src={i18next.language === "en" ? "https://www.youtube.com/embed/YDsqedqmF84" : "https://www.youtube.com/embed/FIx3HdzXCDs"}
                        ></iframe>
                        <img
                            className="dotsImg image-block"
                            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus