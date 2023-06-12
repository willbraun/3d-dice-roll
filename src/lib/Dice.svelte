<script lang="ts">
	import { derived } from 'svelte/store';
	import type { Mesh as ThreeMesh } from 'three';
	import { Mesh } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { AutoColliders, RigidBody } from '@threlte/rapier';

	const { gltf } = useGltf('/dice.glb');

	const diceMeshes = derived(gltf, (gltf) => {
		if (!gltf) return;
		const meshes: ThreeMesh[] = Object.values(gltf.nodes).filter((value) => value.type === 'Mesh');
		return meshes;
	});
</script>

{#if $diceMeshes}
	<RigidBody type={'dynamic'} position={{ y: 5 }}>
		<AutoColliders shape={'cuboid'}>
			{#each $diceMeshes as diceMesh}
				<Mesh castShadow geometry={diceMesh.geometry} material={diceMesh.material} />
			{/each}
		</AutoColliders>
	</RigidBody>
{/if}
