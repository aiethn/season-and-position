import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
	winter: {
		text: "MUSIM DINGIN!",
		iconName: 'snowflake'
	},
	summer: {
		text: "MUSIM PANAS!",
		iconName: 'sun'
	}
};

const getSeason = (lat,month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};


const SeasonDisplay = (props) => {
	
	const season = getSeason(props.lat, new Date().getMonth());
	const {text,iconName} = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive disabled ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive disabled ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;