import { React, useEffect, useState } from 'react'
import firebase from 'firebase'
import { db } from './App/Firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './App/userSlice'

// Components
import ListPost from './ListPost'

const MiddleBox = () => {
    const [posts, setPosts] = useState([])
    const user = useSelector(selectUser)
    console.log(user)

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        })
    }, [])

    const sendPosts = (e) => {
        if ( e.key === 'Enter' ) {
            db.collection('posts').add({
                uid: user.uid,
                name: user.displayName,
                description: `Created from user ${ user.displayName }`,
                message: e.target.value,
                photoUrl: user.photoUrl,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })

            e.target.value = ""
        }
    }

    return(
        <section id="middle-box" className="row">
            <div className="col-12 wrapper-posting">
                <div className="box-top">
                    <div className="wrapper-box-top">
                        <div className="icon-box">
                            <div className="images-profile" style={{ backgroundImage: `url('${ user ? user.photoUrl : null }')` }}></div>
                        </div>
                        <input type="text" placeholder="Start a post" id="posts-input" onKeyDown={ sendPosts } />
                    </div>
                    <div className="wrapper-icon-box">
                        <div className="wrapper-icon">
                            <i className="fas fa-image"></i>
                            <span>Photo</span>
                        </div>
                        <div className="wrapper-icon">
                            <i className="fab fa-youtube"></i>
                            <span>Video</span>
                        </div>
                        <div className="wrapper-icon">
                            <i className="far fa-calendar-alt"></i>
                            <span>Event</span>
                        </div>
                        <div className="wrapper-icon">
                            <i className="far fa-newspaper"></i>
                            <span>Article</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 wrapper-list-posting">
                {
                    posts.map((data, index) => {
                        console.log(data)
                        return(
                            <ListPost
                                key={ index }
                                name={ data.data.name }
                                message={ data.data.message }
                                photoUrl={ data.data.photoUrl }
                            />
                        )    
                    })
                }
            </div>
        </section>
    )
}

export default MiddleBox