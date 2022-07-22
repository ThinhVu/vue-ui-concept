<script>
import Api from '@/components/Api/Api';
import Btn from '@/components/Btn/Btn';
import msgBox from '@/components/Api/msg-box';
import dialog from '@/components/Api/dialog';
import notification from '@/components/Api/notification';

const DialogContentComponent = {
  setup(_, {emit}) {
    // emit('close') to close dialog
    // emit('close', result) to close dialog with result
    return () => <div style="background-color: #ddd; padding: 20px; margin: 0 auto;">
      <p>Select me</p>
      <button onClick={() => emit('close')}>Just Close</button>
      <button onClick={() => emit('close', 1)}>Return Value</button>
      <button onClick={() => emit('close', { hello: 'world' } )}>Return object</button>
    </div>
  }
}

export default {
  name: 'App',
  components: {Api, Btn},
  setup() {
    const showMsgBox = async () => {
      const result = await msgBox.show('Error', 'Something went wrong!!!', msgBox.Buttons.OKCancel, msgBox.Icons.Error)
      if (result === msgBox.Results.ok) {
        console.log('User select OK');
      } else {
        console.log('User select cancel');
      }
    };
    const showDialog = async () => {
      const rs = await dialog.show({ component: DialogContentComponent });
      console.log('dialog result', rs);
    }
    const showNotification = async () => {
      await notification.err('Something bad happen!!!', 3000)
    }

    return () => <div>
      <div class="fc fg-1">
        <btn onClick={showMsgBox}>Show message box</btn>
        <btn onClick={showDialog}>Show dialog</btn>
        <btn onClick={showNotification}>Show notification</btn>
      </div>
      <api/>
    </div>

  }
}
</script>
