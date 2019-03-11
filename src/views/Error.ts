import { Component, Vue } from 'vue-property-decorator'
@Component({
  // render(h: any) {
  //   return h('h1', 'this is error1 page')
  // }
})
export default class Error extends Vue {
  public render(h: any) {
    return h('h1', 'this is error page')
  }
}
