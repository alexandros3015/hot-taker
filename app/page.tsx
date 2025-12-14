export default function Home() {
	const hotTakes = [
		{
			id: 0,
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHmdKasyaT82YB_ueWmd4xsvmz_FKavosqg&s',
			author: 'sid',
			text: 'Hear me out shes breedable!!!!',
			agree: 999,
			disagree: 0,
			spice_level: 0.5
		}
	];

	return (
		<ul>
			{hotTakes.map((value, index) => (
				<li className="bg-foreground flex h-64 w-full flex-col rounded-3xl p-2.5" key={value.id}>
					<img width={'100%'} src={value.image} alt={value.author} />
					<p>
						{value.author}, {value.text}, {value.spice_level}, {value.agree}, {value.disagree}
					</p>
				</li>
			))}
		</ul>
	);
}
