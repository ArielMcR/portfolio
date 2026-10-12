// Imports normais (em vez de `new URL(..., import.meta.url)`) para o Vite gerar a mesma URL
// no build do navegador e no pré-render do servidor (scripts/prerender.mjs).
import imgCapa from './optimized/hero.webp'
import imgSobre from './optimized/about.webp'

import siapCover from './optimized/siap-cover.webp'
import siap1 from './siap/1.png'
import siap2 from './siap/2.png'
import siap3 from './siap/3.png'
import siap4 from './siap/4.png'

import onixxCover from './optimized/onixx-cover.webp'
import onixx1 from './onixx/0.png'
import onixx2 from './onixx/1.png'
import onixx3 from './onixx/2.png'

import apolloCover from './optimized/apollo-cover.webp'
import apollo1 from './apollo/0.png'
import apollo2 from './apollo/1.png'
import apollo3 from './apollo/2.png'
import apollo4 from './apollo/3.png'
import apollo5 from './apollo/4.png'
import apollo6 from './apollo/5.png'

import aiqpetCover from './optimized/aiqpet/cover.webp'
import aiqpet1 from './optimized/aiqpet/1.webp'
import aiqpet2 from './optimized/aiqpet/2.webp'
import aiqpet3 from './optimized/aiqpet/3.webp'
import aiqpet4 from './optimized/aiqpet/4.webp'

import barberCover from './optimized/barber/cover.webp'
import barber1 from './optimized/barber/1.webp'
import barber2 from './optimized/barber/2.webp'
import barber3 from './optimized/barber/3.webp'
import barber4 from './optimized/barber/4.webp'
import barber5 from './optimized/barber/5.webp'
import barber6 from './optimized/barber/6.webp'

const IMAGES = {
    img_capa: imgCapa,
    img_sobre: imgSobre,
    siap_cover: siapCover,
    siap_image1: siap1,
    siap_image2: siap2,
    siap_image3: siap3,
    siap_image4: siap4,
    onixx_cover: onixxCover,
    onixx_image1: onixx1,
    onixx_image2: onixx2,
    onixx_image3: onixx3,
    apollo_cover: apolloCover,
    apollo_image1: apollo1,
    apollo_image2: apollo2,
    apollo_image3: apollo3,
    apollo_image4: apollo4,
    apollo_image5: apollo5,
    apollo_image6: apollo6,
    aiqpet_cover: aiqpetCover,
    aiqpet_image1: aiqpet1,
    aiqpet_image2: aiqpet2,
    aiqpet_image3: aiqpet3,
    aiqpet_image4: aiqpet4,
    barber_cover: barberCover,
    barber_image1: barber1,
    barber_image2: barber2,
    barber_image3: barber3,
    barber_image4: barber4,
    barber_image5: barber5,
    barber_image6: barber6,
}

export default IMAGES
