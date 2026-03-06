<script>
	import { marked } from 'marked';
	let { data } = $props();
	console.log(data);
</script>

<div>
	{@html marked(data.content)}
</div>
