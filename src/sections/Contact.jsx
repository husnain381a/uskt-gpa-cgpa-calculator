'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Loader2,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'husnain@usktcgpacalculator.online',
    href: 'mailto:husnain@usktcgpacalculator.online',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'University of Sialkot, Punjab, Pakistan',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Typically within 24 hours',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-16">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="text-center"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-black bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6"
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Have a question, suggestion, or feedback? We would love to hear from
          you. Send us a message and we will respond as soon as possible.
        </motion.p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="lg:col-span-3"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex p-4 bg-green-500/20 rounded-full mb-4">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400 mb-6">
                  Thank you for reaching out. We will get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-amber-300 hover:text-amber-200 border border-amber-500/30 hover:border-amber-400/50 px-6 py-3 rounded-xl transition-all duration-200"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 focus:bg-white/15 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 focus:bg-white/15 transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 focus:bg-white/15 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 focus:bg-white/15 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 hover:from-amber-700 hover:via-yellow-700 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-[1.01] disabled:scale-100 flex items-center justify-center gap-2 shadow-xl"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* Contact Info Sidebar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="lg:col-span-2 space-y-6"
        >
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                variants={fadeInUp}
                custom={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {info.label}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-amber-300 hover:text-amber-200 transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400 text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            variants={fadeInUp}
            custom={3}
            className="bg-gradient-to-r from-amber-500/10 to-blue-500/10 border border-amber-500/20 rounded-2xl p-6"
          >
            <h3 className="font-bold text-white mb-2">Prefer Email?</h3>
            <p className="text-gray-400 text-sm mb-4">
              You can also reach us directly at our email address.
            </p>
            <a
              href="mailto:husnain@usktcgpacalculator.online"
              className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              husnain@usktcgpacalculator.online
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
