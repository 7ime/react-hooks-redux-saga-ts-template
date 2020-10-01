import * as React from 'react'
import css from './index.module.scss'

const linksTechnologies = [
    {
        link: 'https://reactjs.org/',
        title: 'React'
    },
    {
        link: 'https://redux.js.org/',
        title: 'Redux'
    },
    {
        link: 'https://redux-saga.js.org/',
        title: 'Redux Saga'
    },
    {
        link: 'https://github.com/reduxjs/reselect',
        title: 'Reselect'
    },
    {
        link: 'https://typescriptlang.org/',
        title: 'Typescript'
    },
    {
        link: 'https://webpack.js.org/',
        title: 'Webpack'
    }
]

const HomePresentation = () => {
    return (
        <div className={css.homePresentation}>
            <div className={css.title}>
                This template uses:
            </div>

            <div className={css.list}>
                {
                    linksTechnologies.map((item) => {
                        return (
                            <div key={item.link} className={css.item}>
                                <a href={item.link} target={'_blank'} className={css.link}>{item.title}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomePresentation
