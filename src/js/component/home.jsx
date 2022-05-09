import React from "react";

//include images into your bundle
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Home() {
	let nameRef = useRef(null);
	const [task, setTask] = useState([]);

	//ENTER//
	const AddTask = (e) => {
		if (e.key == "Enter" && nameRef.value !== "") {
			setTask(task.concat(nameRef.value));
			nameRef.value = "";
		}
	};

	// BUTTON//
	const AddTaskButton = () => {
		if (nameRef.value !== "") setTask(task.concat(nameRef.value));
		nameRef.value = "";
	};

	//DELETE TASK//

	const DeleteTask = (index) => {
		task.splice(index, 1);
		setTask([...task]);
	};

	return (
		<div className="container">
			<div className="card mt-5">
				<div className="card-body">
					<h5 className="card-title text-center">TODO </h5>
					<ul className="list-group list-group-flush">
						<div className="input-group mb-3 list-group list-group-flush">
							<input
								onKeyUp={AddTask}
								ref={(r) => (nameRef = r)}
								type="text"
								id="input"
								className="list-group-item"
								placeholder="Enter your new task "
							/>
							<div className="d-grid gap-2 col-6 mx-auto mt-2 input-group-append list-group list-group-flush">
								<button
									type="button"
									className="btn btn-outline-primary"
									onClick={AddTaskButton}
									id="button">
									(+) Add Task
								</button>
							</div>
						</div>
						{!!task.length > 0 &&
							task.map((valor, index) => {
								return (
									<li
										className="list-group-item d-flex justify-content-between"
										key={index}>
										{valor}
										<button
											className="btn btn-danger"
											onClick={() => DeleteTask(index)}>
											<FontAwesomeIcon
												icon={faTrashCan}
											/>
										</button>
									</li>
								);
							})}
					</ul>
				</div>
				<div className="card-footer text-muted">
					Items Left {task.length}
				</div>
			</div>
		</div>
	);
}
export default Home;
