import React from 'react';
import { useContext } from "react";
import UserContext from "../../context/userContext/UserContext";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { useTranslation } from 'react-i18next'


export const SideBar = () => {

    const user = useContext(UserContext);
    const { t } = useTranslation();
  return (
    <div className='sidebar'>
        <div className='sidebaritems'>
            <div className='sidebaritem' onClick={(e) => user.setIsSidebar(user.isSidebar=1)}>
                <div className='sidebaritemicon' >
                    <CorporateFareIcon />
                </div>
                <div>
                    <p className='sidebaritemtext'>
                       {t('Dashboard.sidebar.PrimaryDetails')}
                    </p>
                </div>
            </div>
            <div className='sidebaritem ' onClick={(e) => user.setIsSidebar(user.isSidebar=2)}>
                <div className='sidebaritemicon analysis' >
                    <QueryStatsIcon />
                </div>
                <div>
                    <p className='sidebaritemtext'>
                        {t('Dashboard.sidebar.Analytics')}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
