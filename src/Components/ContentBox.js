import React from 'react'

// Components
import MiddleBox from './MiddleBox'
import LeftBox from './LeftBox'
import RightBox from './RightBox'

const ContentBox = () => {
    return(
        <section id="content-box" className="container">
            <div className="row wrapper-content-box">
                <div className="col-md-3 left-box">
                    <LeftBox />
                </div>
                <div className="col-md-6 middle-box">
                    <MiddleBox />
                </div>
                <div className="col-md-3 right-box">
                    <RightBox />
                </div>
            </div>
        </section>
    )
}

export default ContentBox