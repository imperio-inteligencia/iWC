import Bag from './media/bag.svg'
import Books from './media/books.svg'
import CaretLeft from './media/caretLeft.svg'
import CaretRight from './media/caretRight.svg'
import ChatsCircle from './media/chatsCircle.svg'
import CheckCircle from './media/checkCircle.svg'
import Clock from './media/clock.svg'
import Live from './media/live.svg'
import Rocket from './media/rocket.svg'
import ThumbsUp from './media/thumbsUp.svg'
import ThumbsDownOutline from './media/thumbsDownOutline.svg'
import ThumbsDownSolid from './media/thumbsDownSolid.svg'
import TrendUp from './media/trendUp.svg'
import ThumbsUpSolid from './media/thumbsUpSolid.svg'
import ThumbsUpOutline from './media/thumbsUpOutline.svg'
import ExternalLink from './media/externalLink.svg'

/**
 * Retrieves the corresponding icon component based on the provided key.
 *
 * @param {string} key - The key representing the desired icon component.
 * @returns {import('path/to/icon/component')} The icon component corresponding to the provided key.
 */
function mapper (key) {
  return {
    Books,
    Bag,
    CaretLeft,
    CaretRight,
    ChatsCircle,
    CheckCircle,
    Clock,
    Live,
    Rocket,
    ThumbsUp,
    ThumbsUpSolid,
    ThumbsUpOutline,
    ThumbsDownOutline,
    ThumbsDownSolid,
    TrendUp,
    ExternalLink
  }[key]
}

export default mapper
