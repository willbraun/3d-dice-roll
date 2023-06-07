<script lang="ts">
  // import { GLTF } from '@threlte/extras'
  import { Object3D } from 'three'
  import { Three, Object3DInstance } from '@threlte/core'
  import { useGltf } from '@threlte/extras'
  import { AutoColliders, RigidBody } from '@threlte/rapier'

  const { gltf } = useGltf('/dice.glb')
</script>

<RigidBody type={'dynamic'} position={{ y: 5 }}>
  <AutoColliders shape={'cuboid'} mass={15}>
    {#if $gltf}
      <Object3DInstance castShadow object={$gltf.nodes['Root']} />
    {/if}
    <!-- <GLTF castShadow url={'/dice.glb'} /> -->
  </AutoColliders>
</RigidBody>