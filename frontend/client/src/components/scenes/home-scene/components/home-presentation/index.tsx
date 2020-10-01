import * as React from 'react'
import css from './index.module.scss'
import {linksTechnologies} from './data'

const HomePresentation = () => {
    return (
        <div className={css.homePresentation}>
            <div className={css.title}>This template uses:</div>

            <div className={css.list}>
                {
                    linksTechnologies.map((item) => {
                        return (
                            <a key={item.link} href={item.link} target={'_blank'} className={css.item}>
                                {item.title}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomePresentation
