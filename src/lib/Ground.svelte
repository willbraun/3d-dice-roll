<script lang="ts">
  import { Mesh } from '@threlte/core'
  import { AutoColliders } from '@threlte/rapier'
  import { BoxGeometry, MeshStandardMaterial } from 'three'
</script>

<AutoColliders shape={'cuboid'} mass={100} position={{ y: -0.5 }}>
  <Mesh
    receiveShadow
    geometry={new BoxGeometry(10, 1, 10)}
		material={new MeshStandardMaterial()}
  />
</AutoColliders>