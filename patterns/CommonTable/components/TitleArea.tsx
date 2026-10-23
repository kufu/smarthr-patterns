import { Heading, Stack } from 'smarthr-ui'

type Props = {
  title: string
  description: string
}

export const TitleArea: React.FC<Props> = (props) => {
  const { title, description } = props

  return (
    <Stack>
      {/* eslint-disable-next-line smarthr/a11y-heading-in-sectioning-content */}
      <Heading type="screenTitle">{title}</Heading>
      {description && <p>{description}</p>}
    </Stack>
  )
}
