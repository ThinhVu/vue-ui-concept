<script lang="jsx">
import dialogApi from './dialog.js'
import msgBoxApi from './msg-box.js'
import Icon from '@/components/Icon/Icon';
import Overlay from '@/components/Overlay/Overlay'

export default {
  components: {Icon, Overlay},
  setup() {
    return () => <>
      {dialogApi.render()}
      {msgBoxApi.render()}
    </>
  }
}
</script>
