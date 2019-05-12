import { Anchor } from 'antd'
import styled from 'styled-components'
import { EASE_OUT } from '~src/styles/animations'
import * as c from '~src/styles/colors'

export const Container = styled.div<{ showAnchor: boolean }>`
  opacity: 0.95;
  position: fixed;
  top: 30px;
  right: 0;
  z-index: 11; // above ant badges
  transition: transform ${EASE_OUT};
  transform: translate3d(
    ${({ showAnchor }) => (showAnchor ? '0' : '100%')},
    0,
    0
  );
`

export const IconContainer = styled.div`
  position: absolute;
  left: -19px;
  bottom: 2px;
`

// prettier-ignore
export const StyledAnchor = styled(Anchor)<{ showAnchor: boolean }>`
  background-color: transparent;
  max-height: calc(100vh - 27px) !important;

  > .ant-anchor {
    background-color: ${c.WHITE}

    > .ant-anchor-ink {
      > .ant-anchor-ink-ball.visible {
        transition: opacity ${EASE_OUT};
        opacity: ${({ showAnchor }) => (showAnchor ? '1' : '0')};
      }
    }
  }
`

export const Link = styled(Anchor.Link)<{ level: number }>`
  padding: 2px 0 2px ${({ level }) => level * 8 + 12}px;
`
