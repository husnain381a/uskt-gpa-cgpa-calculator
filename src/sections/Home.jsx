'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Calculator,
  GraduationCap,
  TrendingUp,
  Award,
  ArrowRight,
  BookOpen,
  Sparkles,
  BarChart3,
  Users,
  CheckCircle,
} from 'lucide-react';
import GradingPolicyModal from '@/components/GradingPolicyModal';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const features = [
  {
    icon: Calculator,
    title: 'GPA Calculator',
    description: 'Calculate your semester GPA instantly with our intuitive tool.',
    link: '/gpa',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: BarChart3,
    title: 'CGPA Calculator',
    description: 'Track your cumulative performance across all semesters.',
    link: '/cgpa',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    title: 'Grading Policy',
    description: 'View the official USKT grading system and policies.',
    link: '/gpa',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BookOpen,
    title: 'Official Standards',
    description: 'Based on the exact University of Sialkot grading scheme.',
    link: '/about',
    color: 'from-green-500 to-emerald-500',
  },
];

const stats = [
  { icon: Users, value: '1000+', label: 'Active Students' },
  { icon: CheckCircle, value: '99.9%', label: 'Accuracy Rate' },
  { icon: TrendingUp, value: '4.8/5', label: 'User Rating' },
  { icon: Sparkles, value: 'Free', label: 'Always Ad-Free' },
];

const officialGradingData = [
  { marksRange: '85 ----- 100', grade: 'A+', gpa: '4.00', remarks: 'Exceptional' },
  { marksRange: '80 ----- 84.99', grade: 'A', gpa: '3.66', remarks: 'Outstanding' },
  { marksRange: '75 ----- 79.99', grade: 'B+', gpa: '3.33', remarks: 'Excellent' },
  { marksRange: '71 ----- 74.99', grade: 'B', gpa: '3.00', remarks: 'Very Good' },
  { marksRange: '68 ----- 70.99', grade: 'B-', gpa: '2.66', remarks: 'Good' },
  { marksRange: '64 ----- 67.99', grade: 'C+', gpa: '2.33', remarks: 'Above Average' },
  { marksRange: '61 ----- 63.99', grade: 'C', gpa: '2.00', remarks: 'Average' },
  { marksRange: '58 ----- 60.99', grade: 'C-', gpa: '1.66', remarks: 'Satisfactory' },
  { marksRange: '54 ----- 57.99', grade: 'D+', gpa: '1.33', remarks: 'Marginal pass' },
  { marksRange: '50 ----- 53.99', grade: 'D', gpa: '1.00', remarks: 'Unsatisfactory' },
  { marksRange: '00 ----- 49.99', grade: 'F', gpa: '0.00', remarks: 'Fail' },
];

const remarkColor = (remarks) => {
  if (['Exceptional', 'Outstanding', 'Excellent'].includes(remarks)) return 'bg-green-500/20 text-green-300';
  if (['Very Good', 'Good', 'Above Average'].includes(remarks)) return 'bg-blue-500/20 text-blue-300';
  if (['Average', 'Satisfactory'].includes(remarks)) return 'bg-yellow-500/20 text-yellow-300';
  return 'bg-red-500/20 text-red-300';
};

const Home = () => {
  const [showGrading, setShowGrading] = useState(false);

  return (
    <>
    <div className="space-y-24 pb-16">
      <section className="relative pt-12 md:pt-20">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">
              University of Sialkot Official Tool
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6"
          >
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              GPA & CGPA
            </span>
            <br />
            <span className="text-white">Calculator</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Effortlessly calculate and track your academic performance with our
            accurate, user-friendly tool built specifically for University of
            Sialkot students.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/gpa"
              className="group bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 hover:from-amber-700 hover:via-yellow-700 hover:to-orange-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 shadow-xl"
            >
              <Calculator className="w-6 h-6" />
              Calculate GPA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/cgpa"
              className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3"
            >
              <GraduationCap className="w-6 h-6" />
              Calculate CGPA
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowGrading(true)}
              className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3"
            >
              <BookOpen className="w-6 h-6" />
              View University Grading Policy
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hidden lg:block"
          >
            {['A+', 'A', 'B+', 'B'].map((grade, i) => {
              const animations = {
                'A+': { y: [0, -14, 0], x: [0, 0, 0] },
                'A': { y: [0, 0, 0], x: [0, 12, 0] },
                'B+': { y: [0, -10, 0], x: [0, 8, 0] },
                'B': { y: [0, 0, 0], x: [0, 12, 0] },
              };
              return (
                <motion.div
                  key={grade}
                  className="absolute px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg font-bold text-white text-sm"
                  style={{
                    top: grade === 'B' ? '78%' : `${10 + i * 20}%`,
                    right: `${5 + (i % 2) * 15}%`,
                  }}
                  animate={animations[grade]}
                  transition={{ duration: 3.5, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {grade}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <Icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            Everything You Need
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Powerful tools to help you track and improve your academic performance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={fadeInUp} custom={i}>
                <Link
                  href={feature.link}
                  className="block group h-full"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-amber-400/50 hover:shadow-xl hover:-translate-y-1 h-full">
                    <div
                      className={`inline-flex p-3 bg-gradient-to-r ${feature.color} rounded-xl mb-4 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Grading Policy Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">Official USKT Policy</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Grading Policy
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            University of Sialkot's official grading system and policies.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8"
        >
          <div className="w-full">
            <table className="hidden md:table w-full bg-white/10 rounded-xl border border-white/20 overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-900/50 to-amber-900/50">
                  <th className="px-4 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-bold text-amber-300 uppercase tracking-wider border-b border-white/20">Marks Range</th>
                  <th className="px-4 lg:px-6 py-3 lg:py-4 text-center text-xs lg:text-sm font-bold text-amber-300 uppercase tracking-wider border-b border-white/20">Grade</th>
                  <th className="px-4 lg:px-6 py-3 lg:py-4 text-center text-xs lg:text-sm font-bold text-amber-300 uppercase tracking-wider border-b border-white/20">GPA</th>
                  <th className="px-4 lg:px-6 py-3 lg:py-4 text-center text-xs lg:text-sm font-bold text-amber-300 uppercase tracking-wider border-b border-white/20">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {officialGradingData.map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'} hover:bg-white/15 transition-all duration-200`}>
                    <td className="px-4 lg:px-6 py-3 lg:py-4 text-white font-medium border-b border-white/10 text-sm lg:text-base">{row.marksRange}</td>
                    <td className="px-4 lg:px-6 py-3 lg:py-4 text-center border-b border-white/10">
                      <span className="inline-flex items-center justify-center w-10 lg:w-12 h-7 lg:h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg text-white font-bold text-xs lg:text-sm">{row.grade}</span>
                    </td>
                    <td className="px-4 lg:px-6 py-3 lg:py-4 text-center text-amber-300 font-bold border-b border-white/10 text-sm lg:text-base">{row.gpa}</td>
                    <td className="px-4 lg:px-6 py-3 lg:py-4 text-center text-gray-300 border-b border-white/10">
                      <span className={`px-2 lg:px-3 py-1 rounded-full text-xs font-medium ${remarkColor(row.remarks)}`}>{row.remarks}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="md:hidden flex flex-col gap-3">
              {officialGradingData.map((row, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-3 border border-white/20 text-xs text-white space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-amber-300">Marks:</span>
                    <span>{row.marksRange}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-amber-300">Grade:</span>
                    <span className="inline-flex items-center justify-center w-10 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-md text-white font-bold text-sm">{row.grade}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-amber-300">GPA:</span>
                    <span className="font-bold text-amber-200">{row.gpa}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-amber-300">Remarks:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${remarkColor(row.remarks)}`}>{row.remarks}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 lg:mt-8 p-4 lg:p-6 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-xl border border-blue-500/30">
            <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 lg:w-6 lg:h-6 text-amber-400" />
              GPA & CGPA Calculation Formula
            </h4>
            <div className="space-y-2 lg:space-y-3">
              <p className="text-sm lg:text-base text-gray-300">
                <strong className="text-amber-300">GPA/CGPA = Total Grade Points ÷ Total Credit Units</strong>
              </p>
              <p className="text-sm lg:text-base text-gray-300">
                <strong className="text-blue-300">Grade Points = Grade Point Value × Credit Units</strong> (for each subject)
              </p>
              <div className="bg-white/10 rounded-lg p-3 lg:p-4 mt-2 lg:mt-4">
                <h5 className="text-amber-300 font-bold mb-1 lg:mb-2 text-sm lg:text-base">Example Calculation:</h5>
                <p className="text-gray-300 text-xs lg:text-sm">
                  Subject: A+ (4.00) × 3 credits = 12.00 grade points
                  <br />
                  <strong className="text-white">GPA = Total Grade Points ÷ Total Credit Units</strong>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-8 md:p-12 text-center"
        >
          <GraduationCap className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Check Your Grades?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Start calculating your GPA or CGPA now. No sign-up required,
            completely free, and always ad-free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/gpa"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="text-amber-300 hover:text-amber-200 border border-amber-500/30 hover:border-amber-400/50 px-8 py-4 rounded-2xl transition-all duration-300 font-medium"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </motion.section>

    </div>

      <AnimatePresence>
        {showGrading && (
          <GradingPolicyModal
            show={showGrading}
            onClose={() => setShowGrading(false)}
            type="both"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
