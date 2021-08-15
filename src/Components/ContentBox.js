import React from 'react'

// Components
import MiddleBox from './MiddleBox'

const ContentBox = () => {
    return(
        <section id="content-box" className="container">
            <div className="row wrapper-content-box">
                <div className="col-md-3 left-box">
                    Left Box
                </div>
                <div className="col-md-6 middle-box">
                    <MiddleBox />
                </div>
                <div className="col-md-3 right-box">
                    Rigft Box
                </div>
            </div>
        </section>
    )
}

export default ContentBox