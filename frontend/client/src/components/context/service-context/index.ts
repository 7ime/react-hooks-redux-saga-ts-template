import * as React from 'react'

import getService from '../../../services'

const ServiceContext = React.createContext(getService())

ServiceContext.displayName = 'ServiceContext' // this name for devtools

export default ServiceContext
