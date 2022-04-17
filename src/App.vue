<script>
import {withDirectives} from 'vue';
import Api from '@/components/Api/Api';
import Icon from '@/components/Icon/Icon';
import msgBox from '@/components/Api/msg-box';
import dialog from '@/components/Api/dialog';
import notification from '@/components/Api/notification';
export default {
  name: 'App',
  components: {Api, Icon},
  setup() {
    const showMsgBox = async () => await msgBox.show('Error', 'Something went wrong!!!', msgBox.Buttons.OKCancel, msgBox.Icons.Error);
    const showDialog = async () => await dialog.show({component: { setup: () => () => <div>Dialog content</div>} });
    const showNotification = async () => await notification.err('Something bad happen!!!', 3000)

    const renderApiExample = () => <div>
      <button onClick={showMsgBox}>Show message box</button>
      <button onClick={showDialog}>Show dialog</button>
      <button onClick={showNotification}>Show notification</button>
      <api/>
    </div>

    const renderCssDirectiveExample = () => <div v-h-100 v-w-100>
      <div v-fr v-ai-c v-px-2 v-py-3>
        <button v-clickable v-br-50>Click me</button>
      </div>

      <div v-w-100 v-g v-g-t-c="1fr 50px 1fr" v-g-t-r="100px" style="border: 1px solid red">
        <div>Grid item 1</div>
        <div>Grid item 2</div>
        <div>Grid item 3</div>
      </div>
    </div>

    const iconExample = () => <div v-fr v-f-gap="5px">
      <icon>fas fa-info-circle</icon>
      <icon>fas fa-info-circle@48</icon>
      <icon>fas fa-info-circle:red</icon>
      <icon>fas fa-info-circle:.c-p-8</icon>
      <icon>fas fa-info-circle:hsl(0, 100%, 50%)</icon>
      <icon>fas fa-info-circle:hsla(0, 100%, 50%, .5)</icon>
      <icon>fas fa-info-circle:rgb(0,0,0)</icon>
      <icon>fas fa-info-circle:rgba(0,0,0, 1)</icon>
      <icon>fas fa-info-circle@24:red</icon>
      <icon>fas fa-info-circle:red@24</icon>
    </div>

    return () => <div>
      {renderApiExample()}
      {iconExample()}
      {renderCssDirectiveExample()}
    </div>

  }
}
</script>
