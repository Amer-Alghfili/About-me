import ksuLogo from "./assets/img/ksu.svg";
import udacityLogo from "./assets/img/udacity.svg";
import Certifications from "./components/certifications/certificationList/CertificationList";
import certificationImage from "./assets/img/winner.svg";
import projectImage from "./assets/img/website.svg";
import experiencesImage from "./assets/img/increase.svg";
import skillsImage from "./assets/img/skills.svg";
import eLearningImage from "./assets/img/e-learning.svg";
import bookShelf from "./assets/img/bookshelf.svg";
import cardsImage from "./assets/img/cards.svg";

export const certifications = [
  {
    date: "2015-2020",
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

export const projects = [
  {
    name: "Educational platform",
    description: "Aim to help students to find experienced tutors",
    img: eLearningImage,
  },
  {
    name: "E-library",
    description: "Help you to organize your books across many shelves",
    img: bookShelf,
  },
  {
    name: "Card matching",
    description: "",
    img: cardsImage,
  },
];

export const qualifications = [
  { type: "certifications", img: certificationImage },
  { type: "projects", img: projectImage },
  { type: "experiences", img: experiencesImage },
  { type: "skills", img: skillsImage },
];

export function componentMatches(qualificationType, isOpened) {
  switch (qualificationType) {
    case "certifications":
      return <Certifications isOpened={isOpened} />;
    default:
      return null;
  }
}
