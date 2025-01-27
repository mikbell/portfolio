<template>
	<transition name="translate-fade" appear>
		<section
			class="min-h-screen flex items-center justify-center px-4 pt-20"
			id="hero"
			data-aos="fade-in"
			data-aos-duration="1000">
			<div
				class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
				<!-- Immagine Profilo -->
				<div
					class="w-64 h-64 md:w-96 md:h-96 relative animate-float"
					data-aos="zoom-in"
					data-aos-delay="300"
					data-aos-duration="1200">
					<div
						class="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-600 rounded-full transform -rotate-6 animate-pulse"></div>
					<img
						:src="profileImage"
						alt="Profile"
						class="absolute inset-0 w-full h-full object-cover rounded-full transform rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-105" />
				</div>

				<!-- Testo -->
				<div
					class="text-center md:text-left space-y-6"
					data-aos="fade-up"
					data-aos-delay="500"
					data-aos-duration="1000">
					<h1
						class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-gradient">
						Michele Campanello
					</h1>
					<p
						class="text-2xl md:text-3xl text-gray-600 font-light animate-fadeIn">
						Full-Stack Web Developer
					</p>
					<div
						class="flex flex-wrap gap-4 justify-center md:justify-start"
						data-aos="fade-up"
						data-aos-delay="600"
						data-aos-duration="1000">
						<SecondaryButton
							as="a"
							href="/CV.pdf"
							download
							class="animate-bounce-subtle">
							Scarica il CV
						</SecondaryButton>

						<PrimaryButton
							as="a"
							href="#contatti"
							class="animate-bounce-subtle delay-100">
							Contattami
						</PrimaryButton>
					</div>
					<div
						class="flex gap-6 justify-center md:justify-start pt-4"
						data-aos="fade-up"
						data-aos-delay="700"
						data-aos-duration="1000">
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
</template>

<script setup>
	import AOS from "aos";
	import "aos/dist/aos.css";
	import { onMounted } from "vue";
	import SecondaryButton from "./SecondaryButton.vue";
	import PrimaryButton from "./PrimaryButton.vue";

	// Props
	defineProps(["socialLinks", "profileImage"]);

	// Inizializzazione di AOS
	onMounted(() => {
		AOS.init();
	});
</script>

<style>
	/* Stili extra per animazioni */
	.animate-float {
		animation: float 3s infinite ease-in-out;
	}
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.animate-gradient {
		animation: gradient 3s linear infinite;
		background-size: 200% 200%;
	}
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 100% 50%;
		}
	}
</style>
