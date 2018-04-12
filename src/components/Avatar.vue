<template>
    <figure class="avatar">
        <img
            class="avatar__picture"
            :style="{ height: pxHeight, width: pxHeight }"
            :src="picture" alt="avatar"
        />
        <figcaption
            class="avatar__caption">{{ caption }}</figcaption>
    </figure>
</template>

<script>
const defaultPictureSize = 50;

export default {
  name: 'Avatar',
  computed: {
    pxHeight() {
      return `${this.height}px`;
    },
    pxWidth() {
      return `${this.height}px`;
    },
  },
  props: {
    picture: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
    },
    width: {
      type: Number,
      default: defaultPictureSize,
    },
    height: {
      type: Number,
      default: defaultPictureSize,
    },
  },
};
</script>

<style lang="scss" scoped>

    .avatar {
        padding: 10px;
        background: linear-gradient(to left, #fc6767, #ec008c);
        .avatar__picture {

            padding: 6px;

            border-radius: 50%;

            border: 3px solid #fff;
        }

        .avatar__caption{
            color: #fff;
        }
    }
</style>
