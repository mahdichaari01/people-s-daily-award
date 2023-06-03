import { Button } from '../../../components';
import { Greeting } from '../components/Greeting';
import { FixedColumn, FluidColumn, Layout } from '../components/Layout';
import { Image } from '@chakra-ui/react';
import guyinlove from '../../../assets/guyinlove.png';
import yesterdayswinners from '../../../assets/yesterdayswinners.png';
import { FirstPlaceCard } from '../components/FirstPlaceCard';
import { RegularCard } from '../components/RegularCard';
export const HomePagePreview = () => {
	return (
		<Layout>
			<FluidColumn className="p-16 flex flex-col justify-start items-start gap-8">
				<Greeting />
				<div className="flex flex-row gap-3">
					<Button paddingX={'1.8125rem'} bg={'#1F6CB4'}>
						Your Account
					</Button>
					<Button paddingX={'1.8125rem'} bg={'#327CC0'}>
						Nominate
					</Button>
					<Button paddingX={'1.8125rem'} bg={'#3892E5'}>
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
			<FixedColumn className="max-h-screen flex flex-row py-10 px-7">
				<Image
					src={yesterdayswinners}
					alt="yesterdayswinners"
					objectFit={'contain'}
				/>
				<div className="h-full w-full flex flex-col justify-between items-center gap-5">
					<div className="font-bold text-white">
						Click on each card to learn more
					</div>
					<div className="w-fit grid grid-cols-[repeat(2,min-content)] gap-6">
						<FirstPlaceCard
							name={'John One'}
							img={'https://bit.ly/dan-abramov'}
							className="col-span-2 w-full"
						/>
						<RegularCard
							rank={2}
							name={'John Doe'}
							img={'https://bit.ly/dan-abramov'}
						/>
						<RegularCard
							rank={3}
							name={'John Two'}
							img={'https://bit.ly/dan-abramov'}
						/>
						<RegularCard
							rank={4}
							name={'John Three'}
							img={'https://bit.ly/dan-abramov'}
						/>
						<RegularCard
							rank={5}
							name={'John Five'}
							img={'https://bit.ly/dan-abramov'}
						/>
					</div>
					<Button
						bg={'white'}
						textColor={'#42A4FF'}
						height={'2.2rem'}
						fontSize={'1rem'}
					>
						Full Leaderboard
					</Button>
				</div>
			</FixedColumn>
		</Layout>
	);
};
