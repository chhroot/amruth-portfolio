import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
    name: 'Amruth Kiran',
    initials: 'AK',
    url: 'https://terminal-portfolio-dun.vercel.app/',
    location: 'Chennai, Tamil Nadu',
    locationLink: 'https://www.google.com/maps/place/chennai',
    description:
        'Developer x Designer. UX so smooth, even Gollum would say "precious"',
    summary:
        'I love both design 🎨 and development 🔮 — which basically means I’m obsessed with crafting user experiences that feel as good as they look. My sites are so responsive, they might just text you back 🙀. That tiny microinteraction you didn’t notice? Oh yeah… that was me 😉.',
    avatarUrl: '/me.jpg',
    skills: [
        'Next.js',
        'React Native',
        'Nest.js',
        'Typescript',
        'Python',
        'Figma',
        'Svelte',
        'Node.js',
        'TailwindCSS',
        'SASS',
        'AWS',
    ],
    navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
    contact: {
        email: 'amruthkiran57@gmail.com',
        tel: '+91 7397468065',
        social: {
            GitHub: {
                name: 'GitHub',
                url: 'https://github.com/chhroot',
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/kiran-amruth/',
                icon: Icons.linkedin,

                navbar: true,
            },
            Playstation: {
                name: 'Playstation',
                url: 'https://psnprofiles.com/ArrowInTheeKnee',
                icon: Icons.playstation,

                navbar: true,
            },
            X: {
                name: 'X',
                url: 'https://x.com/AmruthKiran3?t=Hy8F2Kze6tBbpxL97lRKVw&s=09',
                icon: Icons.x,

                navbar: true,
            },
            WhatsApp: {
                name: 'WhatsApp',
                url: 'https://wa.me/917397468065',
                icon: Icons.whatsappBlack,

                navbar: true,
            },

            email: {
                name: 'Send Email',
                url: '#',
                icon: Icons.email,

                navbar: false,
            },
        },
    },

    work: [
        {
            company: 'Noukha',
            href: 'https://noukha.in/',
            badges: [],
            location: 'Coimbatore, Tamil Nadu',
            title: 'Software Engineer',
            logoUrl: '/noukha.png',
            start: 'November 2024',
            end: 'Present',
            description: 'Crafting MVPs for startups',
        },
        {
            company: '32Mins (Freelance Consultant)',
            href: 'https://32mins.com/',
            badges: [],
            location: 'Chennai, Tamil Nadu',
            title: 'User Experience Engineer',
            logoUrl: '/32mins.jpg',
            start: 'November 2024',
            end: 'March 2025',
            description:
                "As part of the IIT-incubated startup team, led the development of Rudram Dynamics' website using Sveltekit and Sanity CMS. Created a robust digital presence for this emerging tech venture, focusing on scalability, seamless content management, and exceptional user experience.",
        },
        {
            company: 'Cookr',
            badges: [],
            href: 'https://cookr.in/',
            location: 'Coimbatore, Tamil Nadu',
            title: 'Software Engineer',
            logoUrl: '/cookr.jpg',
            start: 'February 2024',
            end: 'October 2024',
            description:
                'Spearheaded the successful transition of Cookr’s native food delivery app to a highly responsive web version, augmenting user experience and accessibility, expanding the customer base to 25%. Developed Features for Cookr’s Customer and Internal Android Applications. Led collaboration between design and product teams to integrate UI elements.',
        },
        {
            company: 'Kaaylabs',
            href: '',
            badges: [],
            location: 'Chennai, Tamil Nadu',
            title: 'Frontend Developer Intern',
            logoUrl: '/kaaylabs.jpg',
            start: 'April 2022',
            end: 'July 2022',
            description:
                'Led the development of intuitive dashboards to enhance functionality within Kaaylabs’ internal employee web app',
        },
    ],
    education: [
        {
            school: 'Government College of Technology, Coimbatore',
            href: '',
            degree: 'B.Tech Information Technology',
            logoUrl: '/gct.jpg',
            start: '2021',
            end: '2024',
        },
        {
            school: 'PSG College of Technology, Coimbatore',
            href: 'https://psgtech.edu.in/',
            degree: 'Diploma in Computer Science and Engineering',
            logoUrl: '/psg.jpg',
            start: '2018',
            end: '2021',
        },
    ],
    projects: [
        {
            title: 'Place Order - Cookr',
            href: 'https://www.homefood.cookr.in/',
            dates: 'April 2023 - March 2024',
            active: true,
            description:
                "Built the Web Version of Cookr's native food delivery platform, Worked on internal web apps also Worked on the Customer and Home Chef Mobile Applications",
            technologies: [
                'React.js',
                'Redux',
                'Typescript',
                'Netcore',
                'Google Analytics',
                'TailwindCSS',
                'Sendbird',
                'RazorPay',
            ],
            links: [
                {
                    type: 'Website',
                    href: 'https://www.homefood.cookr.in/',
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: '/cookr-screenshot.png',
            video: '',
        },
        {
            title: 'Kluney Manor - Freelance',
            href: 'https://kluneymanor.com',
            dates: 'April 2024',
            active: true,
            description:
                'Designed and developed the responsive website for Kluney Manor, a 3-star resort. Delivered site design, SEO, image optimization, and cross-device polish to improve direct bookings and guest engagement.',
            technologies: [
                'Figma',
                'Next.js',
                'Typescript',
                'TailwindCSS',
            ],
            links: [
                {
                    type: 'Website',
                    href: 'https://kluneymanor.com',
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: '',
            video: '/kluney-video.webm',
        },
        {
            title: 'Startup Singam - Noukha',
            href: 'https://startupsingam.com/',
            dates: 'February 2025 - March 2025',
            active: true,
            description:
                "Built the complete web platform for Startup Singam, Tamil Nadu's pioneering startup reality show broadcast on Vijay TV.",
            technologies: [
                'Next.js',
                'Typescript',
                'Zoho CRM',
                'Github Actions',
                'TailwindCSS',
                'Shadcn UI',
                'AWS S3',
            ],
            links: [
                {
                    type: 'Website',
                    href: 'https://startupsingam.com/',
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: '/singam-screenshot.png',
            video: '',
        },
        {
            title: 'Cuptime - Noukha',
            href: 'https://startupsingam.com/',
            dates: 'April 2024 - May 2024',
            active: true,
            description:
                'Worked on the internal web application for Cuptime, as well as built their complete website (psst it uses google sheets as a CMS, hehe fun)',
            technologies: [
                'Next.js',
                'Typescript',
                'Github Actions',
                'TailwindCSS',
                'Shadcn UI',
                'AWS S3',
            ],
            links: [
                {
                    type: 'Website',
                    href: 'https://cuptime.in/',
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: '',
            video: '/cuptime-video.mp4',
        },
        {
            title: 'Cinesthetic - Personal Project',
            href: 'https://cinesthetic.netlify.app/',
            dates: 'May 2023 - June 2024',
            active: true,
            description:
                'User-friendly movie information application designed to help movie enthusiasts explore details about their favorite movies.',
            technologies: [
                'React.js',
                'Typescript',
                'Redux',
                'MUI',
                'TailwindCSS',
                'Axios',
            ],
            links: [
                {
                    type: 'Website',
                    href: 'https://cinesthetic.netlify.app/',
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: 'Source',
                    href: 'https://github.com/chhroot/cinesthetic',
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: '/cinesthetic-screenshot.png',
            video: '',
        },
        {
            title: 'SawYou - Personal Project',
            href: 'https://sawyou.netlify.app/',
            dates: 'June 2023 - June 2023',
            active: true,
            description:
                'A full-stack image sharing and social media platform which enables creating and saving of images, GIFs and videos, in the form of pinboards.',
            technologies: ['React.js', 'Typescript', 'Sanity', 'TailwindCSS'],
            links: [
                {
                    type: 'Website',
                    href: 'https://sawyou.netlify.app/',
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: 'Source',
                    href: 'https://github.com/chhroot/saw-you-sanity',
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: '/sawyou-screenshot.png',
            video: '',
        },
        {
            title: 'Treece - Noukha',
            href: 'https://treece-se.com/',
            dates: 'April 2025 - May 2025',
            active: true,
            description:
                'Built a dynamic corporate website for Treece a US based structural engineering firm',
            technologies: [
                'Next.js',
                'Typescript',
                'Github Actions',
                'TailwindCSS',
                'AWS S3',
            ],
            links: [
                {
                    type: 'Website',
                    href: 'https://treece-se.com/',
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: '',
            video: '/treece-video.mp4',
        },
    ],
} as const;
