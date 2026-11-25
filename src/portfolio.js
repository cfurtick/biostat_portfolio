/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Claire Furtick",
  title: "Hi, Claire here!",
  subTitle: emoji(
    "I am a current Biostatistics masters student at the University of Washington."
  ),
  resumeLink:
    "My Resume", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/cfurtick",
  linkedin: "https://www.linkedin.com/in/clairefurtick/",
  gmail: "cfurtick@uw.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Interests",
  subTitle: "What am I most passionate about?",
  skills: [
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Washington",
      logo: require("./assets/images/uwLogo.png"),
      subHeader: "Master of Science in Biostatistics",
      duration: "September 2026 - Present",
      desc: "Biostatistics Excellence Award",
      //descBullets: ["Note, Notes"]
    },
    {
      schoolName: "George Washington University",
      logo: require("./assets/images/gwLogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science, Minor in Mathematics",
      duration: "September 2018 - April 2022",
      desc: "Magna Cum Laude, Honors Program, Presidential Merit Scholarship",
      //descBullets: ["Note, Notes"]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Research Engineer",
      company: "Barcelona Supercomputing Center",
      companylogo: require("./assets/images/bscLogo.jpg"),
      date: "April 2023 – April 2024",
      desc: "Description...",
    },
    {
      role: "Project Coordinator",
      company: "North East Medical Services",
      companylogo: require("./assets/images/nemsLogo.jpg"),
      date: "April 2025 – April 2026",
      desc: "Description..."
    },
    {
      role: "Undergraduate Research Assistant",
      company: "George Washinton Unviersity",
      companylogo: require("./assets/images/gwLogo.jpg"),
      date: "Jan 2020 – Jan 2021",
      desc: "Description..."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */


export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences
};
