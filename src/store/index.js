//组合字幕快，导出store实例
import { configureStore } from '@reduxjs/toolkit'
import billReducer from './modules/billStore'
import axios from 'axios'

const store = configureStore({
    reducer: {
        bill:billReducer
    }
})



export default store