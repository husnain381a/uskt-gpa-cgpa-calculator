import CGPACalculator from '../../src/components/CGPACalculator';

export const metadata = {
  title: 'CGPA Calculator',
  description: 'Calculate your cumulative CGPA across all semesters with our comprehensive tool for University of Sialkot students. Track your academic progress.',
  keywords: ['USKT CGPA calculator', 'cumulative GPA calculator', 'University of Sialkot CGPA', 'calculate CGPA USKT', 'USKT CGPA tool'],
  openGraph: {
    title: 'CGPA Calculator | USKT GPA & CGPA Calculator',
    description: 'Calculate your cumulative CGPA across all semesters with our comprehensive tool for University of Sialkot students.',
  },
};

export default function Page() {
  return <CGPACalculator />;
}
