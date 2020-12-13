import React, { useState, useEffect } from 'react';
import fb from '../images/FB-icon-black.png';
import linkedin from '../images/linkedin-icon-black.png';
import twitter from '../images/Twitter-icon-black.png';
import img1 from '../images/pic1.png';
import img2 from '../images/pic2.png';
import './Slider.css';

const Slider = () => {
	const [state, handleState] = useState({
		img: [img1, img2],
		cntr: 0,
		Dots: ['bright', 'dark'],
	});

	function slide() {
		handleState((prevState) => ({
			...prevState,
			cntr: (prevState.cntr + 1) % 2,
		}));
	}

	useEffect(() => {
		setInterval(slide, 4000);
	}, []);

	return (
		<div className= {state.cntr ? 'bg2' : 'bg1'}>
			<div className='right-content'>
				<div id='lt'>Type Text</div>
				<div id='st'>
					Lorem Ipsum is simply dummy text of the printing and
					<br /> typesetting industry.
				</div>
				
				<div className={state.cntr===0 ? 'dots active' : 'dots'} /> &nbsp;
				<div className={state.cntr ? 'dots active' : 'dots'} />
				
			</div>
			<div className='social'>
				<img src={fb} alt='Facebook' style= {{ background: "transparent" }} height='12px' width='12px'/>
				&nbsp;&nbsp;
				<img src={linkedin} alt='LinkedIn' style= {{ background: "transparent" }} height='12px' width='12px' />
				&nbsp;&nbsp;
				<img src={twitter} alt='Twitter' style= {{ background: "transparent" }} height='12px' width='12px' />
			</div>
		</div>
	);
};

export default Slider;