import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ILogItem } from "../../types";

// 타입을 정의하셨으니, 이걸 사용해야 합니다!
type TLoggerState = {
    logArray: ILogItem[]
}

// 1. 여기에 타입을 명시합니다. (핵심 포인트!)
const initialState: TLoggerState = {
    logArray: []
}

const loggerSlice = createSlice({
    name: 'logger',
    initialState,
    reducers: {
        addLog: (state, {payload}: PayloadAction<ILogItem>) => {
            state.logArray.push(payload);
        }
    }
})

export const {addLog} = loggerSlice.actions;
export const loggerReducer = loggerSlice.reducer;