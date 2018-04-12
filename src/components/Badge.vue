<template>
    <section
        class="badge"
        :class="[visible ? '' : 'badge--off']"
    >
        <slot></slot>
    </section>
</template>

<script>

export default {
  name: 'Badge',
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>

    .badge {
        width: 40px;
        height: 40px;

        line-height: 40px;
        color: #fff;

        border-radius: 50%;
        border: 8px solid;
        background: linear-gradient(to left, #fc6767, #ec008c);

        transition: .3s all cubic-bezier(0.64, 0.57, 0.67, 1.53);

        &--off {
            opacity: 0;
            transform: scale(.5, .5)
        }
    }
</style>
