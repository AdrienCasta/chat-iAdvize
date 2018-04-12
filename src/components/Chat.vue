<template>
    <form
      class="chat"
      :style="{ height }"
      @submit.prevent="submit"
    >

      <section class="chat__push">
        <badge
          :visible="Boolean(numberOfUnreadMessages)">
          {{ numberOfUnreadMessages }}
        </badge>
      </section>

      <header class="chat__header">
        <avatar
          :picture="avatar"
          :caption="receiver"/>
      </header>

      <main
        ref="messages"
        class="chat__messages">

        <messages
          :matchBy="{ author: emitter }"
          :messages="getMessages" />

        <div
          v-if="isReceiverTyping"
          class="chat__message chat__message--right">

          <Loader/>

        </div>

      </main>

        <footer class="chat__footer">

          <input
            class="chat__field"
            placeholder="Votre messages"
            autofocus
            type="text"
            v-model="currentMessage">

          <button
            class="chat__submit-button"
            :disabled="isMessageDirty"
            type="submit">OK</button>

        </footer>

    </form>
</template>
<script>

import { mapActions, mapGetters } from 'vuex';
import Loader from '@/components/Loader';
import Avatar from '@/components/Avatar';
import Messages from '@/components/Messages';
import Badge from '@/components/Badge';

export default {
  name: 'Chat',
  props: {
    receiver: {
      type: String,
      required: true,
    },
    emitter: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '300px',
    },
  },
  data: () => ({
    currentMessage: '',
    writtingInterval: null,
  }),
  mounted() {
    this.$store.subscribe(({ type, payload }) => {
      const wasAMessageReceived = type === 'newMessage' && payload.author !== this.emitter;

      if (wasAMessageReceived) {
        this.keepNewMessagesVisisble();
      }
    });
  },
  watch: {
    currentMessage(val) {
      if (!val) {
        return;
      }

      this.typing({
        author: this.emitter,
      });

      if (this.getTyping.interval) {
        window.clearTimeout(this.writtingInterval);
      }

      this.writtingInterval = setTimeout(() => {
        this.stopTyping({
          author: this.emitter,
          interval: this.writtingInterval,
        });
      }, 400);
    },
  },
  computed: {
    ...mapGetters([
      'getMessages',
      'getTyping',
      'getNumberOfMessages',
    ]),
    isMessageDirty() {
      return !this.currentMessage.length;
    },
    isReceiverTyping() {
      return this.getTyping.status === 'writting' && this.getTyping.author !== this.emitter;
    },
    numberOfUnreadMessages() {
      const lastMessagesGapFromEmitterAndReceiver = this.getMessages
        .slice(0)
        .reverse()
        .map(({ author }) => author)
        .indexOf(this.emitter);

      return lastMessagesGapFromEmitterAndReceiver < 0
        ? this.getNumberOfMessages
        : lastMessagesGapFromEmitterAndReceiver;
    },
  },
  methods: {
    ...mapActions([
      'sendMessage',
      'typing',
      'stopTyping',
    ]),
    keepNewMessagesVisisble() {
      this.$refs.messages
        .scrollTo(0, this.$refs.messages.scrollHeight);
    },
    submit() {
      if (this.currentMessage) {
        const time = new Date();

        this.sendMessage({
          author: this.emitter,
          message: this.currentMessage,
          time,
        });
        this.currentMessage = '';

        this.keepNewMessagesVisisble();
      }
    },
  },
  components: {
    Loader,
    Avatar,
    Badge,
    Messages,
  },
};

</script>
<style lang="scss" scoped>
  .chat{
    position: relative;
    display: flex;
    flex-direction: column;

    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16);

    .chat__push {
      position: absolute;
      right: 0;

      transform: translate3d(50%, -50%, 0)
    }

    .chat__messages {

      height: 90%;

      overflow-y: scroll;

      padding: 20px;

    }

    .chat__footer {
      display: flex;
      height: 10%;

      .chat__field{
        width: 80%;

        border: none;
        border-top: 1px solid #eee;
        padding-left: 10px;
      }
      .chat__submit-button{
        width: 20%;

        color: #fff;

        border:none;
        background: #ec008c;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #fc6767, #ec008c);
        background: linear-gradient(to left, #fc6767, #ec008c);

        cursor: pointer;
      }
    }
  }

</style>
