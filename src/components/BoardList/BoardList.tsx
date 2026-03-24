import { useState } from 'react'
import type { Dispatch, FC, SetStateAction } from 'react'
import { useTypedSelector } from '../../hooks/redux'
import SideForm from './SideForm.tsx/SideForm'
import clsx from 'clsx'
import { FiPlusCircle } from 'react-icons/fi'
import {
    addSection,
    container,
    title,
    addButton,
    boardItemActive,
    boardItem,
} from './BoardList.css'

type TBoardListProps = {
    activeBoardId: string
    setActiveBoardId: Dispatch<SetStateAction<string>>
}

const BoardList: FC<TBoardListProps> = ({ activeBoardId, setActiveBoardId }) => {
    const { boardArray } = useTypedSelector((state) => state.boards)
    const [isFormOpen, setIsFormOpen] = useState(false)

    return (
        <div className={container}>
            <div className={title}>게시판:</div>
            {boardArray.map((board) => (
                <div key={board.boardId}>
                    <button
                        type="button"
                        className={clsx({
                            [boardItemActive]: board.boardId === activeBoardId,
                            [boardItem]: board.boardId !== activeBoardId,
                        })}
                        onClick={() => setActiveBoardId(board.boardId)}
                    >
                        {board.boardName}
                    </button>
                </div>
            ))}
            <div className={addSection}>
                {isFormOpen ? (
                    <SideForm setIsFormOpen={setIsFormOpen} />
                ) : (
                    <FiPlusCircle className={addButton}
                        role="button"
                        aria-label="게시판 추가"
                        onClick={() => setIsFormOpen(true)}
                    />
                )}
            </div>
        </div>
    )
}

export default BoardList
