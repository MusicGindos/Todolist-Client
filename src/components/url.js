import React from 'react';
import Text from './text';

class URL extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<a href={this.props.url}>
				<Text text={this.props.name} />
			</a>
			)
	}
}

export default URL;