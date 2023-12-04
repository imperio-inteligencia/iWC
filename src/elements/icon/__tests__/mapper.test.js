import mapper from '@elements/icon/mapper'

jest.mock('@elements/icon/media/bag.svg', () => '/url-mock-bag.svg')
jest.mock('@elements/icon/media/books.svg', () => '/url-mock-books.svg')
jest.mock('@elements/icon/media/caretLeft.svg', () => '/url-mock-caret-left.svg')
jest.mock('@elements/icon/media/caretRight.svg', () => '/url-mock-caret-right.svg')
jest.mock('@elements/icon/media/checkCircle.svg', () => '/url-mock-check-circle.svg')
jest.mock('@elements/icon/media/chatsCircle.svg', () => '/url-mock-chats-circle.svg')
jest.mock('@elements/icon/media/clock.svg', () => '/url-mock-clock.svg')
jest.mock('@elements/icon/media/live.svg', () => '/url-mock-live.svg')
jest.mock('@elements/icon/media/rocket.svg', () => '/url-mock-rocket.svg')
jest.mock('@elements/icon/media/thumbsUp.svg', () => '/url-mock-thumbs-up.svg')
jest.mock('@elements/icon/media/trendUp.svg', () => '/url-mock-trend-up.svg')
jest.mock('@elements/icon/media/thumbsDownOutline.svg', () => '/url-mock-thumbs-down-outline.svg')
jest.mock('@elements/icon/media/thumbsDownSolid.svg', () => '/url-mock-thumbs-down-solid.svg')
jest.mock('@elements/icon/media/thumbsUpSolid.svg', () => '/url-mock-thumbs-up-solid.svg')
jest.mock('@elements/icon/media/thumbsUpOutline.svg', () => '/url-mock-thumbs-up-outline.svg')
jest.mock('@elements/icon/media/externalLink.svg', () => '/url-mock-external-link.svg')

describe('@elements/icon', () => {
  test('should return the Bag icon for the corresponding tag name', () => {
    const url = mapper('Bag')
    expect(url).toBe('/url-mock-bag.svg')
  })

  test('should return the Books icon for the corresponding tag name', () => {
    const url = mapper('Books')
    expect(url).toBe('/url-mock-books.svg')
  })

  test('should return the CaretLeft icon for the corresponding tag name', () => {
    const url = mapper('CaretLeft')
    expect(url).toBe('/url-mock-caret-left.svg')
  })

  test('should return the CaretRith icon for the corresponding tag name', () => {
    const url = mapper('CaretRight')
    expect(url).toBe('/url-mock-caret-right.svg')
  })

  test('should return the ChatsCircle icon for the corresponding tag name', () => {
    const url = mapper('ChatsCircle')
    expect(url).toBe('/url-mock-chats-circle.svg')
  })

  test('should return the CheckCircle icon for the corresponding tag name', () => {
    const url = mapper('CheckCircle')
    expect(url).toBe('/url-mock-check-circle.svg')
  })

  test('should return the Clock icon for the corresponding tag name', () => {
    const url = mapper('Clock')
    expect(url).toBe('/url-mock-clock.svg')
  })

  test('should return the Live icon for the corresponding tag name', () => {
    const url = mapper('Live')
    expect(url).toBe('/url-mock-live.svg')
  })

  test('should return the Rocket icon for the corresponding tag name', () => {
    const url = mapper('Rocket')
    expect(url).toBe('/url-mock-rocket.svg')
  })

  test('should return the ThumbsUp icon for the corresponding tag name', () => {
    const url = mapper('ThumbsUp')
    expect(url).toBe('/url-mock-thumbs-up.svg')
  })

  test('should return the TrendUp icon for the corresponding tag name', () => {
    const url = mapper('TrendUp')
    expect(url).toBe('/url-mock-trend-up.svg')
  })

  test('should return the ThumbsDownOutline icon for the corresponding tag name', () => {
    const url = mapper('ThumbsDownOutline')
    expect(url).toBe('/url-mock-thumbs-down-outline.svg')
  })

  test('should return the ThumbsDownSolid icon for the corresponding tag name', () => {
    const url = mapper('ThumbsDownSolid')
    expect(url).toBe('/url-mock-thumbs-down-solid.svg')
  })

  test('should return the ThumbsUpSolid icon for the corresponding tag name', () => {
    const url = mapper('ThumbsUpSolid')
    expect(url).toBe('/url-mock-thumbs-up-solid.svg')
  })
  test('should return the ThumbsUpOutline icon for the corresponding tag name', () => {
    const url = mapper('ThumbsUpOutline')
    expect(url).toBe('/url-mock-thumbs-up-outline.svg')
  })

  test('should return the ExternalLink icon for the corresponding tag name', () => {
    const url = mapper('ExternalLink')
    expect(url).toBe('/url-mock-external-link.svg')
  })
})
