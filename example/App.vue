<template>
  <div id="app">
    <Demo/>
    <Card width="350" imgHeight="270" 
    imgSrc="http://8.142.19.67:3000/images/cat2.jpg"
     summary="hahahaha🌙🐕🐱🐖">
     <template #footer={foot}>
      <a>{{foot}}</a>
     </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
