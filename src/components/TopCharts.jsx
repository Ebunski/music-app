import React from 'react';
import ChartItem from './utilities/ChartItem';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slideshow from './utilities/Slideshow';
import useGlobalContext from '../contexts/appContext';

export default function TopCharts() {
	const { isDesktop } = useGlobalContext();
	const chartItems = [
		{
			img: './img/Rectangle 13.png',
			main: 'Golden Age of 80s',
			sub: 'Seon Swadder',
			rating: 12445,
		},
		{
			img: './img/Rectangle 16.png',
			main: 'Golden Age of 80s',
			sub: 'Seon Swadder',
			rating: 12445,
		},
		{
			img: './img/Lead-image.png',
			main: 'Golden Age of 80s',
			sub: 'Seon Swadder',
			rating: 12445,
		},
	];
	return (
		<div className="top-charts- md:w-[40%] md:ml-12 mt-8 md:mt-0 ">
			<div className="title- text-[2rem] font-semibold">Top Charts</div>
			{isDesktop ? (
				<div className={isDesktop ? `h-[20rem]` : ''}>
					{chartItems.map((item) => {
						const { img, main, sub, rating } = item;
						return (
							<ChartItem img={img} main={main} sub={sub} rating={rating} />
						);
					})}
				</div>
			) : (
				<Swiper
					slidesPerView={'auto'}
					spaceBetween={10}
					pagination={{
						clickable: false,
					}}
					grabCursor={true}
					className="mySwiper h-auto"
				>
					{chartItems.map((item) => {
						const { img, main, sub, rating } = item;
						return (
							<SwiperSlide>
								<ChartItem img={img} main={main} sub={sub} rating={rating} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			)}
		</div>
	);
}
