import "./Home.css";
import homebackground from '../../images/home_background.jpg'
import NavBar from "../nav/NavBar";
import Troduct from "../troudct/troduct";
import booklean from '../../images/booklean.jpg'

function Home() {
    return (
        <>
            <NavBar />
                <div className="home">
                    <div className="home_container">
                        <img className="home_image" src={homebackground} alt="" />

                        <div className="home_row">
                            <Troduct 
                                title='The lean Startup' 
                                price={19.99} 
                                image={booklean}
                                rating={5}
                            />
                                
                            <Troduct />
                        </div>

                        <div className="home_row">
                            <Troduct />
                            <Troduct />
                            <Troduct />
                        </div>

                        <div className="home_row">
                           <Troduct />
                        </div>

                    </div>
                </div>
        </>
        
    )
}

export default Home;