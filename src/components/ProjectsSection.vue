<template>
	<section class="py-20" id="progetti">
		<div class="max-w-7xl mx-auto px-4">
			<Heading2>Progetti</Heading2>
			<div class="grid md:grid-cols-2 gap-8">
				<ProjectCard
					v-for="project in projects"
					:key="project.title"
					:project />
			</div>
		</div>
	</section>
</template>

<script setup>
    import Heading2 from "./Heading2.vue";
    import ProjectCard from "./ProjectCard.vue";

    defineProps(["projects"]);
</script>
