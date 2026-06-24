import About from '../../src/sections/About';

export const metadata = {
  title: 'About Us',
  description: 'Learn about the team behind USKT GPA & CGPA Calculator. Built by students for students at the University of Sialkot.',
  keywords: ['about USKT GPA calculator', 'USKT team', 'University of Sialkot calculator team', 'who made USKT CGPA calculator'],
  openGraph: {
    title: 'About Us | USKT GPA & CGPA Calculator',
    description: 'Learn about the team behind USKT GPA & CGPA Calculator. Built by students for students at the University of Sialkot.',
  },
};

export default function Page() {
  return <About />;
}
