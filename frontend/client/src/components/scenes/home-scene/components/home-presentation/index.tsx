import * as React from 'react'
import css from './index.module.scss'
import StorybookEcosystem from '@components/scenes/storybook-scene/components/storybook-ecosystem'

const HomePresentation = () => {
    return (
        <div className={css.homePresentation}>
            <StorybookEcosystem/>
        </div>
    )
}

export default HomePresentation
