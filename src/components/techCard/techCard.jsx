import React from 'react';
import './TechCard.css';
import html5 from '../../assets/tech-icons/html5.svg'
import javaScript from '../../assets/tech-icons/javaScript.svg'
import node from '../../assets/tech-icons/node.svg'
import react from '../../assets/tech-icons/react.svg'
import css3 from '../../assets/tech-icons/css3.svg'
import java from '../../assets/tech-icons/java.svg'
import db from '../../assets/tech-icons/bd.svg'
import docker from '../../assets/tech-icons/docker.svg'
import bootstrap from '../../assets/tech-icons/bs.svg'
import git from '../../assets/tech-icons/git.svg'

const techs = [
    {
        icon: html5,
        title: 'HTML5',
        description: 'Estruturação de conteúdo e desenvolvimento web moderno.',
        alt: "HTML5",
    },
    {
        icon: css3,
        title: 'CSS3',
        description: 'Estilização de páginas com responsividade e animações.',
        alt: "CSS",
    },
    {
        icon: javaScript,
        title: 'JavaScript',
        description: 'Linguagem de programação para interatividade na web.',
        alt: "JavaScript",
    },
    {
        icon: react,
        title: 'React e React Native',
        description: 'Framework para construção de interfaces modernas.',
        alt: "React e React Native",
    },
    {
        icon: node,
        title: 'Node Js',
        description: 'Framework para construção de interfaces modernas.',
        alt: "Node Js",
    },
    {
        icon: java,
        title: 'Java',
        description: 'Framework para construção de interfaces modernas.',
        alt: "Java",
    },
    {
        icon: db,
        title: 'MySQL 5 e 8',
        description: 'Framework para construção de interfaces modernas.',
        alt: "Mysql",
    },
    {
        icon: docker,
        title: 'Docker',
        description: 'Framework para construção de interfaces modernas.',
        alt: "Docker",
    },
    {
        icon: bootstrap,
        title: 'Bootstrap',
        description: 'Framework para construção de interfaces modernas.',
        alt: "Bootstrap",
    },
    {
        icon: git,
        title: 'GitHub',
        description: 'Framework para construção de interfaces modernas.',
        alt: "GitHub",
    },

];

const TechCard = ({ icon, title, description, alt }) => (
    <div className="tech-card">
        <div className="icon"><img src={icon} alt={alt} /></div>
        <h3 className="title">{title}</h3>
        {/* <p className="description">{description}</p> */}
    </div>
);

const TechGrid = () => {
    return (
        <div className="tech-grid">
            {techs.map((tech, index) => (
                <TechCard key={index} {...tech} />
            ))}
        </div>
    );
};

export default TechGrid;
