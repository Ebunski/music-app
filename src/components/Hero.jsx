import React from 'react';
import { Heart } from 'react-feather';
import TopCharts from './TopCharts';
import useGlobalContext from '../contexts/appContext';

export default function Main() {
	const { isDesktop } = useGlobalContext();
	return (
		<section className={`flex ${isDesktop ? '' : 'pt-20 px-4 flex-col'}`}>
			<div
				className={`flex  rounded-3xl bg-average-blue overflow-hidden ${
					isDesktop ? '' : 'flex-col-reverse'
				}`}
			>
				<div className="md:w-[50%] py-12 pl-12 flex flex-col justify-between">
					{isDesktop && <div>Current Playlist</div>}
					<div>
					<div className="text-[3rem] font-semibold">R & B Hits</div>
						<div>
							All mine, Lie again, Petty call me everyday, Out of time, No love,
							Bad habit, and so much more
						</div>
					</div>
					<div className="flex items-center gap-4 py-4">
						<img src="./img/Likers.png" alt="" />
						<div className="flex items-center gap-2">
							<img src="./img/Heart.png" alt="" className="w-4 h-4" /> 33k Likes
						</div>
					</div>
				</div>
				<div
					className={`bg-[url('./img/Vector.svg')]   ${
						isDesktop
							? ' w-[60%] bg-cover flex justify-end'
							: 'items-center w-full h-[15rem] bg-right-top bg-[length:15rem_20rem] bg-no-repeat'
					}`}
				>
					{isDesktop ? (
						<img src="./img/Nigga.png" alt="" className="h-full" />
					) : (
						<div className='p-8 px-10'>Current Playlist</div>
					)}
				</div>
			</div>
			<TopCharts />
		</section>
	);
}
