import {markRaw, ref} from 'vue'
import {v4} from 'uuid'
import layer from '@/components/Api/layer';

const dialogState = ref([])

const show = ({component, data}) => {
  return new Promise(resolve => {
    const dlgId = v4()
    dialogState.value.push({
      __close: result => {
        dialogState.value = dialogState.value.filter(dialog => dialog.__uuid !== dlgId)
        resolve(result)
      },
      __zIndex: layer.getNextZIndex(),
      __data: data || {},
      __uuid: dlgId,
      __component: markRaw(component),
    })
  })
}

const render = () => dialogState.value.map(dialog =>
    <overlay key={dialog.__uuid} zIndex={dialog.__zIndex}>
      <dialog.__component onClose={dialog.__close} {...dialog.__data}/>
    </overlay>)

export default {
  show,
  render
}
