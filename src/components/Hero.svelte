<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	import Bounded from './Bounded.svelte';
	import ButtonLink from './ButtonLink.svelte';
	import TriangleGrid from './TriangleGrid.svelte';

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

		if (prefersReducedMotion) {
			gsap.set('.hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow', {
				opacity: 1
			});

			return;
		}

		const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

		tl.fromTo('.hero__heading', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.4 });
		tl.fromTo('.hero__body', { y: 20 }, { y: 0, opacity: 1, duration: 1.2 }, '-=0.6');
		tl.fromTo('.hero__button', { scale: 1.5 }, { scale: 1, opacity: 1, duration: 1.3 }, '-=0.8');
		tl.fromTo('.hero__image', { y: 100 }, { y: 0, opacity: 1, duration: 1.3 }, '+=0.3');
		tl.fromTo('.hero__glow', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.8 }, '-=1');

		gsap.to('.hero__glow--one', {
			ease: 'power2.inOut',
			repeat: -1,
			repeatDelay: 0,
			keyframes: [
				{ top: '0%', left: '33%', duration: 0 },
				{ top: '33%', left: '33%', duration: 2 },
				{ top: '33%', left: '0%', duration: 3 },
				{ top: '0%', left: '0%', duration: 2 },
				{ top: '0%', left: '33%', duration: 3 }
			]
		});

		gsap.to('.hero__glow--two', {
			ease: 'power2.inOut',
			repeat: -1,
			repeatDelay: 0,
			keyframes: [
				{ top: '33%', left: '0%', duration: 0 },
				{ top: '0%', left: '0%', duration: 2 },
				{ top: '0%', left: '33%', duration: 3 },
				{ top: '33%', left: '33%', duration: 2 },
				{ top: '33%', left: '0%', duration: 3 }
			]
		});
	});

	export let heading: string;
	export let body: string;
	export let link: string;
	export let label: string;
	export let image: string;
	export let alt: string;
</script>

<Bounded class="w-full">
	<div class="relative text-center">
		<TriangleGrid />

			<h1
				class="hero__heading mx-auto max-w-3xl text-balance text-5xl font-medium opacity-0 md:text-7xl"
			>
				{heading}
			</h1>
			<p class="hero__body mx-auto mt-6 max-w-md text-balance opacity-0">
				{body}
			</p>
			<ButtonLink class="hero__button mt-8 opacity-0 no-underline" href={link} title={label}>
				{label}
			</ButtonLink>
			<div class="hero__image glass-container mt-16 w-fit opacity-0">
				<div
					class="hero__glow hero__glow--one absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-violet-700/50 opacity-0 mix-blend-screen blur-3xl filter md:blur-[120px] before:absolute before:-inset-[10px] before:-z-10 before:rounded-xl before:border before:border-gray-100/20 before:bg-gray-200/10 before:backdrop-blur-md"
				/>
				<div
					class="hero__glow hero__glow--two absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 bg-orange-600/50 opacity-0 mix-blend-screen blur-3xl filter md:blur-[120px] before:absolute before:-inset-[10px] before:-z-10 before:rounded-xl before:border before:border-gray-100/20 before:bg-gray-200/10 before:backdrop-blur-md"
				/>

				<img
					class="rounded-lg"
					src={image}
					alt={alt}
				/>
			</div>
	</div>
</Bounded>
