<script>
export default {
  name: 'Overlay',
  props: {zIndex: Number},
  setup(props, ctx) {
    return () => <div
        class="w-100vw h-100vh fr ai-c bc-gray-7-5 fix top-0 left-0"
        style={{zIndex: props.zIndex}}>
      {ctx.slots.default && ctx.slots.default()}
    </div>
  }
}
</script>
