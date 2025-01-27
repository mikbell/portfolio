<template>
	<button v-if="as === 'button'"><slot /></button>
	<a v-else-if="as === 'a'"><slot /></a>
</template>

<script setup>
defineProps({
	as: {
		type: String,
		required: true,
		validator: (value) => ['button', 'a'].includes(value), // Accetta solo "button" o "a"
	},
});
</script>
