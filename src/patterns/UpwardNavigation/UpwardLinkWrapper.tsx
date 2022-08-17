import styled, { css } from 'styled-components'

export const UpwardLinkWrapper = styled.div`
  ${({ theme: { leading, space } }) => css`
    /* アイコン(1)とその間隔（0.25）分をずらしている */
    transform: translateX(${space(-1.25)});
    /* Stack の margin を上書くために詳細度を上げる
     * https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity */
    &&& {
      /* UpwardLink がない場合にレイアウトが崩れないように negative margin で制御 */
      margin-block-start: ${space(-1)};
    }
    e-height: ${leading.NONE};

    @media (max-width: 480px) {
      transform: revert;
    }
  `}
`
