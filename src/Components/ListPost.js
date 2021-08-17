import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './App/userSlice'

const ListPost = (props) => {
    const user = useSelector(selectUser)
    return(
        <div className="wrapper-box-list">

            <div className="profile-box">
                <div className="photo-box">
                    <div className="images" style={{ backgroundImage: `url('${ props.photoUrl }')` }}></div>
                </div>
                <div className="title-box">
                    <span className="title">{ props.name }</span>
                    <span className="followers">5003 followers</span>
                    <span className="date-post">5d</span>
                </div>
            </div>

            <div className="desc-box">
                { props.message }
            </div>
            
            <div className="box-action">
                <div className="wrapper-box-action">
                    <i className="far fa-thumbs-up"></i>
                    <span>Like</span>
                </div>
                <div className="wrapper-box-action">
                    <i className="fas fa-comment-dots"></i>
                    <span>Comment</span>
                </div>
                <div className="wrapper-box-action">
                    <i className="fas fa-share-alt"></i>
                    <span>Share</span>
                </div>
                <div className="wrapper-box-action">
                    <i className="fas fa-paper-plane"></i>
                    <span>Send</span>
                </div>
            </div>
        </div>
    )
}

export default ListPost