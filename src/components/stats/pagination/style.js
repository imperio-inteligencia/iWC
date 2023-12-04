import css from '@standard/css'

const style = css`
  .pagination {
    align-items: center;
    display: none;
    gap: var(--spacing_inset-xs);
    position: absolute;
    right: 0;
    top: 0;
  }

  @media (width >= 448px) {
    .pagination {
      display: flex;
    }
  }

  .pagination__prev,
  .pagination__next {
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    height: 48.8px;
    justify-content: center;
    opacity: 1;
    width: 48.8px;
  }

  .pagination[page="start"] .pagination__prev {
    cursor: auto;
    opacity: .28;
  }

  .pagination[page="end"] .pagination__next {
    cursor: auto;
    opacity: .28;
  }
`

export default style
