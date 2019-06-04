<template>
  <v-card>
    <v-img
      :src="filePath"
      aspect-ratio="2.75"
    ></v-img>

    <v-card-title>
      {{ name }}
    </v-card-title>

    <v-card-actions>
      <slot />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ImageCard',
  props: [
    filePath: {
      type: String.
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  ]
}
</script>
