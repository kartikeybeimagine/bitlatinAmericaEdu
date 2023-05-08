import React from 'react'
import { useTranslation } from 'react-i18next'

export const Tokenomics = () => {
  const { t } = useTranslation()
  return (
    <div className='verifypage'>
        <h3>{t("ComingSoon")}</h3>
    </div>
  )
}
