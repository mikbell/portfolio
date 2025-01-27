<template>
	<div
		class="p-8 rounded-2xl bg-gray-50 transform transition-all duration-500"
		:style="{ animationDelay: `${categoryIndex * 200}ms` }"
		v-scroll-reveal="{
			origin: 'left',
			distance: '50px',
			duration: 800,
			delay: categoryIndex * 200,
		}">
		<h3 class="text-2xl font-bold text-gray-900 mb-8">
			{{ category.title }}
		</h3>
		<div class="grid grid-cols-2 gap-6">
			<div
				v-for="(skill, skillIndex) in category.items"
				:key="skill.name"
				class="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
				:style="{ animationDelay: `${skillIndex * 100}ms` }"
				v-scroll-reveal="{
					origin: 'bottom',
					distance: '20px',
					duration: 600,
					delay: skillIndex * 100,
				}">
				<BadgeCheck class="w-5 h-5 text-gray-600 animate-bounce-subtle" />
				<div>
					<h4 class="font-medium text-gray-900">{{ skill.name }}</h4>
					<p class="text-sm text-gray-600">{{ skill.level }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { BadgeCheck } from "lucide-vue-next";

	const props = defineProps({
		category: Object,
		categoryIndex: Number,
	});
</script>
