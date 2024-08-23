import "./Home.css";
import homebackground from '../../images/home_background.jpg'
import NavBar from "../nav/NavBar";
import Troduct from "../troudct/troduct";
import booklean from '../../images/booklean.jpg'
import computer_screen from '../../images/computer_screen.jpg'
import samsung from "../../images/samsung.jpg"
import apple_watch from "../../images/apple_watch.jpg"
import shorts from "../../images/shorts.jpg"
import bottle from "../../images/bottle.jpg"

function Home() {
    return (
        <>
            <NavBar />
                <div className="home">
                    <div className="home_container">
                        <img className="home_image" src={homebackground} alt="" />

                        <div className="home_row">
                            <Troduct 
                                title='The lean Startup: How Constant Innovation Creates Radically Successful Businesses' 
                                price={19.99} 
                                image={booklean}
                                rating={5}
                            />
                                
                            <Troduct 
                                title='BenQ RD240Q 24.1” WQXGA Programming Monitor, 90W USB Type-C, Advanced Coding Modes, Coding HotKey, Ergonomic Design, 16:10 Special Ratio, Circadian Mode, Eye-Care Technology, Eco-Friendly Design' 
                                price={379.99} 
                                image={computer_screen}
                                rating={4}
                            />
                        </div>

                        <div className="home_row">
                        <Troduct 
                                title='Apple Watch Series 9 [GPS 45mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Band M/L. Fitness Tracker, ECG Apps, Always-On Retina Display, Water Resistant' 
                                price={329} 
                                image={apple_watch}
                                rating={3}
                           />
                           <Troduct 
                                title='Amazon Essentials Mens Classic-Fit 9" Short' 
                                price={24.60} 
                                image={shorts}
                                rating={4}
                           />
                           <Troduct 
                                title='Owala FreeSip Insulated Stainless Steel Water Bottle with Straw for Sports and Travel, BPA-Free, 24-oz, Blue/Teal (Denim)' 
                                price={27.94} 
                                image={bottle}
                                rating={4}
                           />
                        </div>

                        <div className="home_row">
                           <Troduct 
                                title='SAMSUNG 49" Odyssey G93SC Series OLED Curved Gaming Monitor, 240Hz, 0.03ms, Dual QHD, DisplayHDR True Black 400, FreeSync Premium Pro, Height Adjustable Stand, LS49CG932SNXZA, 2023' 
                                price={1099.99} 
                                image={samsung}
                                rating={4}
                           />
                        </div>

                    </div>
                </div>
        </>
        
    )
}

export default Home;