<script lang="jsx">
import dialogApi from './dialog'
import msgBoxApi from './msg-box'
import notificationApi from './notification'
import Icon from '@/components/Icon/Icon'
import Btn from '@/components/Btn/Btn'
import Overlay from '@/components/Overlay/Overlay'
const useI18n = dictionary => v => dictionary[v];

export default {
  components: {Icon, Overlay, Btn},
  setup() {

    const t = useI18n({
      'buttons.cancel': 'Cancel',
      'buttons.ok': 'OK',
      'buttons.abort': 'Abort',
      'buttons.retry': 'Retry',
      'buttons.ignore': 'Ignore',
      'buttons.yes': 'Yes',
      'buttons.no': 'No',
    })

    return () => <>
      {dialogApi.render()}
      {msgBoxApi.render(t)}
      {notificationApi.render()}
    </>
  }
}
</script>
