import { Text } from 'smarthr-ui'
import styled, { css } from 'styled-components'

export interface Props {
  start: number
  end: number
  total?: number
}

// TODO: smarthr-ui で提供する
export const PageCounter: React.FC<Props> = ({ start, end, total }) => (
  <Container>
    <Text weight="bold" as="b">
      {start}
    </Text>
    -
    <Text weight="bold" as="b">
      {end}
    </Text>
    {total === undefined ? (
      '件'
    ) : (
      <>
        /
        <Text weight="bold" as="b">
          {total}
        </Text>
        件中
      </>
    )}
  </Container>
)

const Container = styled.div`
  ${({ theme: { fontSize } }) => css`
    display: inline-flex;
    align-items: baseline;
    font-size: ${fontSize.M};
    column-gap: 0.5ch;

    & > b {
      letter-spacing: 0.025em;
    }
  `}
`
