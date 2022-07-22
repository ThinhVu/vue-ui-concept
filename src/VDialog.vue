<script>
import Overlay from '@/components/Overlay/Overlay';
import layer from '@/components/Api/layer';
export default {
  name: 'VDialog',
  components: {Overlay},
  props: {
    modelValue: Boolean
  },
  setup(props, {slots, emit}) {
    return () => props.modelValue && <overlay
        z-index={layer.getNextZIndex()}
        style="background-color: #ddd; margin: 0 auto; border-radius: 6px"
        onClick={() => emit('close')}>
      {slots.default && slots.default()}
    </overlay>
  }
}
</script>
