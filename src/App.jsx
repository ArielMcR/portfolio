import { useEffect, useRef, useState } from 'react'
import './App.css'
import facebookLogo from './assets/white-facebook.svg';
import github from './assets/github-brands-solid.svg';
import whiteLinkedin from './assets/white-linkedin.svg';
import link from './assets/linkedin-brands-solid.svg';
import emailImage from './assets/email2.svg'
import instagram from './assets/instagram-brands-solid.svg'
import githubBlack from './assets/githubbl.svg'
import heart from './assets/heart-solid.svg'
import AutoCard from './components/auto-card/auto-card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import emailJs from '@emailjs/browser'
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IMAGES from './imgs/images';
import TechGrid from './components/techCard/techCard';
import { useTranslation, } from 'react-i18next'
function App() {
  const { t, i18n } = useTranslation()
  const home = useRef(null)
  const about = useRef()
  const contact = useRef()
  const projects = useRef()

  const subnameRef = useRef(null)
  const nameRef = useRef(null)
  const fullStackRef = useRef(null)
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);
  const img_backgroundRef = useRef(null)
  const img_primary = useRef(null)
  const first_section_ref = useRef(null)


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.to(img_backgroundRef.current, { x: 0, duration: 1, opacity: 0.50 });
    tl.to(img_backgroundRef.current, { x: 0, duration: 1, opacity: 0.75 });
    tl.to(img_backgroundRef.current, { x: 0, duration: 1, opacity: 0.85 });
    tl.to(img_backgroundRef.current, { y: 0, duration: 1, opacity: 1 });
    gsap.to(nameRef.current,
      {
        x: 0,
        duration: 3,
        opacity: 1,
        ease: 'power2.out'
      })
    gsap.to(linkedinRef.current, {
      x: 0,
      rotate: "0deg",
      duration: 3,
      ease: 'power2.out',
    });
    gsap.to(githubRef.current, {
      x: 0,
      rotate: "0deg",
      duration: 3,
      ease: 'power2.out',
    });
    gsap.to(subnameRef.current, {
      x: 0,
      rotate: "0deg",
      opacity: 1,
      duration: 3,
      ease: 'power2.out',
    });
    gsap.to(fullStackRef.current, {
      x: 0,
      opacity: 1,
      duration: 3,
      ease: 'power2.out',
    });
    gsap.to(img_primary.current, {
      x: 0,
      opacity: 1,
      duration: 3,
      ease: 'power2.out',
    })
    // gsap.to(first_section_ref.current, {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: first_section_ref.current,
    //     start: 'center center',
    //     end: 'bottom top',
    //     scrub: true,
    //   },
    // });
    gsap.to(about.current, {
      scrollTrigger: {
        trigger: about.current,
        start: 'center center',
        end: 'bottom top',
        scrub: true,
      }
    })
  }, [])

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(t('messagePlaceholder'));
  const [errors, setErrors] = useState({})

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validation = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = t('nameRequired');
    if (!email.trim()) newErrors.email = t('emailRequired');
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = t('emailInvalid');
    if (!surname.trim()) newErrors.surname = t('surnameRequired');
    if (!message.trim()) newErrors.message = t('messageRequired');
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const errors = validation();
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    const templateParams = {
      from_name: `${name} ${surname}`,
      email: email,
      message: message,
    };
    emailJs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (response) => {
          toast.success(t('emailSuccess'), { theme: 'black' });
          setName('');
          setSurname('');
          setEmail('');
          setMessage(t('messagePlaceholder'));
        },
        (error) => {
          console.log(error);
          toast.error(t('emailError'), { theme: 'black' });
        }
      )
  }
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const pdv_imgs = [
    IMAGES.pdv_image0,
    IMAGES.pdv_image1,
    IMAGES.pdv_image2,
    IMAGES.pdv_image3,
    IMAGES.pdv_image4,
  ]
  const siap_imgs = [
    IMAGES.siap_image1,
    IMAGES.siap_image2,
    IMAGES.siap_image3,
    IMAGES.siap_image4
  ]
  const hendeny_imgs = [
    IMAGES.hendeny_image1,
    IMAGES.hendeny_image2,
    IMAGES.hendeny_image3,
  ]
  return (
    <>
      <div className='first-section' ref={first_section_ref}>
        <div className="header">
          <div className="hover-mouse">
            <h1 className='name' onClick={() => scrollToSection(home)}>Ariel Machado</h1>
          </div>
          <ul className="menu-left-side">
            <li onClick={() => scrollToSection(home)} className="item-list">
              {t('home')}
            </li>
            <li onClick={() => scrollToSection(about)} className="item-list">
              {t('about')}
            </li>
            <li onClick={() => scrollToSection(projects)} className="item-list">
              {t('projects')}
            </li>
            <li onClick={() => scrollToSection(contact)} className="item-list">
              {t('contact')}
            </li>
            <li>
              <select className="select" onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
                <option value="pt">Português</option>
                <option value="en">English</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="container" ref={home}>
          <div className="left-side">
            <p ref={subnameRef} className='subname'>{t('greeting')}</p>
            <h1 ref={nameRef}>Ariel M. Rodrigues</h1>
            <div className="union">
              <hr />

              <h3 className={"fullstack-content"} ref={fullStackRef}>{t('fullStack')}</h3>
            </div>
            <div className="stacks">
              <a className="stack-lin" href="http://www.linkedin.com/in/arielmrodrigues">
                <img ref={linkedinRef} src={whiteLinkedin} alt="" />
              </a>
              <a className="stack-lin" href="https://github.com/ArielMcR">
                <img ref={githubRef} src={github} alt="" />
              </a>
            </div>
            <div className="section-about">
              <button className='button-about' onClick={() => scrollToSection(about)}><p>{t('aboutMeButton')}</p></button>
            </div>
          </div>
          <div className="right-side">
            {/* <div ref={img_backgroundRef} className="img-background"></div> */}
            <img src={IMAGES.img_capa} alt="" ref={img_primary} className='img-capa' />
          </div>
        </div>
      </div>
      <div className="second-section" ref={about}>
        <div className="container container-second-section ">
          <div className="left-side second-side">
            <div className='image-wrapper'>
              <img src={IMAGES.img_sobre} alt="" className='form-image' />
            </div>
          </div>
          <div className="right-side second-side-right">
            <div className="about-me">
              <div className="union second-union">
                <hr />
                <h3>{t('aboutMeTitle')}</h3>
              </div>
              <p className="normal-text" dangerouslySetInnerHTML={{ __html: t('aboutMeText1') }} />
              <p className="normal-text" dangerouslySetInnerHTML={{ __html: t('aboutMeText2') }} />
              <p className="normal-text" dangerouslySetInnerHTML={{ __html: t('aboutMeText3') }} />
              <div className="section-about">
                <a href="/portfolio/cv/curriculo.pdf" download>
                  <button className='button-about download-cv'>
                    <p>{t('downloadCV')}</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hard-skills">
          <h1>
            {t('toolsTitle')}
          </h1>
        </div>
        <TechGrid />
      </div>
      <hr />
      <div className="third-section" ref={projects}>
        <div className="union third-union">
          <hr />
          <h3>{t('projectsTitle')}</h3>
        </div>
        <div className="card-container">
          {/* <AutoCard
            description={`
              O ApicePDV é uma ferramenta móvel para o sistema ApiceERP O que pode ser feito no aplicativo? É possível efetuar vendas,Visualizar dados de clientes,Visualizar dados de produtos,Visualizar contas a receber e recebidas,Baixar contas a receber,Efetuar vendas,Visualizar estatística de vendas de clientes,Atualizar dados de clientes,Incluir novos clientes,entre outros.`}
            img={IMAGES.logo_pdv}
            title={`            
            ApicePDV 4.0
            `}
            useReact={true}
            useReactNative={true}
            useNode={true}
            useIos={true}
            useAndroid={true}
            useMysql={true}
            img_modal={pdv_imgs}
          /> */}
          <AutoCard
            description={t('siapDescription')}
            img={IMAGES.logo_siap}
            title={t('siapTitle')}
            useReact={true}
            useReactNative={true}
            useNode={true}
            useIos={true}
            useAndroid={true}
            useMysql={true}
            useWeb={true}
            inDevelopment={true}
            img_modal={siap_imgs}
          />
          <AutoCard
            description={t('hendenyDescription')}
            img={IMAGES.hendeny_logo}
            title={t('hendenyTitle')}
            useReact={true}
            useNode={true}
            useMysql={true}
            useWeb={true}
            img_modal={hendeny_imgs}
            link_web='https://hendeny.vercel.app'
          />
        </div>
      </div>
      <hr />
      <div className="four-section" ref={contact}>
        <div className="union four-union">
          <hr />
          <h3>{t('contactTitle')}</h3>
        </div>
        <img src={emailImage} alt="" className='img-email hidden' />
        <div className="container">
          <div className="left-side four-side-element-2">
            <form className="contact-form">
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">{t('nameLabel')}</label>
                {errors.name && <span className="error">{errors.name}</span>}
                <input
                  type="text"
                  className="form-control contact-input"
                  id="nome"
                  value={name}
                  placeholder={t('namePlaceholder')}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sobrenome" className="form-label">{t('surnameLabel')}</label>
                {errors.surname && <span className="error">{errors.surname}</span>}
                <input
                  type="text"
                  className="form-control contact-input"
                  id="sobrenome"
                  value={surname}
                  placeholder={t('surnamePlaceholder')}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">{t('emailLabel')}</label>
                {errors.email && <span className="error">{errors.email}</span>}
                <input
                  type="email"
                  className="form-control contact-input"
                  id="email"
                  value={email}
                  placeholder={t('emailPlaceholder')}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensagem" className="form-label">{t('messageLabel')}</label>
                {errors.message && <span className="error">{errors.message}</span>}
                <textarea
                  className="form-control contact-textarea"
                  id="mensagem"
                  rows="4"
                  value={message}
                  placeholder={t('messagePlaceholder')}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn-submit" onClick={(e) => sendEmail(e)}>Enviar</button>
            </form>

          </div>
          <div className="right-side four-side-element">
            <img src={emailImage} alt="" className='img-email' />
          </div>
        </div>
      </div>
      <div className="final">
        <div className="midia">
          <a href="http://www.linkedin.com/in/arielmrodrigues">
            <div className="rounded">
              <img src={link} alt="" />
            </div>
          </a>
          <a href="https://www.instagram.com/arielmro/">
            <div className="rounded">
              <img src={instagram} alt="" />
            </div>
          </a>
          <a href="https://github.com/ArielMcR">
            <div className="rounded">
              <img src={githubBlack} alt="" />
            </div>
          </a>
        </div>
        <div className="midia">
          <ul className="menu-left-side p-1_5">
            <li onClick={() => scrollToSection(home)} className='item-list'>{t('home')}</li>
            <li onClick={() => scrollToSection(about)} className='item-list'>{t('about')}</li>
            <li onClick={() => scrollToSection(projects)} className='item-list'>{t('projects')}</li>
            <li onClick={() => scrollToSection(contact)} className='item-list'>{t('contact')}</li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <p>Copyright ©2025, Powered by Ariel Machado Rodrigues </p>
        &nbsp;
        <img src={heart} alt="" />
      </div>
      <ToastContainer />
    </>
  )
}

export default App
