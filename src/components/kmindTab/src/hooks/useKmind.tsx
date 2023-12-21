import MindMap from 'simple-mind-map'
import { useNamedPublicStoreWithOut } from '/src/components/kmindTab/src/store/modules/public'
import { storeToRefs } from 'pinia'
import KeyboardNavigation from 'simple-mind-map/src/plugins/KeyboardNavigation'
import Drag from 'simple-mind-map/src/plugins/Drag'
import Select from 'simple-mind-map/src/plugins/Select'
import RichText from 'simple-mind-map/src/plugins/RichText'
import Export from 'simple-mind-map/src/plugins/Export'
// import ExportPDF from 'simple-mind-map/src/plugins/ExportPDF'
import AssociativeLine from 'simple-mind-map/src/plugins/AssociativeLine'
import NodeImgAdjust from 'simple-mind-map/src/plugins/NodeImgAdjust'
import TouchEvent from 'simple-mind-map/src/plugins/TouchEvent'
import ExportXMind from 'simple-mind-map/src/plugins/ExportXMind'
// import { Kmind } from '@/components/kmindTab/src/packages'
// const publicStoreWithOut = usePublicStoreWithOut()

// const { setNoteInfo } = publicStoreWithOut
// const { noteVisible, treeData } = storeToRefs(publicStoreWithOut)

export let kmind

export const useKmind = (el, name) => {
  const publicStoreWithOutDiff = useNamedPublicStoreWithOut(name)
  const { setNoteInfo } = publicStoreWithOutDiff
  const { noteVisible, treeData, localConfig, filePath } = storeToRefs(publicStoreWithOutDiff)

  if (el && !kmind?.[name]) {
    MindMap.usePlugin(KeyboardNavigation)
      .usePlugin(Drag)
      .usePlugin(Select)
      .usePlugin(RichText)
      .usePlugin(Export)
      .usePlugin(AssociativeLine)
      .usePlugin(NodeImgAdjust)
      .usePlugin(TouchEvent)
      // .usePlugin(ExportPDF)
      .usePlugin(ExportXMind)
    if (!kmind) {
      kmind = {}
    }

    kmind[name] = new MindMap({
      el,
      data: {
        data: {
          text: `suka`
        },
        children: []
      },
      customNoteContentShow: {
        show(content, left, top) {
          // console.log('show');
          if (!noteVisible.value) {
            setNoteInfo({ content, left, top, visible: true })
          }
        },
        hide() {
          // console.log('hide');
          // 如果鼠标一直在备注icon上或者移动到了note上，则不隐藏，否则2秒后隐藏
          // console.log('hide');
          // if (noteVisible.value) {
          //     setNoteInfo({ visible: false });
          // }
        }
      },
      customHandleMousewheel: (e) => {
        // 自定义鼠标滚轮事件
        const { deltaX, deltaY, ctrlKey } = e
        // console.log(e);
        if (ctrlKey) {
          // 缩放
          if (deltaY > 0 || deltaX > 0) kmind[name].view.narrow()
          else kmind[name].view.enlarge()
        } else {
          if (deltaX === -0) {
            // Y轴滚动 滚动一次默认是100，太大了，所以除以3，即滚动一次移动33px
            kmind[name].view.translateY(-deltaY / 3)
          } else {
            // X轴滚动
            kmind[name].view.translateX(-deltaX / 3)
          }
        }
      }
      // isUseCustomNodeContent: true,
      // customCreateNodeContent: (node) => {
      //   // console.log(node);
      //   // console.log(node?.nodeData?.data?.kmind?.type);
      //   const div = document.createElement('div')
      //   div.style.height = '360px'
      //   div.style.width = '360px'
      //   // new window.parent.kmindApi.siyuan.Protyle(this.app, div, {
      //   //   blockId: '20200812220555-lj3enxa'
      //   // })
      //   new globalThis.kmindApi.siyuan.Protyle(globalThis.kmindApi.siyuanApp, div, {
      //     blockId: '20200812220555-lj3enxa'
      //   })
      //
      //   if (node?.nodeData?.data?.kmind?.type === 'suka') {
      //     return div
      //   } else {
      //     return null
      //   }
      // }
    })
    // console.log(kmind[name])
  }

  const expandTree = (data) => {
    const temp: NodeTreeType = {}
    temp.title = data.data.text
    temp.key = data._node.uid
    temp._node = data._node
    if (data.children.length) {
      temp.children = []
      data.children.forEach((item) => {
        temp.children?.push(expandTree(item))
      })
    }
    return temp
  }

  const buildTreeData = () => {
    treeData.value = [expandTree(kmind[name].renderer.renderTree)]
  }

  const downloadKmind = (filename: string, isFullValue: boolean) => {
    const kmindData: KmindFullDataType = {
      kmind: {
        saveType: 'file',
        filePath: filePath.value,
        localeConfig: localConfig.value
      },
      ...kmind[name].getData(isFullValue)
    }

    const json = JSON.stringify(kmindData)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename + '.kmind'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const loadKmindFullData = (data: KmindFullDataType) => {
    kmind[name].setFullData(data)
    // 加载额外的配置
    // 避免不存在kmind节点导致默认的localConfig被覆盖
    if (data?.kmind?.localeConfig) {
      localConfig.value = data.kmind.localeConfig
    }
  }

  return {
    buildTreeData,
    downloadKmind,
    loadKmindFullData
  }
}

export const clearKmind = (name) => {
  console.log(kmind[name])
  console.log(kmind)
  // const publicStoreWithOutDiff = useNamedPublicStoreWithOut(name)
  // console.log(publicStoreWithOutDiff)
  // kmind[name].destroy()
  // kmind[name] = null
  delete kmind[name]
}