import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    pt: {
        translation: {
            // Header
            name: 'Ariel Machado',
            home: 'Home',
            about: 'Sobre',
            projects: 'Projetos',
            contact: 'Contato',

            // Primeira seção
            greeting: 'Olá, meu nome é',
            fullName: 'Ariel M. Rodrigues',
            fullStack: 'Desenvolvedor Full-stack web & mobile',
            aboutMeButton: 'Sobre mim',

            // Segunda seção (Sobre)
            aboutMeTitle: 'Sobre mim',
            aboutMeText1: 'Sou <span class="alternative-color">estudante de Engenharia de Software no IFPR — Campus Paranavaí</span>, apaixonado por desenvolver soluções tecnológicas. Tenho experiência prática em desenvolvimento de software, utilizando as linguagens Java, Python e JavaScript, além de habilidades em bancos de dados MySQL e práticas de metodologias ágeis.',
            aboutMeText2: 'Destaco-me pela capacidade de aprender rapidamente, resolver problemas complexos e colaborar em equipes multidisciplinares. Durante meu estágio na <span class="alternative-color">Ápice Sistemas</span>, desenvolvo sistemas internos e participo ativamente na entrega de funcionalidades que melhoraram os processos da empresa.',
            aboutMeText3: 'Atualmente, estou em busca de oportunidades como Desenvolvedor Web Júnior ou Estagiário/Trainee para aplicar e expandir minhas habilidades. <span class="alternative-color">Tenho grande interesse nas áreas de desenvolvimento Full-Stack web e Mobile.</span>',
            downloadCV: 'Baixar CV',
            toolsTitle: 'Ferramentas que domino!',

            // Terceira seção (Projetos)
            projectsTitle: 'Projetos',
            siapTitle: 'SIAP (Sistema Integrado de Atendimento Psicológico)',
            siapDescription: 'O projeto envolve o desenvolvimento de um sistema de gestão médica voltado para consultórios de psicologia, com o objetivo de facilitar o agendamento de consultas, o gerenciamento de prontuários eletrônicos e a comunicação entre profissionais e pacientes. O software proposto será uma plataforma que oferece uma interface intuitiva para organizar os calendários de consultas, armazenar dados clínicos de forma centralizada e acompanhar o histórico de tratamento dos pacientes. Ao automatizar e otimizar esses processos, o sistema busca melhorar a eficiência dos consultórios, proporcionando maior praticidade no dia a dia dos psicólogos.',
            hendenyTitle: 'Hendeny Luxury Car Sales',
            hendenyDescription: 'O Portal de Loja de Carros é uma solução digital prática e intuitiva desenvolvida para facilitar a experiência de compra de veículos. A plataforma permite que os usuários explorem um catálogo completo de carros disponíveis, com informações detalhadas sobre cada modelo, como marca, ano, preço e características específicas. Por meio de filtros personalizáveis, os visitantes podem refinar a busca de acordo com suas preferências, como faixa de preço, tipo de combustível ou quilometragem, tornando a seleção mais rápida e eficiente. Ao encontrar o carro ideal, o usuário pode entrar em contato diretamente com a loja enviando uma mensagem através do portal, agilizando a comunicação e o processo de negociação. Simples, funcional e focado na satisfação do cliente, o sistema é a ponte perfeita entre os compradores e a loja de veículos.',

            // Quarta seção (Contato)
            contactTitle: 'Contato',
            nameLabel: 'Nome',
            surnameLabel: 'Sobrenome',
            emailLabel: 'Email',
            messageLabel: 'Mensagem',
            namePlaceholder: 'Ex: Marcelo',
            surnamePlaceholder: 'Ex: Da Silva',
            emailPlaceholder: 'Ex: email@gmail.com',
            messagePlaceholder: 'Oi, gostei muito da sua apresentação, podemos marcar uma reunião?',
            sendButton: 'Enviar',
            emailSuccess: 'Email enviado com sucesso',
            emailError: 'Erro ao enviar email',
            nameRequired: 'Nome é obrigatório.',
            surnameRequired: 'Sobrenome é obrigatório.',
            emailRequired: 'E-mail é obrigatório.',
            emailInvalid: 'E-mail inválido.',
            messageRequired: 'Mensagem é obrigatória.',

            // Footer
            footer: 'Copyright ©2025, Powered by Ariel Machado Rodrigues',
        },
    },
    en: {
        translation: {
            // Header
            name: 'Ariel Machado',
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',

            // Primeira seção
            greeting: 'Hello, my name is',
            fullName: 'Ariel M. Rodrigues',
            fullStack: 'Full-stack web & mobile developer',
            aboutMeButton: 'About me',

            // Segunda seção (Sobre)
            aboutMeTitle: 'About me',
            aboutMeText1: 'I am a <span class="alternative-color">Software Engineering student at IFPR — Paranavaí Campus</span>, passionate about developing technological solutions. I have practical experience in software development, using languages such as Java, Python, and JavaScript, as well as skills in MySQL databases and agile methodologies.',
            aboutMeText2: 'I stand out for my ability to learn quickly, solve complex problems, and collaborate in multidisciplinary teams. During my internship at <span class="alternative-color">Ápice Sistemas</span>, I develop internal systems and actively contribute to delivering functionalities that improve the company’s processes.',
            aboutMeText3: 'Currently, I am seeking opportunities as a Junior Web Developer or Intern/Trainee to apply and expand my skills. <span class="alternative-color">I have a strong interest in Full-Stack web and mobile development.</span>',
            downloadCV: 'Download CV',
            toolsTitle: 'Tools I master!',

            // Terceira seção (Projetos)
            projectsTitle: 'Projects',
            siapTitle: 'SIAP (Integrated Psychological Care System)',
            siapDescription: 'The project involves the development of a medical management system for psychology clinics, aimed at facilitating appointment scheduling, electronic medical record management, and communication between professionals and patients. The proposed software will be a platform that offers an intuitive interface to organize appointment calendars, centrally store clinical data, and track patients’ treatment history. By automating and optimizing these processes, the system seeks to improve the efficiency of clinics, providing greater convenience in the daily routine of psychologists.',
            hendenyTitle: 'Hendeny Luxury Car Sales',
            hendenyDescription: 'The Car Dealership Portal is a practical and intuitive digital solution developed to enhance the vehicle purchasing experience. The platform allows users to explore a complete catalog of available cars, with detailed information about each model, such as brand, year, price, and specific features. Through customizable filters, visitors can refine their search based on preferences like price range, fuel type, or mileage, making the selection process faster and more efficient. Upon finding the ideal car, users can directly contact the dealership by sending a message through the portal, streamlining communication and the negotiation process. Simple, functional, and focused on customer satisfaction, the system is the perfect bridge between buyers and the vehicle dealership.',
            // Quarta seção (Contato)
            contactTitle: 'Contact',
            nameLabel: 'Name',
            surnameLabel: 'Surname',
            emailLabel: 'Email',
            messageLabel: 'Message',
            namePlaceholder: 'Ex: John',
            surnamePlaceholder: 'Ex: Doe',
            emailPlaceholder: 'Ex: email@gmail.com',
            messagePlaceholder: 'Hi, I really liked your presentation, can we schedule a meeting?',
            sendButton: 'Send',
            emailSuccess: 'Email sent successfully',
            emailError: 'Error sending email',
            nameRequired: 'Name is required.',
            surnameRequired: 'Surname is required.',
            emailRequired: 'Email is required.',
            emailInvalid: 'Invalid email.',
            messageRequired: 'Message is required.',

            // Footer
            footer: 'Copyright ©2025, Powered by Ariel Machado Rodrigues',
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pt',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;