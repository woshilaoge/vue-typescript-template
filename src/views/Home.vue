<template>
  <div class="home" @click="test('hello')">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <MyComponent></MyComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import MyComponent from '@/components/MyComponent'
@Component({
  components: {
    HelloWorld,
    MyComponent
  }
})
export default class Home extends Vue {
  message: number = 123
  created() {
    this.test(1)
  }
  test(e: number): number {
    console.log(e)
    return 1
  }
}
</script>
