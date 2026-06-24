import GPACalculator from '../../src/components/GPACalculator';

export const metadata = {
  title: 'GPA Calculator',
  description: 'Calculate your semester GPA instantly with our accurate GPA calculator for University of Sialkot students. Easy-to-use, free, and ad-free.',
  keywords: ['USKT GPA calculator', 'semester GPA calculator', 'University of Sialkot GPA', 'calculate GPA USKT', 'USKT grade calculator'],
  openGraph: {
    title: 'GPA Calculator | USKT GPA & CGPA Calculator',
    description: 'Calculate your semester GPA instantly with our accurate GPA calculator for University of Sialkot students.',
  },
};

export default function Page() {
  return <GPACalculator />;
}
