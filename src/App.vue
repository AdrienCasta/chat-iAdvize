<template>
  <div class="app" id="app">
    <section
      v-for="({ emitter, receiver, height, avatar }, index) in chats"
      :key="index"
      class="app__chat"
    >
      <Chat
        :emitter="emitter"
        :receiver="receiver"
        :height="height"
        :avatar="avatar"
      />
    </section>
  </div>
</template>

<script>
import Chat from '@/components/Chat';

/* eslint-disable global-require */
export default {
  name: 'App',
  data: () => ({
    chats: [
      {
        emitter: 'Rick',
        receiver: 'Morty',
        height: '550px',
        avatar: require('./assets/images/rick.jpg'),
      },
      {
        emitter: 'Morty',
        receiver: 'Rick',
        height: '550px',
        avatar: require('./assets/images/morty.jpg'),
      },
    ],
  }),
  components: {
    Chat,
  },
};
</script>

<style lang="scss">
@import './assets/styles/reset.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app {
  display: flex;
  justify-content: space-around;
  align-items: center;

  &__chat {
    width: 30%;
  }
}

@media (max-width: 40em) {
    .app {
      flex-direction: column;

      &__chat {
        width: 80%;
        margin-top: 30px;

      }
    }
}

</style>
