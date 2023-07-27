// window.addEventListener('load', () => {
	const form = document.querySelector('#form-container');
	const inputTask = document.querySelector('#input-task');
	const inputAmount = document.querySelector('#input-amount');
	const taskList = document.querySelector('#task-list');
	const totalSpent = document.querySelector('#total-spent');

	let total = 0;

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = inputTask.value;
		var amount = parseFloat(inputAmount.value);

		if(!task || isNaN(amount)){
			alert("Please complete the input");
			return;
		}

		const taskEl = document.createElement('div');
		taskEl.classList.add('task');

		const taskContent = document.createElement('div');
		taskContent.classList.add('content');

		// Task Input
		const inputTaskEl = document.createElement('input');
		inputTaskEl.classList.add('text');
		inputTaskEl.type = 'text';
		inputTaskEl.value = task;
		inputTaskEl.setAttribute('readonly', 'readonly');
		
		const editTaskButton = document.createElement('button');
		editTaskButton.classList.add('edit-task');
		editTaskButton.innerHTML = '<i class="fas fa-edit"></i>';

		const taskWrapper = document.createElement('div');
		taskWrapper.classList.add('task-wrapper');
		taskWrapper.append(inputTaskEl);
		taskWrapper.append(editTaskButton);

		// Amount Input
		const inputAmountEl = document.createElement('input');
		inputAmountEl.classList.add('number');
		inputAmountEl.type = 'number';
		inputAmountEl.value = amount;
		inputAmountEl.setAttribute('readonly', 'readonly');

		const editAmountButton = document.createElement('button');
		editAmountButton.classList.add('edit-amount');
		editAmountButton.innerHTML = '<i class="fas fa-edit"></i>';

		const pesoSignEl = document.createElement('span');
		pesoSignEl.textContent = '₱';

		const amountWrapper = document.createElement('div');
		amountWrapper.classList.add('amount-wrapper');
		amountWrapper.append(pesoSignEl);
		amountWrapper.append(inputAmountEl);
		amountWrapper.append(editAmountButton);

		// Actions
		const actions = document.createElement('div');
		actions.classList.add('actions');

		const deleteButton = document.createElement('button');
		deleteButton.classList.add('delete');
		deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

		taskContent.append(taskWrapper);
		taskContent.append(amountWrapper);
		taskEl.append(taskContent);
		taskList.append(taskEl);
		actions.append(deleteButton);
		taskEl.append(actions);

		inputTask.value = "";
		inputAmount.value = "";

		total += amount;
		totalSpent.textContent = 'Total Spent: ₱' + total.toFixed(2);

		editTaskButton.addEventListener('click', () => {
			if (editTaskButton.innerHTML.toLowerCase().includes('edit')) {
				inputTaskEl.removeAttribute('readonly');
				inputTaskEl.focus();
				editTaskButton.innerHTML = '<i class="fas fa-check-square"></i>';
			} else {
				inputTaskEl.setAttribute('readonly', 'readonly');
				editTaskButton.innerHTML = '<i class="fas fa-edit"></i>';
			}
		});

		editAmountButton.addEventListener('click', () => {
			if (editAmountButton.innerHTML.toLowerCase().includes('edit')) {
				inputAmountEl.removeAttribute('readonly');
				inputAmountEl.focus();
				editAmountButton.innerHTML = '<i class="fas fa-check-square"></i>';
			} else {
				inputAmountEl.setAttribute('readonly', 'readonly');
				editAmountButton.innerHTML = '<i class="fas fa-edit"></i>';
			}
		});

		deleteButton.addEventListener('click', () =>{
			taskEl.remove();
			total -= amount;
			totalSpent.textContent = 'Total Spent: ₱' + total.toFixed(2);
		});
	})	
// });