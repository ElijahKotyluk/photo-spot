<template>
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="photo in photos"
        :key="photo.id"
        xs12
        sm3
        class="card"
      >
        <router-link
          :to="{ name: 'detail', params: { id: photo.id }}"
          class="detail-link"
        >
          <image-card
            :filePath="imagePath(photo.filePath)"
            :name="photo.name"
          >
            <el-button
              type="text"
              class="button"
            >
              More info
            </el-button>
          </image-card>
        </router-link>
      </v-flex>

      <v-flex
        xs12
        sm3
        class="card"
      >
        <vue-dropzone
          id="dropzone"
          ref="dropzone"
          @vdropzone-success="onSuccess"
          :options="dropzoneOptions"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import ImageCard from './ImageCard';

export default {
  name: 'HomePage',
  components: {
    vueDropzone: vue2Dropzone,
    ImageCard
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
  }),
  computed: {
    photos() {
      return this.$store.state.photos;
    }
  },
  methods: {
    imagePath(filePath) {
      return `/storage/${filePath}`
    },
    onSuccess() {
      this.$refs.dropzone.removeAllFiles();
    }
  }
}
</script>

<style scoped>
.detail-link, .detail-link a, .detail-link a:active {
  text-decoration: none;
}

.card {
  margin: 0.5em;
}
</style>
