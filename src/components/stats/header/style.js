import css from '@standard/css'

const style = css`
  .header {
    height: 48.8px !important;
  }

  @media (width >= 448px) {
    .header {
      padding-right: 113.59px;
    }
  }

  .header span {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    gap: var(--spacing_inset-nano);
  }
`

export default style
