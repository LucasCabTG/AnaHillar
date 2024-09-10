// import { Grid } from "./Grid";
import '../styles/home.css'
// import { Nav } from "../components/navbar";
import { GridIta } from "./GridIta";
import { NavIta } from '../components/navbarIta';

export function CatdosIta({ data }) {

    const categoriaBData = data.filter(item => item.categoria === 'b');

  return (
    <div>
      <NavIta />
      <GridIta data={categoriaBData} />
    </div>
  );
}

