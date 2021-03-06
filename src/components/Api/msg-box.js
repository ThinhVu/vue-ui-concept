/**
 * https://mdbootstrap.com/docs/angular/css/colors/
 * https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.messagebox.show
 */

import {ref} from 'vue';
import layer from '@/components/Api/layer';

const Buttons = {
  OK: 0,
  OKCancel: 1,
  AbortRetryIgnore: 2,
  YesNoCancel: 3,
  YesNo: 4,
  RetryCancel: 5,
};

const Icons = {
  None: 0,
  Information: 1,
  Warning: 2,
  Error: 3,
  Question: 4,
  Success: 5,
};

const Results = {
  abort: 'abort',
  cancel: 'cancel',
  ignore: 'ignore',
  no: 'no',
  ok: 'ok',
  retry: 'retry',
  yes: 'yes'
}

const msgData = ref({
  show: false,
  btn: Buttons.OKCancel,
  icon: Icons.None,
  title: '',
  content: '',
  resultHandlerFn: result => console.log(result)
});

const renderBtn = (uiLabel, t, onClick, isDefaultBtn) => {
  const style = {
    backgroundColor: isDefaultBtn ? '#1271ff': '#e0e0e0',
    color: isDefaultBtn ? '#fff' : '#1f1f1f',
    minWidth: '100px',
  }
  return <btn class="px-2 py-1 ta-c" style={style} onClick={onClick}>{t(`buttons.${uiLabel}`)}</btn>
}

const btnRenders = {
  [Buttons.OK]: (t, on) => renderBtn('ok', t, () => on(Results.ok)),
  [Buttons.OKCancel]: (t, on) => <>
    {renderBtn('cancel', t, () => on(Results.cancel))}
    {renderBtn('ok', t, () => on(Results.ok), true)}
  </>,
  [Buttons.AbortRetryIgnore]: (t, on) => <>
    {renderBtn('abort', t, () => on(Results.abort))}
    {renderBtn('retry', t, () => on(Results.retry))}
    {renderBtn('ignore', t, () => on(Results.ignore))}
  </>,
  [Buttons.YesNoCancel]: (t, on) => <>
    {renderBtn('cancel', t, () => on(Results.cancel))}
    {renderBtn('no', t, () => on(Results.no))}
    {renderBtn('yes', t, () => on(Results.yes), true)}
  </>,
  [Buttons.YesNo]: (t, on) => <>
    {renderBtn('no', t, () => on(Results.no))}
    {renderBtn('yes', t, () => on(Results.yes), true)}
  </>,
  [Buttons.RetryCancel]: (t, on) => <>
    {renderBtn('cancel', t, () => on(Results.cancel))}
    {renderBtn('retry', t, () => on(Results.retry), true)}
  </>,

};
const iconRenders = {
  [Icons.None]: () => null,
  [Icons.Success]: () => <icon class="mr-3">fas fa-check-circle:#43a047</icon>,
  [Icons.Information]: () => <icon class="mr-3">fas fa-info-circle:#039be5</icon>,
  [Icons.Warning]: () => <icon class="mr-3">fas fa-exclamation-triangle:#d32f2f</icon>,
  [Icons.Error]: () => <icon class="mr-3">fas fa-times-circle@48px:#d32f2f</icon>,
  [Icons.Question]: () => <icon class="mr-3">fas fa-question-circle:#757575</icon>,
};

const render = (t) => {
  if (!msgData.value.show)
    return

  return <overlay zIndex={msgData.value.zIndex}>
    <div class="bc-gray-0 br-1 my-0 mx-a" style={{width: '70%', maxWidth: '500px', boxShadow: '0 2px 4px 0 rgba(0,0,0, 0.5)'}}>
      <div class="px-2 py-2" style="border-bottom: 1px solid #e0e0e0">
        <b>{msgData.value.title}</b>
      </div>
      <div class="px-2 py-2">
        <div class="fr jc-fs fg-2">
          {iconRenders[msgData.value.icon]()}
          {typeof (msgData.value.content) === 'function' ? msgData.value.content() : msgData.value.content}
        </div>
      </div>
      <div class="fr ai-c jc-fe fg-1 px-2 py-2">
        {btnRenders[msgData.value.btn](t, msgData.value.resultHandlerFn)}
      </div>
    </div>
  </overlay>
};

function show(title, content, btn, icon) {
  return new Promise(resolve => {
    msgData.value = {
      title,
      content,
      btn,
      icon,
      zIndex: layer.getNextZIndex(),
      resultHandlerFn: result => {
        msgData.value.show = false
        resolve(result)
      },
      show: true
    }
  })
}

export default {
  Buttons,
  Icons,
  Results,
  show,
  render
}
