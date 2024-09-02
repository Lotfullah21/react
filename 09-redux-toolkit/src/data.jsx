import { nanoid } from "nanoid";

import { FaHtml5, FaJs, FaReact, FaPython } from "react-icons/fa";
import { BiSolidComponent } from "react-icons/bi";
import { FaLayerGroup } from "react-icons/fa6";

import lab from "./assets/lab.png";
import cocktail from "./assets/cocktail.png";
import navbar from "./assets/header.png";
import courses from "./assets/courses.png";
import questions from "./assets/questions.png";
import gallery from "./assets/gallery.png";

const projects = [
  {
    id: nanoid(),
    image: lab,
    price: "100",
    url: "https://hoshmandlab-educational.netlify.app/",
    github: "https://github.com/Lotfullah21",
    title: "hoshmand lab",
    amount: 1,
    total: 0,
    text: "I am curious to know about brain and universe. in fact one of the main reason I am interested about this is, because I want to know the meaning of all these",
  },
  {
    id: nanoid(),
    image: courses,
    amount: 0,
    total: 0,
    price: "10",
    url: "https://react-filter-course.netlify.app/",
    github: "https://github.com/Lotfullah21",
    title: "Courses",
    text: "I am curious to know about brain and universe. in fact one of the main reason I am interested about this is, because I want to know the meaning of all these",
  },
  {
    id: nanoid(),
    image: navbar,
    amount: 1,
    total: 0,
    price: "90",
    url: "https://navbar-new-h2.netlify.app/",
    github: "https://github.com/Lotfullah21",
    title: "navbar",
    text: "I am curious to know about brain and universe. in fact one of the main reason I am interested about this is, because I want to know the meaning of all these",
  },
  {
    id: nanoid(),
    image: cocktail,
    amount: 0,
    total: 0,
    price: "80",
    url: "https://cocktail-store-shop.netlify.app/",
    github: "https://github.com/Lotfullah21",
    title: "Coffee store",
    text: "I am curious to know about brain and universe. in fact one of the main reason I am interested about this is, because I want to know the meaning of all these",
  },
  {
    id: nanoid(),
    image: questions,
    total: 0,
    amount: 2,
    price: "50",
    img: "./assets/questions.png",
    url: "https://questions-app-react.netlify.app/",
    github: "https://github.com/Lotfullah21",
    title: "quiz",
    text: "I am curious to know about brain and universe. in fact one of the main reason I am interested about this is, because I want to know the meaning of all these",
  },
];
export default projects;
