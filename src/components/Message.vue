<template>
    <section
      class="message"
      :class="[alignRight ? 'message--right' : '']"
    >
        <span class="message__text">{{ text }}</span>
        <p class="message__time">{{ humanitizeTime }}</p>

    </section>
</template>

<script>

export default {
  name: 'Message',
  computed: {
    humanitizeTime() {
      const hours = this.time.getHours();
      const minutes = this.time.getMinutes();
      const addZeroIfUnder10 = int => (int < 10 ? '0' : '') + int;
      return `${hours}:${addZeroIfUnder10(minutes)}`;
    },
  },
  props: {
    alignRight: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: true,
    },
    time: {
      type: Date,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

    .message {
        text-align: left;

        .message__time {
          font-size: 10px;
          padding-top: 8px;

        }
        .message__text {
            display: block;

            color: #fff;
            line-height: 20px;

            background: #4878F7;
            border-radius: 5px;
            padding: 10px;
        }

         &--right {

          .message__text {
            background: #A51FFE;
          }

          .message__time {
            text-align: right;
          }
        }
    }
</style>
