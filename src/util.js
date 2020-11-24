import ksuLogo from "./assets/img/ksu_masterlogo_white_rgb.svg";
import Certifications from "./components/certifications/index";
import certificationImage from "./assets/img/winner.svg";
import projectImage from "./assets/img/website.svg";
import experiencesImage from "./assets/img/increase.svg";
import skillsImage from "./assets/img/skills.svg";

const certifications = [
  {
    name: "King Saud University",
    description: "Software engineering (4.02)",
    date: "(2015 - 2020)",
    img: ksuLogo,
  },
];

export const qualifications = [
  { type: "certifications", img: certificationImage },
  { type: "projects", img: projectImage },
  { type: "experiences", img: experiencesImage },
  { type: "skills", img: skillsImage },
];

export function componentMatches(qualificationType) {
  switch (qualificationType) {
    case "certifications":
      return <Certifications />;
    default:
      return null;
  }
}
