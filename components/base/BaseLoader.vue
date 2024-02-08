<template>
  <div class="loader">
    <span class="load"></span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loader {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 102;
  position: fixed;
  left: 0;
  top: 0;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    transition: all 0.3s ease 0s;
	  }
}

.load {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: absolute;
  text-indent: -9999em;
  animation: mulShdSpin 1.1s infinite ease;
  transform: translateZ(0);
  color: #079c34;
  z-index: 102;
  transition: all 0.3s ease 0s;
	@media(max-width: 767px) {
		font-size: 12px;
	}
}
@keyframes mulShdSpin {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #079c34,
      1.8em -1.8em 0 0em rgba(7, 156, 52, 0.2),
      2.5em 0em 0 0em rgba(7, 156, 52, 0.2),
      1.75em 1.75em 0 0em rgba(7, 156, 52, 0.2),
      0em 2.5em 0 0em rgba(7, 156, 52, 0.2),
      -1.8em 1.8em 0 0em rgba(7, 156, 52, 0.2),
      -2.6em 0em 0 0em rgba(7, 156, 52, 0.5),
      -1.8em -1.8em 0 0em rgba(7, 156, 52, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(7, 156, 52, 0.7),
      1.8em -1.8em 0 0em #079c34, 2.5em 0em 0 0em rgba(7, 156, 52, 0.2),
      1.75em 1.75em 0 0em rgba(7, 156, 52, 0.2),
      0em 2.5em 0 0em rgba(7, 156, 52, 0.2),
      -1.8em 1.8em 0 0em rgba(7, 156, 52, 0.2),
      -2.6em 0em 0 0em rgba(7, 156, 52, 0.2),
      -1.8em -1.8em 0 0em rgba(7, 156, 52, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(7, 156, 52, 0.5),
      1.8em -1.8em 0 0em rgba(7, 156, 52, 0.7), 2.5em 0em 0 0em #079c34,
      1.75em 1.75em 0 0em rgba(7, 156, 52, 0.2),
      0em 2.5em 0 0em rgba(7, 156, 52, 0.2),
      -1.8em 1.8em 0 0em rgba(7, 156, 52, 0.2),
      -2.6em 0em 0 0em rgba(7, 156, 52, 0.2),
      -1.8em -1.8em 0 0em rgba(7, 156, 52, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(7, 156, 52, 0.2),
      1.8em -1.8em 0 0em rgba(7, 156, 52, 0.5),
      2.5em 0em 0 0em rgba(7, 156, 52, 0.7), 1.75em 1.75em 0 0em #079c34,
      0em 2.5em 0 0em rgba(7, 156, 52, 0.2),
      -1.8em 1.8em 0 0em rgba(7, 156, 52, 0.2),
      -2.6em 0em 0 0em rgba(7, 156, 52, 0.2),
      -1.8em -1.8em 0 0em rgba(7, 156, 52, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(7, 156, 52, 0.2),
      1.8em -1.8em 0 0em rgba(7, 156, 52, 0.2),
      2.5em 0em 0 0em rgba(7, 156, 52, 0.5),
      1.75em 1.75em 0 0em rgba(7, 156, 52, 0.7), 0em 2.5em 0 0em #079c34,
      -1.8em 1.8em 0 0em rgba(7, 156, 52, 0.2),
      -2.6em 0em 0 0em rgba(7, 156, 52, 0.2),
      -1.8em -1.8em 0 0em rgba(7, 156, 52, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(7, 156, 52, 0.2),
      1.8em -1.8em 0 0em rgba(7, 156, 52, 0.2),
      2.5em 0em 0 0em rgba(7, 156, 52, 0.2),
      1.75em 1.75em 0 0em rgba(7, 156, 52, 0.5),
      0em 2.5em 0 0em rgba(7, 156, 52, 0.7), -1.8em 1.8em 0 0em #079c34,
      -2.6em 0em 0 0em rgba(7, 156, 52, 0.2),
      -1.8em -1.8em 0 0em rgba(7, 156, 52, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(7, 156, 52, 0.2),
      1.8em -1.8em 0 0em rgba(7, 156, 52, 0.2),
      2.5em 0em 0 0em rgba(7, 156, 52, 0.2),
      1.75em 1.75em 0 0em rgba(7, 156, 52, 0.2),
      0em 2.5em 0 0em rgba(7, 156, 52, 0.5),
      -1.8em 1.8em 0 0em rgba(7, 156, 52, 0.7), -2.6em 0em 0 0em #079c34,
      -1.8em -1.8em 0 0em rgba(7, 156, 52, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(7, 156, 52, 0.2),
      1.8em -1.8em 0 0em rgba(7, 156, 52, 0.2),
      2.5em 0em 0 0em rgba(7, 156, 52, 0.2),
      1.75em 1.75em 0 0em rgba(7, 156, 52, 0.2),
      0em 2.5em 0 0em rgba(7, 156, 52, 0.2),
      -1.8em 1.8em 0 0em rgba(7, 156, 52, 0.5),
      -2.6em 0em 0 0em rgba(7, 156, 52, 0.7), -1.8em -1.8em 0 0em #079c34;
  }
}
</style>
