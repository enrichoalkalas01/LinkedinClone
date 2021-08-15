import React from 'react'

const MiddleBox = () => {
    return(
        <section id="middle-box" className="row">
            <div className="col-12 wrapper-posting">
                <div className="box-top">
                    <div className="wrapper-box-top">
                        <div className="icon-box">
                            <div className="images-profile"></div>
                        </div>
                        <input placeholder="Start a post" />
                    </div>
                    <div className="">
                        <button>Create</button>
                    </div>
                </div>
            </div>
            <div className="col-12 wrapper-list-posting">

            </div>
        </section>
    )
}

export default MiddleBox