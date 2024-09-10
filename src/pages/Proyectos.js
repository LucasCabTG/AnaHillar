import { Grid } from "./Grid";
import '../styles/home.css'
import { Nav } from "../components/navbar";

export function Proyectos({data}) {

    const categoriaAData = data.filter(item => item.categoria === 'a');

    return (
        <div>
            <Nav/>
            <Grid data={categoriaAData} />
            
        </div>
    )
}
