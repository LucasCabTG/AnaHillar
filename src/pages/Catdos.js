import { Grid } from "./Grid";
import '../styles/home.css'
import { Nav } from "../components/navbar";

export function Catdos({ data }) {

    const categoriaBData = data.filter(item => item.categoria === 'b');

  return (
    <div>
      <Nav />
      <Grid data={categoriaBData} />
    </div>
  );
}

