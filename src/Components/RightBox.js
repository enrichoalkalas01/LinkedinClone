import React from 'react'

// Components
import FriendsFeed from './FriendsFeed'

const RightBox = () => {
    return(
        <section id="right-box" className="row">

            <div className="col-12 wrapper-friends-feed">
                <div className="title-wrapper">
                    <h6>Add to your feed</h6>
                </div>
                <FriendsFeed />
                <FriendsFeed />
                <FriendsFeed />
            </div>
        </section>
    )
}

export default RightBox