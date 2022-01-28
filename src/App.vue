<script>
import Api from '@/components/Api/Api';
import Icon from '@/components/Icon/Icon';
import msgBox from '@/components/Api/msg-box';
import dialog from '@/components/Api/dialog';
export default {
  name: 'App',
  components: {Api, Icon},
  setup() {

    const showMsgBox = async () => await msgBox.show('Error', 'Something went wrong!!!', msgBox.Buttons.OKCancel, msgBox.Icons.Error);
    const showDialog = async () => await dialog.show({component: { setup: () => () =>
       <div>Dialog content</div>
    } });

    return () => <div>
      <div>
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



      <button onClick={showMsgBox}>Show message box</button>
      <button onClick={showDialog}>Show dialog</button>
      <api/>
    </div>

  }
}
</script>
