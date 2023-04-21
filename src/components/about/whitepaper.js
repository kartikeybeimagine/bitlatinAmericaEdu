import React from 'react'
import './Whitepapper.css'
import { useTranslation } from 'react-i18next'
export const Whitepaper = () => {
    const { t } = useTranslation()
  return (
    <div className='verifypage'>
        <h3>{t("ComingSoon")}</h3>
    </div>
  )
}
