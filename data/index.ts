import { link } from "fs";
import { title } from "process";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "I'm a Full Stack Developer with a focus on the MERN stack.",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "HunterXPokemon - Tresure Hunt Game",
        des: "A treasure hunt game where you have to find the hidden pokemons in the map and catch them all to win the game.",
        img: "/pokemon.svg",
        iconLists: ["/nodejs.svg", "/mongodb.svg", "/javascript.svg", "/html5.svg", "/css3.svg"],
        link: "https://github.com/nishujangra/pokemonXHunter",
    },
    {
        id: 2,
        title: "Keeper - React App",
        des: "Keeper-React-App is a note-taking app built with React, featuring an intuitive interface for creating, editing, and deleting notes.",
        img: "/keeper.svg",
        iconLists: ["/re.svg", "/javascript.svg", "/html5.svg", "/css3.svg"],
        link: "hhttps://github.com/nishujangra/Keeper-React-App",
    },
    {
        id: 3,
        title: "Love Calculator",
        des: "Love-Calculator is a web application that calculates the compatibility score between two names, providing a fun and interactive way to gauge relationship potential.",
        img: "/love.svg",
        iconLists: ["/python.svg"],
        link: "https://github.com/nishujangra/Love-Calculator",
    },
    // {
    //     id: 4,
    //     title: "Animated Apple Iphone 3D Website",
    //     des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    //     img: "/p4.svg",
    //     iconLists: ["/.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    //     link: "https://github.com/nishujangra/ATM-Interface",
    // },
];

// export const testimonials = [
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
// ];

// export const companies = [
//     {
//         id: 1,
//         name: "cloudinary",
//         img: "/cloud.svg",
//         nameImg: "/cloudName.svg",
//     },
//     {
//         id: 2,
//         name: "appwrite",
//         img: "/app.svg",
//         nameImg: "/appName.svg",
//     },
//     {
//         id: 3,
//         name: "HOSTINGER",
//         img: "/host.svg",
//         nameImg: "/hostName.svg",
//     },
//     {
//         id: 4,
//         name: "stream",
//         img: "/s.svg",
//         nameImg: "/streamName.svg",
//     },
//     {
//         id: 5,
//         name: "docker.",
//         img: "/dock.svg",
//         nameImg: "/dockerName.svg",
//     },
// ];

export const workExperience = [
    {
        id: 1,
        title: "Backend Engineer",
        desc: "Designed and Developed for IEEE YMCA SB, I created the 'HunterXPokemon' web app using Node.js and MongoDB, managing server hosting for 750+ registrations and enhancing the user experience.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Web Developer",
        desc: "Developed a professional resume website for Mr. Rohit Tripathi using HTML, CSS, and JavaScript. Ensured a responsive design, cross-browser compatibility, and optimized performance. Collaborated with him for feedback and provided ongoing maintenance and updates.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    // {
    //     id: 3,
    //     title: "Freelance App Dev Project",
    //     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    //     className: "md:col-span-2", // change to md:col-span-2
    //     thumbnail: "/exp3.svg",
    // },
    // {
    //     id: 4,
    //     title: "Lead Frontend Developer",
    //     desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //     className: "md:col-span-2",
    //     thumbnail: "/exp4.svg",
    // },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/nishujangra"
    },
    {
        id: 2,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/nishujangra27/"
    },
    // {
    //     id: 3,
    //     img: "/insta.svg",
    // },
];


export const techStack = [
    {
        id:1,
        title: "Next.js",
        img: "/next.svg",
        link: "https://nextjs.org/",
    },
    {
        id:2,
        title: "React",
        img: "/re.svg",
        link: "https://reactjs.org/",
    },
    {
        id:3,
        title: "Node.js",
        img: "/nodejs.svg",
        link: "https://nodejs.org/en/",
    },
    {
        id:4,
        title: "MongoDB",
        img: "/mongodb.svg",
        link: "https://www.mongodb.com/",
    },
    {
        id:5,
        title: "JavaScript",
        img: "/javascript.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/",
    },
    {
        id:6,
        title: "TypeScript",
        img: "/ts.svg",
        link: "https://www.typescriptlang.org/",
    },
    {
        id:7,
        title: "MySQL",
        img: "/mysql.svg",
        link: "https://www.mysql.com/",
    },
    {
        id:8,
        title: "C++",
        img: "/cpp.svg",
        link: "https://www.cplusplus.com/",
    },
    {
        id:9,
        title: "Python",
        img: "/python.svg",
        link: "https://www.python.org/",
    },
    {
        id:10,
        title: "Tailwind",
        img: "/tail.svg",
        link: "https://tailwindcss.com/",
    }
]