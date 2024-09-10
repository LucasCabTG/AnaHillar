// import { Grid } from "./Grid";
import '../styles/home.css'
// import { Nav } from "../components/navbar";
import { GridIta } from "./GridIta";
import { NavIta } from '../components/navbarIta';

export function ProyectosIta({data}) {

    const categoriaAData = data.filter(item => item.categoria === 'a');

    return (
        <div>
            <NavIta/>
            <GridIta data={categoriaAData} />
            
        </div>
    )
}
