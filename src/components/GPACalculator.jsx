'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Trash2,
  Calculator,
  Star,
  Sparkles,
  TrendingUp,
  Target,
  Zap,
  Trophy,
  Heart,
  Flame,
  BookOpen,
  Image,
  X,
  Video,
} from 'lucide-react';

const motivationalQuotes = {
  excellent: [
    "Outstanding! You're absolutely crushing it! Keep this momentum going! 🌟",
    "Incredible work! You're setting the bar high for excellence! 🚀",
    'Phenomenal! Your dedication is truly paying off! Keep shining! ✨',
    "Amazing! You're not just succeeding, you're excelling! 🎯",
    'Brilliant! Your hard work is creating magic! Keep it up! 🔥',
  ],
  good: [
    "Great job! You're doing really well! Keep pushing forward! 💪",
    "Solid performance! You're on the right track to greatness! 🌈",
    'Well done! Your efforts are showing great results! 🎪',
    "Nice work! You're building a strong foundation for success! 🏗️",
    'Good going! Every step forward is progress worth celebrating! 🎉',
  ],
  average: [
    "You're doing well! There's always room to grow and shine brighter! 🌱",
    "Good foundation! With a little more effort, you'll reach new heights! 🚀",
    "You're on your way! Every expert was once a beginner! 💫",
    "Keep going! Your potential is unlimited, and you're just getting started! 🌟",
    'Steady progress! Small improvements lead to big achievements! 📈',
  ],
  needsImprovement: [
    'Every champion has faced challenges! This is your comeback story! 💪',
    "Diamonds are formed under pressure! You're becoming stronger! 💎",
    'This is not your final chapter! Great comebacks start with determination! 🔥',
    "Every setback is a setup for a comeback! You've got this! 🚀",
    'Your journey to success starts now! Believe in your potential! ⭐',
    "Champions aren't made in comfort zones! You're building resilience! 🏆",
    "This is your opportunity to show what you're truly made of! 💫",
  ],
};

// Official University of Sialkot Grading Data
const officialGradingData = [
  {
    marksRange: '85 ----- 100',
    grade: 'A+',
    gpa: '4.00',
    remarks: 'Exceptional',
  },
  {
    marksRange: '80 ----- 84.99',
    grade: 'A',
    gpa: '3.66',
    remarks: 'Outstanding',
  },
  {
    marksRange: '75 ----- 79.99',
    grade: 'B+',
    gpa: '3.33',
    remarks: 'Excellent',
  },
  {
    marksRange: '71 ----- 74.99',
    grade: 'B',
    gpa: '3.00',
    remarks: 'Very Good',
  },
  { marksRange: '68 ----- 70.99', grade: 'B-', gpa: '2.66', remarks: 'Good' },
  {
    marksRange: '64 ----- 67.99',
    grade: 'C+',
    gpa: '2.33',
    remarks: 'Above Average',
  },
  { marksRange: '61 ----- 63.99', grade: 'C', gpa: '2.00', remarks: 'Average' },
  {
    marksRange: '58 ----- 60.99',
    grade: 'C-',
    gpa: '1.66',
    remarks: 'Satisfactory',
  },
  {
    marksRange: '54 ----- 57.99',
    grade: 'D+',
    gpa: '1.33',
    remarks: 'Marginal pass',
  },
  {
    marksRange: '50 ----- 53.99',
    grade: 'D',
    gpa: '1.00',
    remarks: 'Unsatisfactory',
  },
  { marksRange: '00 ----- 49.99', grade: 'F', gpa: '0.00', remarks: 'Fail' },
];

const GPACalculator = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: '', grade: '', credits: '' },
  ]);
  const [gpa, setGpa] = useState(null);
  const [quote, setQuote] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [scoreCategory, setScoreCategory] = useState('');
  const [showGradingSystem, setShowGradingSystem] = useState(false);

  // University's exact grading system
  const gradePoints = {
    'A+': 4.0,
    A: 3.66,
    'B+': 3.33,
    B: 3.0,
    'B-': 2.66,
    'C+': 2.33,
    C: 2.0,
    'C-': 1.66,
    'D+': 1.33,
    D: 1.0,
    F: 0.0,
  };

  // University's grade calculation function
  const gradeCalc = (grade, unit) => {
    const gradePoint = gradePoints[grade] || 0;
    return gradePoint * unit;
  };

  const addSubject = () => {
    setSubjects([
      ...subjects,
      {
        id: Date.now(),
        name: '',
        grade: '',
        credits: '',
      },
    ]);
  };

  const removeSubject = (id) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((subject) => subject.id !== id));
    }
  };

  const updateSubject = (id, field, value) => {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id ? { ...subject, [field]: value } : subject
      )
    );
  };

  const getScoreCategory = (gpa) => {
    const score = parseFloat(gpa);
    if (score >= 3.5) return 'excellent';
    if (score >= 3.0) return 'good';
    if (score >= 2.5) return 'average';
    return 'needsImprovement';
  };

  const getScoreDetails = (gpa) => {
    const score = parseFloat(gpa);
    if (score >= 3.5)
      return {
        label: 'Excellent Performance',
        sublabel: 'Outstanding Academic Achievement',
        color: 'from-amber-400 via-yellow-400 to-orange-400',
        bgColor: 'from-amber-500/30 via-yellow-500/20 to-orange-500/30',
        borderColor: 'border-amber-400/60',
        icon: Trophy,
        emoji: '🏆',
        stars: 5,
        description:
          "You're in the top tier! Your dedication is truly exceptional.",
      };
    if (score >= 3.0)
      return {
        label: 'Strong Performance',
        sublabel: 'Solid Academic Foundation',
        color: 'from-blue-400 via-cyan-400 to-sky-400',
        bgColor: 'from-blue-500/30 via-cyan-500/20 to-sky-500/30',
        borderColor: 'border-blue-400/60',
        icon: Target,
        emoji: '🎯',
        stars: 4,
        description: "Great work! You're building excellent academic momentum.",
      };
    if (score >= 2.5)
      return {
        label: 'Good Progress',
        sublabel: 'Steady Academic Growth',
        color: 'from-amber-400 via-yellow-400 to-orange-400',
        bgColor: 'from-amber-500/30 via-yellow-500/20 to-orange-500/30',
        borderColor: 'border-amber-400/60',
        icon: Star,
        emoji: '⭐',
        stars: 3,
        description:
          "You're on the right path! Keep pushing forward to reach new heights.",
      };
    return {
      label: 'Growth Opportunity',
      sublabel: 'Your Comeback Story Begins',
      color: 'from-blue-600 via-indigo-600 to-blue-700',
      bgColor: 'from-blue-600/30 via-indigo-600/20 to-blue-700/30',
      borderColor: 'border-blue-500/60',
      icon: Flame,
      emoji: '🔥',
      stars: 2,
      description:
        'Every champion has faced challenges. This is where your transformation begins!',
    };
  };

  const calculateGPA = () => {
    const validSubjects = subjects.filter(
      (subject) =>
        subject.grade && subject.credits && parseFloat(subject.credits) > 0
    );

    if (validSubjects.length === 0) {
      alert('Please add at least one subject with valid grade and credits!');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      let totalEarnedUnits = 0;
      let totalUnits = 0;

      // Using university's exact calculation logic
      validSubjects.forEach((subject) => {
        const credits = parseFloat(subject.credits);
        totalUnits += credits;
        totalEarnedUnits += gradeCalc(subject.grade, credits);
      });

      if (totalUnits === 0) {
        alert('Please enter valid credit units!');
        setIsCalculating(false);
        return;
      }

      const calculatedGPA = totalEarnedUnits / totalUnits;
      const category = getScoreCategory(calculatedGPA);

      setGpa(calculatedGPA.toFixed(2));
      setScoreCategory(category);
      setQuote(
        motivationalQuotes[category][
          Math.floor(Math.random() * motivationalQuotes[category].length)
        ]
      );
      setShowResult(true);
      setIsCalculating(false);
    }, 1500);
  };

  const resetCalculator = () => {
    setSubjects([{ id: 1, name: '', grade: '', credits: '' }]);
    setGpa(null);
    setQuote('');
    setShowResult(false);
    setScoreCategory('');
  };

  const PerformanceDashboard = ({ gpa }) => {
    const scoreDetails = getScoreDetails(gpa);
    const IconComponent = scoreDetails.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`bg-gradient-to-br ${scoreDetails.bgColor} backdrop-blur-xl rounded-3xl p-8 border-2 ${scoreDetails.borderColor} mb-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.01]`}
      >
        <div className="text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex justify-center items-center gap-4 mb-8"
          >
            <motion.div
              initial={{ rotate: -20, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className={`p-4 bg-gradient-to-r ${scoreDetails.color} rounded-2xl shadow-xl`}
            >
              <IconComponent className="w-10 h-10 text-white" />
            </motion.div>
            <div>
              <h3 className="text-3xl font-black text-white">
                {scoreDetails.label}
              </h3>
              <p className="text-lg text-gray-200 font-medium">
                {scoreDetails.sublabel}
              </p>
            </div>
          </motion.div>

          {/* GPA Display */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
            className="relative mb-8"
          >
            <div
              className={`inline-flex items-center justify-center w-48 h-48 bg-gradient-to-br ${scoreDetails.color} rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm`}
            >
              <div className="text-center">
                <div className="text-6xl mb-2">{scoreDetails.emoji}</div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="text-4xl font-black text-white mb-1"
                >
                  {gpa}
                </motion.div>
                <div className="text-sm text-white/80 font-semibold">
                  out of 4.0
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce delay-100" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full animate-bounce delay-300" />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-500" />
          </motion.div>

          {/* Star Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-2 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
              >
                <Star
                  className={`w-8 h-8 ${
                    i < scoreDetails.stars
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-400'
                  } transition-all duration-300 hover:scale-110`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <p className="text-white text-lg font-medium leading-relaxed">
              {scoreDetails.description}
            </p>
          </motion.div>

          {/* Performance Bars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 space-y-4"
          >
            <div className="text-left">
              <div className="flex justify-between text-sm text-gray-200 mb-2">
                <span>Academic Excellence</span>
                <span>{Math.round((parseFloat(gpa) / 4.0) * 100)}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (parseFloat(gpa) / 4.0) * 100)}%` }}
                  transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${scoreDetails.color} rounded-full`}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const GradingSystemModal = () => {
    if (!showGradingSystem) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-amber-400" />
              <h2 className="text-3xl font-bold text-white">
                University of Sialkot - Official Grading Policy
              </h2>
            </div>
            <motion.button
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowGradingSystem(false)}
              className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full text-red-400 hover:text-red-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Official University Grading Table */}
          <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Official University Grading Scale
            </h3>

            {/* Responsive Table */}
            <div className="w-full">
              <table className="hidden md:table w-full bg-white/10 rounded-xl border border-white/20 overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-900/50 to-amber-900/50">
                    <th className="px-6 py-4 text-left text-sm font-bold text-amber-300 uppercase tracking-wider border-b border-white/20">
                      Marks Range
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-amber-300 uppercase tracking-wider border-b border-white/20">
                      Grade
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-amber-300 uppercase tracking-wider border-b border-white/20">
                      GPA
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-amber-300 uppercase tracking-wider border-b border-white/20">
                      Remarks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {officialGradingData.map((row, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'
                      } hover:bg-white/15 transition-all duration-200`}
                    >
                      <td className="px-6 py-4 text-white font-medium border-b border-white/10">
                        {row.marksRange}
                      </td>
                      <td className="px-6 py-4 text-center border-b border-white/10">
                        <span className="inline-flex items-center justify-center w-12 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg text-white font-bold text-sm">
                          {row.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-amber-300 font-bold border-b border-white/10">
                        {row.gpa}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-300 border-b border-white/10">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            row.remarks === 'Exceptional' ||
                            row.remarks === 'Outstanding' ||
                            row.remarks === 'Excellent'
                              ? 'bg-green-500/20 text-green-300'
                              : row.remarks === 'Very Good' ||
                                row.remarks === 'Good' ||
                                row.remarks === 'Above Average'
                              ? 'bg-blue-500/20 text-blue-300'
                              : row.remarks === 'Average' ||
                                row.remarks === 'Satisfactory'
                              ? 'bg-yellow-500/20 text-yellow-300'
                              : 'bg-red-500/20 text-red-300'
                          }`}
                        >
                          {row.remarks}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile Version */}
              <div className="md:hidden flex flex-col gap-4">
                {officialGradingData.map((row, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-xl p-4 border border-white/20 text-sm text-white space-y-2"
                  >
                    <div>
                      <span className="font-bold text-amber-300">
                        Marks Range:
                      </span>{' '}
                      {row.marksRange}
                    </div>
                    <div>
                      <span className="font-bold text-amber-300">Grade:</span>{' '}
                      <span className="inline-flex items-center justify-center w-10 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-md text-white font-bold text-sm">
                        {row.grade}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-amber-300">GPA:</span>{' '}
                      <span className="font-bold text-amber-200">
                        {row.gpa}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-amber-300">Remarks:</span>{' '}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          row.remarks === 'Exceptional' ||
                          row.remarks === 'Outstanding' ||
                          row.remarks === 'Excellent'
                            ? 'bg-green-500/20 text-green-300'
                            : row.remarks === 'Very Good' ||
                              row.remarks === 'Good' ||
                              row.remarks === 'Above Average'
                            ? 'bg-blue-500/20 text-blue-300'
                            : row.remarks === 'Average' ||
                              row.remarks === 'Satisfactory'
                            ? 'bg-yellow-500/20 text-yellow-300'
                            : 'bg-red-500/20 text-red-300'
                        }`}
                      >
                        {row.remarks}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-xl border border-blue-500/30">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-amber-400" />
                GPA Calculation Formula
              </h4>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <strong className="text-amber-300">
                    GPA = Total Grade Points ÷ Total Credit Units
                  </strong>
                </p>
                <p className="text-gray-300">
                  <strong className="text-blue-300">
                    Grade Points = Grade Point Value × Credit Units
                  </strong>{' '}
                  (for each subject)
                </p>
                <div className="bg-white/10 rounded-lg p-4 mt-4">
                  <h5 className="text-amber-300 font-bold mb-2">
                    Example Calculation:
                  </h5>
                  <p className="text-gray-300 text-sm">
                    Subject 1: A+ (4.00) × 3 credits = 12.00 grade points
                    <br />
                    Subject 2: B+ (3.33) × 4 credits = 13.32 grade points
                    <br />
                    <strong className="text-white">
                      Total: 25.32 grade points ÷ 7 total credits = 3.62 GPA
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
          GPA Calculator
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
          Calculate your single semester GPA with our accurate, user-friendly
          tool designed for University of Sialkot students. Perfect for
          evaluating your performance in individual semesters.
        </p>

        {/* Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowGradingSystem(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-blue-600/20 hover:from-amber-500/30 hover:to-blue-600/30 border border-amber-500/30 hover:border-amber-400/50 rounded-2xl px-6 py-3 text-amber-300 hover:text-amber-200 transition-colors"
          >
            <Image className="w-5 h-5" />
            View University Grading Policy
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.youtube.com/watch?v=hjaNqheV09Q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-blue-600/20 hover:from-amber-500/30 hover:to-blue-600/30 border border-amber-500/30 hover:border-amber-400/50 rounded-2xl px-6 py-3 text-amber-300 hover:text-amber-200 transition-colors"
          >
            <Video className="w-5 h-5" />
            How to Calculate (Watch Video)
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Calculator */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-500"
      >
        {/* Subjects Input */}
        <div className="space-y-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Add Your Subjects</h2>
          </div>

          {subjects.map((subject, index) => (
            <div
              key={subject.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject Name / Course Code
                  </label>
                  <input
                    type="text"
                    value={subject.name}
                    onChange={(e) =>
                      updateSubject(subject.id, 'name', e.target.value)
                    }
                    placeholder="e.g., CS101 - Data Structures"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 focus:bg-white/15 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Grade
                  </label>
                  <select
                    value={subject.grade}
                    onChange={(e) =>
                      updateSubject(subject.id, 'grade', e.target.value)
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 focus:bg-white/15 transition-all duration-200"
                  >
                    <option value="">Select Grade</option>
                    {Object.entries(gradePoints).map(([grade, points]) => (
                      <option
                        key={grade}
                        value={grade}
                        className="bg-gray-800 text-white"
                      >
                        {grade} ({points.toFixed(2)})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Credit Units
                    </label>
                    <input
                      type="number"
                      value={subject.credits}
                      onChange={(e) =>
                        updateSubject(subject.id, 'credits', e.target.value)
                      }
                      placeholder="3"
                      min="0"
                      max="10"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 focus:bg-white/15 transition-all duration-200"
                    />
                  </div>
                  {subjects.length > 1 && (
                    <button
                      onClick={() => removeSubject(subject.id)}
                      className="mt-6 p-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-xl text-red-400 hover:text-red-300 transition-all duration-200 transform hover:scale-110 hover:rotate-3"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addSubject}
            className="w-full p-4 bg-gradient-to-r from-amber-500/20 to-blue-600/20 hover:from-amber-500/30 hover:to-blue-600/30 border border-amber-500/30 hover:border-amber-400/50 rounded-2xl text-amber-300 hover:text-amber-200 transition-all duration-200 transform hover:scale-[1.01] hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Another Subject
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={calculateGPA}
            disabled={isCalculating}
            className="flex-1 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 hover:from-amber-700 hover:via-yellow-700 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
          >
            {isCalculating ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                Calculating Magic...
              </>
            ) : (
              <>
                <TrendingUp className="w-6 h-6" />
                Calculate My GPA
              </>
            )}
          </button>

          <button
            onClick={resetCalculator}
            className="flex-1 sm:flex-none bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Zap className="w-6 h-6" />
            Reset
          </button>
        </div>

        {/* Results */}
        <AnimatePresence>
          {showResult && gpa && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Performance Dashboard */}
              <PerformanceDashboard gpa={gpa} />

              {/* Motivational Quote Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="bg-gradient-to-r from-blue-600/20 via-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/30"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <motion.div
                      initial={{ rotate: -30, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ delay: 0.6, type: 'spring' }}
                      className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                    >
                      <Heart className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="text-2xl font-bold text-white">
                      Words of Encouragement
                    </span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-medium">
                      {quote}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Grading System Modal */}
      <AnimatePresence>
        <GradingSystemModal />
      </AnimatePresence>
    </div>
  );
};

export default GPACalculator;
