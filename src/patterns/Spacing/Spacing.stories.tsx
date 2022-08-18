export { Default as 基本 } from './Base.stories'
export { Default as ダイアログ } from './Dialog.stories'

export default {
  title: '余白の取り方',
  parameters: {
    docs: {
      // false にしないと、docs全体にダイアログがかかってしまう
      inlineStories: false,
    },
  },
}
