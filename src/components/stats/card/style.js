import css from '@standard/css'

const style = css`
  .card {
    background-color: var(--color-pure-white);
    border: var(--border-width-hairline) solid var(--color-pure-white);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-level-1) var(--color-master-light);
    content-visibility: auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    min-width: 85%;
    padding: var(--spacing_inset-xs);
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

  .card__properties {
    display: grid;
    gap: var(--spacing_inset-nano);
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }

  @media (width >= 1056px) {
    .card__properties {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

export default style
