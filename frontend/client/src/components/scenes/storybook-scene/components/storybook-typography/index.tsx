import * as React from 'react'
import css from './index.module.scss'
import cssCommon from '../../styles/common.module.scss'

interface IProps {

}

const StorybookTypography = (props: IProps) => {
    return (
        <div className={css.content}>
            <div className={cssCommon.subtitle}>Titles:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <h1>H1: Test text</h1>
                </div>

                <div className={css.item}>
                    <h2>H2: Test text</h2>
                </div>

                <div className={css.item}>
                    <h3>H3: Test text</h3>
                </div>

                <div className={css.item}>
                    <h4>H4: Test text</h4>
                </div>

                <div className={css.item}>
                    <h5>H5: Test text</h5>
                </div>

                <div className={css.item}>
                    <h6>H6: Test text</h6>
                </div>
            </div>

            <br/>
            <br/>

            <div className={cssCommon.subtitle}>Others:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <p>paragraph</p>
                </div>

                <div className={css.item}>
                    <span>span</span>
                </div>

                <div className={css.item}>
                    <a href='#'>link</a>
                </div>
            </div>
        </div>
    )
}

export default StorybookTypography