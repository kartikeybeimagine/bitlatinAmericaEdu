import React from 'react'
import Radhika from "./Radhika.jpg"
import Hemant from "./hemant.png"
import Kavya from "./IMG_20210616_212829.jpg"
import Navraj from "./1670523368244.jpeg"
import Shubham from "./IMG_20220127_104309.jpg"
import Kartik from "./IMG_20221104_110254.jpg"
import Vivek from "./PHOTO-2023-02-25-19-35-58.jpg"
import RKK from "./PHOTO- RKK.jpg"
import Sweta from "./WhatsApp Image 2019-12-28 at 1.52.20 PM (1).jpeg"
import Ankita from "./WhatsApp Image 2023-02-21 at 2.58.55 PM.jpeg"
import Mayank from "./WhatsApp Image 2023-02-25 at 9.21.59 PM.jpeg";
import Nikhil from "./nikhil.jpg"
import { useTranslation } from 'react-i18next'

import './Team.css'
export const Team = () => {
  const { t } = useTranslation()
  return (
    <div className='roadmappage'>
      <div className='heading'> {t("Team.heading")} </div>
      <div className='qbox'>
        <div class="card1">
          <img src={Nikhil} alt="Avatar" style={{width:"200px",height:"200px",borderRadius:"100%"}} />
          <div class="container">
            <h4><b>Nikhil Goyal</b></h4>
            <p>{t("Team.ceo")}</p>
          </div>
        </div>
      </div>

        <div className='heading'> {t("Team.subheading")}</div>
        <div className='qbox'> 
            <div class="card1">
                <img src={Kavya} alt="Avatar" style={{width:"200px",height:"200px",borderRadius:"100%"}} />
                <div class="container">
                  <h4><b>KAVYA GN</b></h4> 
                  <p>{t("Team.hr")}</p> 
                </div>
            </div>
            <div class="card1">
                <img src={Radhika} alt="Avatar" style={{width:"200px",height:"200px",borderRadius:"100%"}} />
                <div class="container">
                  <h4><b>Dr. RADHIKA MAHAJAN</b></h4> 
                  <p>{t("Team.bd")}</p> 
                </div>
            </div>
            <div class="card1">
                <img src={Ankita} alt="Avatar" style={{width:"200px",height:"200px",borderRadius:"100%"}} />
                <div class="container">
                  <h4><b>ANKITA RAI</b></h4>
                  <p>{t("Team.marketing")}</p>
                </div>
            </div>
            <div class="card1">
                <img src={Mayank} alt="Avatar" style={{width:"200px",height:"200px",borderRadius:"100%"}} />
                <div class="container">
                  <h4><b>MAYANK GUPTA</b></h4>
                  <p>{t("Team.socialMedia")}</p>
                </div>
            </div>
            <div class="card1">
                <img src={RKK} alt="Avatar" style={{width:"200px",height:"200px",borderRadius:"100%"}} />
                <div class="container">
                  <h4><b>R.K. KEDIA</b></h4>
                  <p>{t("Team.hrConsultant")}</p>
                </div>
            </div>
            <div class="card1">
                <img src={Navraj} alt="Avatar" style={{width:"200px",height:"200px",borderRadius:"100%"}} />
                <div class="container">
                  <h4><b>NAVRAJ SHARMA</b></h4>
                  <p>{t("Team.BlockchainDeveloper")}</p>
                </div>
            </div>
            <div class="card1">
                <img src={Shubham} alt="Avatar" style={{width:"200px",height:"200px",borderRadius:"100%"}} />
                <div class="container">
                  <h4><b>SHUBHAM JAISWAL</b></h4>
                  <p>{t("Team.BlockchainDeveloper")}</p>
                </div>
            </div>
            <div class="card1">
                <img src={Sweta} alt="Avatar" style={{width:"200px",height:"200px",borderRadius:"100%"}} />
                <div class="container">
                  <h4><b>SWETA</b></h4>
                  <p>{t("Team.BlockchainDeveloper")}</p>
                </div>
            </div>
            <div class="card1">
                <img src={Hemant} alt="Avatar" style={{width:"200px",height:"200px",borderRadius:"100%"}} />
                <div class="container">
                  <h4><b>Hemant Kumar</b></h4>
                  <p>{t("Team.BlockchainDeveloper")}</p>
                </div>
            </div>
            <div class="card1">
                <img src={Vivek} alt="Avatar" style={{width:"200px",height:"200px",borderRadius:"100%"}} />
                <div class="container">
                  <h4><b>VIVEK TYAGI</b></h4>
                  <p>{t("Team.BlockchainDeveloper")}</p>
                </div>
            </div>
            <div class="card1">
                <img src={Kartik} alt="Avatar" style={{width:"200px",height:"200px",borderRadius:"100%"}} />
                <div class="container">
                  <h4><b>KARTIKEY</b></h4>
                  <p>{t("Team.BlockchainDeveloper")}</p>
                </div>
            </div>

        </div>
    </div>
  )
}
