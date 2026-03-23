import { createSlice } from "@reduxjs/toolkit";
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
    initialState, // 이제 TS가 logArray가 ILogItem[] 임을 정확히 압니다.
    reducers: {
        // 나중에 로그를 추가하는 액션을 만들 때도 타입이 안전하게 유지됩니다.
    }
})

export const loggerReducer = loggerSlice.reducer;