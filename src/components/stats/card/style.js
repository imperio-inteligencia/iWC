import css from '@standard/css'

const style = css`
  .card {
    content-visibility: auto;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    padding: var(--spacing_inset-xs);
    min-width: 85%;
    width: 85%;
  }

  @media (width >= 448px) {
    .card {
      min-width: calc(50% - 8px);
      width: calc(50% - 8px);
    }
  }

  @media (width >= 752px) {
    .card {
      min-width: calc(33.33% - 10.666px);
      width: calc(33.33% - 10.666px);
    }
  }

  @media (width >= 1056px) {
    .card {
      min-width: calc(25% - 12px);
      width: calc(25% - 12px);
    }
  }
`

export default style
