import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    pt: {
        translation: {
            // Header
            name: 'Ariel Machado',
            home: 'Início',
            about: 'Sobre',
            projects: 'Projetos',
            contact: 'Contato',
            menu: 'Abrir menu',
            language: 'Idioma',
            skipToContent: 'Pular para o conteúdo',

            // Primeira seção
            currentRole: 'Dev Full-stack Pleno na Ápice Sistemas',
            greeting: 'Olá, meu nome é',
            fullName: 'Ariel M. Rodrigues',
            fullStack: 'Desenvolvedor Full-stack Pleno · web & mobile',
            heroLead: 'Desenvolvo aplicações web e mobile de ponta a ponta — do back-end em NestJS ao app em React Native. Atuo como desenvolvedor pleno na Ápice Sistemas e curso Engenharia de Software no IFPR.',
            heroChipEducation: 'Formação',
            heroChipEducationValue: 'Eng. de Software · IFPR',
            seeProjects: 'Ver projetos',
            aboutMeButton: 'Sobre mim',

            // Segunda seção (Sobre)
            aboutMeTitle: 'Sobre mim',
            aboutMeText1: 'Sou <span class="alternative-color">estudante de Engenharia de Software no IFPR — Campus Paranavaí</span>, apaixonado por desenvolver soluções tecnológicas. Tenho experiência prática em desenvolvimento de software, utilizando as linguagens Java, Python e JavaScript, além de habilidades em bancos de dados MySQL e práticas de metodologias ágeis.',
            aboutMeText2: 'Na <span class="alternative-color">Ápice Sistemas</span>, onde comecei como estagiário e hoje atuo como <span class="alternative-color">desenvolvedor full-stack pleno</span>, desenvolvo sistemas internos e participo da entrega de funcionalidades que melhoram os processos da empresa. Destaco-me pela capacidade de aprender rápido, resolver problemas complexos e colaborar com equipes multidisciplinares.',
            aboutMeText3: 'Também desenvolvo produtos completos, do banco de dados ao app — como o <span class="alternative-color">AiQPet</span>, plataforma de agendamento para petshops com atualização em tempo real, e o app de gestão da <span class="alternative-color">Rodrigues Barber Shop</span>. Meu foco é desenvolvimento Full-Stack web e mobile.',
            factEducationLabel: 'Formação',
            factEducation: 'Engenharia de Software — IFPR Paranavaí',
            factExperienceLabel: 'Experiência',
            factExperience: 'Dev Full-stack Pleno — Ápice Sistemas',
            factFocusLabel: 'Foco',
            factFocus: 'Full-stack web & mobile',
            downloadCV: 'Baixar CV',
            toolsTitle: 'Tecnologias e ferramentas',

            // Terceira seção (Projetos)
            projectsTitle: 'Projetos',
            projectsSubtitle: 'Sistemas web e mobile que desenvolvi — do back-end ao app no celular.',
            aiqpetTitle: 'AiQPet — Agendamento para petshops',
            aiqpetDescription: 'Plataforma que conecta tutores e petshops. O tutor cadastra seus pets (porte, peso e vacinas), escolhe o petshop da cidade e marca banho e tosa em poucos cliques, acompanhando o atendimento em tempo real — sem ligação e sem fila de espera. Cada petshop tem um painel próprio com a agenda do dia em quadro (confirmados, em atendimento, prontos para buscar e concluídos), pedidos pendentes, clientes, serviços e preços, equipe, horários, auditoria e dashboard, tudo sincronizado em tempo real via WebSocket. Um painel de administração gerencia vários petshops na mesma plataforma.',
            barberTitle: 'Rodrigues Barber Shop — App de gestão',
            barberDescription: 'Aplicativo mobile de gestão para a Rodrigues Barber Shop. O barbeiro organiza a agenda da semana em horários de 30 minutos (com pausa de almoço), cria agendamentos escolhendo cliente e serviços com cálculo automático de duração e valor, e conclui, troca ou cancela atendimentos direto pelo celular. Inclui cadastro de clientes, catálogo de serviços com preços, relatórios de faturamento, ticket médio e serviços mais realizados, além de um assistente integrado.',
            siapTitle: 'SIAP (Sistema Integrado de Atendimento Psicológico)',
            siapDescription: 'O projeto envolve o desenvolvimento de um sistema de gestão médica voltado para consultórios de psicologia, com o objetivo de facilitar o agendamento de consultas, o gerenciamento de prontuários eletrônicos e a comunicação entre profissionais e pacientes. O software proposto será uma plataforma que oferece uma interface intuitiva para organizar os calendários de consultas, armazenar dados clínicos de forma centralizada e acompanhar o histórico de tratamento dos pacientes. Ao automatizar e otimizar esses processos, o sistema busca melhorar a eficiência dos consultórios, proporcionando maior praticidade no dia a dia dos psicólogos.',

            onixxTitle: 'Onixx Sistema de Loja de Carros',
            onixxDescription: 'Fui Scrum Master do projeto "Landing Page Onixx", uma página institucional responsiva criada para apresentar os serviços da Onixx e captar leads. Atuei facilitando as cerimônias ágeis (planning, daily, review e retrospective), removendo impedimentos, alinhando prioridades com o Product Owner e mantendo o time focado nas entregas de cada sprint. Também monitorei progresso e métricas de time, promovi melhorias contínuas no processo e apoiei a comunicação entre desenvolvedores, designers e stakeholders para garantir entregas de qualidade no prazo.',

            apolloTitle: 'Sistema de Vitrine – Apollo Veículos',
            apolloDescription: 'Atuei como desenvolvedor e Scrum Master no projeto do Sistema de Vitrine da Apollo Veículos, criado para atender à necessidade de uma empresa da região em aumentar a visibilidade e o engajamento com seus veículos. O sistema conta com uma área administrativa que permite o gerenciamento completo de cadastros — incluindo carros, cores, motores e demais informações —, que são exibidas de forma dinâmica na vitrine online da loja. Fui responsável pela organização do time de desenvolvimento, planejamento das sprints e implementação das principais funcionalidades, garantindo uma entrega ágil, funcional e alinhada às expectativas do cliente.',

            seeMore: 'Ver detalhes',
            inDevelopment: 'Em desenvolvimento',
            visitSite: 'Visitar site',
            appUnavailable: 'Aplicativo ainda não disponível',
            close: 'Fechar',

            // Quarta seção (Contato)
            contactTitle: 'Contato',
            contactHeadline: 'Vamos construir algo juntos?',
            contactText: 'Tem um projeto em mente, uma vaga ou quer trocar uma ideia? Me mande uma mensagem pelo formulário ou me encontre nas redes.',
            nameLabel: 'Nome',
            surnameLabel: 'Sobrenome',
            emailLabel: 'Email',
            messageLabel: 'Mensagem',
            namePlaceholder: 'Ex: Marcelo',
            surnamePlaceholder: 'Ex: Da Silva',
            emailPlaceholder: 'Ex: email@gmail.com',
            messagePlaceholder: 'Oi, gostei muito da sua apresentação, podemos marcar uma reunião?',
            sendButton: 'Enviar mensagem',
            emailSuccess: 'Email enviado com sucesso',
            emailError: 'Erro ao enviar email',
            nameRequired: 'Nome é obrigatório.',
            surnameRequired: 'Sobrenome é obrigatório.',
            emailRequired: 'E-mail é obrigatório.',
            emailInvalid: 'E-mail inválido.',
            messageRequired: 'Mensagem é obrigatória.',

            // Footer
            footer: '© {{year}} Ariel Machado Rodrigues. Todos os direitos reservados.',
            backToTop: 'Voltar ao topo',
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
            menu: 'Open menu',
            language: 'Language',
            skipToContent: 'Skip to content',

            // Primeira seção
            currentRole: 'Mid-level Full-stack Dev at Ápice Sistemas',
            greeting: 'Hello, my name is',
            fullName: 'Ariel M. Rodrigues',
            fullStack: 'Mid-level Full-stack Developer · web & mobile',
            heroLead: 'I build web and mobile applications end to end — from the NestJS back end to the React Native app. I work as a mid-level developer at Ápice Sistemas and study Software Engineering at IFPR.',
            heroChipEducation: 'Education',
            heroChipEducationValue: 'Software Eng. · IFPR',
            seeProjects: 'View projects',
            aboutMeButton: 'About me',

            // Segunda seção (Sobre)
            aboutMeTitle: 'About me',
            aboutMeText1: 'I am a <span class="alternative-color">Software Engineering student at IFPR — Paranavaí Campus</span>, passionate about developing technological solutions. I have practical experience in software development, using languages such as Java, Python, and JavaScript, as well as skills in MySQL databases and agile methodologies.',
            aboutMeText2: 'At <span class="alternative-color">Ápice Sistemas</span>, where I started as an intern and now work as a <span class="alternative-color">mid-level full-stack developer</span>, I build internal systems and help deliver features that improve the company’s processes. I stand out for my ability to learn quickly, solve complex problems, and collaborate with multidisciplinary teams.',
            aboutMeText3: 'I also build complete products, from the database to the app — such as <span class="alternative-color">AiQPet</span>, a real-time booking platform for pet shops, and the management app for <span class="alternative-color">Rodrigues Barber Shop</span>. My focus is Full-Stack web and mobile development.',
            factEducationLabel: 'Education',
            factEducation: 'Software Engineering — IFPR Paranavaí',
            factExperienceLabel: 'Experience',
            factExperience: 'Mid-level Full-stack Dev — Ápice Sistemas',
            factFocusLabel: 'Focus',
            factFocus: 'Full-stack web & mobile',
            downloadCV: 'Download CV',
            toolsTitle: 'Technologies & tools',

            // Terceira seção (Projetos)
            projectsTitle: 'Projects',
            projectsSubtitle: 'Web and mobile systems I’ve built — from the back end to the phone.',
            aiqpetTitle: 'AiQPet — Pet shop booking',
            aiqpetDescription: 'A platform that connects pet owners and pet shops. Owners register their pets (size, weight and vaccines), pick a pet shop in their city and book a bath or grooming in a few clicks, following the service in real time — no phone calls, no waiting lines. Each pet shop has its own dashboard with the day’s schedule as a board (confirmed, in service, ready for pickup and done), pending requests, clients, services and prices, staff, opening hours, audit log and analytics, all synced in real time over WebSocket. An admin panel manages multiple pet shops on the same platform.',
            barberTitle: 'Rodrigues Barber Shop — Management app',
            barberDescription: 'Mobile management app for Rodrigues Barber Shop. The barber organizes the week in 30-minute slots (with a lunch break), creates bookings by picking a client and services with automatic duration and price calculation, and completes, changes or cancels appointments right from the phone. It includes a client list, a service catalog with prices, reports on revenue, average ticket and most popular services, plus a built-in assistant.',
            siapTitle: 'SIAP (Integrated Psychological Care System)',
            siapDescription: 'The project involves the development of a medical management system for psychology clinics, aimed at facilitating appointment scheduling, electronic medical record management, and communication between professionals and patients. The proposed software will be a platform that offers an intuitive interface to organize appointment calendars, centrally store clinical data, and track patients’ treatment history. By automating and optimizing these processes, the system seeks to improve the efficiency of clinics, providing greater convenience in the daily routine of psychologists.',

            onixxTitle: 'Onixx Car Dealership System',
            onixxDescription: 'I served as Scrum Master for the "Landing Page TekoBit" project — a responsive corporate landing page built to showcase services and capture leads. I facilitated agile ceremonies (Sprint Planning, Daily Stand-ups, Sprint Review, and Retrospective), removed impediments, aligned priorities with the Product Owner, and kept the team focused on sprint goals. I also monitored progress and team metrics, promoted continuous process improvements, and supported communication between developers, designers, and stakeholders to ensure timely, high-quality deliveries.',

            apolloTitle: 'Showcase System – Apollo Vehicles',
            apolloDescription: 'I worked as a developer and Scrum Master on the Apollo Vehicles Showcase System, a project designed to help a local company increase the visibility and engagement of its vehicle listings. The system includes an administrative dashboard that allows complete management of car data — including models, colors, engines, and other details — which are dynamically displayed in the store’s online showcase. I was responsible for coordinating the development team, planning sprints, and implementing key system features, ensuring a fast, reliable, and goal-aligned delivery that met the client’s expectations.',

            seeMore: 'View details',
            inDevelopment: 'In development',
            visitSite: 'Visit website',
            appUnavailable: 'App not available yet',
            close: 'Close',

            // Quarta seção (Contato)
            contactTitle: 'Contact',
            contactHeadline: 'Let’s build something together',
            contactText: 'Have a project in mind, a job opening, or just want to chat? Send me a message through the form or find me on social media.',
            nameLabel: 'Name',
            surnameLabel: 'Surname',
            emailLabel: 'Email',
            messageLabel: 'Message',
            namePlaceholder: 'Ex: John',
            surnamePlaceholder: 'Ex: Doe',
            emailPlaceholder: 'Ex: email@gmail.com',
            messagePlaceholder: 'Hi, I really liked your presentation, can we schedule a meeting?',
            sendButton: 'Send message',
            emailSuccess: 'Email sent successfully',
            emailError: 'Error sending email',
            nameRequired: 'Name is required.',
            surnameRequired: 'Surname is required.',
            emailRequired: 'Email is required.',
            emailInvalid: 'Invalid email.',
            messageRequired: 'Message is required.',

            // Footer
            footer: '© {{year}} Ariel Machado Rodrigues. All rights reserved.',
            backToTop: 'Back to top',
        },
    },
};

// Idioma escolhido pelo visitante. Não é usado no init: o HTML pré-renderizado é em português,
// então o app sempre começa em 'pt' e o App troca para o idioma salvo depois de montar.
export const getSavedLanguage = () => {
    try {
        const saved = localStorage.getItem('lang');
        if (saved === 'pt' || saved === 'en') return saved;
    } catch {
        // localStorage indisponível (modo privado, servidor, etc.)
    }
    return null;
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
