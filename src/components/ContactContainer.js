import React from "react";

const contactContainer = (props) => {
    const onClickHandler = ()=>{
        window.location.href = "mailto:hamzarsaleemi@gmail.com?subject= Hamza's Portfolio- Email Subject&body=";
    }
    const cvClickHandler = ()=>{
        window.location.href="http://hamzarsaleemi.com/HamzaCV.pdf"
    }
	return (
		<div className="px-5 mx-auto max-w-lg md:w-1/4 md:self-end md:mb-4">
			<h2 className="text-2xl font-medium text-mygray md:text-lg">
				Willing to hire?
			</h2>
            <div className="flex">
			<button className="my-gradient w-full py-2 rounded-lg text-2xl md:text-3xl text-white font-bold mt-2 md:text-base md:py-1 "
            onClick={cvClickHandler}
            >
				Resume
			</button>
			<button 
            className=" my-gradient w-full py-2 rounded-lg text-2xl md:text-3xl text-white font-bold mt-2 md:text-base md:py-1 ml-2"
            onClick={onClickHandler}>
            	Contact me
			</button>
            </div>
		</div>
	);
};

export default contactContainer;
