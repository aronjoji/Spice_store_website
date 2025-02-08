import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Topbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact', isButton: true }
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-primary-color/95 backdrop-blur-md py-3 shadow-lg'
            : 'bg-primary-color/80 backdrop-blur-sm py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="relative group"
            >
              <motion.span
                className="text-2xl font-bold text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                JJ Spices
              </motion.span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-color transform origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <motion.nav
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center space-x-8"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  {item.isButton ? (
                    <Link
                      to={item.path}
                      className="relative group px-6 py-2 rounded-lg overflow-hidden transition-all duration-300
                        bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20
                        shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)]"
                    >
                      <span className="relative z-10 text-white font-medium">
                        {item.label}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent-color/30 to-accent-color/10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  ) : (
                    <Link
                      to={item.path}
                      className="relative group text-white/90 hover:text-white transition-colors duration-300"
                    >
                      <span className={`${
                        location.pathname === item.path ? 'font-semibold' : ''
                      }`}>
                        {item.label}
                      </span>
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-color transform origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ 
                          scaleX: location.pathname === item.path ? 1 : 0 
                        }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-primary-color/95 backdrop-blur-md shadow-2xl"
            >
              <div className="flex flex-col space-y-4 p-6 mt-16">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ x: 4 }}
                    className="w-full"
                  >
                    {item.isButton ? (
                      <Link
                        to={item.path}
                        className="block py-2 px-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20
                          text-white hover:bg-white/20 transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        to={item.path}
                        className="block py-2 text-white/90 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Topbar;
