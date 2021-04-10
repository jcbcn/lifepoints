<script lang="ts">
	import TailwindCss from '$lib/Tailwind.svelte';

  import { points } from '../appStore';

	import { clearLocalStorage } from '../integrations/todoist/todoistService';

	let toggle;

	function setToggle() {
		toggle = !toggle;
	}
</script>

<TailwindCss />

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
						</div>
						<div class="hidden md:block">
							<div class="ml-4 flex items-center md:ml-6">
								<!-- Profile dropdown -->
								<div class="ml-3 relative">
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
						</div>
					</div>
				</div>

				{#if toggle}
					<div class="md:hidden" id="mobile-menu">
						<div class="pt-3 pb-3 border-t border-gray-700">
							<div class="mt-3 px-2 space-y-1">
								<a
									on:click={clearLocalStorage}
									href="#"
									class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
									>Clear Auth Token</a
								>
							</div>
						</div>
					</div>
				{/if}
			</nav>
			<header class="bg-white shadow">
				<div class="max-w-7xl mx-auto">
					<!-- <div>
						<h1 class="text-3xl font-bold text-gray-900">Tasks</h1>
					</div>
					<div>
						<h1 class="text-3xl font-bold text-gray-900">Rewards</h1>
					</div> -->

					<nav class="flex flex-row">
						<button
							class="flex-none text-xl text-gray-900 py-3 px-4 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
						>
							Tasks
						</button>
						<button
							class="flex-none text-xl text-gray-900 py-3 px-4 block hover:text-blue-500 focus:outline-none"
						>
							Rewards
						</button>
						<div class="flex-grow text-xl text-center py-3 px-4 text-right">
							<span
								class="bg-purple-600 rounded-full px-3 py-1 font-semibold text-gray-50"
								>{$points}P</span
							>
						</div>
					</nav>
				</div>
			</header>
		</div>
	</div>
	<main>
		<slot />
	</main>
</main>
