// import React from 'react';

// const CarouselTing = () => {
//   return (
//     <div>Carousel</div>
//   )
// }

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './styling/carouselCustom.scss';
import acryl1 from '../photos/AcrylicCarousel/AaaaacrylicFrame.png';
import acryl2 from '../photos/AcrylicCarousel/acryil2.png';
import willo1 from '../photos/WilloFrameCarousel/willo1.png';
import willo2 from '../photos/WilloFrameCarousel/willo2.png';
import box1 from '../photos/WoodeBoxCarousel/box1.png';
import box2 from '../photos/WoodeBoxCarousel/box2.png';

class CarouselTing extends Component {

	render() {
		return (
				<Carousel className="actualCarousel" width="35%" interval="3000" autoPlay infiniteLoop showThumbs={false}
				showStatus={true} showArrows={false} stopOnHover={false} showIndicators={false}>
						<div>
							<img src={acryl1} alt="Project" className="carouselPic" />
						</div>
						<div>
							<img src={acryl2} alt="Project" className="carouselPic" />
						</div>
						<div>
							<img src={box1} alt="Project" className="carouselPic" />
						</div>
						<div>
							<img src={box2} alt="Project" className="carouselPic" />
						</div>
						<div>
							<img src={willo1} alt="Project" className="carouselPic" />
						</div>
						<div>
							<img src={willo2} alt="Project" className="carouselPic" />
						</div>
				</Carousel>
		);
	}
};

export default CarouselTing;