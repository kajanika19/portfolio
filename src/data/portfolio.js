/**
 * ------------------------------------------------------------------
 *  ALL PORTFOLIO CONTENT LIVES HERE.
 *  Edit this file to update text, links, skills and projects.
 *  You should not need to touch the components for content changes.
 * ------------------------------------------------------------------
 */

export const profile = {
  firstName: 'Kajanika',
  fullName: 'Kajanika Pulenthiraraj',
  username: 'kajanika19',
  initials: 'kp',
  subtitle: ['IT Undergraduate', 'Aspiring Software Engineer', 'Creative Problem Solver'],
  heroIntro:
    'I love turning ideas into clean, friendly digital experiences, where solid code and thoughtful design work together.',
  location: 'Sri Lanka',
  email: 'kajanikapulenthiraraj@gmail.com',
};

export const socials = {
  github: 'https://github.com/kajanika19',
  linkedin: 'https://www.linkedin.com/in/kajanika-pulenthiraraj-05506b356/',
};

export const about = {
  paragraphs: [
    "I'm an Information Technology undergraduate at the University of Moratuwa, Sri Lanka. My main interests are software development, frontend technologies and UI/UX design.",
    'I enjoy creating interfaces that look good and feel easy to use. Java is the language I know best, and I like learning new technologies by building practical projects with them.',
    "My goal is to grow into a Software Engineer, and I'm looking for an internship where I can learn from an experienced team and contribute to real products.",
  ],
  facts: [
    { icon: 'graduationCap', label: 'Studying', value: 'BSc in Information Technology' },
    { icon: 'mapPin', label: 'University', value: 'University of Moratuwa, Sri Lanka' },
    { icon: 'coffee', label: 'Strongest language', value: 'Java' },
    { icon: 'target', label: 'Looking for', value: 'Software Engineering internship' },
  ],
};

/**
 * Skills are listed without proficiency levels on purpose.
 * `note` is optional. Add a short, honest note if you want one,
 * e.g. note: 'Used in coursework'.
 */
export const skillGroups = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Languages I use for problem solving and coursework.',
    icon: 'braces',
    accent: 'indigo',
    skills: [
      { name: 'Java', icon: 'coffee', note: 'Strongest language' },
      { name: 'C', icon: 'cpu' },
      { name: 'JavaScript', icon: 'fileCode' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Building the parts of the web people see and use.',
    icon: 'layout',
    accent: 'cyan',
    skills: [
      { name: 'HTML', icon: 'code' },
      { name: 'CSS', icon: 'palette' },
      // Add a note describing your React level once you decide how to phrase it.
      { name: 'React', icon: 'atom' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    description: 'Cross-platform apps from a single codebase.',
    icon: 'smartphone',
    accent: 'teal',
    skills: [
      { name: 'React Native', icon: 'atom' },
      { name: 'Expo', icon: 'rocket' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'What I use every day to write and ship code.',
    icon: 'wrench',
    accent: 'blue',
    skills: [
      { name: 'Git', icon: 'gitBranch' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'monitor' },
    ],
  },
];

/**
 * Projects.
 * - `links` is an array of buttons. Leave it empty to show no buttons.
 * - `status` is an optional small badge, e.g. 'In progress'.
 * - `image` is optional: put a screenshot in /public/projects/ and set
 *   image: './projects/my-project.png' to show it on the card.
 */
export const projects = [
  {
    id: 'company-group-project',
    title: 'Company Group Project',
    type: 'Team project',
    status: 'In progress',
    // TODO: replace this placeholder when you can share more details.
    description:
      'A group project I am currently working on with a team. Details will be added here soon; some information is kept private for confidentiality.',
    tags: ['Team collaboration', 'Details coming soon'],
    accent: 'blue',
    confidential: true,
    image: '',
    links: [],
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    type: 'Website',
    description:
      "The website you're looking at: my personal portfolio, designed and built to introduce myself and my work.",
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'],
    accent: 'teal',
    image: '',
    // TODO: change this to the portfolio repository URL once it is on GitHub.
    links: [{ label: 'View on GitHub', href: 'https://github.com/kajanika19', icon: 'github' }],
  },
];

export const education = [
  {
    institution: 'University of Moratuwa',
    qualification: 'Undergraduate in Information Technology',
    location: 'Sri Lanka',
    // Optional: add your study period, e.g. '2023 – Present'. Leave empty to hide.
    period: '',
  },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];
