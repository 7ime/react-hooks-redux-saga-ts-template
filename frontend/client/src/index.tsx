import React from 'react'
import ReactDOM from 'react-dom'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import '@styles/global.scss'

import getAppStore from './store'
import getService from './services'
import ServiceContext from './components/context/service-context'
import HelmetSet from './components/common/helmet-set'
import App from './components/app'
import {I18NEXT_DETECTION_OPTIONS} from '@constants/i18next'

i18next
    .use(LanguageDetector)
    .init({
        detection: I18NEXT_DETECTION_OPTIONS
    })

ReactDOM.render((
    <Provider store={getAppStore()}>
        <ServiceContext.Provider value={getService()}>
            <BrowserRouter>
                <HelmetSet/>
                <App/>
            </BrowserRouter>
        </ServiceContext.Provider>
    </Provider>
), document.getElementById('root'))
