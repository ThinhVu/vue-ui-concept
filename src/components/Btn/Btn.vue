<script>
import {computed} from 'vue';
export default {
  name: 'Btn',
  props: {
    disabled: Boolean,
    icon: String,
    backgroundColor: String
  },
  setup(props, ctx) {
    const style = computed(() => ({
      borderRadius: '4px',
      backgroundColor: props.backgroundColor || '#ddd'
    }))
    return () => <div class={[props.disabled ? 'disable' : 'clickable', 'px-2 py-1']} style={style.value}>
      {props.icon ? <icon>{props.icon}</icon> : null}
      {ctx.slots.default && ctx.slots.default()}
    </div>
  }
}
</script>
