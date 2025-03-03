(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1061:()=>{},1185:()=>{},2993:()=>{},3435:(e,s,n)=>{"use strict";n.d(s,{k5:()=>m});var a=n(2115),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},t=a.createContext&&a.createContext(i),c=["attr","size","title"];function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,a)}return n}function l(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?o(Object(n),!0).forEach(function(s){var a,i,t;a=e,i=s,t=n[s],(i=function(e){var s=function(e,s){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,s||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===s?String:Number)(e)}(e,"string");return"symbol"==typeof s?s:s+""}(i))in a?Object.defineProperty(a,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[i]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function m(e){return s=>a.createElement(d,r({attr:l({},e.attr)},s),function e(s){return s&&s.map((s,n)=>a.createElement(s.tag,l({key:n},s.attr),e(s.child)))}(e.child))}function d(e){var s=s=>{var n,{attr:i,size:t,title:o}=e,m=function(e,s){if(null==e)return{};var n,a,i=function(e,s){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(s.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],!(s.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,c),d=t||s.size||"1em";return s.className&&(n=s.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,i,m,{className:n,style:l(l({color:e.color||s.color},s.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==t?a.createElement(t.Consumer,null,e=>s(e)):s(i)}},3758:()=>{},4353:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>w});var a=n(5155),i=n(2115);n(3758);var t=n(6658),c=n(1536);function r(e){let{setSkills:s,setContacts:n,skillModal:r,contactsModal:o}=e,[l,m]=(0,i.useState)(!0),d=(0,t.useRouter)();return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"navbar",children:[(0,a.jsx)("div",{className:"navbar-container grid grid-cols-3 gap-4 relative ".concat(l&&"hamburger-active"),children:["home","skills","projects","education","contacts"].map(e=>(0,a.jsx)("span",{className:"nav-text",onClick:()=>{"skills"===e?s(!r):"contacts"===e?n(!o):d.push("#".concat(e))},children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),(0,a.jsx)("div",{className:"hamburger",onClick:()=>m(!l),children:(0,a.jsx)(c.Hcp,{})})]})})}function o(e){let{tree:s}=e;return(0,a.jsx)("div",{className:"timeline-container",children:(0,a.jsx)("div",{className:"timeline",children:s.timeline.map((e,s)=>(0,a.jsxs)("div",{className:"timeline-item",children:[(0,a.jsxs)("div",{className:"timeline-time",children:[(0,a.jsx)("span",{className:"timeline-circle"}),e.time]}),(0,a.jsx)("div",{className:"timeline-content",children:(0,a.jsx)("ul",{className:"timeline-list",children:e.lines.map((e,s)=>(0,a.jsx)("li",{children:e},s))})})]},s))})})}function l(e){let{tree:s}=e,[n,t]=(0,i.useState)(s[0]?s[0].name:""),c=s.find(e=>e.name===n);return(0,a.jsxs)("div",{className:"toggled-timeline",children:[(0,a.jsx)("div",{className:"toggled-tabs",children:s.map((e,s)=>(0,a.jsx)("button",{className:"tab-element ".concat(c.name===e.name?"tab-element-selected":""),onClick:s=>t(e.name),children:e.name},s))}),(0,a.jsx)(o,{tree:c})]})}function m(){return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"sub-heading",children:"Education"}),(0,a.jsx)("div",{className:"section-divider"}),(0,a.jsxs)("div",{className:"education-section",children:[(0,a.jsxs)("div",{className:"degree-section",children:[(0,a.jsx)("div",{className:"university-logo",children:(0,a.jsx)("img",{src:"/logo/NortheasternLogo.png",alt:"NEU logo",className:"logo"})}),(0,a.jsxs)("div",{className:"degree-description",children:[(0,a.jsx)("div",{className:"degree-title",children:"B.S. Computer Science with a Concentration in Software"}),(0,a.jsxs)("div",{className:"degree-body",children:[(0,a.jsx)("b",{children:"GPA:"})," 3.97 / 4.00"]}),(0,a.jsxs)("div",{className:"degree-body",children:[(0,a.jsx)("b",{children:"Honors:"})," Dean's List Fall 2023, Spring 2024, Fall 2024"]})]})]}),(0,a.jsx)("div",{className:"education-toggle",children:(0,a.jsx)(l,{tree:[{name:"Course Work",timeline:[{time:"Spring 2025",lines:["CS 4400: Programming Languages","CS 3650: Computer Systems","CS 2800: Logic and Computation","MATH 2331: Linear Algebra"]},{time:"Fall 2024",lines:["CS 4550: Web Development","CS 3000: Algorithms and Data","CS 3520: Programming in C++","MATH 1342: Calculus 2 for Science/Engineering"]},{time:"Summer 1 2024",lines:["CS 3500: Object-Oriented Design","CY 2550: Foundations of Cybersecurity"]},{time:"Spring 2024",lines:["CS 2810: Mathematics of Data Models","CS 2510: Fundamentals of Computer Science 2","CS 2511: Lab for CS 2510","ENGW 1111: First-Year Writing","MATH 1365: Intro to Math Reasoning"]},{time:"Fall 2023",lines:["CS 2500: Fundamentals of Computer Science 1","CS 2501: Lab for CS 2500","CS 1800: Discrete Structures","CS 1802: Seminar for CS 1800","COMM 1112: Public Speaking"]}]},{name:"Activities",timeline:[{time:"Spring 2025",lines:["Won FinHacks 2025","Participated in HackBeanpot 2025"]},{time:"Fall 2024",lines:["Participated in CTF Thyme","Participated in Versus CTF"]},{time:"Spring 2024",lines:["Vice-President of Asian Student Alliance","Farm Crew at Northeastern University Oakland"]},{time:"Fall 2023",lines:[,"President of Club Greenovation","E-Board member of Asian Student Alliance","Participated in Pawhacks 1.0"]}]}]})})]})]})}function d(){return(0,a.jsx)("div",{className:"image-section",children:(0,a.jsxs)("div",{className:"circles",children:[(0,a.jsx)("img",{src:"/profile.jpeg",alt:""}),(0,a.jsx)("span",{className:"scribble-font",children:"Tokyo, Japan"})]})})}n(4357),n(9865),n(1185),n(1061);var g=n(4367);function h(e){let{setSkills:s,modal:n}=e;return(0,a.jsx)("div",{className:"hero-profile",children:(0,a.jsxs)("div",{className:"hero-details",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1",children:[(0,a.jsx)("span",{className:"name",children:'Jirath "Bart" Lojanarungsiri'}),(0,a.jsx)("span",{className:"title",children:"Full-Stack Developer"}),(0,a.jsxs)("div",{className:"location-based grid grid-cols-1",children:[(0,a.jsxs)("span",{className:"location",children:["Boston, USA ",(0,a.jsx)(g.dmz,{})]}),(0,a.jsxs)("span",{className:"location",children:["Bangkok, Thailand ",(0,a.jsx)(g.dmz,{})]})]})]}),(0,a.jsxs)("div",{className:"detail-buttons",children:[(0,a.jsxs)("div",{className:"social-links",children:[(0,a.jsx)("a",{href:"https://linkedin.com/in/jlojanarungsiri",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("button",{className:"btn-primary",children:(0,a.jsxs)("span",{className:"text-primary",children:[(0,a.jsx)(c.QEs,{className:"social-icon"}),"LinkedIn"]})})}),(0,a.jsx)("a",{href:"https://github.com/Bartavius",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("button",{className:"btn-primary",children:(0,a.jsxs)("span",{className:"text-primary",children:[(0,a.jsx)(c.hL4,{className:"social-icon"}),"GitHub"]})})})]}),(0,a.jsxs)("div",{className:"additional-links",children:[(0,a.jsx)("button",{className:"btn-secondary",onClick:()=>s(!n),children:(0,a.jsx)("span",{className:"text-secondary",children:"Skills"})}),(0,a.jsx)("a",{href:"files/Jirath-Lojanarungsiri-Web-Developer-Resume.pdf",target:"_blank",rel:"noreferrer",children:(0,a.jsx)("button",{className:"btn-secondary",children:(0,a.jsx)("span",{className:"text-secondary",children:"Resume"})})})]})]})]})})}function p(e){let{setSkills:s,modal:n}=e;return(0,a.jsxs)("div",{className:"hero-section grid grid-cols-2",children:[(0,a.jsx)("div",{children:(0,a.jsx)(h,{setSkills:s,modal:n})}),(0,a.jsx)("div",{children:(0,a.jsx)(d,{})})]})}function j(e){let{name:s,icon:n}=e;return(0,a.jsx)("div",{className:"tech",children:(0,a.jsx)("div",{className:"icon-container",children:(0,a.jsxs)("span",{className:"icon",children:[n," ",s]})})},s)}function x(e){let{name:s,description:n,linkName:i,link:t,thumbnail:c,languages:r,techstack:o,setModal:l}=e;return(0,a.jsx)("div",{id:"project-".concat(s),className:"modal",children:(0,a.jsx)("div",{className:"modal-content",children:(0,a.jsxs)("div",{className:"project-modal",children:[(0,a.jsxs)("div",{className:"project-content",children:[(0,a.jsx)("div",{className:"project-thumbnail",children:(0,a.jsx)("img",{src:c})}),(0,a.jsx)("div",{className:"project-name",children:s}),(0,a.jsx)("div",{className:"project-description",children:n}),(0,a.jsxs)("div",{className:"project-icons",children:[(0,a.jsx)("h1",{className:"text-secondary",children:"Languages"}),(0,a.jsx)("div",{className:"languages",children:r.map(e=>(0,a.jsx)(j,{name:e.name,icon:e.icon},e.name))}),(0,a.jsx)("h1",{className:"text-secondary",children:"Tech Stack"}),(0,a.jsx)("div",{className:"techstack",children:o.map(e=>(0,a.jsx)(j,{name:e.name,icon:e.icon},e.name))})]})]}),(0,a.jsx)("div",{className:"smaller-section-divider"}),(0,a.jsxs)("div",{className:"project-footer",children:[(0,a.jsx)("button",{className:"btn-secondary text-secondary",onClick:()=>l(null),children:"Close"}),(0,a.jsx)("a",{href:t,target:"_blank",children:(0,a.jsx)("button",{className:"btn-primary text-primary",children:i})})]})]})})})}function u(){let e=[{name:"PLONKSTARS",description:"After finding out that Geoguessr required a subscription fee to play, my friends and I decided to recreate the game ourselves with zero production costs. So, introducing Plonkstars, a geolocating game inspired by Geoguessr. Explore through Google Streetview and find out where you are!",linkName:"Play",link:"https://plonkstars.vercel.app",thumbnail:"/projects/plonkstars.png",languages:[{name:"TypeScript",icon:(0,a.jsx)("img",{src:"logo/typescript.png"})},{name:"Python",icon:(0,a.jsx)("img",{src:"logo/python.png"})},{name:"HTML",icon:(0,a.jsx)("img",{src:"logo/html5.png"})},{name:"CSS",icon:(0,a.jsx)("img",{src:"logo/css.png"})}],techstack:[{name:"React",icon:(0,a.jsx)("img",{src:"logo/react.png"})},{name:"NextJS",icon:(0,a.jsx)("img",{src:"logo/next.png"})},{name:"Flask",icon:(0,a.jsx)("img",{src:"logo/flask.png"})},{name:"PostgreSQL",icon:(0,a.jsx)("img",{src:"logo/postgresql.png"})},{name:"TailwindCSS",icon:(0,a.jsx)("img",{src:"logo/tailwind.png"})},{name:"Axios",icon:""},{name:"Redux",icon:""}]},{name:"JAZA",description:"J.A.Z.A. - Just A Zip Away is a web application where companies are able to place vehicle relocation bounties for roadtrip enthusiasts to take. Companies with their own vehicles will sometimes require to pay their workers or independent contractors to relocate their vehicles from one hub to another (especially car rental and trucking companies). These workers are paid large sums of more than 50$ / hr, and so we thought: if the companies could place relocation bounties that just covers for food and shelter, the companies would be able to save up on costs, and roadtrip enthusiasts would be able to take a vacation for free and not worry about the ride back.",linkName:"Devpost",link:"https://devpost.com/software/j-a-z-a-just-a-zip-away",thumbnail:"/projects/JAZA.png",languages:[{name:"TypeScript",icon:(0,a.jsx)("img",{src:"logo/typescript.png"})},{name:"Python",icon:(0,a.jsx)("img",{src:"logo/python.png"})},{name:"HTML",icon:(0,a.jsx)("img",{src:"logo/html5.png"})},{name:"CSS",icon:(0,a.jsx)("img",{src:"logo/css.png"})}],techstack:[{name:"React",icon:(0,a.jsx)("img",{src:"logo/react.png"})},{name:"NextJS",icon:(0,a.jsx)("img",{src:"logo/next.png"})},{name:"Django",icon:(0,a.jsx)("img",{src:"logo/django.png"})},{name:"TailwindCSS",icon:(0,a.jsx)("img",{src:"logo/tailwind.png"})},{name:"Axios",icon:""},{name:"Redux",icon:""}]},{name:"HIGH CARD",description:"High Card is a credit card management platform that guarantees the user the best cashback reward per dollar spent for every purchasing category. Not only that, but it can also recommend the next card to get depending on the user's current rewards catalog and notify them of the cashback rewards they could've been missing out on. This project won Best Startup Potential at FinHacks 2025.",linkName:"Devpost",link:"https://devpost.com/software/high-card",thumbnail:"/projects/HighCard.png",languages:[{name:"TypeScript",icon:(0,a.jsx)("img",{src:"logo/typescript.png"})},{name:"JavaScript",icon:(0,a.jsx)("img",{src:"logo/javascript.png"})},{name:"Python",icon:(0,a.jsx)("img",{src:"logo/python.png"})},{name:"HTML",icon:(0,a.jsx)("img",{src:"logo/html5.png"})},{name:"CSS",icon:(0,a.jsx)("img",{src:"logo/css.png"})}],techstack:[{name:"React",icon:(0,a.jsx)("img",{src:"logo/react.png"})},{name:"NextJS",icon:(0,a.jsx)("img",{src:"logo/next.png"})},{name:"NodeJS",icon:(0,a.jsx)("img",{src:"logo/nodejs.png"})},{name:"MongoDB",icon:(0,a.jsx)("img",{src:"logo/mongodb.png"})},{name:"TailwindCSS",icon:(0,a.jsx)("img",{src:"logo/tailwind.png"})}]},{name:"KANBAS",description:"Kanbas is a recreation of the educational platform, Canvas. It supports course customizations, including the CRUD operations on courses, assignments, modules, and quizzes.",linkName:"Check it out!",link:"https://kanbas-mern.netlify.app",thumbnail:"/projects/kanbas.png",languages:[{name:"TypeScript",icon:(0,a.jsx)("img",{src:"logo/typescript.png"})},{name:"JavaScript",icon:(0,a.jsx)("img",{src:"logo/javascript.png"})},{name:"HTML",icon:(0,a.jsx)("img",{src:"logo/html5.png"})},{name:"CSS",icon:(0,a.jsx)("img",{src:"logo/css.png"})}],techstack:[{name:"React",icon:(0,a.jsx)("img",{src:"logo/react.png"})},{name:"NodeJS",icon:(0,a.jsx)("img",{src:"logo/nodejs.png"})},{name:"MongoDB",icon:(0,a.jsx)("img",{src:"logo/mongodb.png"})},{name:"ExressJS",icon:(0,a.jsx)("img",{src:"logo/express.png"})},{name:"BootstrapCSS",icon:(0,a.jsx)("img",{src:"logo/bootstrap.png"})},{name:"Axios",icon:""},{name:"Redux",icon:""}]},{name:"STOCK PORTFOLIO",description:"Written in pure Java, this project simulates stock market trades and allows the user to create (and maintain) stock portfolios with fixed percentages. It adopts an MVC architecture and has a 100% test coverage. The code is available upon request.",linkName:"Unavailable",link:"/",thumbnail:"/pig.webp",languages:[{name:"Java",icon:(0,a.jsx)("img",{src:"logo/java.png"})}],techstack:[{name:"JUnit",icon:""},{name:"JPane",icon:""}]}],[s,n]=(0,i.useState)(null);return(0,a.jsxs)("div",{className:"project-section",children:[(0,a.jsx)("div",{className:"sub-heading",children:"Projects"}),(0,a.jsx)("div",{className:"section-divider"}),(0,a.jsx)("div",{className:"project-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:e.map((e,s)=>(0,a.jsxs)("div",{className:"project-card",onClick:()=>n(e),children:[(0,a.jsx)("div",{className:"project-thumbnail",children:(0,a.jsx)("img",{src:e.thumbnail,alt:"thumbnail",className:"thumbnail"})}),(0,a.jsx)("div",{className:"project-title",children:e.name})]},s))}),s&&(0,a.jsx)("div",{className:"modal-overlay",children:(0,a.jsx)(x,{...s,setModal:()=>n(null)})})]})}n(7247),n(2993),n(5254);let v=[{name:"Python",icon:(0,a.jsx)("img",{src:"/logo/python.png"})},{name:"Java",icon:(0,a.jsx)("img",{src:"/logo/java.png"})},{name:"TypeScript",icon:(0,a.jsx)("img",{src:"/logo/typescript.png"})},{name:"JavaScript",icon:(0,a.jsx)("img",{src:"/logo/javascript.png"})},{name:"Kotlin",icon:(0,a.jsx)("img",{src:"/logo/kotlin.png"})},{name:"Dr. Racket",icon:(0,a.jsx)("img",{src:"/logo/racket.png"})},{name:"C++",icon:(0,a.jsx)("img",{src:"/logo/cplusplus.png"})},{name:"HTML5",icon:(0,a.jsx)("img",{src:"/logo/html5.png"})},{name:"CSS",icon:(0,a.jsx)("img",{src:"/logo/css.png"})}],b=[{name:"Node.js",icon:(0,a.jsx)("img",{src:"/logo/nodejs.png"})},{name:"Django",icon:(0,a.jsx)("img",{src:"/logo/django.png"})},{name:"Flask",icon:(0,a.jsx)("img",{src:"/logo/flask.png"})},{name:"Express.js",icon:(0,a.jsx)("img",{src:"/logo/express.png"})}],N=[{name:"MongoDB",icon:(0,a.jsx)("img",{src:"/logo/mongodb.png"})},{name:"PostgreSQL",icon:(0,a.jsx)("img",{src:"/logo/postgresql.png"})}],f=[{name:"React",icon:(0,a.jsx)("img",{src:"/logo/react.png"})},{name:"Next.js",icon:(0,a.jsx)("img",{src:"/logo/next.png"})},{name:"Bootstrap",icon:(0,a.jsx)("img",{src:"/logo/bootstrap.png"})},{name:"Tailwind CSS",icon:(0,a.jsx)("img",{src:"/logo/tailwind.png"})},{name:"Figma",icon:(0,a.jsx)("img",{src:"/logo/figma.png"})}];function y(e){let{closeModal:s}=e;return(0,a.jsxs)("div",{className:"skills-modal",children:[(0,a.jsx)("h1",{className:"sub-heading",children:"Skills & Technologies"}),(0,a.jsxs)("div",{className:"icons",children:[(0,a.jsx)("h1",{className:"skill-subheading",children:"Languages"}),(0,a.jsx)("div",{className:"languages",children:v.map(e=>(0,a.jsx)(j,{name:e.name,icon:e.icon},e.name))}),(0,a.jsx)("h1",{className:"skill-subheading",children:"Frontend Technologies"}),(0,a.jsx)("div",{className:"techstack",children:f.map(e=>(0,a.jsx)(j,{name:e.name,icon:e.icon},e.name))}),(0,a.jsx)("h1",{className:"skill-subheading",children:"Backend Technologies"}),(0,a.jsx)("div",{className:"techstack",children:b.map(e=>(0,a.jsx)(j,{name:e.name,icon:e.icon},e.name))}),(0,a.jsx)("h1",{className:"skill-subheading",children:"Databases"}),(0,a.jsx)("div",{className:"techstack",children:N.map(e=>(0,a.jsx)(j,{name:e.name,icon:e.icon},e.name))})]}),(0,a.jsx)("div",{className:"smaller-section-divider"}),(0,a.jsx)("div",{className:"modal-footer",children:(0,a.jsx)("button",{className:"btn-secondary text-secondary",onClick:()=>s(!1),children:"Close"})})]})}var S=n(6280);function k(e){let{closeModal:s}=e;return(0,a.jsxs)("div",{className:"contacts-modal",children:[(0,a.jsx)("h1",{className:"sub-heading",children:"Contact and Socials"}),(0,a.jsxs)("h1",{className:"contacts-subheading",children:[(0,a.jsx)(c.QEs,{})," ",(0,a.jsx)("a",{href:"https://linkedin.com/in/jlojanarungsiri",target:"_blank",children:"jlojanarungsiri"})]}),(0,a.jsxs)("h1",{className:"contacts-subheading",children:[(0,a.jsx)(S.IZ3,{})," ",(0,a.jsx)("a",{href:"mailto:lojanarungsiri.j@northeastern.edu",target:"_blank",children:"lojanarungsiri.j@northeastern.edu"})]}),(0,a.jsxs)("h1",{className:"contacts-subheading",children:[(0,a.jsx)(c.hL4,{})," ",(0,a.jsx)("a",{href:"https://github.com/Bartavius",target:"_blank",children:"Bartavius"})]}),(0,a.jsx)("div",{className:"smaller-section-divider"}),(0,a.jsx)("div",{className:"modal-footer",children:(0,a.jsx)("button",{className:"btn-secondary text-secondary",onClick:()=>s(!1),children:"Close"})})]})}function C(){return(0,a.jsxs)("div",{className:"about-section",children:[(0,a.jsx)("div",{className:"sub-heading",children:"About this site"}),(0,a.jsx)("div",{className:"section-divider"}),(0,a.jsxs)("div",{className:"text-description",children:["This website was designed in ",(0,a.jsx)("span",{className:"pink",children:(0,a.jsx)("b",{children:"Figma"})})," and recreated from scratch using",(0,a.jsx)("span",{className:"blue",children:(0,a.jsx)("b",{children:" React"})}),", ",(0,a.jsx)("span",{className:"orange",children:(0,a.jsx)("b",{children:"Next.js"})}),", and pure ",(0,a.jsx)("span",{className:"yellow",children:(0,a.jsx)("b",{children:"HTML/CSS"})}),". You see, I realized halfway through building the website that I hadn't installed tailwind (which makes sense why my grids weren't working). So, I decided to commit and write all the CSS myself. For something that I designed and built around a little over a day, I am very proud of how it turned out"]})]})}function w(){let[e,s]=(0,i.useState)(!1),[n,t]=(0,i.useState)(!1);return(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(r,{setSkills:s,skillModal:e,setContacts:t,contactsModal:n}),(0,a.jsx)("div",{id:"home",children:(0,a.jsx)(p,{setSkills:s,modal:e})}),(0,a.jsx)("div",{id:"projects",children:(0,a.jsx)(u,{})}),(0,a.jsx)("div",{id:"education",children:(0,a.jsx)(m,{})}),(0,a.jsx)("div",{className:"about-site",children:(0,a.jsx)(C,{})}),e&&(0,a.jsx)("div",{className:"modal",children:(0,a.jsx)("div",{className:"modal-content",children:(0,a.jsx)(y,{closeModal:()=>s(!1)})})}),n&&(0,a.jsx)("div",{className:"modal",children:(0,a.jsx)("div",{className:"modal-content",children:(0,a.jsx)(k,{closeModal:()=>t(!1)})})})]})}n(5070)},4357:()=>{},5070:()=>{},5254:()=>{},7247:()=>{},9782:(e,s,n)=>{Promise.resolve().then(n.bind(n,4353))},9865:()=>{}},e=>{var s=s=>e(e.s=s);e.O(0,[669,512,206,711,441,587,358],()=>s(9782)),_N_E=e.O()}]);