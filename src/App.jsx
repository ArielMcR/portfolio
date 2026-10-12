import { useEffect, useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import emailJs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Briefcase,
  Code,
  DownloadSimple,
  GithubLogo,
  GraduationCap,
  InstagramLogo,
  LinkedinLogo,
  List,
  PaperPlaneTilt,
  X,
} from '@phosphor-icons/react';
import IMAGES from './imgs/images';
import { getSavedLanguage } from './utils/i18n';
import AutoCard from './components/auto-card/auto-card';
import TechGrid from './components/techCard/techCard';

gsap.registerPlugin(ScrollTrigger);

const SOCIALS = [
  { label: 'LinkedIn', handle: 'in/arielmrodrigues', href: 'https://www.linkedin.com/in/arielmrodrigues', Icon: LinkedinLogo },
  { label: 'GitHub', handle: 'ArielMcR', href: 'https://github.com/ArielMcR', Icon: GithubLogo },
  { label: 'Instagram', handle: '@arielmro', href: 'https://www.instagram.com/arielmro/', Icon: InstagramLogo },
];

const NAV_SECTIONS = ['about', 'projects', 'contact'];
// o base do vite.config ('/portfolio') vem sem barra no final, então garantimos a barra aqui
const BASE_URL = import.meta.env.BASE_URL.replace(/\/?$/, '/');
const CV_URL = `${BASE_URL}cv/Ariel_Machado_Rodrigues.pdf`;

const SectionHead = ({ index, title, subtitle }) => (
  <div className="section-head reveal">
    <span className="section-index">{index}</span>
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

function App() {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage || i18n.language

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // O HTML pré-renderizado é em português; depois de montar, aplica o idioma que o visitante escolheu
  useEffect(() => {
    const saved = getSavedLanguage();
    if (saved && saved !== i18n.resolvedLanguage) i18n.changeLanguage(saved);
  }, [i18n]);

  // Animações das seções ao rolar (desligadas para quem prefere menos movimento).
  // A entrada do hero é feita em CSS, para funcionar já no HTML pré-renderizado.
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const clearProps = 'transform,opacity,visibility,transition';

      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 28,
          autoAlpha: 0,
          duration: 0.8,
          ease: 'power3.out',
          clearProps,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

      gsap.utils.toArray('.reveal-group').forEach((group) => {
        // os cards têm transition de transform no CSS, que brigaria com o GSAP
        gsap.set(group.children, { transition: 'none' });
        gsap.from(group.children, {
          y: 24,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.06,
          clearProps,
          scrollTrigger: { trigger: group, start: 'top 88%', once: true },
        });
      });
    });
    return () => mm.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
      setShowScrollTop(window.scrollY > 600);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Destaca no menu a seção que está no meio da tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['home', ...NAV_SECTIONS].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem('lang', lng);
    } catch {
      // localStorage indisponível (modo privado, etc.)
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

  const updateField = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const errors = validation();
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    setIsSubmitting(true);
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
        () => {
          toast.success(t('emailSuccess'), {
            theme: 'dark',
            position: 'top-right',
            autoClose: 5000,
          });
          setName('');
          setSurname('');
          setEmail('');
          setMessage('');
          setErrors({});
        },
        (error) => {
          console.log(error);
          toast.error(t('emailError'), {
            theme: 'dark',
            position: 'top-right',
            autoClose: 5000,
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      })
  }

  const projects = [
    {
      id: 'aiqpet',
      title: t('aiqpetTitle'),
      description: t('aiqpetDescription'),
      cover: IMAGES.aiqpet_cover,
      img_modal: [IMAGES.aiqpet_image1, IMAGES.aiqpet_image2, IMAGES.aiqpet_image3, IMAGES.aiqpet_image4],
      stack: ['React', 'Vite', 'NestJS', 'MySQL', 'Socket.IO'],
      useWeb: true,
      link_web: 'https://aiqpet.tekobit.com.br',
    },
    {
      id: 'barber',
      title: t('barberTitle'),
      description: t('barberDescription'),
      cover: IMAGES.barber_cover,
      img_modal: [
        IMAGES.barber_image1,
        IMAGES.barber_image2,
        IMAGES.barber_image3,
        IMAGES.barber_image4,
        IMAGES.barber_image5,
        IMAGES.barber_image6,
      ],
      galleryLayout: 'mobile',
      stack: ['React Native', 'Expo', 'NestJS'],
    },
    {
      id: 'apollo',
      title: t('apolloTitle'),
      description: t('apolloDescription'),
      cover: IMAGES.apollo_cover,
      img_modal: [
        IMAGES.apollo_image1,
        IMAGES.apollo_image2,
        IMAGES.apollo_image3,
        IMAGES.apollo_image4,
        IMAGES.apollo_image5,
        IMAGES.apollo_image6,
      ],
      stack: ['React', 'Node.js', 'MySQL', 'Scrum'],
      useWeb: true,
      link_web: 'https://sandbox.apollo.tekobit.com.br/home',
    },
    {
      id: 'siap',
      title: t('siapTitle'),
      description: t('siapDescription'),
      cover: IMAGES.siap_cover,
      img_modal: [IMAGES.siap_image1, IMAGES.siap_image2, IMAGES.siap_image3, IMAGES.siap_image4],
      stack: ['React', 'React Native', 'Node.js', 'MySQL'],
      useWeb: true,
      useAndroid: true,
      useIos: true,
      inDevelopment: true,
    },
    {
      id: 'onixx',
      title: t('onixxTitle'),
      description: t('onixxDescription'),
      cover: IMAGES.onixx_cover,
      img_modal: [IMAGES.onixx_image1, IMAGES.onixx_image2, IMAGES.onixx_image3],
      stack: ['React', 'Node.js', 'MySQL', 'Scrum'],
      useWeb: true,
      link_web: 'https://cs-pi-2025-tekobit.github.io/landing-page-tekobit',
    },
  ];

  const facts = [
    { Icon: GraduationCap, label: t('factEducationLabel'), value: t('factEducation') },
    { Icon: Briefcase, label: t('factExperienceLabel'), value: t('factExperience') },
    { Icon: Code, label: t('factFocusLabel'), value: t('factFocus') },
  ];

  const fieldProps = (field) => ({
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `${field}-error` : undefined,
  });

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        {t('skipToContent')}
      </a>

      <header className={`site-header ${isScrolled || menuOpen ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">AM</span>
            <span className="brand-name">Ariel Machado</span>
          </a>

          <nav id="site-nav" className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Principal">
            {NAV_SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? 'is-active' : ''}
                aria-current={activeSection === id ? 'true' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {t(id)}
              </a>
            ))}
          </nav>

          <div className="lang-switch" role="group" aria-label={t('language')}>
            {['pt', 'en'].map((lng) => (
              <button
                key={lng}
                type="button"
                aria-pressed={lang === lng}
                onClick={() => changeLanguage(lng)}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={t('menu')}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow hero-anim">
                <span className="status-dot" aria-hidden="true" />
                {t('currentRole')}
              </span>
              <p className="hero-greeting hero-anim">{t('greeting')}</p>
              <h1 className="hero-name hero-anim">
                Ariel M. <span className="accent-text">Rodrigues</span>
              </h1>
              <p className="hero-role hero-anim">
                <span aria-hidden="true">&gt;_</span> {t('fullStack')}
              </p>
              <p className="hero-lead hero-anim">{t('heroLead')}</p>

              <div className="hero-actions hero-anim">
                <a href="#projects" className="btn btn-primary">
                  {t('seeProjects')} <ArrowRight size={18} weight="bold" />
                </a>
                <a href={CV_URL} download className="btn btn-ghost">
                  <DownloadSimple size={18} weight="bold" /> {t('downloadCV')}
                </a>
              </div>

              <ul className="hero-socials hero-anim">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noreferrer" className="icon-btn" aria-label={label}>
                      <Icon size={20} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-visual">
              <div className="hero-arch">
                <img src={IMAGES.img_capa} alt="Ariel Machado Rodrigues" />
              </div>
              <div className="hero-chip hero-chip--top" aria-hidden="true">
                <Code size={20} weight="bold" />
                <span>
                  <small>Stack</small>
                  <strong>React · NestJS</strong>
                </span>
              </div>
              <div className="hero-chip hero-chip--bottom" aria-hidden="true">
                <GraduationCap size={20} weight="bold" />
                <span>
                  <small>{t('heroChipEducation')}</small>
                  <strong>{t('heroChipEducationValue')}</strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="about">
          <div className="container">
            <SectionHead index="01" title={t('aboutMeTitle')} />

            <div className="about-grid">
              <figure className="about-photo reveal">
                <img src={IMAGES.img_sobre} alt="Ariel Machado na formatura" loading="lazy" />
              </figure>

              <div className="about-text reveal">
                <p dangerouslySetInnerHTML={{ __html: t('aboutMeText1') }} />
                <p dangerouslySetInnerHTML={{ __html: t('aboutMeText2') }} />
                <p dangerouslySetInnerHTML={{ __html: t('aboutMeText3') }} />

                <ul className="facts">
                  {facts.map(({ Icon, label, value }) => (
                    <li key={label} className="fact">
                      <Icon size={22} />
                      <span className="fact-label">{label}</span>
                      <span className="fact-value">{value}</span>
                    </li>
                  ))}
                </ul>

                <div className="about-actions">
                  <a href={CV_URL} download className="btn btn-primary">
                    <DownloadSimple size={18} weight="bold" /> {t('downloadCV')}
                  </a>
                </div>
              </div>
            </div>

            <div className="skills">
              <h3 className="skills-title reveal">{t('toolsTitle')}</h3>
              <div className="reveal">
                <TechGrid />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <SectionHead index="02" title={t('projectsTitle')} subtitle={t('projectsSubtitle')} />
            <div className="projects-grid reveal-group">
              {projects.map(({ id, ...project }) => (
                <AutoCard key={id} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt" id="contact">
          <div className="container contact-grid">
            <div className="contact-intro">
              <SectionHead index="03" title={t('contactHeadline')} subtitle={t('contactText')} />
              <ul className="contact-links reveal">
                {SOCIALS.map(({ label, handle, href, Icon }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noreferrer" className="contact-link">
                      <span className="contact-link-icon"><Icon size={20} /></span>
                      <span>
                        <small>{label}</small>
                        <strong>{handle}</strong>
                      </span>
                      <ArrowUpRight size={18} className="contact-link-arrow" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <form className="contact-form reveal" onSubmit={sendEmail} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="nome">{t('nameLabel')}</label>
                  <input
                    type="text"
                    id="nome"
                    autoComplete="given-name"
                    value={name}
                    placeholder={t('namePlaceholder')}
                    onChange={updateField(setName, 'name')}
                    {...fieldProps('name')}
                  />
                  {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
                </div>
                <div className="field">
                  <label htmlFor="sobrenome">{t('surnameLabel')}</label>
                  <input
                    type="text"
                    id="sobrenome"
                    autoComplete="family-name"
                    value={surname}
                    placeholder={t('surnamePlaceholder')}
                    onChange={updateField(setSurname, 'surname')}
                    {...fieldProps('surname')}
                  />
                  {errors.surname && <span className="field-error" id="surname-error">{errors.surname}</span>}
                </div>
              </div>
              <div className="field">
                <label htmlFor="email">{t('emailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  value={email}
                  placeholder={t('emailPlaceholder')}
                  onChange={updateField(setEmail, 'email')}
                  {...fieldProps('email')}
                />
                {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
              </div>
              <div className="field">
                <label htmlFor="mensagem">{t('messageLabel')}</label>
                <textarea
                  id="mensagem"
                  rows="5"
                  value={message}
                  placeholder={t('messagePlaceholder')}
                  onChange={updateField(setMessage, 'message')}
                  {...fieldProps('message')}
                ></textarea>
                {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
              </div>
              <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting} aria-busy={isSubmitting}>
                {isSubmitting ? (
                  <span className="spinner" aria-hidden="true" />
                ) : (
                  <>
                    {t('sendButton')} <PaperPlaneTilt size={18} weight="bold" />
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#home" className="brand">
            <span className="brand-mark">AM</span>
            <span className="brand-name">Ariel Machado</span>
          </a>
          <p>{t('footer', { year: new Date().getFullYear() })}</p>
          <ul className="footer-socials">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" className="icon-btn" aria-label={label}>
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <button
        type="button"
        className={`scroll-to-top ${showScrollTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={t('backToTop')}
        tabIndex={showScrollTop ? 0 : -1}
      >
        <ArrowUp size={20} weight="bold" />
      </button>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
