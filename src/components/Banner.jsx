import React from 'react';
import '../styles/banner.css';
import groupImage from '../assets/pet-group.png';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="banner--section">
      <div className="banner">
        <motion.div
          className="banner--content"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <h2>Stay $ Save</h2>
          <h2>Get Your Awesome Discount</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </motion.div>

        <div className="banner--image">
          <motion.img
            src={groupImage}
            alt=""
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
