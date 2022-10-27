import React from 'react'
import useGlobalContext from '../contexts/appContext';

export default function Songs() {
	const { isDesktop } = useGlobalContext();

    const songs = [
			{
				img: './img/Rectangle-another4.png',
				name: 'Watin man go do - Burna',
				type: 'Single',
				duration: '4:18',
			},
			{
				img: './img/Rectangle-another4.png',
				name: 'Watin man go do - Burna',
				type: 'Single',
				duration: '4:18',
			},
			{
				img: './img/Rectangle-another4.png',
				name: 'Watin man go do - Burna',
				type: 'Single',
				duration: '4:18',
			},
			{
				img: './img/Rectangle-another4.png',
				name: 'Watin man go do - Burna',
				type: 'Single',
				duration: '4:18',
			},
			{
				img: './img/Rectangle-another4.png',
				name: 'Watin man go do - Burna',
				type: 'Single',
				duration: '4:18',
			},
		];
  return (
		<div className="py-12">
			{songs.map((song, i) => (
				<div className="bg-[rgb(51,55,59,0.37)] rounded-xl p-2 mb-4 grid items-center justify-stretch grid-cols-[repeat(4,max-content)] md:grid-areas-song-desktop grid-areas-song-mobile md:grid-cols-[repeat(7,max-content)]">
					<img src={song.img} alt="" className="grid-in-cover pr-2 md:pr-0" />
					{isDesktop && (
						<div className="w-[7rem] pl-4 grid-in-heart">
							<img src="./img/Heart-another.png" />
						</div>
					)}
					<div className="w-[14rem] grid-in-name ">{song.name}</div>
					<div className="md:w-[20rem] text-start md:text-center text-[0.6rem] md:text-[0.8rem] grid-in-type ">
						{song.type}
					</div>
					<div className="md:w-[20rem] text-center grid-in-duration">
						{song.duration}
					</div>
					<img
						src="./img/more-vertical.png"
						alt=""
						className="grid-in-select md:text-end"
					/>
				</div>
			))}
		</div>
	);
}
