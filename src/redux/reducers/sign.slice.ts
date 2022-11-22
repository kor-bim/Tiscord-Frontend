import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
import { RootState } from '@/redux/store'

export interface signState {
  email: string
  password: string
  name: string
  gender: string
  birth: {
    year: number | string
    month: number | string
    day: number | string
  }
}

const initialState: signState = {
  email: '',
  password: '',
  name: '',
  gender: '',
  birth: {
    year: dayjs().year(),
    month: dayjs().format('M'),
    day: dayjs().format('D')
  }
}

export const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    insertEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    insertPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    insertUserInfo: (state, action: PayloadAction<signState>) => {
      state = { ...action.payload }
    }
  }
})

export const { insertEmail, insertPassword, insertUserInfo } = signSlice.actions
export const selectSign = (state: RootState) => state.sign
export default signSlice
