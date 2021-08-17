import React from 'react'

import LeftUserProfile from './LeftUserProfile'

const LeftBox = () => {
    return(
        <section id="left-box" className="row">

            <LeftUserProfile />

            <div className="col-12 wrapper-recent">
                <span className="title">Recent</span>
                <div className="tag-list">
                    <div className="wrapper-tag-list">
                        <span>#</span>
                        <span>searchengineoptimize</span>
                    </div>
                    <div className="wrapper-tag-list">
                        <span>#</span>
                        <span>tradeshowsandfairs</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeftBox