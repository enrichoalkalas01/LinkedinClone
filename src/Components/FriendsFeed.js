import React from 'react'

const FriendsFeed = () => {
    return(
        <>
        <div className="wrapper-p-f-a">
            <div className="wrapper-profile">
                <div className="photo-box">
                    <div className="images"></div>
                </div>
                <div className="title-box">
                    <span className="name">Enricho Alkalas</span>
                    <span className="jobs">Software Engineer at</span>
                    <span className="location-jobs">KOMPAS GRAMEDIA</span>
                </div>    
            </div>
            <div className="button-box">
                <button>
                    <i className="fas fa-plus"></i>
                    <span>Follow</span>
                </button>
            </div>
        </div>
        </>
    )
}

export default FriendsFeed