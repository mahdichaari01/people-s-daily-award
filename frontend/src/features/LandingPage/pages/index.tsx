import { Button } from '../../../components';
import { Greeting } from '../components/Greeting';
import { FixedColumn, FluidColumn, Layout } from '../components/Layout';
import { Image } from '@chakra-ui/react';
import guyinlove from '../../../assets/guyinlove.png';
import yesterdayswinners from '../../../assets/yesterdayswinners.png';
import { FirstPlaceCard } from '../components/FirstPlaceCard';
import { RegularCard } from '../components/RegularCard';
import { useEffect, useState } from 'react';
import { getYesterdaysTopFive } from '../api/getTopFive';
import { NominationEntity } from 'types';
import { useNavigate } from 'react-router-dom';
export const HomePagePreview = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState<NominationEntity[] | null>(null);
	const [firstRender, setFirstRender] = useState(true);
	const navigate = useNavigate();
	useEffect(() => {
		if (firstRender) {
			setFirstRender(false);
			getYesterdaysTopFive()
				.then((res) => {
					setIsLoading(false);
					setData(res);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err);
				});
		}
	}, []);
	return (
		<Layout>
			<FluidColumn className="p-16 flex flex-col justify-start items-start gap-8">
				<Greeting />
				<div className="flex flex-row gap-3">
					<Button
						paddingX={'1.8125rem'}
						bg={'#1F6CB4'}
						onClick={() => navigate('/user')}
					>
						Your Account
					</Button>
					<Button
						paddingX={'1.8125rem'}
						bg={'#327CC0'}
						onClick={() => navigate('/leaderboard/today/nominate')}
					>
						Nominate
					</Button>
					<Button
						paddingX={'1.8125rem'}
						bg={'#3892E5'}
						onClick={() => navigate('/leaderboard/today')}
					>
						Vote
					</Button>
				</div>
				<div className="text-white">
					<h2 className="font-extrabold text-[2.6875rem]">Stll Confused?</h2>
					<p className="lead">
						The concept is simple yet powerful - anyone can nominate an
						individual who has done something good, and people can vote for
						their favorite act of kindness. Each day, we send an email
						certification to the nominated person to acknowledge their efforts
						and inspire them to continue doing good.
					</p>
				</div>
				<div className="text-white">
					<Image src={guyinlove} alt="guyinlove" float={'right'} />
					<h2 className="font-extrabold text-[2.6875rem]">
						Donate to our cause
					</h2>
					<p className="lead">
						At the moment this is a school project so we don’t need funding but
						in the future we may need some donations to keep the servers running
					</p>
				</div>
				<div>
					<div className="font-black text-5xl text-[#3895EB]">
						WORK IN PROGRESS
					</div>
					<div className="font-black text-5xl text-[#3895EB]">
						TO BE CONTINUED
					</div>
					<div className="font-black text-5xl text-[#3895EB]">
						WORK IN PROGRESS
					</div>
					<div className="font-black text-5xl text-[#3895EB]">
						TO BE CONTINUED
					</div>
					<div className="font-black text-5xl text-[#3895EB]">
						WORK IN PROGRESS
					</div>
					<div className="font-black text-5xl text-[#3895EB]">
						TO BE CONTINUED
					</div>
				</div>
			</FluidColumn>
			<FixedColumn className="max-h-screen flex flex-row items-center py-10 px-28 justify-evenly gap-24">
				<Image
					src={yesterdayswinners}
					alt="yesterdayswinners"
					objectFit={'contain'}
					height={'90vh'}
				/>
				<div className="h-fit w-fit flex flex-col justify-between items-center gap-5">
					<div className="font-bold text-white">
						Click on each card to learn more
					</div>
					<div className="w-fit grid grid-cols-[repeat(2,min-content)] gap-6">
						<FirstPlaceCard
							img={data ? data[0].imageLink : 'https://bit.ly/dan-abramov'}
							name={data ? data[0].nomineeName : 'John Doe'}
							className="col-span-2 w-full"
						/>
						{data?.slice(1).map((item, index) => (
							<RegularCard
								rank={index + 2}
								name={item.nomineeName}
								img={item.imageLink}
							/>
						))}
					</div>
					<Button
						bg={'white'}
						textColor={'#42A4FF'}
						height={'2.2rem'}
						fontSize={'1rem'}
						onClick={() => navigate('/leaderboard/today')}
					>
						Full Leaderboard
					</Button>
				</div>
			</FixedColumn>
		</Layout>
	);
};
