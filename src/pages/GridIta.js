import { Link } from "react-router-dom";
import React from "react";
import '../styles/grid.css'


export function GridIta({data}) {

    

    return (
        <>

        <div className="images-grid-container">
            {data.map(datas =>(
                <div onContextMenu={(e) => e.preventDefault()} key={datas.id} className="image-container">
                    <Link to={`/ita/image/${datas.id}`} key={datas.id}>
                        <img className="imagen-grid" src={datas.portada} alt={datas.alt} />
                        <div className="image-text">
                            <p className="titulo-img-grid">{datas.title} </p>
                            <p className="year-img-grid">{datas.year} </p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
        </>
    )
}
