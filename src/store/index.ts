import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer"; // reducer 객체를 가져옵니다.

// 1. 스토어 생성
const store = configureStore({
    reducer
});

// 2. 타입 추출 (이 파일에서 정의해서 내보냅니다)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 3. 스토어 기본 내보내기
export default store;