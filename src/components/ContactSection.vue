<template>
	<section
		class="py-20 bg-white"
		id="contatti"
		data-aos="fade-up"
		data-aos-duration="1000">
		<div class="max-w-7xl mx-auto px-4">
			<Heading2>Contatti</Heading2>
			<div
				class="max-w-2xl mx-auto"
				data-aos="zoom-in"
				data-aos-delay="200"
				data-aos-duration="1000">
				<div
					class="flex flex-col gap-6 items-center p-8 rounded-2xl bg-gray-50 shadow-lg transition-transform duration-500 hover:shadow-2xl hover:scale-105">
					<a
						href="mailto:campanellomichele@outlook.it"
						class="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
						<Mail class="w-6 h-6" />
						<span>campanellomichele@outlook.it</span>
					</a>
					<div class="flex gap-6" data-aos="fade-up" data-aos-delay="300">
						<a
							v-for="(link, index) in socialLinks"
							:key="index"
							:href="link.url"
							class="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"
							target="_blank"
							rel="noopener noreferrer">
							<component :is="link.icon" class="w-6 h-6" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import Heading2 from "./Heading2.vue";
	import { Mail } from "lucide-vue-next";

	// Props
	defineProps(["socialLinks"]);
</script>

<style>
	/* Aggiunta di animazioni su hover */
	.hover\:scale-105:hover {
		transform: scale(1.05);
	}
</style>
