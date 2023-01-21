import { Story } from '@storybook/react'
import { useState } from 'react'

import { CancelDialog, DeleteDialog, DeleteWithInfluenceDialog } from './DeleteDialog'

const Template: Story = ({ withInfluence, cancel }) => {
  const [isOpen, setIsOpen] = useState(true)
  const handleAction = () => null
  const handleClose = () => setIsOpen(false)

  const props = {
    isOpen,
    handleAction,
    handleClose,
  }

  if (withInfluence) return <DeleteWithInfluenceDialog {...props} />
  if (cancel) return <CancelDialog {...props} />
  return <DeleteDialog {...props} />
}

export const Default = Template.bind({})
Default.storyName = '基本'

export const WithInfluence = Template.bind({})
WithInfluence.args = { withInfluence: true }
WithInfluence.storyName = '影響範囲がある場合'

export const Cancel = Template.bind({})
Cancel.args = { cancel: true }
Cancel.storyName = '取り消しダイアログ'

export default {
  title: '削除ダイアログ',
  parameters: {
    docs: {
      // false にしないと、docs全体にダイアログがかかってしまう
      inlineStories: false,
    },
  },
}
