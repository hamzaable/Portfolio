import React, { useEffect, useState } from "react";
import CardsContainer from "./CardsContainer";
import { motion } from "framer-motion";
import Layout from "./Layout";

const Home = (props) => {
	const [mobile, setmobile] = useState(false);

	const mql = window.matchMedia("(min-width: 768px)");
	const mobileView = mql.matches;

	useEffect(() => {
		if (mobileView) {
			setmobile(true);
		} else {
			setmobile(false);
		}
	}, [mobileView]);

	mql.addEventListener("change", (e) => {
		let webview = e.matches;
		if (webview) {
			setmobile(true);
		} else {
			setmobile(false);
		}
	});

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
				{mobile && (
					<div className=" md:block md:w-3/5 relative">
						<CardsContainer isweb={mobile} />
					</div>
				)}
			</div>

			<div className="md:w-3/5 md:pl-8">
				<motion.h1
					className="text-3xl font-bold text-mygray md:text-2xl lg:text-3xl"
					initial={{ marginLeft: "-20px", opacity: 0 }}
					animate={{ marginLeft: "0px", opacity: 1 }}
					transition={{ delay: 1 + 0.5, duration: 0.5 }}
				>
					Hi, my name is{" "}
					<span className="text-darkPurple">Hamza Rehman Saleemi</span>
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
					transition={{
						delay: 1 + 1,
						duration: 0.75,
						ease: "easeIn",
					}}
				>
					Passion for writing computer programs lead me from Engineering to Web
					Development. I have Web development experience of 4+ years. My tech
					stack includes JavaScript, React, Nextjs, Angular, Symfony, and SCSS.
					I am Passionate about building high performance, user centric applications
					and continuously learning.
				</motion.p>
			</div>
			<div className="-ml-2 md:hidden">
				<CardsContainer ismobile={mobile} />
			</div>
		</Layout>
	);
};

export default Home;
