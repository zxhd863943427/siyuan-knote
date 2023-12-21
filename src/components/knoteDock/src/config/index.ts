import {
  SmileOutlined,
  InfoCircleOutlined,
  BulbOutlined,
  BellOutlined,
  CheckCircleOutlined,
  CloseOutlined,
  WarningOutlined,
  QuestionCircleOutlined,
  StopOutlined,
  BugOutlined,
  BookOutlined,
  EditOutlined
} from '@ant-design/icons-vue'
interface IColorMap {
  [key: string]: {
    mainColor: string
    secondaryColor: string
    desc?: string
    descEn?: string
    icon?: any
  }
}

export const colorMap: IColorMap = {
  default: {
    mainColor: '#c5c5c5',
    secondaryColor: '#ececec0a',
    desc: '默认',
    descEn: 'default',
    icon: SmileOutlined
  },
  info: {
    mainColor: '#3889c4',
    secondaryColor: '#3889c40a',
    // secondaryColor: '#eef5f880',
    desc: '信息',
    descEn: 'info',
    icon: InfoCircleOutlined
  },
  light: {
    mainColor: '#ffce52',
    secondaryColor: '#ffce520a',
    desc: '灵感',
    descEn: 'light',
    icon: BulbOutlined
  },
  bell: {
    mainColor: '#ffae30',
    // secondaryColor: '#faf0e64D',
    secondaryColor: '#ffae300a',
    desc: '提醒',
    descEn: 'bell',
    icon: BellOutlined
  },
  check: {
    mainColor: '#79b453',
    // secondaryColor: '#eef6f080',
    secondaryColor: '#79b4530a',
    desc: '正确',
    descEn: 'check',
    icon: CheckCircleOutlined
  },
  wrong: {
    mainColor: '#de2a42',
    // secondaryColor: '#fdf1f180',
    secondaryColor: '#de2a420a',
    desc: '错误',
    descEn: 'wrong',
    icon: CloseOutlined
  },
  warn: {
    mainColor: '#ffcd4c',
    // secondaryColor: '#fdf9ed80',
    secondaryColor: '#ffcd4c0a',
    desc: '警告',
    descEn: 'warn',
    icon: WarningOutlined
  },
  question: {
    mainColor: '#bf122d',
    // secondaryColor: '#f9eff580',
    secondaryColor: '#bf122d0a',
    desc: '问题',
    descEn: 'question',
    icon: QuestionCircleOutlined
  },
  error: {
    mainColor: '#de2a42',
    // secondaryColor: '#fdf1f180',
    secondaryColor: '#de2a420a',
    desc: '禁止',
    descEn: 'error',
    icon: StopOutlined
  },
  bug: {
    mainColor: '#9366cd',
    // secondaryColor: '#f4f1f880',
    secondaryColor: '#9366cd0a',
    desc: 'bug',
    descEn: 'bug',
    icon: BugOutlined
  },
  note: {
    mainColor: '#6c7c85',
    // secondaryColor: '#e2e5e780',
    secondaryColor: '#6c7c850a',
    desc: '注记',
    descEn: 'note',
    icon: BookOutlined
  },
  pen: {
    mainColor: '#293137',
    // secondaryColor: '#f5f5f680',
    secondaryColor: '#2931370a',
    desc: '记录',
    descEn: 'pen',
    icon: EditOutlined
  }
}

// 快捷输入文字指令map
/**
 * yd,移动,/yd,/移动,yidong : 快捷使用键盘移动mainWin位置
 */
export const quickCommandMap = [
  // {
  //   key: 'yd|移动|/yd|/移动|yidong|set|/set|move|/move',
  //   description: '快捷使用键盘移动mainWin位置',
  //   command: 'move'
  // },
  // // lock
  // {
  //   key: 'lock|/lock|unlock|/unlock',
  //   description: '锁定/解锁',
  //   command: 'lock'
  // },
  //default
  {
    key: 'default|/default',
    description: 'default',
    command: 'default'
  },
  // info
  {
    key: 'info|/info',
    description: 'info',
    command: 'info'
  },
  // light
  {
    key: 'light|/light',
    description: 'light',
    command: 'light'
  },
  // bell
  {
    key: 'bell|/bell',
    description: 'bell',
    command: 'bell'
  },
  // check
  {
    key: 'check|/check',
    description: 'check',
    command: 'check'
  },
  // wrong
  {
    key: 'wrong|/wrong',
    description: 'wrong',
    command: 'wrong'
  },
  // warn
  {
    key: 'warn|/warn',
    description: 'warn',
    command: 'warn'
  },
  // question
  {
    key: 'question|/question',
    description: 'question',
    command: 'question'
  },
  // error
  {
    key: 'error|/error',
    description: 'error',
    command: 'error'
  },
  // bug
  {
    key: 'bug|/bug',
    description: 'bug',
    command: 'bug'
  },
  // note
  {
    key: 'note|/note',
    description: 'note',
    command: 'note'
  },
  // pen
  {
    key: 'pen|/pen',
    description: 'pen',
    command: 'pen'
  }
]