<script>
    import { getContext } from 'svelte';
	import { authToken } from '../authStore';

    const { close } = getContext('simple-modal');

    function onClose(){
        localStorage.setItem('authToken', $authToken);
        close();
    }
</script>

<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
	<div class="sm:flex sm:items-start">
		<div
			class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10"
		>
			<!-- Heroicon name: outline/exclamation -->
			<svg
				class="h-6 w-6 text-yellow-600"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/>
			</svg>
		</div>
		<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
			<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
				Please enter your Todoist API token
			</h3>
			<div class="mt-2">
				<p class="mb-2">
					Lifepoints cannot function without it. You can edit or remove it later from the settings
					menu.
				</p>
				<div class="col-span-6 sm:col-span-3">
					<input
                        bind:value={$authToken}
						type="text"
						name="first_name"
						id="first_name"
						autocomplete="given-name"
						class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
					/>
				</div>
				<div class="mt-1">
					<p class="text-sm float-right">
						<span class="text-gray-500">Read our </span><a
							target="_blank"
							href="https://raw.githubusercontent.com/jcbcn/lifepoints/main/PRIVACY"
							>privacy statement</a
						>
					</p>
					<p class="text-sm float-left">
						<a href="">Where can I find it?</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
	<button
        on:click={onClose}
		disabled={$authToken == ''}
		type="button"
		class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
	>
		Save
	</button>
</div>
