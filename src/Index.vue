<template>
	<AppLayout>
		<!-- Hero Section -->
		<HeroSection :socialLinks :profileImage />

		<!-- Presentazione -->
		<PresentationSection />

		<!-- Skills Section with Stagger Animation -->
		<SkillsSection :skills />

		<!-- Projects Section with Hover Effects -->
		<ProjectsSection :projects />

		<!-- Contact Section -->
		<ContactSection :socialLinks />
	</AppLayout>
</template>

<script setup>
	import AppLayout from "./layouts/AppLayout.vue";
	import { Linkedin, Github } from "lucide-vue-next";
	import profileImage from "./assets/profile.jpg";
	import cineLabImage from "./assets/cinelab.png";
	import gameSpaceImage from "./assets/gamespace.png";
	import HeroSection from "./components/HeroSection.vue";
	import SkillsSection from "./components/SkillsSection.vue";
	import ProjectsSection from "./components/ProjectsSection.vue";
	import ContactSection from "./components/ContactSection.vue";
	import PresentationSection from "./components/PresentationSection.vue";

	const socialLinks = [
		{
			icon: Linkedin,
			url: "https://www.linkedin.com/in/michele-campanello-82365325a/",
		},
		{
			icon: Github,
			url: "https://github.com/mikbell",
		},
	];

	const skills = {
		frontend: {
			title: "Frontend",
			items: [
				{ name: "HTML", level: "Avanzato" },
				{ name: "CSS", level: "Intermedio" },
				{ name: "JavaScript", level: "Base" },
				{ name: "Vue.js", level: "Intermedio" },
				{ name: "Tailwind CSS", level: "Intermedio" },
				{ name: "Bootstrap CSS", level: "Intermedio" },
			],
		},
		backend: {
			title: "Backend",
			items: [
				{ name: "PHP", level: "Base" },
				{ name: "Laravel", level: "Intermedio" },
				{ name: "MySQL", level: "Intermedio" },
			],
		},
	};

	const projects = [
		{
			title: "CineLab",
			description:
				"Progetto dedicato alla ricerca di film e serie TV. Include anche un forum in cui è possibile registrarsi, creare post e commenti",
			image: cineLabImage,
			links: [
				{
					text: "Github",
					url: "https://github.com/mikbell/cinelab",
					primary: false,
				},
				{
					text: "Live Demo",
					url: "https://cinelab.progettoprova.it",
					primary: true,
				},
			],
		},
		{
			title: "GameSpace",
			description:
				"Progetto dedicato alla ricerca di videogiochi con rispettive valutazioni. È possiblie registrarsi e creare commenti.",
			image: gameSpaceImage,
			links: [
				{
					text: "Github",
					url: "https://github.com/mikbell/gamespace",
					primary: false,
				},
				{
					text: "Live Demo",
					url: "https://gamespace.progettoprova.it",
					primary: true,
				},
			],
		},
	];
</script>
