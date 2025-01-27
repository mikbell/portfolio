<template>
	<div class="min-h-screen bg-gray-50">
		<!-- Navigation Desktop -->
		<nav
			class="hidden md:flex justify-between items-center h-20 max-w-7xl mx-auto px-8 fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
			<div
				class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
				Michele Campanello
			</div>
			<ul class="flex gap-8">
				<li v-for="item in navItems" :key="item">
					<NavLink :href="`#${item.toLowerCase()}`">
						{{ item }}
					</NavLink>
				</li>
			</ul>
		</nav>

		<!-- Navigation Mobile -->
		<nav
			class="md:hidden flex justify-between items-center h-20 px-6 fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
			<div
				class="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
				MC
			</div>
			<div class="relative">
				<button @click="isMenuOpen = !isMenuOpen" class="p-2">
					<Menu class="w-6 h-6" />
				</button>
				<div
					v-show="isMenuOpen"
					class="absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg py-2 mt-2">
					<a
						v-for="item in navItems"
						:key="item"
						:href="`#${item.toLowerCase()}`"
						class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
						@click="isMenuOpen = false">
						{{ item }}
					</a>
				</div>
			</div>
		</nav>

		<slot />

		<!-- Footer -->
		<footer class="py-8 bg-gray-900 text-white">
			<div class="max-w-7xl mx-auto px-4">
				<div
					class="flex flex-col md:flex-row justify-between items-center gap-4">
					<p class="text-gray-400">
						© {{ new Date().getFullYear() }} Michele Campanello. All rights
						reserved.
					</p>
					<ul class="flex gap-6">
						<li v-for="item in navItems" :key="item">
							<a
								:href="`#${item.toLowerCase()}`"
								class="text-gray-400 hover:text-white transition-colors">
								{{ item }}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import { Menu } from "lucide-vue-next";
	import NavLink from "../components/NavLink.vue";
	const navItems = ["Presentazione", "Competenze", "Progetti", "Contatti"];

	const isMenuOpen = ref(false);
</script>

<style>
	body {
		font-family: "Poppins", sans-serif;
	}

	html {
		scroll-behavior: smooth;
	}
</style>
