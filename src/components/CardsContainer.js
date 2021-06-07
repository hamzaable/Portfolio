import React, { useState, useEffect } from "react";
import ProjectsList from "./ProjectsList";
import { motion } from "framer-motion";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import ProjectDetailsModal from "./ProjectDetailsModal";


const CardsContainer = (props) => {
	const ProjectsArray = Object.values(ProjectsList())[0];
	const inner = React.createRef();
	const outer = React.createRef();
	const [position, setposition] = useState(0);
	const [numberOfVisibleCards, setnumberOfVisibleCards] = useState(null);

	const [width, setwidth] = useState(null);
	const [outerWidth, setouterWidth] = useState(null);

	const [showModal, setshowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(-1)

	const adjustSize = useEffect(() => {
		setwidth(inner.current.clientWidth);
		setouterWidth(outer.current.clientWidth);
		setnumberOfVisibleCards(
			Math.floor(outerWidth / (width + 16))
		); /* 16 rem width of card */
		window.addEventListener("resize", adjustSize);
	}, [inner, outer]);

	const rightScrollHandler = () => {
		if (position < ProjectsArray.length - numberOfVisibleCards) {
			setposition(position + 1);
		}
	};

	const leftScrollHandler = () => {
		if (position > 0) {
			setposition(position - 1);
		}
	};

	const modalHandler = () => {
		setshowModal(true);
	};

	const closeHandler = () => {
		setshowModal(false);
	};

    const test = (id, event) =>{
        setSelectedProject(id)
        setshowModal(true);
    }

	return (
		<div className="">
			<motion.div
				className=" flex flex-row overflow-x-auto disable-scrollbars "
				initial={{ scrollLeft: 0 }}
				animate={{
					scrollLeft: position * (width + 16),
				}}
				transition={{ ease: "easeInOut" }}
				ref={outer}
			>
				{showModal && (
					<ProjectDetailsModal
						project={selectedProject}
						handleClose={closeHandler}
						onBackClose={closeHandler}
					/>
				)}

				{ProjectsArray.map((project) => {
					return (
						<div
							className="p-1 bg-white rounded-lg shadow-md flex-shrink-0 w-48 mx-2 mb-2 md:w-52 lg:w-52 xl:w-56 cursor-pointer"
							key={project.id}
							ref={inner}
							onClick={modalHandler}
							id={project.id}
							data={project.id}
                            onClick={(e) => test(project.id,e)}
                            
						>
							<div className="relative pb-3/4 ">
								<div className="flex flex-col">
									<div>
										{/* <a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
										> */}
											<img
												src={
													process.env.PUBLIC_URL +
													project.src
												}
												alt="project1"
												className="rounded h-full object-fit absolute"
											/>
										{/* </a> */}
									</div>
								</div>
							</div>
							<div className=" hover:text-darkPurple text-center  pt-1 text-gray-600 text-sm font-medium ">
								{/* 				<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
								> */}
								<p>{project.projectName}</p>
								{/* </a> */}
							</div>
						</div>
					);
				})}
			</motion.div>
			<div className="flex py-2 text-mygray px-2 justify-center md:justify-start">
				<span className="px-1" onClick={leftScrollHandler}>
					<AiOutlineLeftCircle
						size={24}
						className="cursor-pointer hover:scale-125 transform duration-300"
					/>
				</span>
				<span
					className="px-1 cursor-pointer"
					onClick={rightScrollHandler}
				>
					<AiOutlineRightCircle
						size={24}
						className="cursor-pointer hover:scale-125 transform duration-300"
					/>
				</span>
			</div>
		</div>
	);
};

export default CardsContainer;
