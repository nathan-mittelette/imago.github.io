<script lang="ts">
	import { fade } from 'svelte/transition';
	import { type Fonctionality } from '$lib/models/fonctionality.model';

	export let fonctionality: Fonctionality;
</script>

<div class="mb-8 w-full px-4 md:w-1/3" in:fade>
	<div class="h-full rounded-lg bg-white p-6 shadow-lg">
		<h3 class="mb-2 text-2xl font-semibold text-primary-dark">{fonctionality.title}</h3>
		<p class="text-primary-dark-text">
			{fonctionality.description}
		</p>
	</div>
</div>
