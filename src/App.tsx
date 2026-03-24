import { useState } from 'react'
import './App.css'
import BoardList from './components/BoardList/BoardList'
import ListContainer from './components/ListContainer/ListContainer';
import { useTypedSelector } from './hooks/redux';

function App() {  
const [activeBoardId, setActiveBoardId] = useState('board-0');

const boards = useTypedSelector(state => state.boards.boardArray);

const getActiveBoard = boards.filter(board => board.boardId === activeBoardId)[0];


const lists = getActiveBoard.lists;

  return (
    <div className='appContainer'>
      <BoardList activeBoardId={activeBoardId} setActiveBoardId={setActiveBoardId}/>
      <div className='board'>
        
        
        <div className='buttons'>
          <ListContainer lists={lists} boardId={getActiveBoard.boardId} />
        </div>

        <button>
          이 게시판 삭제하기
        </button>

        <button>
          
        </button>
      </div>
    </div>
  )
}

export default App