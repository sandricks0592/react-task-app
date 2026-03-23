import { createSlice } from "@reduxjs/toolkit";
import type { IBoard } from "../../types";

type TBoardsState = {
    modalActive: boolean;
    boardArray: IBoard[]

}

const initialState : TBoardsState = {
    modalActive: false,
    boardArray: [
        {
            boardId: 'board-0',
            boardName: "첫 번째 게시물",
            lists: [
                {
                    listId: "list-0",
                    listName: "List 1",
                    tasks: [
                        {
                            taskId: "task-0",
                            taskName: "Task 1",
                            taskDescription: "Description",
                            taskOwner: "john",
                        },
                        {
                            taskId: "task-1",
                            taskName: "Task 2",
                            taskDescription: "Description",
                            taskOwner: "shon",
                        }
                    ]
                },
                {
                    listId: "list-1",
                    listName: "List 2",
                    tasks: [
                        {
                            taskId: "task-3",
                            taskName: "Task 3",
                            taskDescription: "Description",
                            taskOwner: "lohn"
                        },
                        {
                            taskId: "task-4",
                            taskName: "Task 4",
                            taskDescription: "Description",
                            taskOwner: "phon"

                        }
                    ]
                }
            ]
        }
    ]
}

const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {

    }
})

export const boardsReducer = boardSlice.reducer; 