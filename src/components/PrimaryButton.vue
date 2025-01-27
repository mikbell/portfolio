<template>
	<CustomButton
		class="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:transform hover:scale-105 border-2 border-gray-900 bg-gray-900 text-white hover:bg-gray-800">
		<slot />
	</CustomButton>
</template>

<script setup>
	import CustomButton from "./CustomButton.vue";
</script>
