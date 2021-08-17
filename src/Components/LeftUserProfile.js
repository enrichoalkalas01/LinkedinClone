import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './App/userSlice'

const LeftUserProfile = () => {
    const user = useSelector(selectUser)
    return(
        <div className="col-12 wrapper-profile">
            <div className="box-profile">
                <div className="images-box-lb"></div>
                <div className="images-box-lb"></div>
                <div className="images" style={{ backgroundImage: `url('${ user ? user.photoUrl : null }')` }}></div>
            </div>
            <div className="title-box">
                <span className="name">{ user !== null ? user.displayName : null }</span>
                <span className="jobs">{ user !== null ? user.email : null }</span>
                {/* <span className="jobs">Software Engineer</span> */}
                {/* <span className="location-jobs">KOMPAS GRAMEDIA</span> */}
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
    )
}


export default LeftUserProfile