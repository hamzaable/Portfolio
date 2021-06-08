import React from "react";
import { Fragment } from "react";
import Modal from "./UI/Modal";
import ProjectsList from "./ProjectsList";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaLink } from "react-icons/fa";

const ProjectDetailsModal = (props) => {
	const ProjectsArray = Object.values(ProjectsList())[0];
	const selectedProject = Object.values(ProjectsArray).filter((e) => {
		return e.id === props.project;
	});

	const closeHandler = () => {
		props.handleClose();
	};

	return (
		<Fragment>
			<Modal
				onBackClose={props.onBackClose}>
				<div>
					<div className="flex justify-between mb-1 pb-1 items-center ">
						<div className="border-b-2 border-darkPurple">
							<a
								href={[selectedProject[0].link]}
								className="flex items-center "
								target="_blank"
								rel="noopener noreferrer"
							>
								<h1 className="text-darkPurple text-xl md:text-2xl font-bold  ">
									{[selectedProject[0].projectName]}
								</h1>
								<FaLink
									size={18}
									className="ml-3 cursor-pointer hover:scale-125 transform duration-300 text-darkPurple"
								/>
							</a>
						</div>

						<AiFillCloseCircle
							size={26}
							className="cursor-pointer hover:scale-125 transform duration-300 text-red-700 "
							onClick={closeHandler}
						/>
					</div>
					<a
						href={[selectedProject[0].link]}
						className="flex items-center "
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={
								process.env.PUBLIC_URL +
								[selectedProject[0].src]
							}
							alt="Project Details"
							className="h-60 md:h-96 m-auto  cursor-pointer"
						/>
					</a>

					<div className="mt-4">
						<p className="font-bold  text-base md:text-xl text-gray-600">
							Tech Stack:
						</p>
						<div className="flex flex-wrap">
							{selectedProject[0].techStack.map((stack) => {
								return (
									<span
										className="text-white bg-darkPurple py-2 px-4 rounded-full mr-2 mt-2 text-xs md:text-sm"
										key={stack}
									>
										{stack}
									</span>
								);
							})}
						</div>
					</div>
				</div>
			</Modal>
		</Fragment>
	);
};

export default ProjectDetailsModal;
