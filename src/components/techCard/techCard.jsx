import './techCard.css';
import html5 from '../../assets/tech-icons/html5.svg'
import javaScript from '../../assets/tech-icons/javaScript.svg'
import node from '../../assets/tech-icons/node.svg'
import react from '../../assets/tech-icons/react.svg'
import css3 from '../../assets/tech-icons/css3.svg'
import java from '../../assets/tech-icons/java.svg'
import python from '../../assets/tech-icons/python.svg'
import db from '../../assets/tech-icons/bd.svg'
import docker from '../../assets/tech-icons/docker.svg'
import bootstrap from '../../assets/tech-icons/bs.svg'
import git from '../../assets/tech-icons/git.svg'
import nestJS from '../../assets/tech-icons/NestJS.svg'

const techs = [
    { icon: react, title: 'React & React Native' },
    { icon: javaScript, title: 'JavaScript' },
    { icon: node, title: 'Node.js' },
    { icon: nestJS, title: 'NestJS' },
    { icon: java, title: 'Java' },
    { icon: python, title: 'Python' },
    { icon: db, title: 'MySQL 5 & 8' },
    { icon: docker, title: 'Docker' },
    { icon: html5, title: 'HTML5' },
    { icon: css3, title: 'CSS3' },
    { icon: bootstrap, title: 'Bootstrap' },
    { icon: git, title: 'Git & GitHub' },
];

// Os SVGs são monocromáticos, então usamos como máscara para colorir via CSS.
const TechCard = ({ icon, title }) => (
    <li className="tech-card">
        <span className="tech-icon" style={{ '--icon': `url("${icon}")` }} aria-hidden="true" />
        <span className="tech-title">{title}</span>
    </li>
);

const TechGrid = () => (
    <ul className="tech-grid">
        {techs.map((tech) => (
            <TechCard key={tech.title} {...tech} />
        ))}
    </ul>
);

export default TechGrid;
