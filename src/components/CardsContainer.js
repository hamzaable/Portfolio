import React, { Component } from "react";
import { motion } from "framer-motion";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";

class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
    };
    this.inner = React.createRef();
    this.width = null;
    this.outer = React.createRef();
    this.outerWidth = null;
    this.numberOfVisibleCards = null;

    this.images = [
      {
        id: 7,
        src: "/images/HP1.jpg",
        link: "https://hamzaable.github.io/FoodOrders/",
      },
      {
        id: 8,
        src: "/images/HP2.jpg",
        link: "https://hamzaable.github.io/Expenses-Tracker/",
      },
      {
        id: 1,
        src: "/images/HP3.jpg",
        link: "https://hamzaable.github.io/ChatsBoard/",
      },
      {
        id: 2,
        src: "/images/HP4.jpg",
        link: "https://hamzaable.github.io/Job-Listing/",
      },
      {
        id: 3,
        src: "/images/HP5.jpg",
        link: "https://hamzaable.github.io/Portfolio-CSS/",
      },
      {
        id: 4,
        src: "/images/HP6.jpg",
        link: "https://github.com/hamzaable/Modelling-of-Solar-Roof-Tiles",
      },
      {
        id: 5,
        src: "/images/HP7.jpg",
        link: "https://hamzaable.github.io/React-Login/",
      },
      {
        id: 6,
        src: "/images/HP8.jpg",
        link: "#",
      },
    ];
  }

  componentDidMount() {
    this.adjustSize();
    window.addEventListener("resize", this.adjustSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.adjustSize);
  }
  adjustSize = () => {
    this.width = this.inner.current.clientWidth;
    this.outerWidth = this.outer.current.clientWidth;
    this.numberOfVisibleCards = Math.floor(this.outerWidth / (this.width + 16));
  };
  rightScrollHandler = () => {
    if (this.state.position < this.images.length - this.numberOfVisibleCards) {
      this.setState({ position: this.state.position + 1 });
    }
  };
  leftScrollHandler = () => {
    if (this.state.position > 0) {
      this.setState({ position: this.state.position - 1 });
    }
  };


  render() {
    return (
      <div className="">
        <motion.div
          className=" flex flex-row overflow-x-auto disable-scrollbars "
          initial={{ scrollLeft: 0 }}
          animate={{ scrollLeft: this.state.position * (this.width + 16) }}
          transition={{ ease: "easeInOut" }}
          ref={this.outer}
        >
          {this.images.map((image) => {
            return (
              <div
                className="p-1 bg-white rounded-lg shadow-md 
                flex-shrink-0 
                w-48 mx-2 mb-2 md:w-40 lg:w-40 xl:w-58"
                key={image.id}
                ref={this.inner}
              >
                <div className="relative pb-3/4 ">
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + image.src}
                      alt="project1"
                      className="rounded h-full object-fit absolute"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </motion.div>
        <div className="flex py-2 text-mygray px-2 justify-center md:justify-start">
          <span className="px-1" onClick={this.leftScrollHandler}>
            <AiOutlineLeftCircle
              size={24}
              className="cursor-pointer hover:scale-125 transform duration-300"
            />
          </span>
          <span
            className="px-1 cursor-pointer"
            onClick={this.rightScrollHandler}
          >
            <AiOutlineRightCircle
              size={24}
              className="cursor-pointer hover:scale-125 transform duration-300"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default CardsContainer;
