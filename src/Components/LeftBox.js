import React from 'react'

const LeftBox = () => {
    return(
        <section id="left-box" className="row">

            <div className="col-12 wrapper-profile">
                <div className="box-profile">
                    <div className="images-box-lb"></div>
                    <div className="images-box-lb"></div>
                    <div className="images"></div>
                </div>
                <div className="title-box">
                    <span className="name">Enricho Alkalas</span>
                    <span className="jobs">Software Engineer</span>
                    <span className="location-jobs">KOMPAS GRAMEDIA</span>
                </div>
                <div className="views-box">
                    <div className="box-text">
                        <span>Who viewed your profile : </span>
                        <span>1024</span>
                    </div>
                    <div className="box-text">
                        <span>View of your post : </span>
                        <span>34234</span>
                    </div>
                </div>
                <div className="bookmarks">
                    <div className="wrapper-b">
                        <i className="fas fa-bookmark"></i>
                        <span>My items</span>
                    </div>
                </div>
            </div>

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