<script>
import {ref} from 'vue';
import Api from '@/components/Api/Api';
import Btn from '@/components/Btn/Btn';
import VDialog from '@/VDialog'; // fake Vuetify dialog
import msgBox from '@/components/Api/msg-box';
import dialog from '@/components/Api/dialog';
import notification from '@/components/Api/notification';

const DeleteItemComponent = {
  setup(_, {emit}) {
    const dlgStyle = 'background-color: #fff; border-radius: 6px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5); padding: 20px; width: 400px; margin: 0 auto;'
    return () => <div style={dlgStyle}>
      <p class="mb-3">Are you sure you want to delete this item?</p>
      <div class="fr fg-1">
        <btn onClick={() => emit('close')}>Close</btn>
        <btn onClick={() => emit('close')}>Cancel</btn>
        <btn onClick={() => emit('close', {hello: 'world'})}>OK</btn>
      </div>
    </div>
  }
}

export default {
  name: 'App',
  components: {Api, Btn, VDialog},
  setup() {
    const showMsgBox = async () => {
      const result = await msgBox.show(
          'Error',
          'Something went wrong!!!',
          msgBox.Buttons.OKCancel,
          msgBox.Icons.Error
      );
      if (result === msgBox.Results.ok) {
        console.log('User select OK');
      } else {
        console.log('User select cancel');
      }
    }
    const showDialog = async () => {
      const rs = await dialog.show({ component: DeleteItemComponent });
      console.log('dialog result', rs)
    }
    const showNotification = async () => notification.success('Lorem ispum', 3000);

    return () => <div>
      <btn onClick={showMsgBox}>Show dialog for some work</btn>
      <btn onClick={showDialog}>Show dialog for some work</btn>
      <btn onClick={showNotification}>Show dialog for some work</btn>
      <api/>
    </div>
  }
}
</script>
