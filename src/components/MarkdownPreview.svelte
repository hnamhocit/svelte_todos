<script lang="ts">
	import remarkGfm from 'remark-gfm';
	import remarkParse from 'remark-parse';
	import { unified } from 'unified';

	import rehypeHighlight from 'rehype-highlight';
	import rehypeStringify from 'rehype-stringify';
	import remarkRehype from 'remark-rehype';

	import 'highlight.js/styles/github.css';

	let { markdown, class: className }: { markdown: string; class?: string } = $props();

	let htmlContent = $state('');

	async function processMarkdown() {
		const processor = unified()
			.use(remarkParse) // Parse Markdown
			.use(remarkGfm) // Add GitHub Flavored Markdown features
			.use(remarkRehype) // Convert Markdown AST to HTML AST
			.use(rehypeHighlight) // Highlight code blocks
			.use(rehypeStringify); // Convert HTML AST to HTML string

		const file = await processor.process(markdown);
		htmlContent = String(file);
	}

	$effect(() => {
		processMarkdown();
	});
</script>

<div class={`prose ${className}`} contenteditable="false" bind:innerHTML={htmlContent}></div>
