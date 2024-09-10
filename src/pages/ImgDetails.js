import { useParams } from "react-router-dom";
import React from "react";
import '../styles/imgDetails.css';
import { Nav } from "../components/navbar";
import { NotFound } from "./NotFound";

export function ImgDetails({ data }) {
    const { id } = useParams();
    const datas = data.find((img) => img.id === parseInt(id));

    if (!datas) {
        return <><NotFound /></>;
    }

    return (
        <>
            <Nav />
            <div className="imagedetailcontainer">
                <h2 className="title-proyect">{datas.title}</h2>
                {/* <p className="year">{datas.year} </p> */}

                <div className="img-container">
                {Object.entries(datas.interior).map(([key, src], index) => (
                        <div className="img-wrapper" key={index}>
                            <img onContextMenu={(e) => e.preventDefault()} className="img-interior" src={src} alt={`Interior ${index + 1}`} />
                            <p className="img-caption">{key}</p>  {/* New line for caption */}
                        </div>
                    ))}
                </div>

                <div className="text-container">
    <h4> {datas.header4} </h4>
    <h5> {datas.header5Negrita} </h5>
    <h5> <i> {datas.header5} </i> </h5>
    {datas.texto && Object.values(datas.texto).map((txt, index) => (
        <p className="proyect-p" key={index}>{txt} </p>
    ))}
</div>

{/* New text-container with "header42", "header5negrita2", "header52", and "texto2" */}
<div className="text-container">
    <h4> {datas.header42} </h4>
    <h5> {datas.header5Negrita2} </h5>
    <h5> <i> {datas.header52} </i> </h5>
    {datas.texto2 && Object.values(datas.texto2).map((txt, index) => (
        <p className="proyect-p" key={index}>{txt} </p>
    ))}
</div>

{/* New text-container with "header43", "header5negrita3", "header53", and "texto3" */}
<div className="text-container">
    <h4> {datas.header43} </h4>
    <h5> {datas.header5Negrita3} </h5>
    <h5> <i> {datas.header53} </i> </h5>
    {datas.texto3 && Object.values(datas.texto3).map((txt, index) => (
        <p className="proyect-p" key={index}>{txt} </p>
    ))}
</div>

{/* New text-container with "header44", "header5negrita4", "header54", and "texto4" */}
<div className="text-container">
    <h4> {datas.header44} </h4>
    <h5> {datas.header5Negrita4} </h5>
    <h5> <i> {datas.header54} </i> </h5>
    {datas.texto3 && Object.values(datas.texto4).map((txt, index) => (
        <p className="proyect-p" key={index}>{txt} </p>
    ))}
</div>


            </div>
        </>
    );
}

