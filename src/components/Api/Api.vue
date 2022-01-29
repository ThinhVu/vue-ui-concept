<script lang="jsx">
import dialogApi from './dialog'
import msgBoxApi from './msg-box'
import notificationApi from './notification'
import Icon from '@/components/Icon/Icon'
import Btn from '@/components/Btn/Btn'
import Overlay from '@/components/Overlay/Overlay'

export default {
  components: {Icon, Overlay, Btn},
  setup() {
    return () => <>
      {dialogApi.render()}
      {msgBoxApi.render()}
      {notificationApi.render()}
    </>
  }
}
</script>
