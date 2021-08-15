import React from 'react'

// Component CSS
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/fontawesome/css/all.min.css'
import './assets/css/style.css'

// Component
import Headers from './Components/Headers'
import ContentBox from './Components/ContentBox'

const App = () => {
    return(
        <section id="app">
            <div className="container-fluid main-content">
                <div className="row box-content">
                    <div className="col-12 content headers-box">
                        <Headers />
                    </div>
                    <div className="col-12 content content-box">
                        <ContentBox />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App