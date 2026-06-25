'use client';

import { motion } from 'framer-motion';
import { BookOpen, X, Calculator } from 'lucide-react';

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

const gradingRemarkColor = (remarks) => {
  if (['Exceptional', 'Outstanding', 'Excellent'].includes(remarks))
    return 'bg-green-500/20 text-green-300';
  if (['Very Good', 'Good', 'Above Average'].includes(remarks))
    return 'bg-blue-500/20 text-blue-300';
  if (['Average', 'Satisfactory'].includes(remarks))
    return 'bg-yellow-500/20 text-yellow-300';
  return 'bg-red-500/20 text-red-300';
};

const GradingTable = () => (
  <div className="w-full">
    <table className="hidden md:table w-full bg-white/10 rounded-lg border border-white/20 overflow-hidden">
      <thead>
        <tr className="bg-gradient-to-r from-blue-900/50 to-amber-900/50">
          <th className="px-3 py-2 text-left text-xs font-bold text-amber-300 uppercase tracking-wider border-b border-white/20">Marks Range</th>
          <th className="px-3 py-2 text-center text-xs font-bold text-amber-300 uppercase tracking-wider border-b border-white/20">Grade</th>
          <th className="px-3 py-2 text-center text-xs font-bold text-amber-300 uppercase tracking-wider border-b border-white/20">GPA</th>
          <th className="px-3 py-2 text-center text-xs font-bold text-amber-300 uppercase tracking-wider border-b border-white/20">Remarks</th>
        </tr>
      </thead>
      <tbody>
        {officialGradingData.map((row, index) => (
          <tr
            key={index}
            className={`${index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'} hover:bg-white/15 transition-all duration-200`}
          >
            <td className="px-3 py-2 text-white font-medium border-b border-white/10 text-xs">{row.marksRange}</td>
            <td className="px-3 py-2 text-center border-b border-white/10">
              <span className="inline-flex items-center justify-center w-9 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded text-white font-bold text-xs">{row.grade}</span>
            </td>
            <td className="px-3 py-2 text-center text-amber-300 font-bold border-b border-white/10 text-xs">{row.gpa}</td>
            <td className="px-3 py-2 text-center text-gray-300 border-b border-white/10">
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${gradingRemarkColor(row.remarks)}`}>{row.remarks}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="md:hidden flex flex-col gap-2">
      {officialGradingData.map((row, index) => (
        <div
          key={index}
          className="bg-white/10 rounded-lg p-2.5 border border-white/20 text-xs text-white space-y-1"
        >
          <div className="flex justify-between items-center">
            <span className="font-bold text-amber-300">Marks:</span>
            <span>{row.marksRange}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-amber-300">Grade:</span>
            <span className="inline-flex items-center justify-center w-9 h-5 bg-gradient-to-r from-amber-500 to-orange-500 rounded text-white font-bold text-xs">{row.grade}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-amber-300">GPA:</span>
            <span className="font-bold text-amber-200">{row.gpa}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-amber-300">Remarks:</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${gradingRemarkColor(row.remarks)}`}>{row.remarks}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const FormulaSection = ({ type }) => {
  if (type === 'gpa') {
    return (
      <div className="mt-4 p-3 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-lg border border-blue-500/30">
        <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-1.5">
          <Calculator className="w-4 h-4 text-amber-400" />
          GPA Formula
        </h4>
        <p className="text-xs text-gray-300">
          <strong className="text-amber-300">GPA</strong> = Total Grade Points ÷ Total Credit Units
        </p>
        <p className="text-xs text-gray-300 mt-1">
          <strong className="text-blue-300">Grade Points</strong> = Grade Point Value × Credit Units (per subject)
        </p>
        <div className="bg-white/10 rounded p-2 mt-2">
          <p className="text-amber-300 font-bold text-[11px] mb-1">Example:</p>
          <p className="text-gray-300 text-[11px]">
            A+ (4.00) × 3 + B+ (3.33) × 4 = 25.32 ÷ 7 = <strong className="text-white">3.62 GPA</strong>
          </p>
        </div>
      </div>
    );
  }

  if (type === 'cgpa') {
    return (
      <div className="mt-4 p-3 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-lg border border-blue-500/30">
        <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-1.5">
          <Calculator className="w-4 h-4 text-amber-400" />
          CGPA Formula
        </h4>
        <p className="text-xs text-gray-300">
          <strong className="text-amber-300">CGPA</strong> = Total Grade Points ÷ Total Credit Units
        </p>
        <p className="text-xs text-gray-300 mt-1">
          <strong className="text-blue-300">Grade Points</strong> = Semester GPA × Credit Units (per semester)
        </p>
        <div className="bg-white/10 rounded p-2 mt-2">
          <p className="text-amber-300 font-bold text-[11px] mb-1">Example:</p>
          <p className="text-gray-300 text-[11px]">
            3.50×18 + 3.75×20 = 138 ÷ 38 = <strong className="text-white">3.63 CGPA</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 p-3 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-lg border border-blue-500/30">
      <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-1.5">
        <Calculator className="w-4 h-4 text-amber-400" />
        GPA & CGPA Formula
      </h4>
      <p className="text-xs text-gray-300">
        <strong className="text-amber-300">GPA/CGPA</strong> = Total Grade Points ÷ Total Credit Units
      </p>
      <p className="text-xs text-gray-300 mt-1">
        <strong className="text-blue-300">Grade Points</strong> = Grade Point Value × Credit Units
      </p>
      <div className="bg-white/10 rounded p-2 mt-2">
        <p className="text-amber-300 font-bold text-[11px] mb-1">Example:</p>
        <p className="text-gray-300 text-[11px]">
          A+ (4.00) × 3 credits = 12 grade points; GPA = 12 ÷ 3 = <strong className="text-white">4.00</strong>
        </p>
      </div>
    </div>
  );
};

const GradingPolicyModal = ({ show, onClose, type = 'both' }) => {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 max-w-xl lg:max-w-3xl w-full max-h-[75vh] overflow-y-auto border border-white/20 mt-8 md:mt-12"
      >
        <div className="flex justify-between items-start sm:items-center mb-3 sm:mb-4 gap-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">
              USKT Official Grading Policy
            </h2>
          </div>
          <motion.button
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-1.5 bg-red-500/20 hover:bg-red-500/30 rounded-full text-red-400 hover:text-red-300 transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4 text-center">
            Official University Grading Scale
          </h3>

          <GradingTable />
          <FormulaSection type={type} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GradingPolicyModal;
