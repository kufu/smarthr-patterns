import { PageHeading, Stack } from 'smarthr-ui'

type Props = {
  title: string
  description: string
}

export const TitleArea: React.FC<Props> = (props) => {
  const { title, description } = props

  return (
    <Stack>
      <PageHeading>{title}</PageHeading>
      {description && <p>{description}</p>}
    </Stack>
  )
}
