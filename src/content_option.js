const logotext = "MIJI";
const meta = {
    title: "Miji Kim",
    description: "Project Manager, HCI Researcher, and UI/UX Designer with international experience and a focus on data-driven user experience improvements.",
};

const introdata = {
    title: "I’m Miji Kim",
    animated: {
        first: "I create user-centered designs",
        second: "I manage projects with precision",
        third: "I research and improve UX",
    },
    description: "With a strong background in project management and UI/UX design, I am passionate about enhancing digital experiences through data analysis, UX research, and global strategy.",
    //your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "About Me",
    aboutme: "I am an experienced Project Manager, HCI researcher, and UI/UX Designer with a track record in managing global projects and improving user satisfaction through data-driven strategies. My expertise includes user behavior analysis, A/B testing, and crafting tailored service strategies.",
};

const worktimeline = [
    {
        jobtitle: "Global Operations Team Intern",
        where: "Naver Z (ZEPETO)",
        date: "2024.05 - 2024.08",
        description: "Led strategy development based on data analysis and UX research, contributing to optimized user experiences for diverse international markets.",
    },
    {
        jobtitle: "Content Planning and Operations Intern",
        where: "SNOW, Naver",
        date: "2023.08 - 2024.02",
        description: "Independently managed content strategies for VITA video editing app, contributing to UX improvements and launching popular features in the U.S.",
    },
];

const skills = [
    {
        name: "Project Management",
        value: 90,
    },
    {
        name: "UX Research",
        value: 85,
    },
    {
        name: "Data Analysis",
        value: 80,
    },
    {
        name: "UI/UX Design",
        value: 75,
    },
    {
        name: "Adobe Suite",
        value: 90,
    },
];

const services = [
    {
        title: "Project Management",
        description: "Expert in leading cross-functional teams and executing data-driven projects that enhance user engagement and operational efficiency.",
    },
    {
        title: "UI/UX Design",
        description: "Creating user-centric designs and implementing UX strategies that align with users' needs to improve product satisfaction.",
    },
    {
        title: "HCI Research",
        description: "Conducting user research and experiments to uncover insights that drive better interaction design and user experience.",
    },
];

const dataportfolio = [
    // UI/UX Projects
    {
        img: require("./pages/portfolio/project/img/root/rootimg.jpg"),
        title: "Root App",
        description: "a family social communicating application",
        link: "pages/portfolio/project/rootApp",
        category: "UI/UX",
    },
    {
        img: require("./pages/portfolio/project/img/snap/snapimg.jpg"),
        title: "SNAP Redesign",
        description: "Improved UX for VITA's Epik AI Yearbook feature, reaching over 1 million U.S. users.",
        link: "pages/portfolio/project/snapApp",
        category: "UI/UX",
    },
    {
        img: require("./pages/portfolio/project/img/youtube/youtubeimg.jpg"),
        title: "Youtube Study",
        description: "Contributed to content strategy for ZEPETO's global audience, increasing user engagement.",
        link: "#",
        category: "UI/UX",
    },
    // Development Projects
    {
        img: "https://picsum.photos/400/700?grayscale",
        title: "Responsive Website Development",
        description: "Developed a responsive website for a local business, optimized for various devices.",
        link: "#",
        category: "Development",
    },
    {
        img: "https://picsum.photos/400/600?grayscale",
        title: "Educational Platform Rebranding",
        description: "Collaborated on the rebranding of an educational platform with enhanced user interface.",
        link: "#",
        category: "Development",
    },
    {
        img: "https://picsum.photos/400/800?grayscale",
        title: "Data-Driven Product Enhancement",
        description: "Enhanced product features through data analysis and A/B testing.",
        link: "#",
        category: "Development",
    },
    // Other Projects
    {
        img: "https://picsum.photos/400/300?grayscale",
        title: "User Behavior Analysis",
        description: "Analyzed user data to provide insights for enhancing user experience and satisfaction.",
        link: "#",
        category: "Other",
    },
    {
        img: "https://picsum.photos/400/550?grayscale",
        title: "Event Planning and Management",
        description: "Organized large-scale sale events for creator items, boosting sales with targeted strategies.",
        link: "#",
        category: "Other",
    },
    {
        img: "https://picsum.photos/400/450?grayscale",
        title: "Digital Marketing Campaign",
        description: "Led a successful digital marketing campaign with a focus on performance metrics.",
        link: "#",
        category: "Other",
    },
];



const contactConfig = {
    YOUR_EMAIL: "mijik@sfu.ca",
    YOUR_FONE: "+1 (236) 883-1489",
    description: "Let's discuss any project opportunities or collaborations! I’m always open to connecting and exploring new ideas.",
    YOUR_SERVICE_ID: "service_gvmilae",
    YOUR_TEMPLATE_ID: "template_lsxtdme",
    YOUR_USER_ID: "XyZqyxe65tYap90pz",
};

const socialprofils = {
    github: "https://github.com/iimiji",
    linkedin: "https://www.linkedin.com/in/mijikim0105",
    portfolio: "https://iimiji.github.io/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
