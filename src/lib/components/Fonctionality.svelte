<script lang="ts">
	import { type Fonctionality } from '$lib/models/fonctionality.model';
	import FonctionalityItem from './FonctionalityItem.svelte';

	const fonctionalities: Fonctionality[] = [
		{
			title: "Redimensionnement d'Images",
			description:
				"Ajustez vos images pour qu'elles s'adaptent parfaitement à votre contenu, sans perte de qualité."
		},
		{
			title: 'Conversion Multi-formats',
			description:
				"Convertissez vos images dans des formats populaires comme WebP, PNG, JPEG et bien d'autres."
		},
		{
			title: 'Interface Simple et Design',
			description:
				'Une interface intuitive et moderne qui facilite la conversion et le redimensionnement.'
		}
	];
</script>

<section id="fonctionnalites" class="py-20">
	<div class="container mx-auto px-6">
		<h2 class="mb-12 text-center text-4xl font-bold text-primary-dark">Fonctionnalités Clés</h2>
		<div class="flex flex-wrap justify-center">
			{#each fonctionalities as fonctionality}
				<FonctionalityItem {fonctionality} />
			{/each}
		</div>
	</div>
</section>
