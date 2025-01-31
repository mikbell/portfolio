<template>
	<section class="py-20 bg-white" id="certificazioni">
		<div class="max-w-7xl mx-auto px-4">
			<Heading2>Certificazioni</Heading2>

			<div class="flex justify-around gap-8">
				<a
                    :href="certification.url"
                    target="_blank"
					v-for="certification in certifications"
					:key="certification.id"
					class="rounded-2xl bg-gray-50 shadow-lg transition-transform duration-500 hover:shadow-2xl hover:scale-105"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img
						:src="certification.image"
						alt="Certification image"
						class="object-cover w-full h-64 rounded-t-2xl" />
					<div class="p-8 flex flex-col items-center justify-center">
						<h3 class="text-xl font-semibold text-gray-800">
							{{ certification.title }}
						</h3>
						<p class="text-gray-600">{{ certification.organization }}</p>
						<p class="text-gray-600">{{ certification.year }}</p>
					</div>
				</a>
			</div>
		</div>
	</section>
</template>

<script setup>
	import Heading2 from "./Heading2.vue";
    
	defineProps(["certifications"]);
</script>
