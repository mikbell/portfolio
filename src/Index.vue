<template>
	<AppLayout>
		<!-- Hero Section -->
		<HeroSection :socialLinks :profileImage />

		<!-- Presentazione -->
		<PresentationSection />

		<!-- Skills Section with Stagger Animation -->
		<SkillsSection :skills />

		<!-- Skills Section with Stagger Animation -->
		<CertificationsSection :certifications />

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
	import webDeveloperImage from "./assets/web-developer.jpeg";
	import conversationImage from "./assets/conversation.jpeg";
	import dataWeekImage from "./assets/data-week.jpeg";
	import HeroSection from "./components/HeroSection.vue";
	import SkillsSection from "./components/SkillsSection.vue";
	import ProjectsSection from "./components/ProjectsSection.vue";
	import ContactSection from "./components/ContactSection.vue";
	import PresentationSection from "./components/PresentationSection.vue";
	import CertificationsSection from "./components/CertificationsSection.vue";

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
				{ name: "Bootstrap", level: "Intermedio" },
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

	const certifications = [
		{
			title: "Corso Full-Stack Web Developer",
			image: webDeveloperImage,
			organization: "Aulab",
			year: "2022 - 2023",
			url: "https://www.credential.net/3100b468-94b2-4fb9-b6f4-c8b98235613b#acc.Nv8UWPmh",
		},
		{
			title: "Corso Conversation e Prompt Design",
			image: conversationImage,
			organization: "Aulab",
			year: "2024 - 2025",
			url: "https://www.credential.net/b69dcdac-b57f-4ed3-a3b8-f22e63b96573#acc.Sh0kPovI",
		},
		{
			title: "Data Week",
			image: dataWeekImage,
			organization: "Boolean",
			year: "2024 - 2024",
			url: "https://boolean.careers/accredit/dw5-certificate?first_name=Michele&last_name=Campanello&email=campanellomichele@outlook.it&utm_source=drip&utm_medium=email&utm_campaign=%5BData+Week%5D+Attestato+%28split+test%29&utm_content=Attestato+Data+Week+5",
		},
	];

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
