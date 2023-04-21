import React from 'react'
import image1 from "./Assets/1.webp"
import image2 from "./Assets/2.webp"
import image3 from "./Assets/3.webp"
import image4 from "./Assets/4.webp"
import image5 from "./Assets/5.webp"
import image6 from "./Assets/6.webp"
import image7 from "./Assets/WhatsApp Image 2022-12-16 at 2_38_52 PM (1).webp"
import image8 from "./Assets/WhatsApp Image 2022-12-16 at 2_38_52 PM.webp"
import image9 from "./Assets/WhatsApp Image 2022-12-16 at 2_38_53 PM.webp"
import image10 from "./Assets/WhatsApp Image 2022-12-16 at 2_38_54 PM.webp"
import image11 from "./Assets/WhatsApp Image 2022-12-16 at 2_38_56 PM.webp"
import image12 from "./Assets/WhatsApp Image 2022-12-16 at 2_38_57 PM (1).webp"
import image13 from "./Assets/WhatsApp Image 2022-12-16 at 2_38_57 PM.webp"
import image14 from "./Assets/WhatsApp Image 2022-12-16 at 2_38_58 PM (1).webp"
import image15 from "./Assets/WhatsApp Image 2022-12-16 at 2_38_58 PM.webp"
import image16 from "./Assets/champ_header_logo.png"
import image17 from "./Assets/descarga.png"
import image18 from "./Assets/IITAllahabad.jpg"
import image19 from "./Assets/Indian_Railway_Logo_1.png"
import image20 from "./Assets/Logo_of_Summit_Hotels_and_Resorts_in_India_wvc7qg.png"
import image21 from "./Assets/logo.png"
import image22 from "./Assets/QuillAudit-Icon.webp"
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'

import './Partner.css'
export const Partners = () => {
    const { t } = useTranslation();
    const imageAnimation = {
        offscreen: { x: 100 },
        offscreen2: { x: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
            }

        },
        onscreen2: {
            x: 100,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
            }

        }
    };
  return (
    <div className='roadmappage'>
        <div className='heading'> {t("Navbar.OurPartners")}</div>
        
        <div className='qbox'>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image1} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image4} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image6} alt="Avatar" style={{width:"200px",height:"200px",}} />
            </div>
        </motion.div>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image7} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image8} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image9} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>

        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image10} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image11} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image12} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
        
            <div class="card2">
                <img src={image16} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image17} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image18} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image19} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image20} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image21} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>
        <motion.div
                        variants={imageAnimation}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.5 }}
                        >
            <div class="card2">
                <img src={image22} alt="Avatar" style={{width:"200px",height:"200px"}} />
            </div>
        </motion.div>
          
        </div>
        {/* </motion.div> */}
        
    </div>
  )
}
