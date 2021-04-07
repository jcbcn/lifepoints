<script lang="ts" context="module">
	import { authToken } from '../authStore';

	export async function load({ page, fetch, session, context }) {
        sessionStorage.setItem('authToken', page.query.get('code'));

		return {
			redirect: '/',
			status: 303,
			context: context
		};
	}
</script>
