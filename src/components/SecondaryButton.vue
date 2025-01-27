<template>
	<CustomButton
		class="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:transform hover:scale-105 border-2 border-gray-900 bg-white text-gray-900 hover:bg-gray-100">
		<slot />
	</CustomButton>
</template>

<script setup>
	import CustomButton from "./CustomButton.vue";
</script>
