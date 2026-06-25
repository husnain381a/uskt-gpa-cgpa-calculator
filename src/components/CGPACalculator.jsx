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
  Image,
  GraduationCap,
  Video,
} from 'lucide-react';
import GradingPolicyModal from './GradingPolicyModal';

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



const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([
    { id: 1, name: 'Semester 1', gpa: '', credits: '' },
  ]);
  const [cgpa, setCgpa] = useState(null);
  const [quote, setQuote] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [scoreCategory, setScoreCategory] = useState('');
  const [showGradingSystem, setShowGradingSystem] = useState(false);

  const addSemester = () => {
    setSemesters([
      ...semesters,
      {
        id: Date.now(),
        name: `Semester ${semesters.length + 1}`,
        gpa: '',
        credits: '',
      },
    ]);
  };

  const removeSemester = (id) => {
    if (semesters.length > 1) {
      setSemesters(semesters.filter((semester) => semester.id !== id));
    }
  };

  const updateSemester = (id, field, value) => {
    setSemesters(
      semesters.map((semester) =>
        semester.id === id ? { ...semester, [field]: value } : semester
      )
    );
  };

  const getScoreCategory = (cgpa) => {
    const score = parseFloat(cgpa);
    if (score >= 3.5) return 'excellent';
    if (score >= 3.0) return 'good';
    if (score >= 2.5) return 'average';
    return 'needsImprovement';
  };

  const getScoreDetails = (cgpa) => {
    const score = parseFloat(cgpa);
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

  const calculateCGPA = () => {
    const validSemesters = semesters.filter(
      (semester) =>
        semester.gpa &&
        semester.credits &&
        parseFloat(semester.gpa) >= 0 &&
        parseFloat(semester.gpa) <= 4.0 &&
        parseFloat(semester.credits) > 0
    );

    if (validSemesters.length === 0) {
      alert(
        'Please add at least one semester with valid GPA (0.0-4.0) and credits!'
      );
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      let totalGradePoints = 0;
      let totalCredits = 0;

      validSemesters.forEach((semester) => {
        const gpa = parseFloat(semester.gpa);
        const credits = parseFloat(semester.credits);
        totalCredits += credits;
        totalGradePoints += gpa * credits;
      });

      if (totalCredits === 0) {
        alert('Please enter valid credit units!');
        setIsCalculating(false);
        return;
      }

      const calculatedCGPA = totalGradePoints / totalCredits;
      const category = getScoreCategory(calculatedCGPA);

      setCgpa(calculatedCGPA.toFixed(2));
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
    setSemesters([{ id: 1, name: 'Semester 1', gpa: '', credits: '' }]);
    setCgpa(null);
    setQuote('');
    setShowResult(false);
    setScoreCategory('');
  };

  const PerformanceDashboard = ({ cgpa }) => {
    const scoreDetails = getScoreDetails(cgpa);
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

          {/* CGPA Display */}
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
                  {cgpa}
                </motion.div>
                <div className="text-sm text-white/80 font-semibold">
                  CGPA out of 4.0
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
                <span>{Math.round((parseFloat(cgpa) / 4.0) * 100)}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (parseFloat(cgpa) / 4.0) * 100)}%` }}
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
          CGPA Calculator
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
          Calculate your cumulative GPA across all completed semesters with our
          comprehensive tool designed for University of Sialkot students. Track
          your overall academic progress throughout your degree.
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
        {/* Semesters Input */}
        <div className="space-y-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">
              Add Your Semesters
            </h2>
          </div>

          {semesters.map((semester, index) => (
            <div
              key={semester.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Semester Name
                  </label>
                  <input
                    type="text"
                    value={semester.name}
                    onChange={(e) =>
                      updateSemester(semester.id, 'name', e.target.value)
                    }
                    placeholder="e.g., Semester 1, Fall 2023"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 focus:bg-white/15 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Semester GPA
                  </label>
                  <input
                    type="number"
                    value={semester.gpa}
                    onChange={(e) =>
                      updateSemester(semester.id, 'gpa', e.target.value)
                    }
                    placeholder="3.50"
                    min="0"
                    max="4"
                    step="0.01"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 focus:bg-white/15 transition-all duration-200"
                  />
                </div>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Credit Units
                    </label>
                    <input
                      type="number"
                      value={semester.credits}
                      onChange={(e) =>
                        updateSemester(semester.id, 'credits', e.target.value)
                      }
                      placeholder="18"
                      min="0"
                      max="30"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 focus:bg-white/15 transition-all duration-200"
                    />
                  </div>
                  {semesters.length > 1 && (
                    <button
                      onClick={() => removeSemester(semester.id)}
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
            onClick={addSemester}
            className="w-full p-4 bg-gradient-to-r from-amber-500/20 to-blue-600/20 hover:from-amber-500/30 hover:to-blue-600/30 border border-amber-500/30 hover:border-amber-400/50 rounded-2xl text-amber-300 hover:text-amber-200 transition-all duration-200 transform hover:scale-[1.01] hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Another Semester
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={calculateCGPA}
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
                Calculate My CGPA
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
          {showResult && cgpa && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Performance Dashboard */}
              <PerformanceDashboard cgpa={cgpa} />

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
        {showGradingSystem && (
          <GradingPolicyModal
            show={showGradingSystem}
            onClose={() => setShowGradingSystem(false)}
            type="cgpa"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CGPACalculator;
