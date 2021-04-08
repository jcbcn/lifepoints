<script lang="ts">
	import { count } from '../appStore';

	import TokenModal from '$lib/TokenModal.svelte'

	let toggle;

	function setToggle() {
		toggle = !toggle;
	}
</script>

<svelte:head>
	<title>{$count} Lifepoints</title>
</svelte:head>

<TokenModal/>

<main>
	<div>
		<div class="sticky top-0">
			<nav class="bg-gray-800">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="flex items-center justify-between h-16">
						<div class="flex items-center">
							<div class="flex-shrink-0">
								<img
									class="h-8 w-8"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
									alt="Workflow"
								/>
							</div>
							<div class="hidden md:block">
								<div class="ml-10 flex items-baseline space-x-4">
									<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
									<a
										href="#"
										class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Tasks</a
									>

									<a
										href="#"
										class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
										>Rewards</a
									>
								</div>
							</div>
						</div>
						<div class="hidden md:block">
							<div class="ml-4 flex items-center md:ml-6">
								<!-- Profile dropdown -->
								<div class="ml-3 relative">
									<div>
										<button
											type="button"
											class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
											id="user-menu"
											aria-expanded="false"
											aria-haspopup="true"
										>
											<span class="sr-only">Open user menu</span>
											<img
												class="h-8 w-8 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</button>
									</div>

									<!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
									{#if toggle}
										<div
											class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="user-menu"
										>
											<a
												href="#"
												class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem">Your Todoist</a
											>

											<a
												href="#"
												class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem">Settings</a
											>

											<a
												href="#"
												class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem">Sign out</a
											>
										</div>
									{/if}
								</div>
							</div>
						</div>
						<div class="-mr-2 flex md:hidden">
							<!-- Mobile menu button -->
							<button
								type="button"
								on:click={setToggle}
								class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span class="sr-only">Open main menu</span>
								<!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
								<svg
									class="block h-6 w-6"
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
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
								<!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
								<svg
									class="hidden h-6 w-6"
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
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
							<button
								type="button"
								on:click={setToggle}
								class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span class="sr-only">Open main menu</span>
								<!--
            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 block"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				{#if toggle}
					<!-- Mobile menu, show/hide based on menu state. -->
					<div class="md:hidden" id="mobile-menu">
						<div class="pt-4 pb-3 border-t border-gray-700">
							<div class="flex items-center px-5">
								<div class="flex-shrink-0">
									<img
										class="h-10 w-10 rounded-full"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</div>
								<div class="ml-3">
									<div class="text-base font-medium leading-none text-white">Bob Smith</div>
									<div class="text-sm font-medium leading-none text-gray-400">bob@example.com</div>
								</div>
							</div>
							<div class="mt-3 px-2 space-y-1">
								<a
									href="#"
									class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
									>Settings</a
								>

								<a
									href="#"
									class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
									>Sign out</a
								>
							</div>
						</div>
					</div>
				{/if}
			</nav>
			<header class="bg-white shadow">
				<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 class="text-3xl font-bold text-gray-900">Tasks</h1>
				</div>
			</header>
		</div>
		<main>
			<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
				<!-- Replace with your content -->
				<h1 class="text-2xl font-bold text-gray-900">Today</h1>
				<div class="px-4 py-6 sm:px-0">
					<div class="border-4 border-dashed border-gray-200 rounded-lg h-24">
						<!-- {#await taskPromise}
							<p>Loading tasks...</p>
						{:then data}
							{#each data as task}
								<p>{task.content}</p>
								{#each task.label_ids as labelId}
									<span
										class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
										>{labelCache[labelId]}</span
									>
								{/each}
							{/each}
						{:catch error}
							<p>Failed to retrieve tasks!</p>
						{/await} -->
					</div>
				</div>
				<h1 class="text-2xl font-bold text-gray-900">Overdue</h1>
				<div class="px-4 py-6 sm:px-0">
					<div class="border-4 border-dashed border-gray-200 rounded-lg h-48" />
				</div>
				<!-- /End replace -->
			</div>
		</main>
	</div>
</main>
