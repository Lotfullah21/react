// images will be optimized and our application will be faster
//  make sure the images folder be in src file
import { useState } from "react";
import caltech from "../assets/images/caltech.jpg";
import cmu from "../assets/images/cmu.jpg";
import cornell from "../assets/images/cornell.jpeg";
import berkeley from "../assets/images/berkely.jpg";
import mit from "../assets/images/mit.jpeg";
import std from "../assets/images/stanford.jpg";

const universities = [
  {
    name: "Massachusetts Institute of Technology ",
    course: "computer science",
    img: mit,
    id: 1,
  },
  {
    name: "University of Berkeley ",
    course: "computer science",
    img: berkeley,
    id: 6,
  },

  {
    name: "Stanford University",
    course: "Artificial Intelligence",
    img: std,
    id: 2,
  },

  {
    name: "California Institute of Technology",
    course: "Data Analysis",
    img: caltech,
    id: 3,
  },

  {
    name: "Cornell University",
    course: "Machine Learning",
    img: cornell,
    id: 4,
  },
  {
    name: "Carnegie Mellon University",
    course: "computer science",
    img: cmu,
    id: 5,
  },
];

export default universities;
