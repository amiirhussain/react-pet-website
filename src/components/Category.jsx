import React from 'react';
import '../styles/category.css';
import { petData } from '../Data/PetData';
import { motion } from 'framer-motion';

const Category = () => {
  return (
    <section className="category" id="category">
      <p className="section--slogan">Customer Favorites</p>
      <h2 className="section--heading">Popular Categories</h2>

      <div className="category--container">
        {petData.map((data, index) => (
          <motion.div
            className="category--box"
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <img className="box--image" src={data.imgUrl} alt={data.title} />
            <h3 className="box--title">{data.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Category;
