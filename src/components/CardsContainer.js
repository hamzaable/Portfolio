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
	const [selectedProject, setSelectedProject] = useState(-1);

	const [openX, setOpenX] = useState(0);
	const [openY, setOpenY] = useState(0);

	const adjustSize = useEffect(() => {
		setwidth(inner.current.clientWidth);
		setouterWidth(outer.current.clientWidth);
		setnumberOfVisibleCards(
			Math.floor(outerWidth / (width + 16))
		); /* 16 rem width of card */
		window.addEventListener("resize", adjustSize);
	}, [inner, outer, outerWidth, width]);

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

	const modalHandler = (e, id) => {
		const rect = document
			.querySelector("#project-" + id)
			.getBoundingClientRect();
		if (props.isweb === true) {
			setOpenX(rect.left + window.scrollX - 200);
			setOpenY(rect.top + window.scrollY - 200);
		} else {
			setOpenX(rect.left + window.scrollX - 100);
			setOpenY(rect.top + window.scrollY - 100);
		}
		setSelectedProject(id);

		setshowModal(true);
	};

	useEffect(() => {
		if (showModal === true) {
			const modal = document.getElementById("Modal");
			modal.animate(
				[
					{
						// from
						transform: " scale(0.35)",
						top: openY + "px",
						left: openX + "px",
					},
					{
						// to
						transform: "scale(1)",

					},
				],
				300
			);
			modal.style.transform = modal.style.transform.replace(
				/scale\([0-9|\.]*\)/,
				"scale(" + 1 + ")"
			);
            modal.style.top="8vh";
            modal.style.scale="1"
		}
	}, [showModal]);

	/* All this sh*t just to add animation to modal on Close */
	const closeHandler = () => {
		const backdrop = document.getElementById("Backdrop");
		const modal = document.getElementById("Modal");
        backdrop.style.display="none"
		
		modal.animate(
			[
				{
					// from
					opacity: 1,
					transform: " scale(1)",
				},
				{
					// to
					opacity: 1,
					transform: "scale(0.30)",
					top: openY + "px",
					left: openX + "px",
				},
			],
			340
		);
		setTimeout(function () {
			setshowModal(false);
		}, 330);
	};

	const openModal = (e, id) => {
		const rect = document
			.querySelector("#project-" + id)
			.getBoundingClientRect();
		if (props.isweb === true) {
			setOpenX(rect.left + window.scrollX - 200);
			setOpenY(rect.top + window.scrollY - 200);
		} else {
			setOpenX(rect.left + window.scrollX - 100);
			setOpenY(rect.top + window.scrollY - 100);
		}
		setSelectedProject(id);
		setshowModal(true);
	};

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
						id="Modal"
					/>
				)}
				{ProjectsArray.map((project) => {
					return (
						<div
							className="p-1 bg-white rounded-lg shadow-md flex-shrink-0 w-48 mx-2 mb-2 md:w-52 lg:w-52 xl:w-56 cursor-pointer"
							key={project.id}
							ref={inner}
							onClick={(e) => modalHandler(e, project.id)}
							id={"project-" + project.id}
							onClick={(e) => openModal(e, project.id)}
						>
							<div className="relative pb-3/4 ">
								<div className="flex flex-col">
									<div>
										<img
											src={
												process.env.PUBLIC_URL +
												project.src
											}
											alt="project1"
											className="rounded h-full object-fit absolute"
										/>
									</div>
								</div>
							</div>
							<div className=" hover:text-darkPurple text-center  pt-1 text-gray-600 text-sm font-medium ">
								<p>{project.projectName}</p>
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
