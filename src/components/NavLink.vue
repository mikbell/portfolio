<template>
	<a
		:href="href"
		class="relative py-2 text-gray-600 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"><slot/></a>
</template>

<script setup>
	defineProps({
		href: String,
	});
</script>
