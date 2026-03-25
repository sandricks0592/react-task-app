import type { FC } from 'react'
import type { ILogItem } from '../../../types'
import { BsFillPersonBadgeFill } from 'react-icons/bs'
import { author, date, logItemWrap, message } from './LogItem.css'

type LogItemProps = {
    logItem: ILogItem
}

const LogItem: FC<LogItemProps> = ({ logItem }) => {
    const diffMs = Date.now() - Number(logItem.logTimestamp)
    const diffSec = Math.max(0, Math.floor(diffMs / 1000))
    const minutes = Math.floor(diffSec / 60)
    const seconds = diffSec % 60

    const showOffsetTime =
        diffSec === 0
            ? 'just now'
            : minutes > 0
              ? `${minutes}m ${seconds}s`
              : `${seconds}s`

    return (
        <div className={logItemWrap}>
            <div className={author}>
                <BsFillPersonBadgeFill />
                {logItem.logAuthor}
            </div>
            <div className={message}>{logItem.logMessage}</div>
            <div className={date}>{showOffsetTime}</div>
        </div>
    )
}

export default LogItem
