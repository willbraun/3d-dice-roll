<script lang="ts">
	import { Three, useTexture } from '@threlte/core';
	import { AutoColliders } from '@threlte/rapier';
	import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three';

	const surface = useTexture('wood.jpeg');
</script>

<AutoColliders shape={'cuboid'} position={{ y: -0.5 }}>
	<Three type={new Mesh()} receiveShadow>
		<Three type={new BoxGeometry(40, 1, 40)} attach="geometry" />
		<Three type={new MeshStandardMaterial({ map: surface })} />
	</Three>
</AutoColliders>
