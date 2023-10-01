import React from 'react';
import '../styles/services.css';
import { HiGlobe } from 'react-icons/hi';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'best grooming',
    icon: <HiGlobe />,
  },
  {
    id: 2,
    title: 'dog training',
    icon: <HiGlobe />,
  },
  {
    id: 3,
    title: 'specail deit',
    icon: <HiGlobe />,
  },
  {
    id: 4,
    title: 'vet services',
    icon: <HiGlobe />,
  },
];
const Services = () => {
  return (
    <section className="services" id="services">
      <motion.div
        className="services--content"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <p className="section--slogan">Services</p>
        <h2 className="section--heading">Pet Care With Love</h2>
        <div className="services--des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fugit
          quos modi, aliquid voluptas distinctio.
        </div>
        <button className="btn--1">Explore</button>
      </motion.div>

      <div className="services--container">
        {services.map((service, index) => (
          <motion.div
            className="service--box"
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <span className="service--icon">{service.icon}</span>
            <h3 className="service--title">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
