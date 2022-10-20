import React from 'react';
import { Heart } from 'react-feather';

export default function Main() {
	const ChartItem = ({img, main, sub, rating}) => (
		<div className='flex items-center p-4 rounded-[1rem] bg-secondary-bg gap-5'>
			<img src={img} alt="" className='rounded-[0.5rem] w-16 h-16'/>
			<div className='flex-1'>
				<div className=''>{main}</div>
				<div className=''>{sub}</div>
				<div className=''>{rating}</div>
			</div>
			<div className='border-secondary-color border-[1px] h-8 w-8 rounded-full grid place-items-center'>
				<img src="./img/Lined-heart.png" alt="" />
			</div>
		</div>
	)
	return (
		<main className="flex md:mr-12">
			<div className=" flex rounded-3xl bg-average-blue overflow-hidden ">
				<div className="w-[50%] py-12 pl-12 flex flex-col justify-between">
					<div>Current Playlist</div>
					<div>
						<div className="text-[3rem] font-semibold">R & B Hits</div>
						<div>
							All mine, Lie again, Petty call me everyday, Out of time, No love,
							Bad habit, and so much more
						</div>
					</div>
					<div className="flex items-center gap-4">
						<img src="./img/Likers.png" alt="" />
						<div className="flex items-center gap-2">
							<img src="./img/Heart.png" alt="" className="w-4 h-4" /> 33k Likes
						</div>
					</div>
				</div>
				<div className="bg-[url('./img/Vector.svg')] bg-cover w-[60%] flex justify-end">
					<img src="./img/Nigga.png" alt="" className="h-full" />
				</div>
			</div>
			<div className="top-charts- w-[40%] ml-12 ">
				<div className="title- text-[2rem] font-semibold">Top Charts</div>
				<div className="h-[20rem] overflow-auto">
					<ChartItem
						img="./img/Rectangle 13.png"
						main="Golden Age of 80s"
						sub="Seon Swadder"
						rating={12445}
					/>
					<ChartItem
						img="./img/Rectangle 16.png"
						main="Golden Age of 80s"
						sub="Seon Swadder"
						rating={12445}
					/>
					<ChartItem
						img="./img/Lead-image.png"
						main="Golden Age of 80s"
						sub="Seon Swadder"
						rating={12445}
					/>
				</div>
			</div>
		</main>
	);
}
