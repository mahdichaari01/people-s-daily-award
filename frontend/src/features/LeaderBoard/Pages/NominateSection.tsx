import { useState } from 'react';
import { Container } from '../components/Container';
import { NominateHeader } from '../components/NominateHeader';
import { NominationLayout } from '../components/NominationLayout';
import { NominateBody } from '../components/NominateBody';
import { NominateFooter } from '../components/NominateFooter';
import { createNomination } from '../api/createNomination';

export const NominateSection = () => {
	const [name, setName] = useState('');
	const [img, setImg] = useState('');
	const [embed, setEmbed] = useState(DEFAULT_EMBED);
	const [description, setDescription] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	return (
		<>
			{error && <div>{error}</div>}
			<Container className="w-full h-fit sticky top-8 self-start">
				<NominationLayout>
					<NominateHeader
						img={img}
						onImgChange={setImg}
						name={name}
						onNameChange={setName}
						nominator="Adam Dey"
					/>
					<NominateBody
						embed={embed}
						onEmbedChange={setEmbed}
						description={description}
						onDescriptionChange={setDescription}
					/>
					<NominateFooter
						reset={() => {
							setName('');
							setImg('');
							setEmbed(DEFAULT_EMBED);
							setDescription('');
						}}
						submit={() => {
							setIsLoading(true);
							setError(null);
							createNomination({
								nomineeName: name,
								imageLink: img,
								embed,
								reason: description,
							})
								.then((res) => {
									setIsLoading(false);
									console.log(res);
								})
								.catch((err) => {
									setIsLoading(false);
									setError(err);
								});
						}}
					/>
				</NominationLayout>
			</Container>
		</>
	);
};

const DEFAULT_EMBED = `<iframe width="560" height="315" src="https://www.youtube.com/embed/O9UByLyOjBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
