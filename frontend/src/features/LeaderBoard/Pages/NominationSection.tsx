import { Container } from '../components/Container';
import { NominationBody } from '../components/NominationBody';
import { NominationFooter } from '../components/NominationFooter';
import { NominationHeader } from '../components/NominationHeader';
import { NominationLayout } from '../components/NominationLayout';

export const NominationSection = () => {
	return (
		<Container className="w-full h-fit sticky top-8 self-start">
			<NominationLayout>
				<NominationHeader
					img="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
					name="Sarrah Ben Halima"
					nominator="Adam Dey"
					next={() => {
						return;
					}}
					prev={() => {
						return;
					}}
				/>
				<NominationBody
					description="Laboris est in sit irure exercitation sit aliquip adipisicing. Ipsum id est ullamco labore. Deserunt reprehenderit ad ex consectetur ea cupidatat veniam. Velit dolore culpa consectetur aliqua velit anim cillum consectetur ad. Non non labore veniam labore."
					embed={`<iframe width="560" height="315" src="https://www.youtube.com/embed/OAK6JdfiqgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
				/>
				<NominationFooter />
			</NominationLayout>
		</Container>
	);
};
