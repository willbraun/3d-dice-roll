<script lang="ts">
	import { Mesh } from '@threlte/core';
	import { AutoColliders } from '@threlte/rapier';
	import { BoxGeometry, MeshStandardMaterial } from 'three';
</script>

<AutoColliders shape={'cuboid'} position={{ y: -0.5 }}>
	<Mesh receiveShadow geometry={new BoxGeometry(30, 1, 30)} material={new MeshStandardMaterial()} />
</AutoColliders>
