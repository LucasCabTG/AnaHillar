// import { Grid } from "./Grid";
import '../styles/home.css'
// import { Nav } from "../components/navbar";
import Carousel from "../components/Carousel";
import { NavIta } from '../components/navbarIta';
// import {NavbarHero} from "../components/NavHero";



export function HomeIta({data}) {

    // const categoriInicioAData = data.filter(item => item.inicio === 'si');



    return (
        <div>
            {/* <NavbarHero className="heroe-home"/> */}
             <NavIta isHero={true} />

             <Carousel />
                {/* <div className="hero-container">
                    <img src="https://i.postimg.cc/k5HcyGwp/2-1-jpg.jpg" alt="Hero" className="hero-image" />
                </div>
            <Grid data={categoriInicioAData} /> */}
            
        </div>
    )
}
