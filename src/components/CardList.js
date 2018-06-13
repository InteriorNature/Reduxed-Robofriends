import React from 'react';
import Card from '../components/Card';
/*robots accepted as props to Cardlist*/
const Cardlist = ( {robots} ) => {
	return (
		<div>
			{
				robots.map((user,i) => {
					return (
					<Card 
						key={robots[i].id} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email} 
					/>
					)
				})
			}
		</div>
	);
}

export default Cardlist;