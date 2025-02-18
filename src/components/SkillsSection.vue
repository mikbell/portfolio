<template>
	<!-- Skills Section with CSS Animations -->
	<section class="py-20 bg-white" id="competenze">
		<div class="max-w-7xl mx-auto px-4">
			<Heading2>Competenze</Heading2>
			<div class="grid md:grid-cols-2 gap-8">
				<!-- Skills Categories -->
				<div v-for="(category, categoryIndex) in skills" :key="categoryIndex"
					class="p-8 rounded-2xl bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 shadow-lg transform scale-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl fade-up"
					:style="`animation-delay: ${categoryIndex * 200}ms;`">
					<h3 class="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-200 pb-2 fade-right"
						:style="`animation-delay: ${categoryIndex * 200 + 100}ms;`">
						{{ category.title }}
					</h3>
					<!-- Skills Items -->
					<div class="grid grid-cols-2 md:grid-cols-3 gap-6">
						<div v-for="(skill, skillIndex) in category.items" :key="skill.name"
							class="flex items-center gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 zoom-in"
							:style="`animation-delay: ${categoryIndex * 200 + skillIndex * 100}ms;`">
							<div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
								<BadgeCheck class="w-6 h-6 text-gray-700" />
							</div>
							<div>
								<h4 class="font-semibold text-gray-800">{{ skill.name }}</h4>
								<p class="text-sm text-gray-600">{{ skill.level }}</p>
							</div>
						</div>
					</div>
				</div>
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

@keyframes fade-right {
	from {
		opacity: 0;
		transform: translateX(-20px);
	}

	to {
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes zoom-in {
	from {
		opacity: 0;
		transform: scale(0.9);
	}

	to {
		opacity: 1;
		transform: scale(1);
	}
}

.fade-up {
	animation: fade-up 0.8s ease-out both;
}

.fade-right {
	animation: fade-right 1s ease-out both;
}

.zoom-in {
	animation: zoom-in 0.6s ease-out both;
}
</style>

<script setup>
import Heading2 from "./Heading2.vue";
import { BadgeCheck } from "lucide-vue-next";
defineProps(["skills"]);
</script>