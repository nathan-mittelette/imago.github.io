<script lang="ts">
	import { base } from '$app/paths';
</script>

<section id="telechargement" class="bg-secondary py-20">
	<div class="container mx-auto px-6">
		<h2 class="mb-12 text-center text-4xl font-bold text-primary-dark">Téléchargez Imago</h2>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div class="text-center grayscale">
				<h3 class="mb-4 text-2xl font-semibold text-primary-dark">Version Windows</h3>
				<p class="mb-6 text-primary-dark-text">
					Téléchargez Imago pour Windows. Optimisé pour une compatibilité maximale.
				</p>
				<a
					target="_blank"
					href="#top"
					class="inline-flex items-center rounded-full bg-primary-dark px-7 py-4 text-center font-semibold text-white transition duration-300 hover:bg-tertiary"
				>
					<img
						alt="Windows Logo"
						src="{base}/windows.svg"
						width="50"
						height="50"
						class="mr-2 size-6 invert filter"
					/>
					<span>Télécharger Windows</span>
				</a>
			</div>

			<div>
				<h3 class="mb-4 text-center text-2xl font-semibold text-primary-dark">Version MacOS</h3>
				<p class="mb-6 text-center text-primary-dark-text">
					Disponible pour MacOS avec support pour M1 et Intel.
				</p>
				<div class="flex flex-wrap items-center justify-center">
					<a
						target="_blank"
						href="#top"
						class="m-2 inline-flex items-center rounded-full bg-primary-dark px-7 py-4 text-center font-semibold text-white transition duration-300 hover:bg-tertiary"
						><img
							alt="MacOS Logo"
							src="{base}/macos.svg"
							width="50"
							height="50"
							class="mr-2 size-6 invert filter"
						/>
						<span>Télécharger MacOS M1</span>
					</a>
					<a
						target="_blank"
						href="#top"
						class="m-2 inline-flex items-center rounded-full bg-primary-dark px-7 py-4 text-center font-semibold text-white transition duration-300 hover:bg-tertiary"
						><img
							alt="MacOS Logo"
							src="{base}/macos.svg"
							width="50"
							height="50"
							class="mr-2 size-6 invert filter"
						/>
						<span> Télécharger MacOS Intel </span>
					</a>
				</div>
			</div>
		</div>

		<div class="mt-12 text-center">
			<enhanced:img
				src="/static/screenshot.png"
				alt="Capture d'écran Imago"
				class="mx-auto rounded-lg shadow-lg"
			/>
		</div>
	</div>
</section>
