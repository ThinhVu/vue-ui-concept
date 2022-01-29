<script>
export default {
  name: 'Btn',
  props: {
    disabled: Boolean,
    icon: String
  },
  setup(props, ctx) {
    return () => <div class={[props.disabled ? 'disable' : 'clickable', 'px-2 py-1']}>
      {props.icon ? <icon>{props.icon}</icon> : null}
      {ctx.slots.default && ctx.slots.default()}
    </div>
  }
}
</script>
