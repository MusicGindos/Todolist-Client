import React from 'react';

class Task extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<table>
				<thead>
					<tr>
						<th>Task Name</th>
						<th>Asignee  </th>
					</tr>
				</thead>
				<tbody>
					<tr>
						{taskList.map(task => (
							<td>{task.name}</td>
							<td>{task.asignee}</td>
						))}
					</tr>
				</tbody>
			</table>


			
			)
	}
}

export default Task;