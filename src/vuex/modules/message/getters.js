const getMessages = state => state.messages;
const getNumberOfMessages = state => state.messages.length;
const getTyping = state => state.typing;

export default{
  getNumberOfMessages,
  getMessages,
  getTyping,
};
