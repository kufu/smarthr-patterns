import { Cluster, Heading, Stack, Text } from 'smarthr-ui'

type Props = {
  title: string
  description: string
}

export const TitleArea: React.FC<Props> = (props) => {
  const { title, description } = props

  return (
    <Stack gap={1}>
      <Heading tag="h1" type="screenTitle">
        {title}
      </Heading>
      {description && <Text as="p">{description}</Text>}
    </Stack>
  )
}
