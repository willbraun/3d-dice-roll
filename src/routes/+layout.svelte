<div class="scene">
	<slot />
</div>

<style>
	.scene {
		width: 100%;
		height: 100%;
		position: absolute;
		inset: 0;
		background: radial-gradient(circle, #444, #222);
		background-attachment: fixed;
	}
</style>