<template>
  <div class="loader">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>
export default {
  name: 'Loader',
};
</script>

<style scoped>

.loader {
  width: 40px;
  display: flex;
  justify-content: space-between;
}
.loader span {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #3498db;
}

.loader span:nth-child(1) {
  animation: bounce 1s ease-in-out infinite;
}

.loader span:nth-child(2) {
  animation: bounce 1s ease-in-out 0.33s infinite;
}

.loader span:nth-child(3) {
  animation: bounce 1s ease-in-out 0.66s infinite;
}

@keyframes bounce {
  0%,
  75%,
  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  25% {
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
</style>

