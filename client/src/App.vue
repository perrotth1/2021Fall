<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <Nav />
        <Messages />
        <router-view />
      </div>
    </div>
  </div>
</template>


<script>
import Messages from './components/Messages';
import Nav from "./components/Nav";
export default {
  components: {
    Nav,
    Messages
  }
};
</script>