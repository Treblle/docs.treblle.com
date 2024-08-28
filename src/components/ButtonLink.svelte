<script lang="ts">
	import clsx from 'clsx';

	let className: string | undefined;
  let href: string;
  let title: string;
	export { className as class };
</script>

<a
  href={href}
  title={title}
	{...$$restProps}
	class={clsx(
		'relative inline-flex h-fit w-fit rounded-full border border-violet-100/20 bg-violet-200/10 px-4 py-2 text-violet-200 outline-none ring-orange-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-orange-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-orange-200/40 hover:text-orange-300 after:hover:bg-opacity-15 focus:ring-2',
		className
	)}
>
	<slot />
</a>