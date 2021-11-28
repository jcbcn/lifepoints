<script type="ts">
	import { modal, authToken } from '../authStore';

	import { onMount } from 'svelte';

	import TokenCheck from '$lib/TokenCheck.svelte';

	import { fetchRewards, labelCache, getLifepoints } from '../integrations/todoist/todoistService';

	import type { Task } from '../integrations/todoist/models/task';

	let promise = Promise.resolve<Task[]>([]);
	let rewards: Task[] = [];

	const showPopup = () => {
		if (!$authToken || $authToken == '') {
			modal.set(TokenCheck);
		}
	};

	async function init() {
		if (!$authToken) {
			showPopup();
			return;
		}

		promise = fetchRewards();
		promise.then((data) => {
			rewards = data;
		});
	}

	onMount(async () => {
		let tokenFromStorage = localStorage.getItem('authToken');
		if (tokenFromStorage) {
			$authToken = tokenFromStorage;
		}

		await init();

		authToken.subscribe(async () => {
			await init();
		});
	});
</script>

<div class="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
	<h1 class="text-2xl font-bold text-gray-900">Rewards</h1>
	<div class="py-6 mb-6">
		<div class="rounded-lg">
			{#await promise}
				<div class="w-full p-2 text-center">
					<span class="text-sm text-gray-300">Loading tasks...</span>
				</div>
			{:then data}
				{#each rewards as task}
					<div class="task-list-item w-full border-b-2 border-gray-200 px-2 py-3 hover:bg-gray-50">
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
				<p>Failed to retrieve rewards!</p>
			{/await}
			{#if rewards.length == 0}
				<div class="w-full p-2 text-center">
					<span class="text-sm text-gray-300">You don't have any rewards</span>
				</div>
			{/if}
		</div>
	</div>
</div>
