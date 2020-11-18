const allProjectList = [
    // {
//         id: 1,
//         name: 'Ema-john Online Products Store',
//         category: 'Full-Stack.',
//         technologies: `React, JavaScript(ES6), Bootstrap 4 for front-end; Node.js, Express, Heroku for back-end; 
//         Firebase for hoisting and authentication; Stripe as payment method; MongoDB for database.
// `,
//         images: {
//             img1: 'https://i.ibb.co/L8q6Jwy/img21.png',
//             img2: 'https://i.ibb.co/2qvRddk/img22.png',
//             img3: 'https://i.ibb.co/YBf9DHZ/img23.png'
//         },
//         description: "This is an online e-commerce store for selling electronic products. You can order products, check product details, review of your products, check card, can make payment and so on that has done successfully with both of front-end and back-end applications.",
//         githubRipository: 'https://github.com/touhiduzzaman-tuhin/ema-john-simple',
//         liveWebsite: 'https://tuhin-ema-john-simple.netlify.app/'


//     },
    // {
    //     id: 2,
    //     name: 'Online Doctor’s Portal',
    //     category: 'Full-Stack.',
    //     technologies: `React, JavaScript(ES6), Bootstrap 4 and Material UI for front-end; Node.js, Express, for back-end; MongoDB for database.`,
    //     images: {
    //         img1: 'https://i.ibb.co/xXstQK5/img31.png',
    //         img2: 'https://i.ibb.co/JRFw8yf/img32.png',
    //         img3: 'https://i.ibb.co/4MVnFHn/img33.png'
    //     },
    //     description: "Front-end and back-end works has done carefully. This website is for patients management of a doctors. Patients can get appointment for a specific problem on a specific day. By logging, doctor can check how many appointments he/she has by dates and can take a number of actions and so on.",
    //     githubRipository: 'https://github.com/S-Delowar/doctor-portal-front-end',
    //     liveWebsite: 'https://doctors-portal1.firebaseapp.com/'


    // },
    // {
    //     id: 3,
    //     name: 'Online Food Servies',
    //     category: 'Full-Stack.',
    //     technologies: `React, JavaScript(ES6), Bootstrap 4 for front-end;  Node.js, Express, Heroku for back-end; Firebase for hoisting and authentication; Stripe as payment method; MongoDB for database.`,
    //     images: {
    //         img1: 'https://i.ibb.co/1rnkPQJ/img11.png',
    //         img2: 'https://i.ibb.co/SdcF0hf/img12.png',
    //         img3: 'https://i.ibb.co/S7DXyWZ/img13.png'
    //     },
    //     description: "This site is for selling foods online. Anybody can order foods for breakfast or lunch or dinner and also can track his order. I have done both of front-end and back-end applications for this site.",
    //     githubRipository: 'https://github.com/S-Delowar/hot-red-onion-project',
    //     liveWebsite: 'https://red-onion-online-food.web.app/'
    // },
    {
        id: 7,
        name: 'News feed Posts',
        category: 'Front-End.',
        technologies: `HTML, CSS, Bootstrap, Java Script, ES-6, React, Rest API.`,
        images: {   
            img1: 'https://i.ibb.co/X2yxZMW/newsfeed-home.png',
            img2: 'https://i.ibb.co/5G5cm43/newsfeed-comment.png',
            img3: 'https://i.ibb.co/DQ4ctk9/newsfeed-1.png'
        },
        description: "An online shop to sell products online. I have done the front-end application here. I think this is an amazing layout of an e-commerce website to the customers",
        githubRipository: 'https://github.com/touhiduzzaman-tuhin/newsfeed-posts',
        liveWebsite: 'https://tuhin-newsfeed-posts.netlify.app/'
    },
    {
        id: 8,
        name: 'Online Course List',
        category: 'Front-End.',
        technologies: `HTML, CSS, Bootstrap, Java Script, ES-6, React.`,
        images: {          
            img1: 'https://i.ibb.co/C8RGQV9/class-home.png',
            img2: 'https://i.ibb.co/9nMyjPc/class-shoha.png',
            img3: 'https://i.ibb.co/zVkrG5x/class-tuhin.png'
        },
        description: "An online shop to sell products online. I have done the front-end application here. I think this is an amazing layout of an e-commerce website to the customers",
        githubRipository: 'https://github.com/touhiduzzaman-tuhin/online-class-website',
        liveWebsite: 'https://tuhin-online-class-website.netlify.app/'
    },
    {
        id: 9,
        name: 'Friend List',
        category: 'Front-End.',
        technologies: `HTML, CSS, Bootstrap, Java Script, ES-6, React.`,
        images: {     
            img1: 'https://i.ibb.co/L5XC50M/friends-home.png',
            img2: 'https://i.ibb.co/D81P8Tm/friends-1.png',
            img3: 'https://i.ibb.co/ggXm9CN/friends-2.png'
        },
        description: "An online shop to sell products online. I have done the front-end application here. I think this is an amazing layout of an e-commerce website to the customers",
        githubRipository: 'https://github.com/touhiduzzaman-tuhin/friends',
        liveWebsite: 'https://tuhin-university-friends.netlify.app/'
    },
    {
        id: 10,
        name: 'Country List',
        category: 'Front-End.',
        technologies: `HTML, CSS, Bootstrap, Java Script, ES-6, React, Rest API.`,
        images: {      
            img1: 'https://i.ibb.co/m9wnvnD/country-home.png',
            img2: 'https://i.ibb.co/wcrT31k/country-1.png',
            img3: 'https://i.ibb.co/vLjxyRc/country-2.png'
        },
        description: "An online shop to sell products online. I have done the front-end application here. I think this is an amazing layout of an e-commerce website to the customers",
        githubRipository: 'https://github.com/touhiduzzaman-tuhin/ultra-nation',
        liveWebsite: 'https://tuhin-ultra-nation.netlify.app/'
    },
    {
        id: 11,
        name: 'Hard Rock Lyrics',
        category: 'Front-End.',
        technologies: `HTML, CSS, Bootstrap, Java Script, ES-6, Rest API.`,
        images: {     
            img1: 'https://i.ibb.co/VQdXSg8/hard-home.png',
            img2: 'https://i.ibb.co/802f831/hard-list.png',
            img3: 'https://i.ibb.co/1sJWSzv/hard-lyrics.png'
        },
        description: "An online shop to sell products online. I have done the front-end application here. I think this is an amazing layout of an e-commerce website to the customers",
        githubRipository: 'https://github.com/touhiduzzaman-tuhin/Hard_Rock',
        liveWebsite: 'https://touhiduzzaman-tuhin.github.io/Hard_Rock/'
    },
    {
        id: 12,
        name: 'Weather App',
        category: 'Front-End.',
        technologies: `HTML, CSS, Bootstrap, Java Script, ES-6, Rest API.`,
        images: {          
            img1: 'https://i.ibb.co/sJ0BmHJ/weather-dehli.png',
            img2: 'https://i.ibb.co/CMzFrfh/weather-dhaka.png',
            img3: 'https://i.ibb.co/nrMdnYr/weather-rangpur.png'
        },
        description: "An online shop to sell products online. I have done the front-end application here. I think this is an amazing layout of an e-commerce website to the customers",
        githubRipository: 'https://github.com/touhiduzzaman-tuhin/Weather-App',
        liveWebsite: 'https://touhiduzzaman-tuhin.github.io/Weather-App/'
    },
    {
        id: 13,
        name: 'Corona Update',
        category: 'Front-End.',
        technologies: `HTML, CSS, Bootstrap, Java Script, ES-6, Rest API.`,
        images: {         
            img1: 'https://i.ibb.co/nsrkk1W/corona-home.png',
            img2: 'https://i.ibb.co/W6b6tCG/corona-bangladesh.png',
            img3: 'https://i.ibb.co/kcTBzBJ/corona-india.png'
        },
        description: "An online shop to sell products online. I have done the front-end application here. I think this is an amazing layout of an e-commerce website to the customers",
        githubRipository: 'https://github.com/touhiduzzaman-tuhin/Corona-Update',
        liveWebsite: 'https://touhiduzzaman-tuhin.github.io/Corona-Update/'
    },
    {
        id: 14,
        name: 'Dynamic Grade Calculator',
        category: 'Front-End.',
        technologies: `HTML, CSS, Bootstrap, Java Script, ES-6.`,
        images: {      
            img1: 'https://i.ibb.co/28sN14c/dynamic-grade-home.png',
            img2: 'https://i.ibb.co/cvkZYLD/dynamic-grade-total.png',
            img3: 'https://i.ibb.co/4p8wQ7t/dynamic-grade-fail-PNG.png'
        },
        description: "An online shop to sell products online. I have done the front-end application here. I think this is an amazing layout of an e-commerce website to the customers",
        githubRipository: 'https://github.com/touhiduzzaman-tuhin/Dynamic-Grade',
        liveWebsite: 'https://touhiduzzaman-tuhin.github.io/Dynamic-Grade/'
    },
    {
        id: 15,
        name: 'Pin Matcher',
        category: 'Front-End.',
        technologies: `HTML, CSS, Bootstrap, Java Script, ES-6.`,
        images: {        
            img1: 'https://i.ibb.co/wY08nyB/pin-home.png',
            img2: 'https://i.ibb.co/DK2yt3n/pin-match.png',
            img3: 'https://i.ibb.co/843BFjQ/pin-no-match.png'
        },
        description: "An online shop to sell products online. I have done the front-end application here. I think this is an amazing layout of an e-commerce website to the customers",
        githubRipository: 'https://github.com/touhiduzzaman-tuhin/Pin-Matcher',
        liveWebsite: 'https://touhiduzzaman-tuhin.github.io/Pin-Matcher/'
    },
    {
        id: 16,
        name: 'E-School',
        category: 'Front-End.',
        technologies: `HTML, CSS, Bootstrap.`,
        images: {     
            img1: 'https://i.ibb.co/hWDZ2R6/school-home.png',
            img2: 'https://i.ibb.co/ZgG9MxN/school-subject.png',
            img3: 'https://i.ibb.co/Mgmw3Xc/school-footer.png'
        },
        description: "An online shop to sell products online. I have done the front-end application here. I think this is an amazing layout of an e-commerce website to the customers",
        githubRipository: 'https://github.com/touhiduzzaman-tuhin/e-school',
        liveWebsite: 'https://touhiduzzaman-tuhin.github.io/e-school/'
    },
    {
        id: 17,
        name: 'Hot Gadgets Online Products',
        category: 'Front-End.',
        technologies: `HTML, CSS, Bootstrap.`,
        images: {         
            img1: 'https://i.ibb.co/1XgCgRx/hot-home.png',
            img2: 'https://i.ibb.co/3y60jFt/hot-laptop.png',
            img3: 'https://i.ibb.co/j4NVfd3/hot-categories.png'
        },
        description: "An online shop to sell products online. I have done the front-end application here. I think this is an amazing layout of an e-commerce website to the customers",
        githubRipository: 'https://github.com/touhiduzzaman-tuhin/Hot-Gadgets',
        liveWebsite: 'https://touhiduzzaman-tuhin.github.io/Hot-Gadgets/'
    },
    {
        id: 18,
        name: 'Panda-Commerce',
        category: 'Front-End.',
        technologies: `HTML, CSS, Bootstrap.`,
        images: {   
            img1: 'https://i.ibb.co/PzkX95R/panda-home.png',
            img2: 'https://i.ibb.co/6Hzd1sz/panda-bag.png',
            img3: 'https://i.ibb.co/hCrvKsc/panda-shoes.png'
        },
        description: "This is another online shop with attractive looks. Also Here, I have done the front-end application successfully",
        githubRipository: 'https://github.com/touhiduzzaman-tuhin/panda-commerce',
        liveWebsite: 'https://touhiduzzaman-tuhin.github.io/panda-commerce/'
    }
]

export default allProjectList;