<script lang="ts">
	import { count } from '../appStore';

	import { onMount } from 'svelte';

	import Modal from '$lib/Modal.svelte';

	import TokenCheck from '$lib/TokenCheck.svelte';

	import { modal, authToken } from '../authStore';

	import { fetchTasks } from '../integrations/todoist/todoistService';
	import type { Task } from '../integrations/todoist/models/task';

	const showPopup = () => {
		if (!$authToken || $authToken == '') {
			modal.set(TokenCheck);
		}
	};

	const labelCache = {
		2156538858: '1P'
	};

	let promise = Promise.resolve<Task[]>([]);

	onMount(async () => {
		$authToken = localStorage.getItem('authToken');
		showPopup();
		promise = fetchTasks();
	});
</script>

<svelte:head>
	<title>{$count} Lifepoints</title>
</svelte:head>

<Modal show={$modal} />

<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
	<h1 class="text-2xl font-bold text-gray-900">Today</h1>
	<div class="px-4 py-6 sm:px-0 mb-6">
		<div class="rounded-lg h-24">
			{#await promise}
				<p>Loading tasks...</p>
			{:then data}
				{#each data as task}
					<div class="w-full border-b-2 border-gray-200 p-2">
						{task.content}
						{#each task.label_ids as labelId}
							<span
								class="float-right inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>{labelCache[labelId]}</span
							>
						{/each}
					</div>
				{/each}
			{:catch error}
				<p>Failed to retrieve tasks!</p>
			{/await}
		</div>
	</div>
	<h1 class="text-2xl font-bold text-gray-900">Overdue</h1>
	<div class="px-4 py-6 sm:px-0">
		<div class="w-full p-2 text-center">
			<span class="text-sm text-gray-300">You don't have any overdue tasks.</span>
		</div>
	</div>
</div>
