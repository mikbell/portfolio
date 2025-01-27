<template>
	<AppLayout>
		<!-- Hero Section -->
		<transition name="translate-fade" appear>
			<section
				class="min-h-screen flex items-center justify-center px-4 pt-20"
				id="hero">
				<div
					class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
					<div class="w-64 h-64 md:w-96 md:h-96 relative animate-float">
						<div
							class="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-600 rounded-full transform -rotate-6 animate-pulse"></div>
						<img
							:src="profileImage"
							alt="Profile"
							class="absolute inset-0 w-full h-full object-cover rounded-full transform rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-105" />
					</div>

					<div
						class="text-center md:text-left space-y-6"
						:class="{ 'animate-slideIn': isVisible }">
						<h1
							class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-gradient">
							Michele Campanello
						</h1>
						<p
							class="text-2xl md:text-3xl text-gray-600 font-light animate-fadeIn">
							Full-Stack Web Developer
						</p>
						<div class="flex flex-wrap gap-4 justify-center md:justify-start">
							<SecondaryButton
								as="a"
								href="/CV.pdf"
								download
								class="animate-bounce-subtle">
								Download CV
							</SecondaryButton>

							<PrimaryButton
								as="a"
								href="#contatti"
								class="animate-bounce-subtle delay-100">
								Contattami
							</PrimaryButton>
						</div>
						<div class="flex gap-6 justify-center md:justify-start pt-4">
							<a
								v-for="(link, index) in socialLinks"
								:key="index"
								:href="link.url"
								class="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"
								target="_blank"
								rel="noopener noreferrer">
								<component :is="link.icon" class="w-7 h-7" />
							</a>
						</div>
					</div>
				</div>
			</section>
		</transition>

		<!-- Presentazione -->
		<section class="py-20 bg-white" id="presentazione">
			<div class="max-w-7xl mx-auto px-4">
				<Title>Presentazione</Title>
				<p>
					Sono un ragazzo curioso ed affamato di conoscenza. Sono amante della
					musica, del cinema e della tecnologia a 360°. Precisione, attenzione
					ai dettagli e passione per il coding mi permettono di offrire
					soluzioni innovative e personalizzate. Nonostante la mia naturale
					riservatezza, lavoro con impegno e professionalità sia in team che in
					autonomia, garantendo risultati di alta qualità e rispettando le
					scadenze.
				</p>
			</div>
		</section>

		<!-- Skills Section with Stagger Animation -->
		<section class="py-20 bg-white" id="competenze">
			<div class="max-w-7xl mx-auto px-4">
				<Title>Competenze</Title>
				<div class="grid md:grid-cols-2 gap-8">
					<div
						v-for="(category, categoryIndex) in skills"
						:key="categoryIndex"
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
								<BadgeCheck
									class="w-5 h-5 text-gray-600 animate-bounce-subtle" />
								<div>
									<h4 class="font-medium text-gray-900">{{ skill.name }}</h4>
									<p class="text-sm text-gray-600">{{ skill.level }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Projects Section with Hover Effects -->
		<section class="py-20" id="progetti">
			<div class="max-w-7xl mx-auto px-4">
				<Title>Progetti</Title>
				<div class="grid md:grid-cols-2 gap-8">
					<div
						v-for="(project, index) in projects"
						:key="project.title"
						class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
						v-scroll-reveal="{
							origin: 'bottom',
							distance: '50px',
							duration: 800,
							delay: index * 200,
						}">
						<div class="relative overflow-hidden">
							<img
								:src="project.image"
								:alt="project.title"
								class="w-full aspect-video object-cover transition-all duration-500 group-hover:scale-110" />
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
						<div class="p-6 transform transition-transform duration-500">
							<h3 class="text-2xl font-bold text-gray-900 mb-4">
								{{ project.title }}
							</h3>
							<p class="text-gray-600 mb-6">{{ project.description }}</p>
							<div class="flex gap-4">
								<a
									v-for="link in project.links"
									:key="link.text"
									:href="link.url"
									target="_blank"
									class="px-6 py-2 rounded-full font-medium border-2 border-gray-900 transition-all duration-300 hover:scale-105"
									:class="
										link.primary
											? 'bg-gray-900 text-white hover:bg-gray-800'
											: 'bg-white text-gray-900 hover:bg-gray-100'
									">
									{{ link.text }}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Contact Section -->
		<section class="py-20 bg-white" id="contatti">
			<div class="max-w-7xl mx-auto px-4">
				<Title>Contatti</Title>
				<div class="max-w-2xl mx-auto">
					<div
						class="flex flex-col gap-6 items-center p-8 rounded-2xl bg-gray-50">
						<a
							href="mailto:campanellomichele@outlook.it"
							class="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
							<Mail class="w-6 h-6" />
							<span>campanellomichele@outlook.it</span>
						</a>
						<div class="flex gap-6">
							<a
								v-for="(link, index) in socialLinks"
								:key="index"
								:href="link.url"
								class="text-gray-600 hover:text-gray-900 transition-colors"
								target="_blank"
								rel="noopener noreferrer">
								<component :is="link.icon" class="w-6 h-6" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</AppLayout>
</template>

<script setup>
	import AppLayout from "./layouts/AppLayout.vue";
	import { BadgeCheck, Mail, Linkedin, Github } from "lucide-vue-next";
	import PrimaryButton from "./components/PrimaryButton.vue";
	import SecondaryButton from "./components/SecondaryButton.vue";
	import Title from "./components/Title.vue";
	import profileImage from "./assets/profile.jpg";
	import cineLabImage from "./assets/cinelab.png";
	import gameSpaceImage from "./assets/gamespace.png";
	import { ref, onMounted, onBeforeUnmount } from "vue";

	const isVisible = ref(true);
	const showPresentation = ref(false); // Stato per mostrare la sezione
	const presentationSection = ref(null); // Riferimento all'elemento DOM

	const handleIntersection = (entries) => {
		if (entries[0].isIntersecting) {
			showPresentation.value = true; // Attiva l'animazione
		}
	};

	let observer;

	onMounted(() => {
		// Crea un IntersectionObserver
		observer = new IntersectionObserver(handleIntersection, {
			root: null, // Viewport come root
			threshold: 0.1, // L'elemento deve essere visibile al 10%
		});

		if (presentationSection.value) {
			observer.observe(presentationSection.value);
		}
	});

	onBeforeUnmount(() => {
		// Disconnetti l'osservatore per evitare memory leaks
		if (observer && presentationSection.value) {
			observer.unobserve(presentationSection.value);
		}
	});

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
				{ name: "MySQL", level: "Intermedio" },
				{ name: "PHP", level: "Base" },
				{ name: "Laravel", level: "Intermedio" },
				{ name: "Git", level: "Intermedio" },
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

<style>
	/* Base animations */
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateX(-50px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes bounceSoft {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-5px);
		}
	}

	/* Animation classes */
	.animate-float {
		animation: float 6s ease-in-out infinite;
	}

	.animate-gradient {
		background-size: 200% 200%;
		animation: gradient 8s ease infinite;
	}

	.animate-slideIn {
		animation: slideIn 1s ease-out forwards;
	}

	.animate-fadeIn {
		animation: fadeIn 1s ease-out forwards;
	}

	.animate-bounce-subtle {
		animation: bounceSoft 2s ease-in-out infinite;
	}

	/* Delay utilities */
	.delay-100 {
		animation-delay: 100ms;
	}

	.delay-200 {
		animation-delay: 200ms;
	}

	/* Existing transitions */
	.translate-fade-enter-active,
	.translate-fade-leave-active {
		transition: opacity 0.5s, transform 0.5s;
	}

	.translate-fade-enter-from,
	.translate-fade-leave-to {
		opacity: 0;
		transform: translateY(20px);
	}
</style>
