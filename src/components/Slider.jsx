// @flow
import React, { useState, useEffect } from 'react';
import fb from '../images/FB-icon-black.png';
import linkedin from '../images/linkedin-icon-black.png';
import twitter from '../images/Twitter-icon-black.png';
import img1 from '../images/pic1.png';
import img2 from '../images/pic2.png';
import '../styles/Slider.css';
import { useQuery, gql } from '@apollo/client';

const DATA = gql`
  query retrieveData($id:Int!){
      getData(id:$id)
  }
`;

function Data({id}){
  const {loading, error, data}= useQuery(DATA,{
    variables:{id},
  });
  if(loading) return null;
  if(error) return `Error! ${error}`;
  return data.getData;
};


const Slider = (): React$Node => {
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
				<div id='lt'><Data id={3} /></div>
				<div id='st'>
					<Data id={1} />
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