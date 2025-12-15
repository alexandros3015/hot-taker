import { Flame, Book, ThumbsDown, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

function TakeImage({ src }: { src?: string }) {
	if (!src) return null;
	// TODO: Make the formatting work better. Do som experimenting and figure out what works best. PLEASE
	else if (src !== '') {
		return (
			<div className="relative mb-4 h-36 w-1/2 overflow-hidden rounded-lg">
				<Image
					src={src}
					alt="image"
					fill
					sizes="(max-width: 768px) 100vw, 40vw"
					quality={90}
					className="object-cover"
				/>
			</div>
		);
	}
}

export default function Home() {
	const hotTakes = [
		{
			id: 0,
			title: 'Trains',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/WAB_BDhe_4-4_115_Kleine_Scheidegg_-_Wengernalp.jpg/500px-WAB_BDhe_4-4_115_Kleine_Scheidegg_-_Wengernalp.jpg',
			author: 'sid',
			text: 'Trains are cool',
			agree: 999,
			disagree: 0,
			spice_level: 0.5
		},
		{
			id: 1,
			title: 'Math',
			image: '',
			author: 'Sparsha',
			text: '1+1=2',
			agree: 5,
			disagree: 2,
			spice_level: 0.75
		},
		{
			id: 2,
			title: 'Photography',
			image: 'https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5adf77af6eabcc00190b75b6/6075185986d092000b192d0a/files/best-free-travel-images-main-image-hd-op.webp',
			author: 'Alex',
			text: 'This person is cool!',
			agree: 10,
			disagree: 0,
      spice_level: 0,
		},
		{
			id: 3,
			title: 'Someone',
			image: '',
			author: 'EJ',
			text: '[CENSORED] is an unkind person and we shouldn\'t add him to goofsaken',
			agree: 30,
			disagree: 10,
			spice_level: 1,
		},
	];

	return (
		<ul>
			{hotTakes.map((value) => (
				<li
					className="bg-foreground mb-4 flex w-full flex-col space-y-4 rounded-3xl p-2.5 shadow-lg"
					key={value.id}
				>
				  <div className="text-xl font-bold">
						{value.title}
					</div>
					<div className="flex gap-4">
						<TakeImage src={value.image} />
						<div className="flex flex-col justify-center space-y-1 text-sm">
							<div className="flex items-center gap-1">
								<Book size={18} />
								<strong>Author: </strong>
								{value.author}
							</div>
							<div className="flex items-center gap-1">
								<Flame size={18} />
								<strong>Spice Level: </strong>
								{value.spice_level}
							</div>
							<div className="flex items-center gap-1">
								<ThumbsUp size={18} />
								<strong>Agrees: </strong>
								{value.agree}
							</div>
							<div className="flex items-center gap-1">
								<ThumbsDown size={18} />
								<strong>Disagrees: </strong>
								{value.disagree}
							</div>
						</div>
					</div>

					<div className="rounded-lg bg-gray-700 p-4">
						<p>{value.text}</p>
					</div>
				</li>
			))}
		</ul>
	);
}
