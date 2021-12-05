<script type="ts">
	import { modal, authToken } from '../authStore';

	import { onMount } from 'svelte';

	import TokenCheck from '$lib/TokenCheck.svelte';

	import {
		fetchRewards,
		labelCache,
		getPointsForTask,
		getLifepoints
	} from '../integrations/todoist/todoistService';

	import type { Task } from '../integrations/todoist/models/task';

	import Roll from '$lib/Roll.svelte';

	import Modal from '$lib/Modal.svelte';

	import { points } from '../appStore';

	let promise = Promise.resolve<Task[]>([]);
	let rewards: Task[] = [];

	const showPopup = () => {
		if (!$authToken || $authToken == '') {
			modal.set(TokenCheck);
		}
	};

	//TODO move to helper
	function bind(Component, props = {}) {
		return function ModalComponent(options) {
			return new Component({
				...options,
				props: {
					...props,
					...options.props
				}
			});
		};
	}

	async function init() {
		$modal = null;
		
		if (!$authToken) {
			showPopup();
			return;
		}

		$points = await getLifepoints();

		promise = fetchRewards();
		promise.then((data) => {
			rewards = data;
		});
	}

	const roll = (task: Task) => {
		var points = getPointsForTask(task);
		modal.set(bind(Roll, { pointCost: points }));
	};

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

<Modal show={$modal} />

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
					<div
						class="task-list-item w-full border-b-2 border-gray-200 px-2 py-3 hover:bg-gray-50"
						on:click={() => roll(task)}
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
