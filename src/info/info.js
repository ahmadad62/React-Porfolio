import self from "../img/self.png"
import mock1 from "../img/mock1.gif"
import mock2 from "../img/AITS.png"
import mock3 from "../img/netflix.jpg"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Ahmad",
    lastName: "Alinaghian",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Hamburg Germany'
        },
        {
            emoji: "💼",
            text: "Junior developer and job seeker"
        },
        {
            emoji: "📧",
            text: "ahmadalinaghian@yhaoo.com"
        }
    ],
    socials: [

        {
            link: "https://github.com/ahmadad62",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/ahmad-alinaghian-17a773183?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuJ03eX2DToS2p8%2FBKC5q7w%3D%3D",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },


    ],
    bio: {
        en: ['About me', `<div class="markdown prose w-full break-words dark:prose-invert dark"><h3>Summary:</h3><p>I am a junior web developer with 10 years of experience in IT and telecommunications and now currently undergoing a 1-year tranning course in full-stack web development (MERN stack) and is looking for a new challenge to apply and further develop his skills.</p><h3>Education:</h3><p>Ahmad Alinaghian holds a Master of Science in ICT Engineering from Amirkabir University of Tehran and a Bachelor of Science in Telecommunication Technology from Azad University of Najafabad, Iran. He is currently enrolled in a Full Stack Web Development program with DCI Digital Portfolio Institute GmbH.</p><h3>Skills:</h3><p>I am proficient in HTML5, CSS3, JavaScript, React/Redux, Bootstrap, NextJS, SCSS, jQuery, Tailwind, Node.js, RESTful API, Clean Code, Trello, and Responsive Design.</p><h3>Work Experience:</h3><p>Ahmad Alinaghian worked as a Quality Inspector at Arotec Inspection Partner in Germany from 2020-2022. He was responsible for inspecting electrical systems and providing recommendations for improvement. Prior to that, he worked as a Senior Project Engineer at International Co. in Iran from 2015-2019, overseeing the planning, execution, and monitoring of IT and telecommunications projects. He also worked as a Project Engineer at International Co. from 2009-2015, focusing on product development and network design.</p><h3>Language:</h3><p>I am a native Persian speaker and has a C1 level of proficiency in German and a B2 level of proficiency in English.</p><h3>Breakpoints:</h3><p>Overall, I have a solid background in IT and telecommunications and am now looking to apply my expertise to web development. My proficiency in a wide range of programming languages and tools, coupled with my problem-solving skills and experience working on complex projects, make me an ideal candidate for any web development role.</p></div>`],
        de: ["Über mich", "Als Webentwickler mit 10 Jahren Berufserfahrung im IT und Telekom befinde ich mich derzeit in einer 1- jährigen Weiterbildung im Bereich Full-Stack-Webentwicklung (MERN- Stack). Ich suche nach einer neuen Herausforderung, bei der ich meine Kenntnisse aus meiner vorherigen Arbeit und der Webentwicklung verbinden und lösungsorientiert einbringen sowie weiterentwickeln kann."
        ]
    },
    skills:
    {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
        exposedTo: ['nodejs', 'python', 'adobe illustrator']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            id: 1,
            title: "Admin Dashboard and Firebase Authentication",
            live: "https://resplendent-liger-fde8c2.netlify.app/",
            source: "https://github.com/ahmadad62/ReactAdminDashboard",
            image: mock1,
            details: `https://github.com/ahmadad62/ReactAdminDashboard/blob/main/README.md`
        },
        {
            id: 2,
            title: "AITS-React Static Website",
            live: "https://main--loquacious-llama-aa9e1d.netlify.app/",
            source: "https://github.com/ahmadad62/React-Bootstrap-Website",
            image: mock2
        },
        {
            id: 3,
            title: "Netflix-Clone",
            live: "https://chic-youtiao-b033b6.netlify.app/",
            source: "https://github.com/ahmadad62/clone-netflix",
            image: mock3
        },
        {
            id: 4,
            title: "JAVASCRIPT CALCULATOR",
            live: "https://github.com/ahmadad62/SimpleCalculator",
            source: "https://github.com/ahmadad62/SimpleCalculator",
            image: mock4
        },
        {
            id: 5,
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}