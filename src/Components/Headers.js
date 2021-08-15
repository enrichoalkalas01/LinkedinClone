import React from 'react'

const Headers = () => {
    return(
        <section id="headers" className="container-fluid">
            <div className="container wrapper-headers">
                <div className="row wrapper-container">
                    <div className="col-md-6 left-box">
                        <div className="logo-box">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <div className="box-search-h">
                            <i className="fas fa-search"></i>
                            <input placeholder="Search for more.." />
                        </div>
                    </div>

                    <div className="col-md-6 right-box">
                        <div className="menu-icon-box">
                            <a href="/">
                                <i className="fas fa-home"></i>
                                <span>Home</span>
                            </a>
                        </div>
                        <div className="menu-icon-box">
                            <a href="/">
                                <i className="fas fa-users"></i>
                                <span>My Network</span>
                            </a>
                        </div>
                        <div className="menu-icon-box">
                            <a href="/">
                                <i className="fas fa-briefcase"></i>
                                <span>Jobs</span>
                            </a>
                        </div>
                        <div className="menu-icon-box">
                            <a href="/">
                                <i className="fas fa-comment-dots"></i>
                                <span>Message</span>
                            </a>
                        </div>
                        <div className="menu-icon-box">
                            <a href="/">
                                <i className="fas fa-bell"></i>
                                <span>Notifications</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Headers