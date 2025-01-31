<template>
	<section class="py-20" id="progetti">
		<div class="max-w-7xl mx-auto px-4">
			<Heading2>Progetti</Heading2>
			<div class="grid md:grid-cols-2 gap-8">
				<div
					v-for="(project, index) in projects"
					:key="project.title"
					class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
					data-aos="fade-up"
					:data-aos-delay="index * 100"
					data-aos-duration="800">
					<div class="relative overflow-hidden">
						<img
							:src="project.image"
							:alt="project.title"
							class="w-full aspect-video object-cover transition-all duration-500 group-hover:scale-110"
							style="will-change: transform" />
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</div>
					<div class="p-6 transform transition-transform duration-500">
						<h3
							class="text-2xl font-bold text-gray-900 mb-4"
							data-aos="fade-right"
							:data-aos-delay="index * 100 + 50"
							data-aos-duration="800">
							{{ project.title }}
						</h3>
						<p
							class="text-gray-600 mb-6"
							data-aos="fade-left"
							:data-aos-delay="index * 100 + 100"
							data-aos-duration="800">
							{{ project.description }}
						</p>
						<div
							class="flex gap-4"
							data-aos="fade-up"
							:data-aos-delay="index * 100 + 150">
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
</template>

<script setup>
	import Heading2 from "./Heading2.vue";
	defineProps(["projects"]);
</script>
