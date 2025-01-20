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
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IMAGES from './imgs/images';
function App() {
  const home = useRef()
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
    gsap.to(first_section_ref.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: first_section_ref.current,
        start: 'center center',
        end: 'bottom top',
        scrub: true,
      },
    });
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
  const [message, setMessage] = useState('Oi gostei muito da sua apresentação podemos marcar uma reunião ?')
  const [errors, setErrors] = useState({})

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validation = () => {
    const newErros = {};
    if (!name.trim()) newErros.name = "Nome é obrigatório.";
    if (!email.trim()) newErros.email = "E-mail é obrigatório.";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErros.email = "E-mail inválido.";
    if (!surname.trim())
      newErros.surname = "Sobrenome é obrigatório.";
    if (!message.trim())
      newErros.message = "Mensagem é obrigatória.";
    return newErros;
  };

  const sendEmail = (e) => {
    e.preventDefault()
    const errors = validation();
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    const templateParams = {
      from_name: `${name} ${surname}`,
      email: email,
      message: message,
    }
    emailJs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY).then((response) => {
      toast.success('Email enviado com sucesso', { theme: 'black' })
      setName('')
      setSurname('')
      setEmail('')
      setMessage('')
    }, (error) => {
      console.log(error);

      toast.error('Erro ao enviar email', { theme: 'black' })
    })


  }
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
  return (
    <>
      <div className='first-section' ref={first_section_ref}>
        <div className="header">
          <div className="hover-mouse">
            <h1 className='name'>Ariel</h1>
          </div>
          <ul className="menu-left-side">
            <li onClick={() => scrollToSection(home)} className='item-list'>Home</li>
            <li onClick={() => scrollToSection(about)} className='item-list'>Sobre</li>
            <li onClick={() => scrollToSection(projects)} className='item-list'>Projetos</li>
            <li onClick={() => scrollToSection(contact)} className='item-list'>Contato</li>
          </ul>
        </div>
        <div className="container" ref={home}>
          <div className="left-side">
            <p ref={subnameRef} className='subname'>Olá, meu nome é</p>
            <h1 ref={nameRef}>Ariel M. Rodrigues</h1>
            <div className="union">
              <hr />
              <h3 className={"fullstack-content"} ref={fullStackRef}>Full-stack web developer & mobile</h3>
            </div>
            <div className="stacks">
              <a href="http://www.linkedin.com/in/arielmrodrigues">
                <img ref={linkedinRef} src={whiteLinkedin} alt="" />
              </a>
              <a href="https://github.com/ArielMcR">
                <img ref={githubRef} src={github} alt="" />
              </a>
            </div>
            <div className="section-about">
              <button className='button-about' onClick={() => scrollToSection(about)}><p>Sobre mim</p></button>
            </div>
          </div>
          <div className="right-side">
            <div ref={img_backgroundRef} className="img-background"></div>
            <img src={IMAGES.img_capa} alt="" ref={img_primary} className='img-capa' />
          </div>
        </div>
      </div>
      <div className="second-section" ref={about}>
        <div className="container container-second-section ">
          <div className="left-side second-side">
            <img src={IMAGES.img_sobre} alt="" className='form-image' />
          </div>
          <div className="right-side second-side-right">
            <div className="about-me">
              <div className="union second-union">
                <hr />
                <h3>Sobre mim</h3>
              </div>
              <p className='normal-text'>
                Sou <span className='alternative-color'> estudante de Engenharia de Software no IFPR — Campus Paranavaí</span>, apaixonado por desenvolver soluções tecnológicas. Tenho experiência prática em desenvolvimento de software, utilizando as linguagens Java, Python e JavaScript, além de habilidades em bancos de dados MySQL e práticas de metodologias ágeis.<br />
              </p>
              <p className='normal-text'>
                Destaco-me pela capacidade de aprender rapidamente, resolver problemas complexos e colaborar em equipes multidisciplinares. Durante meu estágio na <span className='alternative-color'>Ápice Sistemas</span>, desenvolvo sistemas internos e participo ativamente na entrega de funcionalidades que melhoraram os processos da empresa.
              </p>
              <p className='normal-text'>
                Atualmente, estou em busca de oportunidades como Desenvolvedor Web Júnior ou Estagiário/Trainee para aplicar e expandir minhas habilidades. <span className='alternative-color'>Tenho grande interesse nas áreas de desenvolvimento Full-Stack web e Mobile.</span>
              </p>
              <div className="hard-skills">
                <div className="union second-union hard-skill-union">
                  <hr />
                  <h4>Hard-Skills</h4>
                </div>
                <div className="columns">
                  <h3>React</h3>
                  <h3>React-native</h3>
                  <h3>HTML5</h3>
                  <h3>CSS3</h3>
                  <h3>JavaScript</h3>
                  <h3>Python</h3>
                </div>
                <div className="columns">
                  <h3>MySQL 5</h3>
                  <h3>MySQL 8</h3>
                  <h3>JAVA</h3>
                  <h3>SCRUM</h3>
                </div>
              </div>
              <div className="section-about">
                <a href="cv/curriculo.pdf" download>
                  <button className='button-about download-cv'>
                    <p>Baixar CV</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="third-section" ref={projects}>
        <div className="union third-union">
          <hr />
          <h3>Projetos</h3>
        </div>
        <div className="card-container">
          <AutoCard
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
          />
          <AutoCard
            description={`
O projeto envolve o desenvolvimento de um sistema de gestão médica voltado para consultórios de psicologia, com o objetivo de facilitar o agendamento de consultas, o gerenciamento de prontuários eletrônicos e a comunicação entre profissionais e pacientes. O software proposto será uma plataforma que oferece uma interface intuitiva para organizar os calendários de consultas, armazenar dados clínicos de forma centralizada e acompanhar o histórico de tratamento dos pacientes. Ao automatizar e otimizar esses processos, o sistema busca melhorar a eficiência dos consultórios, proporcionando maior praticidade no dia a dia dos psicólogos.
              `}
            img={IMAGES.logo_siap}
            title={`            
            SIAP(Sistema integrado de atendimento Psicologico)
            `}
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
        </div>
      </div>
      <hr />
      <div className="four-section" ref={contact}>
        <div className="union four-union">
          <hr />
          <h3>Contato</h3>
        </div>
        <img src={emailImage} alt="" className='img-email hidden' />
        <div className="container">
          <div className="left-side four-side-element-2">
            <form className="contact-form">
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                {errors.name && <span className="error">{errors.name}</span>}
                <input
                  type="text"
                  className="form-control contact-input"
                  id="nome"
                  value={name}
                  placeholder="Ex: Marcelo"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
                {errors.surname && <span className="error">{errors.surname}</span>}
                <input
                  type="text"
                  className="form-control contact-input"
                  id="sobrenome"
                  value={surname}
                  placeholder="Ex: Da Silva"
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                {errors.email && <span className="error">{errors.email}</span>}
                <input
                  type="email"
                  className="form-control contact-input"
                  id="email"
                  value={email}
                  placeholder="Ex: email@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensagem" className="form-label">Mensagem</label>
                {errors.message && <span className="error">{errors.message}</span>}
                <textarea
                  className="form-control contact-textarea"
                  id="mensagem"
                  rows="4"
                  value={message}
                  placeholder="Oi gostei muito da sua apresentação podemos marcar uma reunião ?"
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
            <li onClick={() => scrollToSection(home)} className='item-list'>Home</li>
            <li onClick={() => scrollToSection(about)} className='item-list'>Sobre</li>
            <li onClick={() => scrollToSection(projects)} className='item-list'>Projetos</li>
            <li onClick={() => scrollToSection(contact)} className='item-list'>Contato</li>
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
