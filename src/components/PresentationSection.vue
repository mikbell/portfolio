<template>
	<section class="py-20 bg-white" id="presentazione">
		<div
			ref="section"
			:class="{
				'opacity-0 translate-y-10': !visible,
				'opacity-100 translate-y-0 transition-all duration-1000 ease-out': visible,
			}"
			class="max-w-7xl mx-auto px-4"
		>
			<Heading2>Presentazione</Heading2>
			<p class="text-lg text-gray-700 transition-transform duration-500 hover:scale-105">
				Sono un ragazzo curioso ed affamato di conoscenza. Sono amante della
				musica, del cinema e della tecnologia a 360°. Precisione, attenzione ai
				dettagli e passione per il coding mi permettono di offrire soluzioni
				innovative e personalizzate. Nonostante la mia naturale riservatezza,
				lavoro con impegno e professionalità sia in team che in autonomia,
				garantendo risultati di alta qualità e rispettando le scadenze.
			</p>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import Heading2 from "./Heading2.vue";

const section = ref(null);
const visible = ref(false);

useIntersectionObserver(section, ([{ isIntersecting }]) => {
	if (isIntersecting) visible.value = true;
});
</script>
