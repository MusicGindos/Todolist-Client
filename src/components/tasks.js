import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

class Tasks extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	tasksList: []
	    };
  	}

  	componentDidMount() { // Before Render
	    axios.get(`http://localhost:4000/getAllTasks`)
	        .then(res => {
	          this.setState({ 
	            tasksList: res.data
	           });
	          this.addJSEvents();
        });
  	}

  	addJSEvents(){
 		$('.delete-button').on('click', function(e){
	    	var parentTR = $(e.target).closest('tr'); // Go up in tree
	    	var taskID = $(parentTR).data('task-id');
	    	$.get("http://localhost:4000/deleteTask/" + taskID, function(data, status){
				if(data.status === "success"){
					$(parentTR).remove();
				}else{
					//Error
				}
			});
	    });

    	$('.edit-button').on('click', function(e){
	    	var parentTR = $(e.target).closest('tr'); // Go up in tree
	    	$(parentTR).removeClass('no-edit');
	    });
  	}


	render(){
		var tasksList = this.state.tasksList;
		return( 
			<div>
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>Task Name</th>
							<th>Asignee  </th>
							<th>Day  </th>
							<th>Hour  </th>
							<th>DueDate  </th>
							<th>Comments</th>
							<th>Actions</th>
						</tr>
					</thead> 
					<tbody>
						{tasksList.map(task => (
							<tr className="no-edit" data-task-id={task._id}>
								<td><input type="text" defaultValue={task.taskName} /></td>
								<td><input type="text" defaultValue={task.assignee} /></td>
								<td><input type="text" defaultValue={task.day}		 /></td>
								<td><input type="text" defaultValue={task.hour}	 /></td>
								<td><input type="text" defaultValue={task.dueDate.substring(0,10)}  /></td>
								<td><input type="text" defaultValue={task.comments} /></td>
								<td>
									<div className="btn-group mr-2">
										<button className="btn btn-success save-button">Save</button>
									</div>
									<div className="btn-group mr-2">
										<button className="btn btn-primary edit-button">Edit</button>
									</div>
									<div className="btn-group">
										<button className="btn btn-danger delete-button">Delete</button>
									</div>
								</td>
							</tr>
							))}
					</tbody>
				</table>
			</div>
			)
	}
}

export default Tasks;