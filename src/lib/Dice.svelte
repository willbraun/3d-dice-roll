<script lang="ts">
  import { derived } from 'svelte/store'
  // import { GLTF } from '@threlte/extras'
  import { BoxGeometry, MeshStandardMaterial } from 'three'
  import type { Mesh as ThreeMesh } from 'three'
  import { Three, Object3DInstance, Mesh } from '@threlte/core'
  import { useGltf } from '@threlte/extras'
  import { AutoColliders, RigidBody } from '@threlte/rapier'

  const { gltf } = useGltf('/dice.glb')

  const dice = derived(gltf, (gltf) => {
    // const meshes: ThreeMesh[] = gltf?.nodes.filter((node: any) => node.type === 'Mesh')
    // return meshes
    console.log(gltf)
		if (!gltf || !gltf.nodes['Cube_0'] || !gltf.nodes['Cube_0_1'] || !gltf.nodes['Cube_1']) return
		return [gltf.nodes['Cube_0'], gltf.nodes['Cube_0_1'], gltf.nodes['Cube_1']] as ThreeMesh[]
	})
</script>



<RigidBody type={'dynamic'} position={{ y: 5 }}>
  <AutoColliders shape={'cuboid'}>
    <Mesh 
      castShadow 
      geometry={new BoxGeometry(2, 2, 2)} 
      material={new MeshStandardMaterial()} 
    />
  </AutoColliders>
</RigidBody>

<RigidBody type={'dynamic'} position={{ x: 5, y: 5 }}>
  <AutoColliders shape={'convexHull'}>
    {console.log($dice)}
    {#if $dice}
      <Mesh 
        castShadow 
        geometry={$dice[0].geometry} 
        material={$dice[0].material} 
      />
      <!-- <Mesh 
        castShadow 
        geometry={$dice[1].geometry} 
        material={$dice[1].material} 
      />
      <Mesh 
        castShadow 
        geometry={$dice[2].geometry} 
        material={$dice[2].material} 
      /> -->
    {/if}
    <!-- {#if $gltf}
      <Object3DInstance castShadow object={$gltf.nodes['Root']} />
    {/if} -->
    <!-- <GLTF castShadow url={'/dice.glb'} /> -->
  </AutoColliders>
</RigidBody>