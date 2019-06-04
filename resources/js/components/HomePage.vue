<template>
  <vue-dropzone
    id="dropzone"
    ref="dropzone"
    :options="dropzoneOptions"
  />
</template>

<script>
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
  name: 'HomePage',
  components: {
    vueDropzone: vue2Dropzone
  },
  data: () => ({
    dropzoneOptions: {
      url: '/api/photo',
      thumbnailWidth: 150,
      maxFilesize: 10,
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    }
  })
}
</script>
