<template>
	<div
        v-for="category in categories"
		class="p-8 rounded-2xl bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
		data-aos="fade-up"
		data-aos-delay="200"
		data-aos-duration="800">
		<h3
			class="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-200 pb-2"
			data-aos="fade-right"
			data-aos-delay="300"
			data-aos-duration="1000">
			{{ category.title }}
		</h3>
		<div class="grid grid-cols-2 md:grid-cols-3 gap-6">
			<div
				v-for="(skill, skillIndex) in category.items"
				:key="skill.name"
				class="flex items-center gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
				data-aos="zoom-in"
				:style="{ animationDelay: `${skillIndex * 100}ms` }"
				:data-aos-delay="skillIndex * 100"
				data-aos-duration="600">
				<div
					class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
					<BadgeCheck class="w-6 h-6 text-gray-700" />
				</div>
				<div>
					<h4 class="font-semibold text-gray-800">{{ skill.name }}</h4>
					<p class="text-sm text-gray-600">{{ skill.level }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { BadgeCheck } from "lucide-vue-next";
	import AOS from "aos";
	import "aos/dist/aos.css";
	import { onMounted } from "vue";

	const props = defineProps({
		category: Object,
		categoryIndex: Number,
	});

	// Inizializzazione di AOS
	onMounted(() => {
		AOS.init();
	});
</script>
