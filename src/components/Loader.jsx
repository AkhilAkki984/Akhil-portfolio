import { useEffect } from "react";
import { motion } from "framer-motion";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [setLoading]);

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-black text-white text-4xl font-bold"
      initial={{ opacity: 1, x:0 }}
      animate={{ opacity: 0,x:1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      WELCOME TO MY PORTFOLIO
    </motion.div>
  );
};

export default Loader;
