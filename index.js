window.addEventListener('load', () => {
	const main = document.querySelector('#main-container');
	const inputTask = document.querySelector('#input-task');
	const inputAmount = document.querySelector('#input-amount');
	const taskList = document.querySelector('#task-list');

	main.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = inputTask.value;
		const amount = inputAmount.value;

		if(!task || !amount){
			alert("Please complete the input");
			return;
		}

		// Task Input
		const taskEl = document.createElement('div');
		taskEl.classList.add('task');

		const taskContent = document.createElement('div');
		taskContent.classList.add('content');

		const inputTaskEl = document.createElement('input');
		inputTaskEl.classList.add('text');
		inputTaskEl.type = 'text';
		inputTaskEl.value = task;
		inputTaskEl.setAttribute('readonly', 'readonly');
		
		// Amount Input
		const inputAmountEl = document.createElement('input');
		inputAmountEl.classList.add('number');
		inputAmountEl.type = 'number';
		inputAmountEl.value = amount;
		inputAmountEl.setAttribute('readonly', 'readonly');

		const actions = document.createElement('div');
		actions.classList.add('actions');

		const editButton = document.createElement('button');
		editButton.classList.add('edit');
		editButton.innerHTML = '<i class="fas fa-edit"></i>';

		const deleteButton = document.createElement('button');
		deleteButton.classList.add('delete');
		deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

		const saveButton = document.createElement('button');
		saveButton.classList.add('save');
		saveButton.innerHTML = '<i class="fas fa-check-square"></i>';

		taskContent.append(inputTaskEl);
		taskContent.append(inputAmountEl);
		taskEl.append(taskContent);
		taskList.append(taskEl);
		actions.append(editButton);
		actions.append(deleteButton);
		taskEl.append(actions);

		inputTask.value = "";
		inputAmount.value = "";

		editButton.addEventListener('click', () => {
			if (editButton.innerHTML.toLowerCase().includes('edit')) {
				inputTaskEl.removeAttribute('readonly');
				inputTaskEl.focus();
				editButton.innerHTML = '<i class="fas fa-check-square"></i>';
			} else {
				inputTaskEl.setAttribute('readonly', 'readonly');
				editButton.innerHTML = '<i class="fas fa-edit"></i>';
			}
		});

		deleteButton.addEventListener('click', () =>{
			taskEl.remove();
		});
	})	
});