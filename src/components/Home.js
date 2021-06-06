import React from "react";
import CardsContainer from "./CardsContainer";
import { motion } from "framer-motion";
import Layout from "./Layout";



const Home = (props) => {
  return (
    <Layout>
      <div className="md:flex md:pl-8">
        <div className="md:w-2/5 ">
          <img
            src={process.env.PUBLIC_URL + "/images/profile.jpg"}
            alt="profile"
            className="rounded-lg shadow-sm w-32  "
          />
        </div>
        <div className="hidden md:block md:w-3/5 relative">
          <CardsContainer />
        </div>
      </div>
      <div className="md:w-3/5 md:pl-8">
        <motion.h1
          className="text-3xl font-bold text-mygray md:text-2xl lg:text-3xl"
          initial={{ marginLeft: "-20px", opacity: 0 }}
          animate={{ marginLeft: "0px", opacity: 1 }}
          transition={{ delay: 1 + 0.5, duration: 0.5 }}
        >
          Hi, my name is <span className="text-darkPurple">Hamza Rehman Saleemi</span>
        </motion.h1>
        <motion.h1
          className="text-3xl font-bold text-mygray md:text-2xl lg:text-3xl"
          initial={{ marginLeft: "-20px", opacity: 0 }}
          animate={{ marginLeft: "0px", opacity: 1 }}
          transition={{ delay: 1 + 0.75, duration: 0.5 }}
        >
          I build things for the <span className="text-darkPurple">Web</span>
        </motion.h1>
        <motion.p
          className="text-sm text-justify text-mygray md:text-base lg:text-xl mb-4 "
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1 + 1, duration: 0.75, ease: "easeIn" }}
        >
          Passion for writing computer programs lead me from Engineering to Web
          Development. I'm specialized in HTML/CSS, JavaScript, ReactJS, Angular
          on the frontend, but I'm pretty comfortable with SQL, MongoDB, NodeJs and
          PHP.
        </motion.p>
      </div>
      <div className="-ml-2 md:hidden">
        <CardsContainer />
      </div>
    </Layout>
  );
};

export default Home;
