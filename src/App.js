import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom' 
import './App.css';
import { ImgDetails } from './pages/ImgDetails';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { Catdos } from './pages/Catdos';
import { Proyectos } from './pages/Proyectos';
import { HomeIta } from './pages/HomeIta';
import { AboutIta } from './pages/AboutIta';
import { ProyectosIta } from './pages/ProyectosIta';
import { CatdosIta } from './pages/CatdosIta';
import Cookies from 'js-cookie';
import CookieConsent from './components/cookieconsent';



function App() {

const data = [
  {
    id: 80,
    title: "ALVEOLAR",
    portada: "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.1.1.JPG?updatedAt=1715955703278",
    interior:{
      "Alveolare 2023 - cm 100 x 100 x h 15 - stoneware, ingobbio.Courtesy Galleria Lara e Rino Costa": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.1.1.JPG?updatedAt=1715955703278",
      "Alveolare 2023 - cm 100 x 100 x h 15 - stoneware, ingobbio.Courtesy Galleria Lara e Rino Costa ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.2.jpg?updatedAt=1715955703337", 
      "Nuove terre 2024 - cm  Ø  50 x H 13 - stoneware, pigment.Courtesy Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.3.4.JPG?updatedAt=1715955623969", 
      "Nuove terre 2024 - cm  Ø  50 x H 13 - stoneware, pigment.Courtesy Tempesta Gallery ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.4.6.JPG?updatedAt=1715955625305", 
      "Alveoli 2022 - cm 49 x 27 x h 9 - stoneware. Courtesy Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.5.1.jpg?updatedAt=1715955641974", 
      "Alveoli 2022 - cm 49 x 27 x h 9 - stoneware. Courtesy Tempesta Gallery ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.6.2.jpg?updatedAt=1715955645652", 
      "Alveolo 2022 - cm 39 x 32 x h 16 - stoneware, glass. Courtesy Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.7.3.jpg?updatedAt=1715955634340", 
      "Alveolo 2022 - cm 39 x 32 x h 16 - stoneware, glass. Courtesy Tempesta Gallery ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.8.jpg?updatedAt=1715955632913", 
      "Deep breath 2022- cm 47 x 28 x h 4 - stoneware, ingobbio, aluminum.Courtesy Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.9.1.jpg?updatedAt=1715955637727", 
      "Deep breath 2022- cm 47 x 28 x h 4 - stoneware, ingobbio, aluminum.Courtesy Tempesta Gallery ": "https://i.postimg.cc/LsVGs98Q/1-10-2.jpg", 
      
    },
    alt: "Alveolar",
    year: "2023",
    categoria: "b",
    didascalia:"Alveolare 2023 - cm 100 x 100 x h 15 - stoneware, ingobbio.Courtesy Galleria Lara e Rino Costa",
    inicio: "si",

  },
  {
    id: 81,
    title: "INNERFIRE",
    portada: "https://ik.imagekit.io/xqhcmqpqo/Artworks%20innerfire/12.JPG?updatedAt=1721998036234",
    interior: {
      "Innerfire -  2023 - cm 40 x 39 x h 36 - stoneware.  ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20innerfire/2.1%20jpg.jpg?updatedAt=1715955811713",
      "Innerfire -  2023 - cm 40 x 39 x h 36 - stoneware. ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20innerfire/2.2.jpg?updatedAt=1715955811747",
      "Innerfire -  2023 - cm 40 x 39 x h 36 - stoneware.": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20innerfire/2.3.jpg?updatedAt=1715955811570",
      "Innerfire -  2023 - cm 40 x 39 x h 36 - stoneware.   ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20innerfire/2.4.JPG?updatedAt=1715955813900",
      "Innerfire -  2023 - cm 40 x 39 x h 36 - stoneware.    ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20innerfire/12.JPG?updatedAt=1721998036234",

    },
    alt: "Innerfire",
    year: "2023",
    categoria: "b",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "si",

  },
  {
    id: 82,
    title: "TUMMO",
    portada: "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.1.JPG?updatedAt=1715955896773",
    interior: {
      "Tummo II cm Ø  40 h 63 - stoneware, ingobbio. Courtesy Galleria Lara e Rino Costa": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.1.JPG?updatedAt=1715955896773",
      "Tummo II cm Ø  40 h 63 - stoneware, ingobbio. Courtesy Galleria Lara e Rino Costa ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.2.jpg?updatedAt=1715955897158",
      "Tummo I 2021 - cm Ø 48 x h 56 - stoneware, ingobbio. Courtesy Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.3.2.JPG?updatedAt=1715955897254",
      "Tummo I 2021 - cm Ø 48 x h 56 - stoneware, ingobbio. Courtesy Tempesta Gallery ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.4.3.JPG?updatedAt=1715955896379",
      "Tummo III  2022 - cm Ø 46 x h 65 - stoneware, ingobbio. Courtesy Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.5.1.JPG?updatedAt=1715955895693",
      "Tummo III  2022 - cm Ø 46 x h 65 - stoneware, ingobbio. Courtesy Tempesta Gallery ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.6.2.jpg?updatedAt=1715955897142",
      "Tummo IV - 2022 - cm  Ø 48 x h 70 -  stoneware, ingobbio. Courtesy Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.7.JPG?updatedAt=1715955896569",
      "Tummo IV - 2022 - cm  Ø 48 x h 70 -  stoneware, ingobbio. Courtesy Tempesta Gallery ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.8.JPG?updatedAt=1715955896671",
    },
    alt: "Tummo",
    year: "2022",
    categoria: "b",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "si",

    header4: "Solo show Tempesta Gallery, Milan June / October 2022",
    header5Negrita: "https://www.tempestagallery.com",
    texto: {
      txt1: "Tummo, the ability to resist",
      txt2: "hidden energy that propels one towards the continuation of life.",
      txt3: "Rebirth",
      txt4: "The secret power of the earth vibrating in the depths, the secret power of life pulsating within.",
      txt5: "The mouth of the volcano ready to explode.",
      txt6: "Pulsing of every cell, every organ, interiority expanding, powerful vibration of the breath.",
      txt7: "Breath as the only engine.", 
    },

    header42:"TUMMO",
    header5Negrita2: "Tummo, which means inner fire in Tibetan, is a breathing technique practised by Tibetan Buddhists for more than a thousand years that allows one to survive extreme conditions.",
    texto2: {
      txt1: "In our living in an increasingly technological society, we often forget to listen to our body as an organism-container, the perfect engine where the strength and energy of our being resides.",
      txt2: "Attention is only paid to the outside, to the surface, to the image, neglecting and often blocking the most vital, instinctive and powerful part that is in each of us, the part that binds us deeply to nature.",
      txt3: "Tummo is a state of introspection, of discovery and listening without prejudice or fear, feeling the powerful life energy flowing, the perfect functionality of our organs, the continuous transformation. Tummo is a willingness to dialogue with nature, a predisposition to listen, to contemplate existence.",
      txt4: "Every time we inhale a small revolution is within us, overwhelming cells, blood flow, our brain activity, nervous system, all triggered thousands of times throughout our lives by such a natural and unconscious gesture as the act of breathing.",
      txt5: "In this project, starting from a primary element such as the earth, I try to approach listening to nature as a whole, drawing an analogy between human nature and the life forms of our planet.",
      txt6: "The natural systems, the forces that move the flow of rivers, the vigour that sows a seed, the latent energy in a volcano, the photosynthesis of plants, are comparable in all to the human organism as a whole. These are an example of adaptation to the extreme conditions to which man and the planet (because of man) are often subjected, they are proof of a strong and natural capacity for resistance, and in nature, also for rebirth.",
      txt7: "Taking matter from the earth, using ancient techniques such as wood firing, knowing how to guide the fire to assist in the necessary transformation is fundamental in my research, bringing me closer to the roots of an ancestral culture that belongs to us. The direct dialogue with the material implies a slow and long process, one could compare it to the cycles of agriculture, like a mantra, it marks time in a slow and repetitive way.",
      txt8: "First there is only emptiness, the perception of emptiness, listening.",
      txt9: "Building around the emptiness with the rhythmic cadence of the internal beats of the body, a constant repetition of the gesture, like breathing.",
      txt10: "Tummo is the expression of the beat that tirelessly endures, persists and repeats itself, an unconscious, instinctive, natural, inevitably incessant vital gesture."
    }
  },
  {
    id: 83,
    title: "INVISIBLE EXPANSION",
    portada: "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Invisible%20expansion/4.1.jpg?updatedAt=1715955963518",
    interior: {
      "Invisible expansion II 2022-  cm 50 x 10 x h 7 -  stoneware, ingobbio. Courtesy Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Invisible%20expansion/4.1.jpg?updatedAt=1715955963518",
      "Invisible expansion II 2022-  cm 50 x 10 x h 7 -  stoneware, ingobbio. Courtesy Tempesta Gallery ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Invisible%20expansion/4.2.jpg?updatedAt=1715955964514",
      "Invisible expansion I 2022-  cm Ø 27 x h 10 -  stoneware, ingobbio. Courtesy Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Invisible%20expansion/4.3.jpg?updatedAt=1715955966496",
      "Invisible expansion I 2022-  cm Ø 27 x h 10 -  stoneware, ingobbio. Courtesy Tempesta Gallery ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Invisible%20expansion/4.4.jpg?updatedAt=1715955961091",
      "Puf 2021 - cm  Ø 27 x h 24 -  stoneware, ingobbio.": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Invisible%20expansion/4.5.1.JPG?updatedAt=1715955959606",
      "Puf 2021 - cm  Ø 27 x h 24 -  stoneware, ingobbio. ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Invisible%20expansion/4.6.2.JPG?updatedAt=1715955959441",
    },
    alt: "INVISIBLE EXPANSION",
    year: "2022",
    categoria: "b",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "si",

  },
  {
    id: 84,
    title: "SUN",
    portada: "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Sun/5.1.JPG?updatedAt=1715956032176",
    interior: {
      "Sun 2020 - cm 128 x 35 x 35 - stoneware , pigment. Courtesy Galleria Lara e Rino Costa": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Sun/5.1.JPG?updatedAt=1715956032176",
      "Sun 2020 - cm 128 x 35 x 35 - stoneware , pigment. Courtesy Galleria Lara e Rino Costa ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Sun/5.2.jpg?updatedAt=1715956032257",
      "Sun 2020 - cm 128 x 35 x 35 - stoneware , pigment. Courtesy Galleria Lara e Rino Costa  ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Sun/5.3.jpg?updatedAt=1715956025816",
      "Ago di sale 2008 - cm 58 x 46 x h 39 - stoneware, ingobbio, glass.": "https://i.postimg.cc/kMcMHS3z/5-4.png",
      "Ago di sale 2008 - cm 58 x 46 x h 39 - stoneware, ingobbio, glass. ": "https://i.postimg.cc/9FQXHfcM/5-5.png",
    },
    alt: "Sun",
    year: "2020",
    categoria: "b",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "",

  },
  {
    id: 85,
    title: "NESTS",
    portada: "https://ik.imagekit.io/xqhcmqpqo/artworks%20Nests/6.1.jpg?updatedAt=1715956215429",
    interior: {
      "Prayer for a sleeping child 2014 - cm 140 x 115 x 82 - stoneware, iron": "https://ik.imagekit.io/xqhcmqpqo/artworks%20Nests/6.1.jpg?updatedAt=1715956215429",
      "Prayer for a sleeping child 2014 - cm 140 x 115 x 82 - stoneware, iron ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20Nests/6.2.jpg?updatedAt=1715956216410",
      "Prayer for a sleeping child 2014 - cm 140 x 115 x 82 - stoneware, iron  ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20Nests/6.3.jpg?updatedAt=1715956216428",
      "Opus album 2020 2021. stoneware, porcelain, gold, cm 100 x 100 x 15.": "https://ik.imagekit.io/xqhcmqpqo/artworks%20Nests/6.4.JPG?updatedAt=1715956210450",
      "Opus album 2020 2021. stoneware, porcelain, gold, cm 100 x 100 x 15. ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20Nests/6.5.JPG?updatedAt=1715956211393",
      "Opus album 2020 2021. stoneware, porcelain, gold, cm 100 x 100 x 15.  ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20Nests/6.6.JPG?updatedAt=1715956211420",
    },
    alt: "Nests",
    year: "2014",
    categoria: "b",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "",


  },
  {
    id: 86,
    title: "ANIMAL",
    portada: "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.1.jpg?updatedAt=1715956310074",
    interior: {
      "I am afraid of being an animal - cm Ø 46 x 140- stoneware, Gmunden Musem collection": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.1.jpg?updatedAt=1715956310074",
      "I am afraid of being an animal 2013- cm Ø 46 x 140- stoneware, Gmunden Musem collection ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.2.jpg?updatedAt=1715956310051",
      "Animal III 2017 -  cm 63 x 31 x h 40   - stoneware, ingobbio, glass, private collection": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.3.JPG?updatedAt=1715956309348",
      "Animal III 2017 -  cm 63 x 31 x h 40   - stoneware, ingobbio, glass, private collection ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.4.JPG?updatedAt=1715956308911",
      "Dragon 2017 - cm 23 x 63 x h 56 - stoneware, glass. Ceramic Art Avenue Taoxichuan, Jingdezhen, China collection": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.5.JPG?updatedAt=1715956309169",
      "Animal II  2017 -  cm 33 x 37 x h 40  - stoneware, ingobbio, glass, private collection": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.6.jpg?updatedAt=1715956306693",
      "Animal  2015 -  cm 71 x 28 x h 33  - stoneware, ingobbio, glass, private collection": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.7.JPG?updatedAt=1715956309675",
      "Animal  2015 -  cm 71 x 28 x h 33  - stoneware, ingobbio, glass, private collection ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.8.JPG?updatedAt=1715956308659",
    },
    alt: "Animal",
    year: "2013",
    categoria: "b",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "",


  },
  {
    id: 87,
    title: "CARESSES DO NOT REACH THE SOUL",
    portada: "https://ik.imagekit.io/xqhcmqpqo/artworks%20caresses/8.1.JPG?updatedAt=1715956422291",
    interior: {
      "Battito 2017 -porcelain, glass celadon cm Ø 2 0x h 15. Private collection": "https://ik.imagekit.io/xqhcmqpqo/artworks%20caresses/8.1.JPG?updatedAt=1715956422291",
      "Battito 2017 -porcelain, glass celadon cm Ø 2 0x h 15 . Private collection": "https://ik.imagekit.io/xqhcmqpqo/artworks%20caresses/8.2.JPG?updatedAt=1715956420202",
      "Las caricias no llegan al alma 2016 -  cm Ø 12 x h 15. Gres, ingobbio, glass": "https://i.postimg.cc/7hwzkJVh/8-3.png",
      "Las caricias no llegan al alma 2016 - 2 x cm Ø 12 x h 15. Gres, ingobbio, glass": "https://ik.imagekit.io/xqhcmqpqo/artworks%20caresses/8.4.2.JPG?updatedAt=1715956416118",
      "Las caricias no llegan al alma 2016 - 2 x cm Ø 15 x h 15. Gres, ingobbio, glass": "https://ik.imagekit.io/xqhcmqpqo/artworks%20caresses/8.5.3.jpg?updatedAt=1715956417704",
      "Ago di sale I 2018 - porcelain cm 25x 25 ": "https://i.postimg.cc/KYT33Dp4/8-6.png",
      "Ago di sale I 2018 - porcelain cm 25x 25  ": "https://i.postimg.cc/qqJNYVJC/8-7.png",
    },
    alt: "CARESSES DO NOT REACH THE SOUL",
    year: "2017",
    categoria: "b",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "",


  },
  {
    id: 88,
    title: "SIEMBRA DIRECTA I",
    portada: "https://i.postimg.cc/43vLbVmN/10-1.jpg",
    interior: {
      "Habitat mutabile 2023 - stoneware- .Ph. Marco Parollo  ": "https://i.postimg.cc/43vLbVmN/10-1.jpg",
      "Habitat mutabile 2023 - stoneware- .Ph. Marco Parollo": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20i/10.2.jpeg?updatedAt=1715956501496",
      "Habitat mutabile 2023 - stoneware- .Ph. Marco Parollo ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20i/10.3.jpeg?updatedAt=1715956493147",
      "Habitat mutabile 2023 - stoneware- .Ph. Marco Parollo   ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20i/10.4.jpeg?updatedAt=1715956493181",
      "Alveolare/ Tummo 2023, stoneware. Ph. Marco Parollo ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20i/10.5.jpg?updatedAt=1715956509023",
      "Prayer for a sleeping child - stoneware .Ph. Marco Parollo": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20i/10.6.jpg?updatedAt=1715956506865",
      "Alveoli - stoneware .Ph. Marco Parollo ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20i/10.7.jpg?updatedAt=1715956509995",
    },
    alt: "Siembra directa",
    year: "2023",
    categoria: "a",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "si",

    header4:"SIEMBRA DIRECTA double solo show Ana Hillar & Oscar Dominguez",
    header5Negrita: "Palazzo San Giaccomo Russi, Italy giugno/settembre 2023.",
    header5: "Curator of exhibition and catalogue Alessandra Carini MAG Magazzeno Arte Contemporanea and Paolo Pileri.",
    texto:{
      txt1: "",
    },


    header42:"Habitat mutabile. 2023",
    header5Negrita2: "Site-specific installation",
    header52: "Stoneware, natural clay engobe, oxides, gold leaf, nylon thread.",

    texto2: {
      txt1: "The work defines a space within space.",
      txt2: "Creating the conditions to accommodate life, a light and transparent territory, elastic, mutable. A geography of its own without defined boundaries, an ideal, symbolic space of containment.",
      txt3: "The hope of satisfying a universal need of every living species: a place to inhabit.",
      txt4: "The hope of satisfying a universal need of every species: a place to inhabit.",
      txt5: "A space to symbolically collect passing lives, migratory flows, a network with a way out.",
      txt6: "Nature builds landscapes, modifies territories in a cyclic, balanced, ephemeral way. Man, on the other hand, modifies territories and geographies in an overpowering, permanent way. Man, on the contrary, modifies territories and geographies in an overbearing and permanent way, draws boundaries that define political and administrative divisions and delimit private property. This closure deprives a large part of the population and other species of the right to have their own and adequate habitat."
    },
  },
  {
    id: 89,
    title: "SIEMBRA DIRECTA II",
    portada: "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.1.jpg?updatedAt=1715956626047",
    interior: {
      "Tirelessly intent on dreaming 2023, stoneware, photo printing. Performance ph Raùl Cottone- .Ph. Marco Parollo": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.1.jpg?updatedAt=1715956626047",
      "Tirelessly intent on dreaming 2023, stoneware, photo printing. Performance ph Raùl Cottone- .Ph. Marco Parollo ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.2.jpg?updatedAt=1715956623343",
      "Tirelessly intent on dreaming 2023, stoneware, photo printing. Performance ph Raùl Cottone- .Ph. Marco Parollo  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.3.jpg?updatedAt=1715956634197",
      "Tirelessly intent on dreaming 2023,ph. Video Raùl Cottone .Ph. Marco Parollo": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.4.jpg?updatedAt=1715956632969",
      "Tirelessly intent on dreaming 2023,ph. Video Raùl Cottone .Ph. Marco Parollo ": "https://i.postimg.cc/05pJZnfs/11-5.jpg",
      "Siembra directa 2023,  raw clay, seeds, stoneware, glass. .Ph. Marco Parollo": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.6.jpg?updatedAt=1715956628625",
      "Siembra directa 2023,  raw clay, seeds, stoneware, glass. .Ph. Marco Parollo ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.7.jpg?updatedAt=1715956629589",
      "Siembra directa 2023,  raw clay, seeds, stoneware, glass. .Ph. Marco Parollo  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.8.jpg?updatedAt=1715956633022",
    },
    alt: "Siembra directa",
    year: "2023",
    categoria: "a",
    didascalia:"Siembra directa  Palazzo San Giaccomo Russi, Italy  2023 ",
    inicio: "",

    header4: "SIEMBRA DIRECTA double solo show Ana Hillar & Oscar Dominguez",
    header5Negrita: "Palazzo San Giaccomo Russi, Italy giugno/settembre 2023.",
    header5: "Curator of exhibition and catalogue Alessandra Carini MAG Magazzeno Arte Contemporanea and Paolo Pileri.",
    texto: {
      txt1: "",
    },

    header42:"Site-specific installations",
    header5Negrita2: "Tirelessly intent on dreaming - 2003/2023",
    header52: "Site-specific installation, stoneware and photographic print. Variable dimensions. Photography Raùl Cottone",


    texto2: {
      txt1: "The work is a reminder of our belonging to nature, from which we are often distracted or seem to have forgotten. The life cycle is one, and it is shared by all species living on the planet; by distancing ourselves from it, we have upset natural cycles and times. We prevail in our restlessness, curiosity, desire to leave an imprint, a trace in the passage of life, pretending that death does not belong to us.",
      txt2: "The title of the work is taken from a quote by M. Yourcenar - Memoirs of Hadrian [Those great prisoners of the rocks and the waves, eternally scourged by the sleepless ocean, also devoted to perpetual insomnia, but intent without ceasing on dreaming, would continue to oppose to the Olympian order their violence, their anguish, their perpetually frustrated desire. I found in that myth, set at the edge of the world, the theories of the philosophers on which I had been nourished: every man, in the course of his brief existence, must eternally choose between sleepless hope and the wise renunciation of all hope].",
    },

    header43: "Incapaces de dormir pero soñando sin cesar- 2003/2023",
    header5Negrita3: "Overhead photo projection.",
    header53: "Photography Raùl Cottone, editing Lucas Caballero, composition Ana Hillar",
    texto3: {
      txt1: "",
    },

    header44: "Siembra directa- listening to the earth. 2023",
    header5Negrita4: "Raw earth various seeds, water. Stoneware, enamel and glass.",
    header54: "",
    texto4: {
      txt1: "Attending to the life cycles, intervening in the changes, taking note of how our actions influence and transform the medium environment. The work will change during the exhibition period, following the life cycles of plants and soil. Visitors will be able to participate by giving water to plants according to their perceived needs.",
      txt2: "In the same way as nature behaves, the earth will sprout if it reaches an equilibrium, it will become dry and perish in the absence of water, it will collapse when there is too much water. It will be the responsibility of each visitor to the exhibition to take action or not to achieve and preserve this balance.",

    }
  },
  {
    id: 90,
    title: "TUMMO",
    portada: "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.1.jpg?updatedAt=1715956743853",
    interior: {
      "TUMMO gres - Ph Carlo Lanteri": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.1.jpg?updatedAt=1715956743853",
      "TUMMO gres - Ph Carlo Lanteri ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.2.2.jpg?updatedAt=1715956744192",
      "TUMMO gres - Ph Carlo Lanteri  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.3.jpg?updatedAt=1715956711401",
      "Habitat, stoneware - Ph Carlo Lanteri": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.4.jpg?updatedAt=1715956732532",
      "Habitat, stoneware - Ph Carlo Lanteri ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.5.jpg?updatedAt=1715956727286",
      "Habitat, stoneware - Ph Carlo Lanteri  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.6.jpg?updatedAt=1715956742144",
      "Habitat, stoneware - Ph Carlo Lanteri   ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.7.jpg?updatedAt=1715956742603",
      "Breath, stonewarw, gold. Ph Carlo Lanteri": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.8.jpg?updatedAt=1715956742516",
      "Breath, stonewarw, gold. Ph Carlo Lanteri ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.9.jpg?updatedAt=1715956742707",
      "Breath, stonewarw, gold. Ph Carlo Lanteri  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.10.jpg?updatedAt=1715956740335",
    },
    alt: "Proyecto 5",
    year: "2022",
    categoria: "a",
    didascalia:"TUMMO Tempesta Gallery Milano, Italy 2022",
    inicio: "si",

    // header4:"Tempesta Gallery / giugno – ottobre 2022",


    // texto: {
    //   txt1: "Tummo, la capacità di resistere",
    //   txt2: "energia nascosta che spinge verso il proseguo della vita.",
    //   txt3: "La rinascita",
    //   txt4: "Il potere segreto della terra vibrando nelle profondità, il potere segreto della vita pulsa dentro.",
    //   txt5: "La bocca del vulcano pronta ad esplodere.",
    //   txt6: "Pulsare di ogni cellula, di ogni organo, interiorità in espansione, vibrazione potente del respiro.",
    //   txt7: "Il respiro come unico motore.",
    //   txt8: "",
    //   txt9: "",
    // }
    header4: "Solo show Tempesta Gallery, Milan June / October 2022",
    header5Negrita: "https://www.tempestagallery.com",
    texto: {
      txt1: "Tummo, the ability to resist",
      txt2: "hidden energy that propels one towards the continuation of life.",
      txt3: "Rebirth",
      txt4: "The secret power of the earth vibrating in the depths, the secret power of life pulsating within.",
      txt5: "The mouth of the volcano ready to explode.",
      txt6: "Pulsing of every cell, every organ, interiority expanding, powerful vibration of the breath.",
      txt7: "Breath as the only engine.", 
    },

    header42:"TUMMO",
    header5Negrita2: "Tummo, which means inner fire in Tibetan, is a breathing technique practised by Tibetan Buddhists for more than a thousand years that allows one to survive extreme conditions.",
    texto2: {
      txt1: "In our living in an increasingly technological society, we often forget to listen to our body as an organism-container, the perfect engine where the strength and energy of our being resides.",
      txt2: "Attention is only paid to the outside, to the surface, to the image, neglecting and often blocking the most vital, instinctive and powerful part that is in each of us, the part that binds us deeply to nature.",
      txt3: "Tummo is a state of introspection, of discovery and listening without prejudice or fear, feeling the powerful life energy flowing, the perfect functionality of our organs, the continuous transformation. Tummo is a willingness to dialogue with nature, a predisposition to listen, to contemplate existence.",
      txt4: "Every time we inhale a small revolution is within us, overwhelming cells, blood flow, our brain activity, nervous system, all triggered thousands of times throughout our lives by such a natural and unconscious gesture as the act of breathing.",
      txt5: "In this project, starting from a primary element such as the earth, I try to approach listening to nature as a whole, drawing an analogy between human nature and the life forms of our planet.",
      txt6: "The natural systems, the forces that move the flow of rivers, the vigour that sows a seed, the latent energy in a volcano, the photosynthesis of plants, are comparable in all to the human organism as a whole. These are an example of adaptation to the extreme conditions to which man and the planet (because of man) are often subjected, they are proof of a strong and natural capacity for resistance, and in nature, also for rebirth.",
      txt7: "Taking matter from the earth, using ancient techniques such as wood firing, knowing how to guide the fire to assist in the necessary transformation is fundamental in my research, bringing me closer to the roots of an ancestral culture that belongs to us. The direct dialogue with the material implies a slow and long process, one could compare it to the cycles of agriculture, like a mantra, it marks time in a slow and repetitive way.",
      txt8: "First there is only emptiness, the perception of emptiness, listening.",
      txt9: "Building around the emptiness with the rhythmic cadence of the internal beats of the body, a constant repetition of the gesture, like breathing.",
      txt10: "Tummo is the expression of the beat that tirelessly endures, persists and repeats itself, an unconscious, instinctive, natural, inevitably incessant vital gesture."
    }
  },
  {
    id: 91,
    title: "EVEN IF ONLY TIME IS LEFT IN MY PLACE",
    portada: "https://ik.imagekit.io/xqhcmqpqo/proyects%20even%20if/13.1.JPG?updatedAt=1715956800077",
    interior: {
      "Even if only time is left in my place, 2015- cm 420 x 250 x 80 - stoneware. CERAMIX, Maastricht-Paris - Sevres": "https://ik.imagekit.io/xqhcmqpqo/proyects%20even%20if/13.1.JPG?updatedAt=1715956800077",
      "Even if only time is left in my place, 2015- cm 420 x 250 x 80 - stoneware. CERAMIX, Maastricht-Paris - Sevres ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20even%20if/13.2.JPG?updatedAt=1715956805526",
      "Even if only time is left in my place, 2015- cm 420 x 250 x 80 - stoneware. CERAMIX, Maastricht-Paris - Sevres  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20even%20if/13.3.JPG?updatedAt=1715956803881",
      "Even if only time is left in my place-  cm 420 x 250 x 80 - stoneware. Selvatico": "https://ik.imagekit.io/xqhcmqpqo/proyects%20even%20if/13.4.jpg?updatedAt=1715956792328",
      "Even if only time is left in my place-  cm 420 x 250 x 80 - stoneware. Selvatico ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20even%20if/13.5.jpg?updatedAt=1715956797764",
      " Even if only time is left in my place,  cm 450 x 250 x 80 - stoneware- International Museum of Ceramics in Faenza (RA) Italy.": "https://i.postimg.cc/vmRHkgbV/13-6.jpg",
    },
    alt: "EVEN IF ONLY TIME IS LEFT IN MY PLACE",
    year: "2015",
    categoria: "a",
    didascalia:"CERAMIX  from Rodin to Schütte 2015/16 - Bonnefantenmuseum Maastricht, Netherlands - La Maison Rouge Paris- Sèvres, France.",
    inicio: "si",


    header4: "Even if only time is left in my place",
    texto: {
      txt1: "The work was part of the exhibition CERAMIX from Rodin to Schüte - Maastricht – Paris – Sevres International exhibition on 20th century ceramic sculpture 2015/2016",
      txt2: "Bonnefantenmuseum Maastricht - La Maison Rouge Paris. Curators of the exhibition and Catalogue Camille Morineau and Lucia Pesapane.",
    }
  },
  {
    id: 92,
    title: "HABITAT",
    portada: "https://ik.imagekit.io/xqhcmqpqo/proyects%20habitat/14.1.JPG?updatedAt=1715956869694",
    interior: {
      "Nest  - stoneware, photo studio": "https://ik.imagekit.io/xqhcmqpqo/proyects%20habitat/14.1.JPG?updatedAt=1715956869694",
      "Nest  - stoneware, photo studio ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20habitat/14.2.JPG?updatedAt=1715956869824",
      "Habitat 2017 cm diam 120 x h 400- terraglia.": "https://ik.imagekit.io/xqhcmqpqo/proyects%20habitat/14.3.jpg?updatedAt=1715956872459",
      "Habitat 2017 cm diam 120 x h 400- terraglia. ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20habitat/14.4.JPG?updatedAt=1715956871003",
      "Habitat 2017 cm diam 120 x h 400- terraglia.  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20habitat/14.5.JPG?updatedAt=1715956870873",
      "Habitat 2017 cm diam 120 x h 400- terraglia.   ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20habitat/14.6.JPG?updatedAt=1715956872158",
    },
    alt: "Proyecto 5",
    year: "2017",
    categoria: "a",
    didascalia:"Blanco Dentro 2017, Palazzo del Monte di Pietà, Forlì Italy.",
    inicio: "si",

    header4: "“... where are our glances from the past going now?”",
    texto: {
      txt1: "Over the years we have grown accustomed to Ana Cecilia Hillar's unexpected installations, apparently fragile and of profound introspection, the product of the slow labour of clever and knowedgeable hands, initially gifted in a more material and primordial field, and now having the semblance of total lightness, as if the material had overcome its own consistency and become almost diaphanous. This new cycle of work, the initial 'theoretical' presentation of which was made to the 58th Faenza Prize, highlights a direction which I would define as 'conceptual' in which a reflection on and research into the themes of travelling and dwellings prevails, of presence and absence, of emptiness and and the seeming silence that pervades it, of humankind's fragility and its relationships, of living as being and existing. The nest, the habitat, the container are mental occupations of a space, revealing our desire to escape into the lightness of the atmosphere which surrounds us and our hope to build different relationships. They are the geography of existence, ideal places to live, spaces for imaginary migrations. There is a path, a common thread, an almost spiritual shiver that connects the works and charges them with a special energy, which goes beyond the material of their apparent solidity: the artist invites us to look outside our cage over our borders, beyond the the reach of our limited eyes. In those branches, which make up an immaterial texture, we find traces of a tale, archetypal and primordial shapes, the almost-epic dimension of our existence, rendered through an age-old method of work. The traces left by small natural pieces underline the need for mental lightness, the architecture which emerges silently recalls imaginary figures, the apparent transparency reminds us of the fragility of our existence and life, replicated in those branches which grow infinitely as if in an existential mantra, pervaded by the scent of secular spirituality.",
      txt2:"Claudia Casali"
    }
  },
  {
    id: 93,
    title: "BLANCO",
    portada: "https://i.postimg.cc/qRnGdZtG/15-1.jpg",
    interior: {
      "Nido 2019, stoneware private collection.": "https://i.postimg.cc/qRnGdZtG/15-1.jpg",
      "Nido 2019, stoneware private collection. ": "https://i.postimg.cc/wBnkZdBv/15-2.jpg",
      "Nido 2019, stoneware private collection.  ": "https://i.postimg.cc/2ScGdWRn/15-3.jpg",
      "Atolo 2010, collaboration whit Silvia Miino, Stoneware. International Museum of Ceramics in Faenza, Italy": "https://i.postimg.cc/7YCtBX9m/18-5.jpg",
      "Atolo 2010, collaboration whit Silvia Miino, Stoneware. International Museum of Ceramics in Faenza, Italy ": "https://i.postimg.cc/wMrfqsqX/18-6.jpg",
      "Inside white 2007, porcelain, nylon, salt.  ": "https://i.postimg.cc/V6YHD8ZC/18-3.jpg",
      "Inside white 2007, porcelain, nylon, salt.   ": "https://i.postimg.cc/RFXpYD2b/18-4.jpg",

    },
    alt: "Proyecto 5",
    year: "2019",
    categoria: "a",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "si",
    // Decia 44 ver que onda si falla algo
    header4: "Blanco, Museo Zauli / Banca di Romagna, curated by Viola Emaldi, Catalogue edited by Banca di Romagna.",
    header5Negrita: "Faenza RA, 2007",
    texto: {
      txt1: "Ana Hillar's works (installations and sculptures) invite us to participate in something bigger, that goes beyond her exhibition spaces, beyond the boundaries of the work. Spectators are called upon to interact, to reflect and explore beyond appearances and what the distracted eye might catch. From the title it is immediately clear that Ana's is a work that unleashes a strong poetic energy without the need for contrivances.",
      txt2: "[...-] In an attempt to communicate through absolute simplicity, the artist, on the occasion of this solo exhibition, arranges almost weightless installations, whose volumes are filtered through the intensity of white colour. These are works of immediate minimalism, visually and physically pervaded with pure poetry (formally expressed in the fragility and precision of the materials). The interiority of white has the ability to weave an intimate and reserved relationship, questioning us about our identity, bringing out conflicting feelings and fears in the face of which we appear small, defenceless, protected only by ourselves. Waiting for the shadows of twilight to reveal what we do not see in the light of day. They are works endowed with a hidden strength, subtended by a hue that, by its very nature, has correspondences in the immaterial, in the spiritual, and capable of capturing the viewer's attention, then aiming straight at their heart. This is why they require caution in the face of their delicacy and fragility: a breath would be enough to destroy them, real or apparent. Time is an essential, tangible element, so much so that, working with extreme concentration and calmness, the work can experience one of its own, special, coinciding with the space of the work.",
      txt3: "So today, in a clearly frenetic age, in which it seems that no one wants to stop and try to understand and deepen their thinking, Ana Hillar´s action appears pure nonsense, or rather, a purity-against-the-system.",
      txt4: "There is a narrative dimension in these works, narrated by Ana as if they were prayers, to be listened to before being looked at, capable of (unconsciously) instantaneously penetrating the mysteries of life and offered in the hope of a better future.",
      txt5: "Viola Emaldi",
    }
  },
  {
    id: 94,
    title: "HUMANO I",
    portada: "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20i/16.1.JPG?updatedAt=1715956988944",
    interior: {
      "Toda el alma para el rocio, earthenware. HUMANO Ph R. Tasinari.": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20i/16.1.JPG?updatedAt=1715956988944",
      "Toda el alma para el rocio, earthenware. HUMANO Ph R. Tasinari. ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20i/16.2.jpg?updatedAt=1715956988941",
      "Toda el alma para el rocio, earthenware. HUMANO Ph R. Tasinari.  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20i/16.3.jpg?updatedAt=1715956988376",
      "Toda el alma para el rocio, earthenware. HUMANO Ph R. Tasinari.   ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20i/16.4.jpg?updatedAt=1715956988636",

    },
    alt: "HUMANO I",
    year: "xxxx",
    categoria: "a",
    didascalia:"Humnao 2003 - International Museum of Ceramics in Faenza, Italy.",
    inicio: "",

    header4: "Humano, solo show at Museo Internazionale della Ceramica in Faenza (RA) Italy",
    header5Negrita: "Curator Josune Ruiz de Infante, Catalogue edited by L. Fabbri",
    header5: "07 June / 31 December 2003",
    texto: {
      txt1: "Ana Hillar has chosen earth, and the more primitive techniques of ceramics, as the artistic medium to privilege in her polysensorial and polymateric research, because she considers it more intimately linked to her natural mode of expression. For several years, the sculptor has been guided by a strong conviction that has become, over time, a sort of categorical imperative: ''Me entrego a creer, formamos parte de la tierra''. The intensity and impetus of these words, which, taken out of their context context might suggest some bitter insight, belong to Hillar's reflections on the materials of ceramics, published in the catalogue of an exhibition in his hometown in 1997. The force of this statement, from which emerges a powerful declaration of poetics, is emblematic of the artist`s entire oeuvre.",
      txt2: "[...] Ana Hillar states that she chose 'earth as her material because of its dimension of simple intimacy'. The artist loves to go and discover that interiority, but also its form: ''Then time stops and I find myself going through a ritual that has been repeated a thousand times in human history. Working the land, materials of every place, means establishing contact with the local tradition by retracing the memory of the place through material culture. Ana Hillar is an extraordinary devotee of what I have called the 'poor' side of ceramics, of that 'line of terracotta' typical of archaeological productions, recovered by the art of our century through certain post-informal experiments by sculptors such as Spagnulo, Valentini and Mainolfi.",
      txt3: "The clay chosen by Ana Hillar is earth taken from the earth, from a physical place that endows the material with an inexhaustible potential of metaphorical symbolic and above all energetic values; like Nanni Valentini, Ana likes to think that &quot;in the earth dwells the soul of the place&quot;. Indeed, in the investigation of the 'memory' of that clay taken directly from places, and in the search for that spirituality inherent in the ceramic material itself, is summed up in the poetics of our artist, whose work seems to be 'commanded' by a sort of of natural imperative, perceptible in the attitudes, in the choice of materials and techniques, in the design of forms and colours.",
      txt4: "The 'poverty' of materials and techniques superbly displayed in the artist's sculptural work is directly reflected in his anthropological andethnographic interests. It is, in fact, no coincidence that Hillar's professional relations with the world of pre-Columbian archaeology flowed into his specialization in ceramic restoration. What stands out in the Argentine artist's work is her desire to fuse nature, through materials and spaces, with culture, with man's memory in the history of places. [...]",
      txt5: "Ana seeks to create a space of tension between the objects and the places in which they are placed, which can only be reached by using that intuitive intelligence traceable to an ancient dimension now forgotten. [...]",
      txt6: "Josune Ruiz de Infante"
    }
  },
  {
    id: 95,
    title: "HUMANO II",
    portada: "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.1.jpg?updatedAt=1715957049474",
    interior: {
      "Tirelessly intent on dreaming 2003, stoneware, photo printing. Performance ph Raùl Cottone- .Ph. R. Tassinari": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.1.jpg?updatedAt=1715957049474",
      "Tirelessly intent on dreaming 2003, stoneware, photo printing. Performance ph Raùl Cottone- .Ph. R. Tassinari ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.2.jpg?updatedAt=1715957049211",
      "We are safe 2003, earthenware, engobe. International Museum of Ceramics in Faenza collection.": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.3.jpg?updatedAt=1715957049445",
      "We are safe 2003, earthenware, engobe. International Museum of Ceramics in Faenza collection. ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.4.jpg?updatedAt=1715957049413",
      "We are safe 2003, earthenware, engobe. International Museum of Ceramics in Faenza collection.  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.5.jpg?updatedAt=1715957050668",
      "Ago di paglia 2006 - stoneware, straw- Ph R. Tassinari cm 180 x 45 x 30 ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.6.jpg?updatedAt=1715957050043",
      "Ago di paglia 2006 - stoneware, straw- Ph R. Tassinari cm 180 x 45 x 30  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.7.jpg?updatedAt=1715957050169",

    },
    alt: "Proyecto 5",
    year: "HUMANO II",
    categoria: "a",
    didascalia:"Humnao 2003 - International Museum of Ceramics in Faenza, Italy.",
    inicio: "",
    header4: "Humano, solo show at Museo Internazionale della Ceramica in Faenza (RA) Italy",
    header5Negrita: "Curator Josune Ruiz de Infante, Catalogue edited by L. Fabbri",

  },
  {
    id: 96,
    title: "SUSPENDIDAS",
    portada: "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.1.JPG?updatedAt=1715957129412",
    interior: {
      "Shadow of the wind 2001, reduced terracotta.International Museum of Ceramics in Faenza collection.": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.1.JPG?updatedAt=1715957129412",
      "Shadow of the wind 2001, reduced terracotta.International Museum of Ceramics in Faenza collection. ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.2.JPG?updatedAt=1715957130087",


      "All soul for dew 2005, earthenware, engobe. Palazzuolo sul Senio, Italy.": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.7.jpg?updatedAt=1715957130436",
      "All soul for dew 2005, earthenware, engobe. Palazzuolo sul Senio, Italy. ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.8.jpg?updatedAt=1715957129888",
      "Stalactite 2011, earthenware, engobe. Casa Rossini, Lugo, Italy.": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.9.jpg?updatedAt=1715957127611",
      "Stalactite 2011, earthenware, engobe. Casa Rossini, Lugo, Italy. ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.10.jpg?updatedAt=1715957128001",
      "Every dark night awaits the dawn 2003, earthenware, engobe. Museo territorio Faenza, permanent collection": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.11.jpg?updatedAt=1715957133523",
      "Every dark night awaits the dawn 2003, earthenware, engobe. Museo territorio Faenza, permanent collection ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.12.JPG?updatedAt=1715957133400",
    },
    alt: "SUSPENDIDAS",
    year: "2001",
    categoria: "a",
    didascalia:" Sombra del viento 2001 - Faenza Award in the 52nd edition of the International Competition of Ceramic Art ",
    inicio: "",

  },
  
  
];


// Data en ingles

const dataIta = [
  {
    id: 80,
    title: "ALVEOLAR",
    portada: "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.1.1.JPG?updatedAt=1715955703278",
    interior:{
      "Alveolare 2023 - cm 100 x 100 x h 15 - Gres, ingobbio. Cortesia Galleria Lara e Rino Costa": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.1.1.JPG?updatedAt=1715955703278",
      "Alveolare 2023 - cm 100 x 100 x h 15 - Gres, ingobbio. Cortesia Galleria Lara e Rino Costa ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.2.jpg?updatedAt=1715955703337", 
      "Nuove terre 2024 - cm  Ø  50 x H 13 - Gres, pigment. Cortesia Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.3.4.JPG?updatedAt=1715955623969", 
      "Nuove terre 2024 - cm  Ø  50 x H 13 - Gres, pigment. Cortesia Tempesta Gallery ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.4.6.JPG?updatedAt=1715955625305", 
      "Alveoli 2022 - cm 49 x 27 x h 9 - Gres. Cortesia Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.5.1.jpg?updatedAt=1715955641974", 
      "Alveoli 2022 - cm 49 x 27 x h 9 - Gres. Cortesia Tempesta Gallery ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.6.2.jpg?updatedAt=1715955645652", 
      "Alveolo 2022 - cm 39 x 32 x h 16 - Gres, glass. Cortesia Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.7.3.jpg?updatedAt=1715955634340", 
      "Alveolo 2022 - cm 39 x 32 x h 16 - Gres, glass. Cortesia Tempesta Gallery ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.8.jpg?updatedAt=1715955632913", 
      "Deep breath 2022- cm 47 x 28 x h 4 - Gres, ingobbio, alluminio. Cortesia Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/artworks%20alveolar/1.9.1.jpg?updatedAt=1715955637727", 
      "Deep breath 2022- cm 47 x 28 x h 4 - Gres, ingobbio, alluminio. Cortesia Tempesta Gallery ": "https://i.postimg.cc/LsVGs98Q/1-10-2.jpg", 
      
    },
    alt: "Alveolar",
    year: "2023",
    categoria: "b",
    didascalia:"Alveolare 2023 - cm 100 x 100 x h 15 - stoneware, ingobbio.Courtesy Galleria Lara e Rino Costa",
    inicio: "si",

  },
  {
    id: 81,
    title: "INNERFIRE",
    portada: "https://ik.imagekit.io/xqhcmqpqo/Artworks%20innerfire/12.JPG?updatedAt=1721998036234",
    interior: {
      "Innerfire -  2023 - cm 40 x 39 x h 36 - gres.  ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20innerfire/2.1%20jpg.jpg?updatedAt=1715955811713",
      "Innerfire -  2023 - cm 40 x 39 x h 36 - gres. ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20innerfire/2.2.jpg?updatedAt=1715955811747",
      "Innerfire -  2023 - cm 40 x 39 x h 36 - gres.": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20innerfire/2.3.jpg?updatedAt=1715955811570",
      "Innerfire -  2023 - cm 40 x 39 x h 36 - gres.   ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20innerfire/2.4.JPG?updatedAt=1715955813900",
      "Innerfire -  2023 - cm 40 x 39 x h 36 - gres.    ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20innerfire/12.JPG?updatedAt=1721998036234",

    },
    alt: "Innerfire",
    year: "2023",
    categoria: "b",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "si",

  },
  {
    id: 82,
    title: "TUMMO",
    portada: "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.1.JPG?updatedAt=1715955896773",
    interior: {
      "Tummo II cm Ø  40 h 63 - Gres, ingobbio. Cortesia Galleria Lara e Rino Costa": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.1.JPG?updatedAt=1715955896773",
      "Tummo II cm Ø  40 h 63 - Gres, ingobbio. Cortesia Galleria Lara e Rino Costa ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.2.jpg?updatedAt=1715955897158",
      "Tummo I 2021 - cm Ø 48 x h 56 - Gres, ingobbio. Cortesia Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.3.2.JPG?updatedAt=1715955897254",
      "Tummo I 2021 - cm Ø 48 x h 56 - Gres, ingobbio. Cortesia Tempesta Gallery ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.4.3.JPG?updatedAt=1715955896379",
      "Tummo III  2022 - cm Ø 46 x h 65 - Gres, ingobbio. Cortesia Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.5.1.JPG?updatedAt=1715955895693",
      "Tummo III  2022 - cm Ø 46 x h 65 - Gres, ingobbio. Cortesia Tempesta Gallery ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.6.2.jpg?updatedAt=1715955897142",
      "Tummo IV - 2022 - cm  Ø 48 x h 70 -  Gres, ingobbio. Cortesia Tempesta Gallery": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.7.JPG?updatedAt=1715955896569",
      "Tummo IV - 2022 - cm  Ø 48 x h 70 -  Gres, ingobbio. Cortesia Tempesta Gallery ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20tummo/3.8.JPG?updatedAt=1715955896671",
    },
    alt: "Tummo",
    year: "2022",
    categoria: "b",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "si",

    header4: "Tempesta Gallery, Milano / mostra personale giugno – ottobre 2022",
    header5Negrita: "https://www.tempestagallery.com",
    texto: {
      txt1: "Tummo, la capacità di resistere",
      txt2: "energia nascosta che spinge verso il proseguo della vita.",
      txt3: "La rinascita",
      txt4: "Il potere segreto della terra vibrando nelle profondità, il potere segreto della vita pulsa dentro.",
      txt5: "La bocca del vulcano pronta ad esplodere.",
      txt6: "Pulsare di ogni cellula, di ogni organo, interiorità in espansione, vibrazione potente del respiro.",
      txt7: "Il respiro come unico motore.", 
    },

    header42:"TUMMO",
    header5Negrita2: "Tummo, che in tibetano significa fuoco interiore, è una tecnica di respirazione praticata dai´buddisti tibetani da più di mille anni che permette di sopravvivere a condizioni estreme.",
    texto2: {
      txt1: "Nel nostro vivere in una società sempre più tecnologica, speso dimentichiamo di ascoltare il nostro corpo in quanto organismo-contenitore, perfetto motore dove risiede la forza e la energia del nostro essere. L’attenzione viene posta solo all’esterno, alla superficie, all’immagine, trascurando e speso bloccando la parte più vitale, istintiva e potente che è in ognuno di noi, quella che ci lega profondamente alla natura.",
      txt2: "Tummo è uno stato d’introspezione, di scoperta e di ascolto senza pregiudizi o paura, sentire l’energia vitale potente che fluisce, la perfetta funzionalità dei nostri organi, la trasformazione continua. Tummo è una volontà di dialogo con la natura, una predisposizione all’ascolto, alla contemplazione dell’esistenza.",
      txt3: "Ogni volta che inspiriamo una piccola rivoluzione è in noi, che travolge cellule, flusso sanguineo, attività del nostro cervello, sistema nervoso, il tutto scatenato migliaia di volte nel corso delle nostre vite da un gesto naturale e inconsapevole come l’atto di respirare.",
      txt4: "In questo progetto, a partire di un elemento primario com’è la terra cerco di avvicinarmi all’ascolto della natura nel suo insieme, tracciando una analogia tra la natura umana e le forme vitali del nostro pianeta. I sistemi naturali, le forze che muovono i flussi dei fiumi, il vigore che spigiona un seme, la energia latente in un vulcano, la fotosintesi delle piante, sono paragonabili in tutto all’organismo umano nel suo complesso. Queste sono un esempio di adattamento alle condizioni estreme a cui spesso l’uomo e il pianeta (a causa dell’uomo) sono sottoposti, sono dimostrazione di una forte e naturale capacità di resistenza, e nella natura, anche di rinascita.",
      txt5: "Prelevare dalla terra la materia, avvalermi di tecniche antiche, come la cottura a legna, saper guidare il fuoco per assistere alla necessaria trasformazione è fondamentale nella mia ricerca, avvicinandomi alle radici di una cultura ancestrale che ci appartiene. Il dialogo diretto con la materia implica un processo lento e lungo, si potrebbe comparare ai cicli dell’agricoltura, come un mantra, scandisce il tempo in modo lento e ripetitivo.",
      txt6: "Prima esiste solo un vuoto, la percezione del vuoto, l’ascolto.",
      txt7: "Costruire attorno al vuoto con la cadenza ritmica dei battiti interni del corpo, una ripetizione costante del gesto, come il respiro.",
      txt8: "First there is only emptiness, the perception of emptiness, listening.",
      txt9: "Tummo è l’espressione del battito che instancabilmente resiste, perdura e si ripete, gesto vitale inconsapevole, istintivo, naturale, inevitabilmente incessante.",
    }
  },
  {
    id: 83,
    title: "INVISIBLE EXPANSION",
    portada: "https://i.postimg.cc/zfMPd005/4-1.jpg",
    interior: {
      "Invisible expansion II 2022-  cm 50 x 10 x h 7 -  gres, ingobbio. Cortesia Tempesta Gallery": "https://i.postimg.cc/zfMPd005/4-1.jpg",
      "Invisible expansion II 2022-  cm 50 x 10 x h 7 -  gres, ingobbio. Cortesia Tempesta Gallery ": "https://i.postimg.cc/1X17SXkj/4-2.jpg",
      "Invisible expansion I 2022-  cm Ø 27 x h 10 -  gres, ingobbio. Cortesia Tempesta Gallery": "https://i.postimg.cc/prQGLxxX/4-3.jpg",
      "Invisible expansion I 2022-  cm Ø 27 x h 10 -  gres, ingobbio. Cortesia Tempesta Gallery ": "https://i.postimg.cc/kgJZDV2r/4-4.jpg",
      "Puf 2021 - cm  Ø 27 x h 24 -  gres, ingobbio.": "https://i.postimg.cc/pXt3bcxL/4-5-1.jpg",
      "Puf 2021 - cm  Ø 27 x h 24 -  gres, ingobbio. ": "https://i.postimg.cc/2jWgtRst/4-6-2.jpg",
    },
    alt: "INVISIBLE EXPANSION",
    year: "2022",
    categoria: "b",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "si",

  },
  {
    id: 84,
    title: "SUN",
    portada: "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Sun/5.1.JPG?updatedAt=1715956032176",
    interior: {
      "Sun 2020 - cm 128 x 35 x 35 - Gres , pigmento. Cortesia Galleria Lara e Rino Costa": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Sun/5.1.JPG?updatedAt=1715956032176",
      "Sun 2020 - cm 128 x 35 x 35 - Gres , pigmento. Cortesia Galleria Lara e Rino Costa ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Sun/5.2.jpg?updatedAt=1715956032257",
      "Sun 2020 - cm 128 x 35 x 35 - Gres , pigmento. Cortesia Galleria Lara e Rino Costa  ": "https://ik.imagekit.io/xqhcmqpqo/Artworks%20Sun/5.3.jpg?updatedAt=1715956025816",
      "Ago di sale 2008 - cm 58 x 46 x h 39 - Gres, ingobbio, smalto.": "https://i.postimg.cc/kMcMHS3z/5-4.png",
      "Ago di sale 2008 - cm 58 x 46 x h 39 - Gres, ingobbio, smalto. ": "https://i.postimg.cc/9FQXHfcM/5-5.png",
    },
    alt: "Sun",
    year: "2020",
    categoria: "b",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "",

  },
  {
    id: 85,
    title: "NESTS",
    portada: "https://ik.imagekit.io/xqhcmqpqo/artworks%20Nests/6.1.jpg?updatedAt=1715956215429",
    interior: {
      "Plegaria para un niño dormido 2014 - cm 140 x 115 x 82 - Gres, ferro": "https://ik.imagekit.io/xqhcmqpqo/artworks%20Nests/6.1.jpg?updatedAt=1715956215429",
      "Plegaria para un niño dormido 2014 - cm 140 x 115 x 82 - Gres, ferro ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20Nests/6.2.jpg?updatedAt=1715956216410",
      "Plegaria para un niño dormido 2014 - cm 140 x 115 x 82 - Gres, ferro  ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20Nests/6.3.jpg?updatedAt=1715956216428",
      "Opus album 2020 2021. Gres, porcellana, oro, cm 100 x 100 x 15.": "https://ik.imagekit.io/xqhcmqpqo/artworks%20Nests/6.4.JPG?updatedAt=1715956210450",
      "Opus album 2020 2021. Gres, porcellana, oro, cm 100 x 100 x 15. ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20Nests/6.5.JPG?updatedAt=1715956211393",
      "Opus album 2020 2021. Gres, porcellana, oro, cm 100 x 100 x 15.  ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20Nests/6.6.JPG?updatedAt=1715956211420",
    },
    alt: "Nests",
    year: "2014",
    categoria: "b",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "",


  },
  {
    id: 86,
    title: "ANIMAL",
    portada: "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.1.jpg?updatedAt=1715956310074",
    interior: {
      "Tengo mucho miedo de ser un animal 2013- cm Ø 46 x 140- gres, collezione Museo di Gmunden, Austria": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.1.jpg?updatedAt=1715956310074",
      "Tengo mucho miedo de ser un animal 2013- cm Ø 46 x 140- gres, collezione Museo di Gmunden, Austria ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.2.jpg?updatedAt=1715956310051",
      "Animal III 2017 -  cm 63 x 31 x h 40   - gres, ingobbio, smalto. Collezione privatta": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.3.JPG?updatedAt=1715956309348",
      "Animal III 2017 -  cm 63 x 31 x h 40   - gres, ingobbio, smalto. Collezione privatta ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.4.JPG?updatedAt=1715956308911",
      "Dragon 2017 - cm 23 x 63 x h 56 - gres, smalto. Ceramic Art Avenue Taoxichuan, Jingdezhen, China, Collezione permanente": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.5.JPG?updatedAt=1715956309169",
      "Animal II  2017 -  cm 33 x 37 x h 40  - gres, ingobbio, smalto. Collezione privatta": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.6.jpg?updatedAt=1715956306693",
      "Animal  2015 -  cm 71 x 28 x h 33  - gres, ingobbio, smalto. Collezione privatta": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.7.JPG?updatedAt=1715956309675",
      "Animal  2015 -  cm 71 x 28 x h 33  - gres, ingobbio, smalto. Collezione privatta ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20animal/7.8.JPG?updatedAt=1715956308659",
    },
    alt: "Animal",
    year: "2013",
    categoria: "b",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "",


  },
  {
    id: 87,
    title: "CARESSES DO NOT REACH THE SOUL",
    portada: "https://ik.imagekit.io/xqhcmqpqo/artworks%20caresses/8.1.JPG?updatedAt=1715956422291",
    interior: {
      "Battito 2017 -porcellana, smalto celadon cm Ø 2 0x h 15": "https://ik.imagekit.io/xqhcmqpqo/artworks%20caresses/8.1.JPG?updatedAt=1715956422291",
      "Battito 2017 -porcellana, smalto celadon cm Ø 2 0x h 15 ": "https://ik.imagekit.io/xqhcmqpqo/artworks%20caresses/8.2.JPG?updatedAt=1715956420202",
      "Las caricias no llegan al alma 2016 -  cm Ø 12 x h 15. Gres, ingobbio, smalto": "https://i.postimg.cc/7hwzkJVh/8-3.png",
      "Las caricias no llegan al alma 2016 - 2 x cm Ø 12 x h 15. Gres, ingobbio, smalto": "https://ik.imagekit.io/xqhcmqpqo/artworks%20caresses/8.4.2.JPG?updatedAt=1715956416118",
      "Las caricias no llegan al alma 2016 - 2 x cm Ø 15 x h 15. Gres, ingobbio, smalto": "https://ik.imagekit.io/xqhcmqpqo/artworks%20caresses/8.5.3.jpg?updatedAt=1715956417704",
      "Ago di sale I 2018 - porcellana cm 25x 25 ": "https://i.postimg.cc/KYT33Dp4/8-6.png",
      "Ago di sale I 2018 - porcellana cm 25x 25  ": "https://i.postimg.cc/qqJNYVJC/8-7.png",
    },
    alt: "CARESSES DO NOT REACH THE SOUL",
    year: "2017",
    categoria: "b",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "",


  },
  {
    id: 88,
    title: "SIEMBRA DIRECTA I",
    portada: "https://i.postimg.cc/43vLbVmN/10-1.jpg",
    interior: {
      "Habitat mutabile 2023 - stoneware- .Ph. Marco Parollo  ": "https://i.postimg.cc/43vLbVmN/10-1.jpg",
      "Habitat mutabile 2023 - stoneware- .Ph. Marco Parollo": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20i/10.2.jpeg?updatedAt=1715956501496",
      "Habitat mutabile 2023 - stoneware- .Ph. Marco Parollo ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20i/10.3.jpeg?updatedAt=1715956493147",
      "Habitat mutabile 2023 - stoneware- .Ph. Marco Parollo   ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20i/10.4.jpeg?updatedAt=1715956493181",
      "Alveolare/ Tummo 2023, stoneware. Ph. Marco Parollo ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20i/10.5.jpg?updatedAt=1715956509023",
      "Prayer for a sleeping child - stoneware .Ph. Marco Parollo": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20i/10.6.jpg?updatedAt=1715956506865",
      "Alveoli - stoneware .Ph. Marco Parollo ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20i/10.7.jpg?updatedAt=1715956509995",
    },
    alt: "Siembra directa",
    year: "2023",
    categoria: "a",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "si",

    header4:"SIEMBRA DIRECTA double solo show Ana Hillar & Oscar Dominguez",
    header5Negrita: "Palazzo San Giaccomo Russi, Italy giugno/settembre 2023.",
    header5: "Curator of exhibition and catalogue Alessandra Carini MAG Magazzeno Arte Contemporanea and Paolo Pileri.",
    texto:{
      txt1: "",
    },


    header42:"Habitat mutabile. 2023",
    header5Negrita2: "Installazione site specific",
    header52: "Gres, pigmenti, filo. Dimensioni variabili.",

    texto2: {
      txt1: "L'opera definisce uno spazio nello spazio.",
      txt2: "Creare le condizioni per accogliere la vita, un habitat leggero e trasparente, elastico, mutevole. Una geografia a sé stante senza confini definiti, uno spazio ideale e simbolico di contenimento.",
      txt3: "La speranza di soddisfare un bisogno universale di ogni specie vivente: un luogo da abitare.",
      txt4: "Uno spazio per raccogliere simbolicamente vite di passaggio, flussi migratori, una rete con una via d'uscita.",
      txt5: "La natura costruisce paesaggi, modifica territori in modo ciclico, equilibrato, effimero.",
      txt6: "L'uomo, invece, modifica i territori e le geografie in modo prepotente e permanente. L'uomo, al contrario, modifica territori e geografie in modo prepotente e permanente, traccia confini che definiscono le divisioni politiche e amministrative e delimitano la proprietà privata. Questa chiusura priva gran parte della popolazione e altre specie del diritto di avere un habitat proprio e adeguato."
    },
  },
  {
    id: 89,
    title: "SIEMBRA DIRECTA II",
    portada: "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.1.jpg?updatedAt=1715956626047",
    interior: {
      "Incapaces de dormir pero soñando sin cesar, 2023, gres, Stampa fotografica. Performance ph Raùl Cottone- .Ph. Marco Parollo": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.1.jpg?updatedAt=1715956626047",
      "Incapaces de dormir pero soñando sin cesar, gres, Stampa fotografica. Performance ph Raùl Cottone- .Ph. Marco Parollo ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.2.jpg?updatedAt=1715956623343",
      "Incapaces de dormir pero soñando sin cesar, gres, Stampa fotografica. Performance ph Raùl Cottone- .Ph. Marco Parollo  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.3.jpg?updatedAt=1715956634197",
      "Incapaces de dormir pero soñando sin cesar,ph. Video Raùl Cottone .Ph. Marco Parollo": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.4.jpg?updatedAt=1715956632969",
      "Incapaces de dormir pero soñando sin cesar,ph. Video Raùl Cottone .Ph. Marco Parollo ": "https://i.postimg.cc/05pJZnfs/11-5.jpg",
      "Siembra directa 2023,  terra cruda, semi, gres, vetro. .Ph. Marco Parollo": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.6.jpg?updatedAt=1715956628625",
      "Siembra directa 2023,  terra cruda, semi, gres, vetro. .Ph. Marco Parollo ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.7.jpg?updatedAt=1715956629589",
      "Siembra directa 2023,  terra cruda, semi, gres, vetro. .Ph. Marco Parollo  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20sembra%20directa%20ii/11.8.jpg?updatedAt=1715956633022",
    },
    alt: "Siembra directa",
    year: "2023",
    categoria: "a",
    didascalia:"Siembra directa  Palazzo San Giaccomo Russi, Italy  2023 ",
    inicio: "",

    header4: "SIEMBRA DIRECTA doppia personale Ana Hillar & Oscar Dominguez",
    header5Negrita: "Palazzo San Giaccomo Russi, Italia, giugno/settembre 2023.",
    header5: "Curatore della mostra e del catalogo Alessandra Carini MAG Magazzeno Arte Contemporanea e Paolo Pileri",
    texto: {
      txt1: "",
    },

    header42:"Incapaces de dormir pero soñando sin cesar- 2003/2023",
    header5Negrita2: "Installazione site-specific, gres e stampa fotografica. Dimensioni variabili",
    header52: "Fotografia Raùl Cottone",


    texto2: {
      txt1: "Il lavoro è un richiamo alla nostra appartenenza alla natura, dalla quale siamo spesso distratti o sembra esserci dimenticati. Il ciclo vitale è uno solo, e accomuna tutte le specie che vivono sul pianeta, allontanandoci abbiamo sconvolto i cicli e i tempi naturali.",
      txt2: "Prevalgono la nostra irrequietezza, curiosità, desiderio di lasciare un’impronta, una traccia nel passaggio della vita, fingendo che la morte non ci appartiene.",
      txt3: "Il titolo del lavoro prende spunto da una citazione di M. Yourcenar - Memorie di Adriano “Quei grandi prigionieri delle rocce e delle onde, eternamente flagellati dall'oceano insonne, votati anch'essi a un'insonnia perenne, ma intenti senza posa a sognare, continuerebbero a opporre all'ordine olimpico la loro violenza, la loro angoscia, il loro desiderio perpetuamente frustrato. Ritrovavo in quel mito, ambientato ai confini del mondo, le teorie dei filosofi di cui m'ero nutrito: ogni uomo, nel corso della sua breve esistenza, deve scegliere eternamente tra la speranza insonne e la saggia rinuncia a ogni speranza.”",
    },

    header43: "Incapaces de dormir pero soñando sin cesar, video 2023",
    header5Negrita3: "Fotografia Raùl Cottone, montaggio Lucas Caballero",
    texto3: {
      txt1: "",
    },

    header44: "Siembra directa-ridare ascolto alla terra 2023",
    header5Negrita4: "Terra cruda, semi vari, acqua, gres, smalto e vetro.",
    header54: "",
    texto4: {
      txt1: "Assistere ai cicli vitali, intervenire ai mutamenti, prendere atto di come le nostre azioni influenzano e trasformano il medio ambiente.",
      txt2: "Il lavoro muterà durante il periodo della mostra, percorrendo i cicli vitali delle piante e del terreno. I visitatori potranno partecipare dando acqua alle piante in base alla percezione del fabbisogno di quest’ultime.",
      txt3: "Nello stesso modo in cui si comporta la natura, la terra germoglierà se raggiungerà un equilibrio, diventerà secca e periranno le piante in assenza di acqua, crollerà quando l’acqua sarà in eccesso. Sarà responsabilità di ogni fruitore della mostra intervenire o meno per raggiungere e conservare questo equilibrio."

    }
  },
  {
    id: 90,
    title: "TUMMO",
    portada: "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.1.jpg?updatedAt=1715956743853",
    interior: {
      "TUMMO gres - Ph Carlo Lanteri": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.1.jpg?updatedAt=1715956743853",
      "TUMMO gres - Ph Carlo Lanteri ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.2.2.jpg?updatedAt=1715956744192",
      "TUMMO gres - Ph Carlo Lanteri  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.3.jpg?updatedAt=1715956711401",
      "Habitat, gres - Ph Carlo Lanteri": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.4.jpg?updatedAt=1715956732532",
      "Habitat, gres - Ph Carlo Lanteri ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.5.jpg?updatedAt=1715956727286",
      "Habitat, gres - Ph Carlo Lanteri  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.6.jpg?updatedAt=1715956742144",
      "Habitat, gres - Ph Carlo Lanteri   ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.7.jpg?updatedAt=1715956742603",
      "Breath, gres, oro. Ph Carlo Lanteri": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.8.jpg?updatedAt=1715956742516",
      "Breath, gres, oro. Ph Carlo Lanteri ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.9.jpg?updatedAt=1715956742707",
      "Breath, gres, oro. Ph Carlo Lanteri  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20tummo/12.10.jpg?updatedAt=1715956740335",
    },
    alt: "Proyecto 5",
    year: "2022",
    categoria: "a",
    didascalia:"TUMMO Tempesta Gallery Milano, Italy 2022",
    inicio: "si",

    header4:"Tempesta Gallery / giugno – ottobre 2022",


    texto: {
      txt1: "Tummo, la capacità di resistere",
      txt2: "energia nascosta che spinge verso il proseguo della vita.",
      txt3: "La rinascita",
      txt4: "Il potere segreto della terra vibrando nelle profondità, il potere segreto della vita pulsa dentro.",
      txt5: "La bocca del vulcano pronta ad esplodere.",
      txt6: "Pulsare di ogni cellula, di ogni organo, interiorità in espansione, vibrazione potente del respiro.",
      txt7: "Il respiro come unico motore.",
      txt8: "",
      txt9: "",
    },

    header42:"TUMMO",
    header52: "Tummo, che in tibetano significa fuoco interiore, è una tecnica di respirazione praticata dai buddisti tibetani da più di mille anni che permette di sopravvivere a condizioni estreme.",

    texto2: {
      txt1: "Nel nostro vivere in una società sempre più tecnologica, speso dimentichiamo di ascoltare il nostro corpo in quanto organismo-contenitore, perfetto motore dove risiede la forza e la energia del nostro essere. L’attenzione viene posta solo all’esterno, alla superficie, all’immagine, trascurando e speso bloccando la parte più vitale, istintiva e potente che è in ognuno di noi, quella che ci lega profondamente alla natura.",
      txt2: "Tummo è uno stato d’introspezione, di scoperta e di ascolto senza pregiudizi o paura, sentire l’energia vitale potente che fluisce, la perfetta funzionalità dei nostri organi, la trasformazione continua. Tummo è una volontà di dialogo con la natura, una predisposizione all’ascolto, alla contemplazione dell’esistenza.",
      txt3: "Ogni volta che inspiriamo una piccola rivoluzione è in noi, che travolge cellule, flusso sanguineo, attività del nostro cervello, sistema nervoso, il tutto scatenato migliaia di volte nel corso delle nostre vite da un gesto naturale e inconsapevole come l’atto di respirare.",
      txt4: "In questo progetto, a partire di un elemento primario com’è la terra cerco di avvicinarmi all’ascolto della natura nel suo insieme, tracciando una analogia tra la natura umana e le forme vitali del nostro pianeta. I sistemi naturali, le forze che muovono i flussi dei fiumi, il vigore che spigiona un seme, la energia latente in un vulcano, la fotosintesi delle piante, sono paragonabili in tutto all’organismo umano nel suo complesso. Queste sono un esempio di adattamento alle condizioni estreme a cui spesso l’uomo e il pianeta (a causa dell’uomo) sono sottoposti, sono dimostrazione di una forte e naturale capacità di resistenza, e nella natura, anche di rinascita.",
      txt5: "Prelevare dalla terra la materia, avvalermi di tecniche antiche, come la cottura a legna, saper guidare il fuoco per assistere alla necessaria trasformazione è fondamentale nella mia ricerca, avvicinandomi alle radici di una cultura ancestrale che ci appartiene. Il dialogo diretto con la materia implica un processo lento e lungo, si potrebbe comparare ai cicli dell’agricoltura, come un mantra, scandisce il tempo in modo lento e ripetitivo.",
      txt6: "Prima esiste solo un vuoto, la percezione del vuoto, l’ascolto.",
      txt7: "Costruire attorno al vuoto con la cadenza ritmica dei battiti interni del corpo, una ripetizione costante del gesto, come il respiro.",
      txt8: "Tummo è l’espressione del battito che instancabilmente resiste, perdura e si ripete, gesto vitale inconsapevole, istintivo, naturale, inevitabilmente incessante."
    },
  },
  {
    id: 91,
    title: "EVEN IF ONLY TIME IS LEFT IN MY PLACE",
    portada: "https://ik.imagekit.io/xqhcmqpqo/proyects%20even%20if/13.1.JPG?updatedAt=1715956800077",
    interior: {
      "Aunque solo quede tiempo en mi lugar, 2015- cm 420 x 250 x 80 - gres. CERAMIX, Maastricht-Paris - Sevres": "https://ik.imagekit.io/xqhcmqpqo/proyects%20even%20if/13.1.JPG?updatedAt=1715956800077",
      "Aunque solo quede tiempo en mi lugar, 2015- cm 420 x 250 x 80 - gres. CERAMIX, Maastricht-Paris - Sevres ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20even%20if/13.2.JPG?updatedAt=1715956805526",
      "Aunque solo quede tiempo en mi lugar, 2015- cm 420 x 250 x 80 - gres. CERAMIX, Maastricht-Paris - Sevres  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20even%20if/13.3.JPG?updatedAt=1715956803881",
      "Aunque solo quede tiempo en mi lugar-  cm 420 x 250 x 80 - gres. Selvatico": "https://ik.imagekit.io/xqhcmqpqo/proyects%20even%20if/13.4.jpg?updatedAt=1715956792328",
      "Aunque solo quede tiempo en mi lugar-  cm 420 x 250 x 80 - gres. Selvatico ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20even%20if/13.5.jpg?updatedAt=1715956797764",
      " Aunque solo quede tiempo en mi lugar,  cm 450 x 250 x 80 - gres- International Museum of Ceramics in Faenza (RA) Italy.": "https://i.postimg.cc/vmRHkgbV/13-6.jpg",
    },
    alt: "EVEN IF ONLY TIME IS LEFT IN MY PLACE",
    year: "2015",
    categoria: "a",
    didascalia:"CERAMIX  from Rodin to Schütte 2015/16 - Bonnefantenmuseum Maastricht, Netherlands - La Maison Rouge Paris- Sèvres, France.",
    inicio: "si",


    header4: "Aunque solo quede tiempo en mi lugar",
    texto: {
      txt1: "L'opera ha fatto fparte della mostra CERAMIX da Rodin a Schüte - Maastricht - Parigi - Sevres. ",
      txt2: "Mostra internazionale sulla scultura ceramica del XX secolo 2015/2016.",
      txt3: "Bonnefantenmuseum Maastricht - La Maison Rouge Parigi. Curatori della mostra e del catalogo Camille Morineau e Lucia Pesapane.",
    }
  },
  {
    id: 92,
    title: "HABITAT",
    portada: "https://ik.imagekit.io/xqhcmqpqo/proyects%20habitat/14.1.JPG?updatedAt=1715956869694",
    interior: {
      "Nido  - stoneware, photo studio": "https://ik.imagekit.io/xqhcmqpqo/proyects%20habitat/14.1.JPG?updatedAt=1715956869694",
      "Nido  - stoneware, photo studio ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20habitat/14.2.JPG?updatedAt=1715956869824",
      "Habitat 2017 cm diam 120 x h 400- terraglia.": "https://ik.imagekit.io/xqhcmqpqo/proyects%20habitat/14.3.jpg?updatedAt=1715956872459",
      "Habitat 2017 cm diam 120 x h 400- terraglia. ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20habitat/14.4.JPG?updatedAt=1715956871003",
      "Habitat 2017 cm diam 120 x h 400- terraglia.  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20habitat/14.5.JPG?updatedAt=1715956870873",
      "Habitat 2017 cm diam 120 x h 400- terraglia.   ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20habitat/14.6.JPG?updatedAt=1715956872158",
    },
    alt: "Proyecto 5",
    year: "2017",
    categoria: "a",
    didascalia:"Blanco Dentro 2017, Palazzo del Monte di Pietà, Forlì Italy.",
    inicio: "si",

    header4: "“…dove vanno gli sguardi che un giorno partirono?”",
    texto: {
      txt1: "In questi anni Ana Cecilia Hillar ci ha abituato ad installazioni inattese, fragili all’apparenza e di grande introspezione, frutto del lento lavoro di abili e sapienti mani, inizialmente portate in un ambito più materico e primordiale, ora volte ad uno sguardo di assoluta leggerezza, come se la materia avesse superato la sua consistenza per rendersi quasi diafana. Questo nuovo ciclo, la cui anticipazione “teorica” è stata presentata al 58° Premio Faenza, sottolinea un percorso di natura potrei dire “concettuale” in cui prevalgono una riflessione e una ricerca sui temi del viaggio e della dimora, della presenza e dell’assenza, del vuoto e dell’apparente silenzio che lo pervade, della fragilità umana e delle sue relazioni, dell’abitare come essere ed esistere. Il nido, l’habitat, il contenitore sono mentali occupazioni di uno spazio, rivelazioni di un nostro desiderio di evasione nella leggerezza dell’atmosfera che ci circonda e ambizione di legami differenti. Sono geografie dell’esistenza, luoghi ideali di vita, spazi di transiti immaginari. Vi è un cammino, un filo conduttore, un brivido quasi spirituale che lega i lavori e li rende carichi di un’energia speciale, che va al di là del dato materiale dell’apparente consistenza: l’artista ci invita a guardare oltre la gabbia dei nostri confini, oltre lo sguardo dei nostri limitati occhi. In quei rami, che compongono una texture immateriale, troviamo le trame di un racconto, forme archetipiche e primordiali, la dimensione quasi epica della nostra esistenza, resa attraverso i modi di un fare antico. La traccia lasciata dai piccoli segmenti naturali sottolinea la necessità di una leggerezza mentale, l’architettura che emerge silenziosa richiama presenze immaginarie, l’apparente trasparenza rimanda alla fragilità della nostra esistenza e del nostro vivere, riproposti in quei rami che si sviluppano all’infinito quasi in un mantra esistenziale, pervaso da un profumo di laica spiritualità.",
      txt2:"Claudia Casali"
    }
  },
  {
    id: 93,
    title: "BLANCO",
    portada: "https://i.postimg.cc/qRnGdZtG/15-1.jpg",
    interior: {
      "Nido 2019, stoneware private collection.": "https://i.postimg.cc/qRnGdZtG/15-1.jpg",
      "Nido 2019, stoneware private collection. ": "https://i.postimg.cc/wBnkZdBv/15-2.jpg",
      "Nido 2019, stoneware private collection.  ": "https://i.postimg.cc/2ScGdWRn/15-3.jpg",
      "Atolo 2010, collaboration whit Silvia Miino, Stoneware. International Museum of Ceramics in Faenza, Italy": "https://i.postimg.cc/7YCtBX9m/18-5.jpg",
      "Atolo 2010, collaboration whit Silvia Miino, Stoneware. International Museum of Ceramics in Faenza, Italy ": "https://i.postimg.cc/wMrfqsqX/18-6.jpg",
      "Inside white 2007, porcelain, nylon, salt.  ": "https://i.postimg.cc/V6YHD8ZC/18-3.jpg",
      "Inside white 2007, porcelain, nylon, salt.   ": "https://i.postimg.cc/RFXpYD2b/18-4.jpg",

    },
    alt: "Proyecto 5",
    year: "2019",
    categoria: "a",
    didascalia:"Nombre, texto, material, ubicacion",
    inicio: "si",
    // Decia 44 ver que onda si falla algo
    header4: "Blanco, Museo Zauli / Banca di Romagna, a cura di Viola Emaldi, Catalogo Banca di Romagna.",
    header5Negrita: "Faenza RA, 2007",
    texto: {
      txt1: "Le opere (installazioni e sculture) di Ana Hillar ci invitano a partecipare a qualcosa di più grande, che va oltre i suoi spazi espositivi, oltre il confine dell’opera. Spettatori chiamati ad interagire, a riflettere ed esplorare al di là dell’apparenza e di ciò che lo sguardo distratto potrebbe cogliere. Dal titolo si comprende subito come quello di Ana sia un lavoro che sprigiona una forte energia poetica senza bisogno di artificiosi espedienti.",
      txt2: "[…-] Nel tentativo di comunicare attraverso l’assoluta semplicità, l’artista, in occasione di questa personale dispone istallazioni quasi prive di peso, i cui volumi sono filtrati attraverso l’intensità del colore bianco. Sono opere dal minimalismo immediato, pervase visivamente e fisicamente di pura poesia, (espressa formalmente nella fragilità e precisione dei materiali). L’interiorità del bianco ha la capacità tessere un rapporto intimo e riservato, interrogarci in merito alla nostra identità, facendo emergere sentimenti e paure contrastanti di fronte alle quali appariamo piccoli, indifesi, protetti solo da noi stessi. In attesa che l’ombra del crepuscolo sveli ciò che non vediamo con la luce del giorno. Sono opere dotate di una forza nascosta, sottese da una tinta che, per sua natura, ha corrispondenze nell’immateriale, nello spirituale, e capaci di catturare l’attenzione dello spettatore, per poi puntare dritto al loro cuore. Per questo richiedono cautela davanti alla loro delicatezza e fragilità: basterebbe un soffio a distruggerle, reali o apparenti che siano. Il tempo è un elemento essenziale, tangibile, tanto che, operando con estrema concentrazione e pacatezza, il lavoro può viverne uno tutto suo, particolare, coincidente con lo spazio dell’opera.",
      txt3: "Così oggi, in un’epoca palesemente frenetica, in cui pare che nessuno voglia fermarsi a cercare di capire ed approfondire il proprio pensiero, l’azione di Ana Hillar appare puro controsenso, o meglio, una purezza-contro-il-sistema.",
      txt4: "C’è una dimensione narrativa in queste opere, raccontate da Ana come fossero preghiere, da ascoltare prima che da guardare, capaci di penetrare (inconsciamente) istantaneamente i misteri della vita e offerte nella speranza di un futuro migliore.",
      txt5: "Viola Emaldi",
    }
  },
  {
    id: 94,
    title: "HUMANO I",
    portada: "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20i/16.1.JPG?updatedAt=1715956988944",
    interior: {
      "Toda el alma para el rocio, terraglia, ingobbio. HUMANO Ph R. Tasinari.": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20i/16.1.JPG?updatedAt=1715956988944",
      "Toda el alma para el rocio, terraglia, ingobbio. HUMANO Ph R. Tasinari. ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20i/16.2.jpg?updatedAt=1715956988941",
      "Toda el alma para el rocio, terraglia, ingobbio. HUMANO Ph R. Tasinari.  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20i/16.3.jpg?updatedAt=1715956988376",
      "Toda el alma para el rocio, terraglia, ingobbio. HUMANO Ph R. Tasinari.   ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20i/16.4.jpg?updatedAt=1715956988636",

    },
    alt: "HUMANO I",
    year: "xxxx",
    categoria: "a",
    didascalia:"Humnao 2003 - International Museum of Ceramics in Faenza, Italy.",
    inicio: "",

    header4: "Humano, Museo Internazionale della Ceramica in Faenza (RA) Italy",
    header5Negrita: "A cura di Josune Ruiz de Infante, Catalogo Lamberto Fabbri i Quderni del circolo degli artisti.",
    header5: "07 junio / 31 dicembre 2003",
    texto: {
      txt1: "Ana Hillar ha scelto la terra, e le tecniche più primitive della ceramica, come medium artistico da privilegiare nella sua ricerca polisensoriale e polimaterica, perché lo ritiene più intimamente legato alla sua naturale modalità d’espressione. Da diversi anni, la scultrice è guidata da una forte convinzione diventata, con il tempo, una sorta di imperativo categorico: “Me entrego a creer, formamos parte de la tierra”. L’intensità e l’impeto di queste parole, che estrapolate dal loro contesto potrebbero far pensare a qualche amara intuizione, appartengono alle riflessioni di Hillar intorno alle materie della ceramica, pubblicate sul catalogo di una mostra presentata nella sua città natale, nel 1997. La forza di quest’asserzione, da cui emerge una potente dichiarazione di poetica, è emblematica dell’intera opera dell’artista.",
      txt2: "[…] Ana Hillar afferma di avere scelto la “terra come materia per la sua dimensione di semplice intimità”. L’artista ama andare a scoprire quell’interiorità, ma anche la sua forma: “Allora il tempo si ferma e mi trovo a percorrere un rito mille volte ripetuto nella storia dell’uomo. Lavorare le terre, materiali di ogni luogo, significa stabilire contatti con la tradizione locale ripercorrendo la memoria del luogo attraverso la cultura materiale”. Ana Hillar è cultrice straordinaria di quello che ho definito il versante “povero” della ceramica, di quella “linea della terracotta” tipica delle produzioni archeologiche, recuperata dall’arte del nostro secolo attraverso certe sperimentazioni post-informali di scultori come Spagnulo, Valentini e Mainolfi.",
      txt3: "L’argilla scelta da Ana Hillar è terra prelevata dalla Terra, da un luogo fisico che conferisce alla materia una potenzialità inesauribile di valenze metaforiche, simboliche e soprattutto energetiche; come Nanni Valentini, Ana ama pensare che “nella terra abita l’anima del luogo3”. In effetti, nell’indagine della “memoria” di quella creta prelevata direttamente dai luoghi, e nella ricerca di quella spiritualità connaturata nella materia ceramica stessa, si riassume la poetica della nostra artista, la cui opera sembra essere “comandata” da una sorta d’imperativo naturale, percepibile negli atteggiamenti, nella scelta dei materiali e delle tecniche, nella progettazione delle forme e dei colori.",
      txt4: "La “povertà” dei materiali e delle tecniche superbamente esibita nell’opera scultorea dell’artista ha un riscontro diretto nei suoi interessi antropologici ed etnografici. Non è, infatti, un caso che i rapporti professionali di Hillar con il mondo dell’archeologia precolombiana siano confluiti nella sua specializzazione in restauro ceramico. Spicca, nell’opera dell’artista argentina, la volontà di fondere la natura, attraverso i materiali e gli spazzi, con la cultura, vale a dire con la memoria dell’uomo nella storia dei luoghi. […]",
      txt5: "Ana cerca di creare uno spazio di tensione tra gli oggetti ed i luoghi in cui sono adagiati, a cui si arriva soltanto usando quell’intelligenza intuitiva riconducibile ad una dimensione antica ormai dimenticata. […]",
      txt6: "Josune Ruiz de Infante"
    }
  },
  {
    id: 95,
    title: "HUMANO II",
    portada: "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.1.jpg?updatedAt=1715957049474",
    interior: {
      "Incapaces de dormir pero soñando sin cesar. Gres, stampa fotografica. Performance ph Raùl Cottone- .Ph. R. Tassinari": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.1.jpg?updatedAt=1715957049474",
      "Incapaces de dormir pero soñando sin cesar. Gres, stampa fotografica. Performance ph Raùl Cottone- .Ph. R. Tassinari ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.2.jpg?updatedAt=1715957049211",
      "Aqui estamo a salvo, terraglia ingobbiata. International Museum of Ceramics in Faenza collection.": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.3.jpg?updatedAt=1715957049445",
      "Aqui estamo a salvo, terraglia ingobbiata. International Museum of Ceramics in Faenza collection. ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.4.jpg?updatedAt=1715957049413",
      "Aqui estamo a salvo, terraglia ingobbiata. International Museum of Ceramics in Faenza collection.  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.5.jpg?updatedAt=1715957050668",
      "Ago di paglia 2006 - gres, paglia- Ph R. Tassinari cm 180 x 45 x 30 ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.6.jpg?updatedAt=1715957050043",
      "Ago di paglia 2006 - gres, paglia- Ph R. Tassinari cm 180 x 45 x 30  ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20humano%20ii/17.7.jpg?updatedAt=1715957050169",

    },
    alt: "Proyecto 5",
    year: "HUMANO II",
    categoria: "a",
    didascalia:"Humnao 2003 - International Museum of Ceramics in Faenza, Italy.",
    inicio: "",
    header4: "Humano, solo show at Museo Internazionale della Ceramica in Faenza (RA) Italy",
    header5Negrita: "Curator Josune Ruiz de Infante, Catalogue edited by L. Fabbri",

  },
  {
    id: 96,
    title: "SUSPENDIDAS",
    portada: "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.1.JPG?updatedAt=1715957129412",
    interior: {
      "Sombra del viento, terracotta.  Museo Internazionale delle ceramiche in Faenza, collezione permanente.": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.1.JPG?updatedAt=1715957129412",
      "Sombra del viento, terracotta.  Museo Internazionale delle ceramiche in Faenza, collezione permanente. ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.2.JPG?updatedAt=1715957130087",


      "Toda el alma para el rocio 2005. Terraglia, ingobbio.": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.7.jpg?updatedAt=1715957130436",
      "Toda el alma para el rocio 2005. Terraglia, ingobbio. ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.8.jpg?updatedAt=1715957129888",
      "Estalactita 2011, terraglia, ingobbio. Casa Rossini, Lugo, Italy.": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.9.jpg?updatedAt=1715957127611",
      "Estalactita 2011, terraglia, ingobbio. Casa Rossini, Lugo, Italy. ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.10.jpg?updatedAt=1715957128001",
      "Cada noche oscura espera el alba 2003, terraglia, ingobbio. Museo territorio Faenza, collezione permanente": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.11.jpg?updatedAt=1715957133523",
      "Cada noche oscura espera el alba 2003, terraglia, ingobbio. Museo territorio Faenza, collezione permanente ": "https://ik.imagekit.io/xqhcmqpqo/proyects%20suspendidas/18.12.JPG?updatedAt=1715957133400",
    },
    alt: "SUSPENDIDAS",
    year: "2001",
    categoria: "a",
    didascalia:" Sombra del viento 2001 - Faenza Award in the 52nd edition of the International Competition of Ceramic Art ",
    inicio: "",

  },
    
  
  
];

useEffect(() => {
  const consent = Cookies.get('cookieConsent');
  const preferences = Cookies.get('cookiePreferences') ? JSON.parse(Cookies.get('cookiePreferences')) : {};

  if (consent === 'true') {
    if (preferences.performance) {
      // Cookies de rendimiento
      Cookies.set('performanceCookie', 'performanceValue', { expires: 7 });
      console.log('Rendimiento cookie establecida');
    }
    if (preferences.functionality) {
      // Cookies de funcionalidad
      Cookies.set('functionalityCookie', 'functionalityValue', { expires: 7 });
      console.log('Funcionalidad cookie establecida');
    }
    if (preferences.advertising) {
      // Cookies de publicidad
      Cookies.set('advertisingCookie', 'advertisingValue', { expires: 7 });
      console.log('Publicidad cookie establecida');
    }
  }
}, []);


  return (
    <div className="App">
            <CookieConsent/>
      <BrowserRouter>
        <>

          <Routes>
            <Route path="/" element={<Home data={data} />} /> 
            <Route path="/projects" element={<Proyectos data={data} /> } />
            <Route path="/ArtWorks" element={<Catdos data={data}/>} />         
            <Route path="/image/:id" element={<ImgDetails data={data} />} />
            <Route path="/about" element={<About/>} />   

            {/* Italiano */}
            
            <Route path="/ita/" element={<HomeIta data={dataIta} />} /> 
            <Route path="/ita/proyects" element={<ProyectosIta data={dataIta} /> } />
            <Route path="/ita/ArtWorks" element={<CatdosIta data={dataIta}/>} />         
            <Route path="/ita/image/:id" element={<ImgDetails data={dataIta} />} />
            <Route path="/ita/about" element={<AboutIta/>} />      
          </Routes>
        </>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
