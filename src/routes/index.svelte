<script lang="ts">
	import { points } from '../appStore';

	import { onMount } from 'svelte';

	import Modal from '$lib/Modal.svelte';

	import TokenCheck from '$lib/TokenCheck.svelte';

	import { modal, authToken } from '../authStore';

	import { fetchTasks, getLifepoints, labelCache, completeTask as serviceComplete } from '../integrations/todoist/todoistService';
	import type { Task } from '../integrations/todoist/models/task';

	const showPopup = () => {
		if (!$authToken || $authToken == '') {
			modal.set(TokenCheck);
		}
	};

	const today = new Date().toISOString().split('T')[0];

	let promise = Promise.resolve<Task[]>([]);
	let tasks: Task[] = [];

	$: todaysTasks = tasks.filter((t) => t.due.date == today);
	$: overdueTasks = tasks.filter((t) => t.due.date != today);

	function completeTask(task: Task) {
		serviceComplete(task);
		//task.done = true;
		//tasks = tasks.filter((t) => !t.done);
		//$points += labelCache[task.label_ids[0]];
	}

	onMount(async () => {
		$authToken = localStorage.getItem('authToken');
		showPopup();
		promise = fetchTasks();
		promise.then((data) => {
			tasks = data;
		});

		$points = await getLifepoints();
	});
</script>

<svelte:head>
	<title>{$points} Lifepoints</title>
</svelte:head>

<Modal show={$modal} />

<div class="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
	<h1 class="text-2xl font-bold text-gray-900">Today</h1>
	<div class="py-6 mb-6">
		<div class="rounded-lg">
			{#await promise}
				<div class="w-full p-2 text-center">
					<span class="text-sm text-gray-300">Loading tasks...</span>
				</div>
			{:then data}
				{#each todaysTasks as task}
					<div
						class="task-list-item w-full border-b-2 border-gray-200 px-2 py-3 hover:bg-gray-50"
						on:click={() => completeTask(task)}
					>
						<div class="radio-button-container mr-2">
							<div class="radio-button" />
						</div>
						{task.content}
						{#each task.label_ids as labelId}
							<span
								class="float-right inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>{labelCache[labelId]} LP</span
							>
						{/each}
					</div>
				{/each}
			{:catch error}
				<p>Failed to retrieve tasks!</p>
			{/await}
			{#if todaysTasks.length == 0}
				<div class="w-full p-2 text-center">
					<span class="text-sm text-gray-300">You don't have any tasks</span>
				</div>
			{/if}
		</div>
	</div>
	<h1 class="text-2xl font-bold text-gray-900">Overdue</h1>
	<div class="py-6 mb-6">
		{#await promise}
			<div class="w-full p-2 text-center">
				<span class="text-sm text-gray-300">Loading tasks...</span>
			</div>
		{:then data}
			{#each overdueTasks as task}
				<div
					class="task-list-item w-full border-b-2 border-gray-200 px-2 py-3 hover:bg-gray-50"
					on:click={() => completeTask(task)}
				>
					<div class="radio-button-container mr-2">
						<div class="radio-button" />
					</div>
					{task.content}
					{#each task.label_ids as labelId}
						<span
							class="float-right inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
							>{labelCache[labelId]} LP</span
						>
					{/each}
				</div>
			{/each}
		{:catch error}
			<p>Failed to retrieve tasks!</p>
		{/await}
		{#if overdueTasks.length == 0}
			<div class="w-full p-2 text-center">
				<span class="text-sm text-gray-300">You don't have any upcoming tasks</span>
			</div>
		{/if}
	</div>
	<h1 class="text-2xl font-bold text-gray-900">Upcoming</h1>
	<div class="px-4 py-6 sm:px-0">
		<div class="w-full p-2 text-center">
			<span class="text-sm text-gray-300">You don't have any upcoming tasks</span>
		</div>
	</div>
</div>

<style type="text/less">
	.radio-button-container {
		display: inline-block;
	}

	.radio-button {
		display: block;
		width: 1em;
		height: 1em;
		border-radius: 50%;
		border: 0.1em solid currentColor;
	}

	.task-list-item:hover .radio-button {
		background-color: lightgray;
	}
</style>
