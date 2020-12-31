import ksuLogo from "./assets/img/ksu.svg";
import udacityLogo from "./assets/img/udacity.svg";
import certificationImage from "./assets/img/winner.svg";
import projectImage from "./assets/img/website.svg";
import experiencesImage from "./assets/img/increase.svg";
import skillsImage from "./assets/img/skills.svg";
import eLearningImage from "./assets/img/e-learning.svg";
import bookShelf from "./assets/img/bookshelf.svg";
import cardsImage from "./assets/img/cards.svg";
import riyadCapitalImage from "./assets/img/riyad-capital.png";
import reactImage from "./assets/img/react.svg";
import jsImage from "./assets/img/js.svg";
import cssImage from "./assets/img/css.svg";
import htmlImage from "./assets/img/html.svg";
import gitImage from "./assets/img/git.svg";
import wordImage from "./assets/img/word.svg";
import powerpointImage from "./assets/img/powerpoint.svg";
import linkedinImage from "./assets/img/linkedin.svg";
import githubImage from "./assets/img/github.svg";
import twitterImage from "./assets/img/twitter.svg";
import phoneImage from "./assets/img/phone.svg";
import gmailImage from "./assets/img/gmail.svg";

import withList from "./hoc/withList";
import CertificationItem from "./components/certifications/certificationItem/CertificationItem";
import ProjectItem from "./components/projects/projectItem/ProjectItem";
import ExperienceItem from "./components/experiences/ExperienceItem";
import SkillsItem from "./components/skills/mainSkillsItem/MainSkillItem";

const certifications = [
  {
    date: "2015 - 2020",
    name: "King Saud University",
    major: "Bachelor Software Engineering",
    description:
      "I graduated with GPA (4.02/5). I learned the processes of building software projects and how can they help the organizations to make the software development easier with following their rules. Also I walk through the software's lifecycle and learned how as a software engineer work with each phase of the software development.Finally I applied all what I learned in the graduation project which covers all the basics of software development phases in the first semester, and I developed the project's software in the second semester based on the processes and design decision made in the first semester.",
    img: ksuLogo,
    syllabusLink: "",
  },
  {
    date: "APR 2020",
    name: "Udacity",
    major: "Nanodegree React JS",
    description:
      "After I learned the basics of front-end development, I started to learn React JS, React JS is a UI framework which allows you to build a front-end applications.",
    img: udacityLogo,
    syllabusLink: "",
  },
  {
    date: "JAN 2020",
    name: "Udacity",
    major: "Nanodegree Front-end development",
    description:
      "In this program I learned the basics front-end technologies HTML, CSS and Javascript.",
    img: udacityLogo,
    syllabusLink: "",
  },
];

const projects = [
  {
    name: "Educational platform",
    description: "Aim to help students to find experienced tutors.",
    img: eLearningImage,
    link: "",
  },
  {
    name: "E-library",
    description: "Help you to organize your books across many shelves.",
    img: bookShelf,
    link: "",
  },
  {
    name: "Card matching",
    description: "",
    img: cardsImage,
    link: "",
  },
];

const experiences = [
  {
    name: "National Arabic Bank",
    date: {
      year: 2020,
      months: "December - Present",
    },
    major: "Software developer",
  },
  {
    name: "Riyad Capital",
    date: {
      year: 2020,
      months: "June - October",
    },
    major: "Software trainee",
    img: riyadCapitalImage,
  },
];

const mainSkills = [
  {
    type: "Technical skills",
    skills: [
      {
        name: "React JS",
        img: reactImage,
      },
      {
        name: "Javascript",
        img: jsImage,
      },
      {
        name: "CSS",
        img: cssImage,
      },
      {
        name: "HTML",
        img: htmlImage,
      },
      {
        name: "Git",
        img: gitImage,
      },
    ],
  },
  {
    type: "Microsoft office",
    skills: [
      {
        name: "Word",
        img: wordImage,
      },
      {
        name: "Powerpoint",
        img: powerpointImage,
      },
    ],
  },
];

export const qualifications = [
  { type: "certifications", img: certificationImage },
  { type: "projects", img: projectImage },
  { type: "experiences", img: experiencesImage },
  { type: "skills", img: skillsImage },
];

export const accounts = [
  {
    name: "Linked-in",
    link: "https://www.linkedin.com/in/amer-alghfili-abb4731b0/",
    img: linkedinImage,
  },
  {
    name: "Git-hub",
    link: "https://github.com/Amer-Alghfili",
    img: githubImage,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/AAlghfili",
    img: twitterImage,
  },
];

export const contacts = [
  {
    img: phoneImage,
    label: {
      name: "Phone",
      value: "0583640249",
    },
  },
  {
    img: gmailImage,
    label: {
      name: "Gmail",
      value: "AmerAlghfili@gmail.com",
    },
  },
];

export function componentMatches(qualificationType, isOpened) {
  switch (qualificationType) {
    case "certifications":
      return withList(CertificationItem, certifications, isOpened)();
    case "projects":
      return withList(ProjectItem, projects, isOpened)();
    case "experiences":
      return withList(ExperienceItem, experiences, isOpened)();
    case "skills":
      return withList(SkillsItem, mainSkills, isOpened)("list--row");
    default:
      return null;
  }
}
