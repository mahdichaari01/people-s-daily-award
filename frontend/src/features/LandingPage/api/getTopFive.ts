export const getTopFive = async () => {
	const response = await fetch('http://localhost:3000/api/top-five');
	const data = await response.json();
	return data;
};

interface nomination {
	id: number;
	name: string;
	img: string;
	rank: number;
}

type topFive = nomination[];

const FakegetTopFive = async () => {
	const data: topFive = [
		{
			id: 1,
			name: 'Bill Gates',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/220px-Bill_Gates_2017_%28cropped%29.jpg',
			rank: 1,
		},
		{
			id: 2,
			name: 'Jeff Bezos',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jeff_Bezos_2016.jpg/220px-Jeff_Bezos_2016.jpg',
			rank: 2,
		},
		{
			id: 3,
			name: 'Elon Musk',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg',
			rank: 3,
		},
		{
			id: 4,
			name: 'Mark Zuckerberg',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Mark_Zuckerberg_F8_2019_Keynote_%2847826618372%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2847826618372%29_%28cropped%29.jpg',
			rank: 4,
		},
		{
			id: 5,
			name: 'Warren Buffett',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Warren_Buffett_KU_Visit.jpg/220px-Warren_Buffett_KU_Visit.jpg',
			rank: 5,
		},
	];
	return data;
};

export { FakegetTopFive };
