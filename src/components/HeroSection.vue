<template>
	<section class="min-h-screen flex items-center justify-center px-4 pt-20 fade-in" id="hero">
		<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
			<!-- Immagine Profilo -->
			<div class="w-64 h-64 md:w-96 md:h-96 relative zoom-in delay-300">
				<div
					class="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-600 rounded-full transform -rotate-6">
				</div>
				<img :src="profileImage" alt="Profile"
					class="absolute inset-0 w-full h-full object-cover rounded-full transform rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-105" />
			</div>

			<!-- Testo -->
			<div class="text-center md:text-left space-y-6 fade-up delay-500">
				<h1
					class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
					Michele Campanello
				</h1>
				<p class="text-2xl md:text-3xl text-gray-600 font-light">
					Full-Stack Web Developer
				</p>
				<div class="flex flex-wrap gap-4 justify-center md:justify-start fade-up delay-600">
					<SecondaryButton as="a" href="/CV.pdf" download>
						Scarica il CV
					</SecondaryButton>

					<PrimaryButton as="a" href="#contatti"> Contattami </PrimaryButton>
				</div>
				<div class="flex gap-6 justify-center md:justify-start pt-4 fade-up delay-700">
					<a v-for="(link, index) in socialLinks" :key="index" :href="link.url"
						class="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"
						target="_blank" rel="noopener noreferrer">
						<component :is="link.icon" class="w-7 h-7" />
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import SecondaryButton from "./SecondaryButton.vue";
import PrimaryButton from "./PrimaryButton.vue";

// Props
defineProps(["socialLinks", "profileImage"]);
</script>