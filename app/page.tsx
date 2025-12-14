import { Flame, Book, ThumbsDown, ThumbsUp } from 'lucide-react';

export default function Home() {
	const hotTakes = [
		{
			id: 0,
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/WAB_BDhe_4-4_115_Kleine_Scheidegg_-_Wengernalp.jpg/500px-WAB_BDhe_4-4_115_Kleine_Scheidegg_-_Wengernalp.jpg',
			author: 'sid',
			text: 'Trains are cool',
			agree: 999,
			disagree: 0,
			spice_level: 0.5
		}
	];

	return (
		<ul>
			{hotTakes.map((value, index) => (
				<li className="bg-foreground flex w-full flex-col rounded-3xl p-2.5 shadow-lg space-y-4" key={value.id}>
					<div className="flex gap-4">  					
              <img src={value.image} alt="image" className="w-2/5 object-cover mb-4 rounded-lg" />
              
              <div className="space-y-1 text-sm flex flex-col justify-center">
                <div className="flex items-center gap-1"><Book size={18} /><strong>Author: </strong>{value.author}</div>
                <div className="flex items-center gap-1"><Flame size={18} /><strong>Spice Level: </strong>{value.spice_level}</div>
                <div className="flex items-center gap-1"><ThumbsUp size={18} /><strong>Agrees: </strong>{value.agree}</div>
                <div className="flex items-center gap-1"><ThumbsDown size={18} /><strong>Disagrees: </strong>{value.disagree}</div>
              </div>
  					</div>
  					
  					<div className="p-4 bg-gray-700 rounded-lg">
              <p>{value.text}</p>
  					</div>
				</li>
			))}
		</ul>
	);
}
