import {
  RolexImg,
  TournamentsImg,
  VanguardEliteImg,
  LamborghiniImg,
} from "../../../../assets";

interface CaseStudy {
  imgSrc: any;
  title: string;
  subtitle: string;
  description: string;
  websiteLink: string;
  codeLink: string;
}

const caseStudies: CaseStudy[] = [
  {
    imgSrc: VanguardEliteImg,
    title: "React js",
    subtitle: "Gym Vanguard Elite",
    description:
      "I developed this unique website with a keen focus on detail, combining sophisticated design elements crafted by an experienced designer. The code is meticulously clean and well-organized, ensuring that the site is fully responsive and adapts seamlessly across a wide range of screen resolutions, from 4K to 320px. I invite you to explore the site and would greatly appreciate your feedback on how effectively it integrates professional design with functionality. Thank you!",
    websiteLink: "https://gym-vanguard-elite-eedd.vercel.app",
    codeLink: "https://github.com/YieGin/Gym-Vanguard-Elite",
  },
  {
    imgSrc: RolexImg,
    title: "React js",
    subtitle: "Rolex",
    description:
      "A website, designed to attract high-end clientele, has been developed with the aim of showcasing expertise. Additionally, it is responsive to almost all screen sizes. Please review the website; it is a refined version of the Rolex website, termed Rolex 2.0",
    websiteLink: "https://rolex-2-0.vercel.app",
    codeLink: "https://github.com/YieGin/Rolex_2.0",
  },
  {
    imgSrc: LamborghiniImg,
    title: "React js",
    subtitle: "Lamborghini",
    description:
      "A website, designed to captivate Lamborghini enthusiasts, has been developed with the aim of showcasing expertise. Additionally, it is responsive to almost all screen sizes. Please review the website; it is a meticulously crafted clone of the official Lamborghini website.",
    websiteLink: "https://yiegin.github.io/lamborghini_2.0/",
    codeLink: "https://github.com/YieGin/lamborghini_2.0",
  },
  {
    imgSrc: TournamentsImg,
    title: "React js",
    subtitle: "Tournaments",
    description:
      "A website, designed to cater to enthusiasts of tournaments, has been developed with the aim of showcasing expertise. Additionally, it is responsive to almost all screen sizes. Please review the website; it is a specialized platform for organizing or viewing tournaments.",
    websiteLink: "https://yiegin.github.io/Tournaments/",
    codeLink: "https://github.com/YieGin/Tournaments",
  },
];

export default caseStudies;
