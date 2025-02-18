<template>
	<h2
		ref="title"
		:class="{
			'opacity-0 translate-y-10': !visible,
			'opacity-100 translate-y-0 transition-all duration-1000 ease-out': visible,
		}"
		class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
	>
		<slot />
	</h2>
</template>

<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const title = ref(null);
const visible = ref(false);

useIntersectionObserver(title, ([{ isIntersecting }]) => {
	if (isIntersecting) visible.value = true;
});
</script>
