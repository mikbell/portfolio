<template>
	<section class="py-20 bg-neutral-100" id="certificazioni">
		<div class="max-w-7xl mx-auto px-6 lg:px-8">
			<Heading2 class="text-center text-gray-800">Certificazioni</Heading2>

			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
				<a v-for="certification in certifications" :key="certification.id" :href="certification.url"
					target="_blank"
					class="rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105 fade-up"
					:style="`animation-delay: ${certification.id * 100}ms;`">
					<img :src="certification.image" alt="Certification image"
						class="object-cover w-full h-56 rounded-t-2xl" />
					<div class="p-6 flex flex-col items-center text-center">
						<h3 class="text-lg font-semibold text-gray-900">
							{{ certification.title }}
						</h3>
						<p class="mt-2 text-gray-600">
							{{ certification.organization }}
						</p>
						<span class="text-sm flex-1 font-medium text-indigo-600">
							{{ certification.year }}
						</span>
					</div>
				</a>
			</div>
		</div>
	</section>
</template>

<style scoped>
@keyframes fade-up {
	from {
		opacity: 0;
		transform: translateY(20px);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.fade-up {
	animation: fade-up 1s ease-out both;
}
</style>

<script setup>
import Heading2 from "./Heading2.vue";

defineProps(["certifications"]);
</script>
