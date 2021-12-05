<script>
	import { getLifepoints, incrementLifepoints } from '../integrations/todoist/todoistService';

	import { getContext } from 'svelte';

    import { points } from '../appStore';

	const { close } = getContext('simple-modal');

	export let pointCost = 0;

	const rollDice = () => {
		let min = Math.ceil(1);
		let max = Math.floor(6);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const spendPoints = async () => {
		await incrementLifepoints(-pointCost);
		close();
        $points = await getLifepoints();
	};
</script>

<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
	<div class="sm:flex sm:items-start">
		<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
			<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Redeem Reward</h3>
			<div class="mt-2">
				<p class="text-sm text-gray-500">
					You have two attempts at rolling the following number on a dice to successfully get your
					reward.
				</p>
			</div>
			<div
				class="mx-auto flex-shrink-0 flex content-center items-center justify-center h-12 w-12 rounded-full bg-green-100 m-4"
			>
				<h1 class="text-lg leading-6 font-medium text-gray-900">{rollDice()}</h1>
			</div>
			<div class="mt-2">
				<p class="text-sm text-gray-500">
					Are you sure you want to redeem this reward? You should redeem this reward regardless of
					the outcome of the dice rolls.
				</p>
			</div>
		</div>
	</div>
</div>
<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
	<button
		on:click={() => spendPoints()}
		type="button"
		class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
	>
		Redeem (Cost: {pointCost})
	</button>
	<button
		on:click={() => close()}
		type="button"
		class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
	>
		Cancel
	</button>
</div>
