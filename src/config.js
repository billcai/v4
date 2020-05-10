module.exports = {
  siteTitle: 'Bill Cai',
  siteDescription:
    'I am a software engineer based in Singapore specializing in building and designing scalable, reliable, and cloud-native machine learning platforms.',
  siteKeywords:
    'Biil Cai, Bill, Cai, Computer Vision, Govtech, Government Technology Agency, Govtech Singapore, Machine Learning, Deep Learning',
  siteUrl: 'https://billcai.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Bill Cai',
  location: 'Singapore',
  email: 'me@billcai.com',
  github: 'https://github.com/billcai',
  twitterHandle: '@billcai7',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/billcai',
    },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=0yeViVAAAAAJ&hl=en',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/billcai77/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/billcai7',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
