<template>
    <ul class="messages">
        <li
            v-for="(message, index) in messages"
            :key="index"
            class="messages__message"
            :class="[isMessageMatched(message) ? '' : 'messages__message--right']">

            <message
                :text="message.message"
                :time="message.time"
                :align-right="!isMessageMatched(message)"

            />

        </li>
    </ul>
</template>

<script>

import Message from './Message';

export default {
  name: 'Messages',
  methods: {
    isMessageMatched(message) {
      const valueToBeMatched = Object.values(this.matchBy)[0];
      const keyToBeMatched = Object.keys(this.matchBy)[0];
      return valueToBeMatched === message[keyToBeMatched];
    },
  },
  props: {
    matchBy: {
      type: Object,
    },
    messages: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  components: {
    Message,
  },
};
</script>

<style lang="scss" scoped>

    .messages {

        display: flex;
        flex-direction: column;

        .messages__message {
            align-self: flex-start;
            text-align: left;
            max-width: 90%;

            margin-bottom: 30px;

            &--right {
                align-self: flex-end;
            }
        }
}

</style>
