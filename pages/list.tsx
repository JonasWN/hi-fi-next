import React from "react";
import { motion } from "framer-motion";

const list = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      Shop
    </motion.div>
  );
};

export default list;
