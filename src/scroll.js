import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ overflow: 'scroll', border: '1 px solid black', height: '700px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;