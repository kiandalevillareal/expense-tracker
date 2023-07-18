window.addEventListener('load', () => {
	const main = document.querySelector('#main-container');
	const inputTask = document.querySelector('#input-task');
	const taskList = document.querySelector('#task-list');

	main.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = inputTask.value;

		if(!task){
			alert("Please input a task");
			return;
		}

		const taskEl = document.createElement('div');
		taskEl.classList.add('task');

		const taskContent = document.createElement('div');
		taskContent.classList.add('content');

		const inputEl = document.createElement('input');
		inputEl.classList.add('text');
		inputEl.type = 'text';
		inputEl.value = task;
		inputEl.setAttribute('readonly', 'readonly');
		
		const actions = document.createElement('div');
		actions.classList.add('actions');

		const editButton = document.createElement('button');
		editButton.classList.add('edit');
		editButton.innerHTML = 'Edit';

		const deleteButton = document.createElement('button');
		deleteButton.classList.add('delete');
		deleteButton.innerHTML = 'Delete';

		taskContent.append(inputEl);
		taskEl.append(taskContent);
		taskList.append(taskEl);
		actions.append(editButton);
		actions.append(deleteButton);
		taskEl.append(actions);

		inputTask.value = "";

		editButton.addEventListener('click', ()=>{
			if(editButton.innerText.toLowerCase() === 'edit'){
				inputEl.removeAttribute('readonly');
				inputEl.focus();
				editButton.innerText = 'Save';
			}
			else{
				inputEl.setAttribute('readonly', 'readonly');
				editButton.innerText = 'Edit';
			}
		});

		deleteButton.addEventListener('click', () =>{
			taskEl.remove();
		});
	})	
});