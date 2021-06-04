import React from "react";
import { ReactComponent as FooterSm } from "../assets/svgs/footer-sm.svg";
import { ReactComponent as FooterMd } from "../assets/svgs/footer-md.svg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import ContactContainer from "./ContactContainer";

const Footer = (props) => {
	return (
		<footer className="mt-10 md:bottom-0 w-full md:flex md:flex-row-reverse md:flex ">
			<ContactContainer />
			<div className="mt-4 md:w-3/4 relative md:border-gray-600 md:border-r-2 md:mt-0 md:h-48 md:flex md:flex-row-reverse ">
				<div className="text-white flex flex-row absolute bottom-0 mb-4 ml-4 md:right-0 md:text-mygray md:flex-col md:top-0 md:mr-2">
					{/* Github */}
					<a
						href="https://github.com/hamzaable"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithubSquare
							size={35}
							className="cursor-pointer mx-1 md:mx-0 md:p-1"
						/>
					{/* Linked In */}
					</a>
					<a
						href="https://www.linkedin.com/in/hamza-rehman-saleemi-60980a211/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin
							size={35}
							className="cursor-pointer mx-1 md:mx-0 md:p-1"
						/>
					</a>

                    {/* Fiverr */}
					<a
						href="https://fiverr.com/hamzaable"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiFiverr
							size={35}
							className="cursor-pointer mx-1 md:mx-0 md:p-1"
						/>
					</a>


				</div>
				<FooterSm className="h-32 md:h-0" />
				<FooterMd className="h-0 md:h-24 md:self-end" />
			</div>
		</footer>
	);
};

export default Footer;
