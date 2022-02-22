import { createSlice } from '@reduxjs/toolkit'

export const frowSlice = createSlice({
  name: 'frowCounter',
  initialState: {
    currentDesignerId: 0,
    currentDesignerName: '',
    currentDesignerDescription: '',
    currentLineId: 0,
    currentLineSummary: '',
    currentLineTitle: '',
    serviceLinesForPurchase: [],
    cost: 0,
    itemsPurchased: 0
  },
  reducers: {
    setCurrentDesignerId: (state, action) => {
       state.currentDesignerId = action.payload
    },
    setCurrentDesignerDescription: (state, action) => {
      state.currentDesignerDescription = action.payload
    },
    setCurrentDesignerName: (state, action) => {
      state.currentDesignerName = action.payload
    },
    setCurrentLineId: (state, action) => {
      state.currentLineId = action.payload
    },
    setCurrentLineTitle: (state, action) => {
      state.currentLineTitle = action.payload
    },
    setCurrentLineSummary: (state, action) => {
      state.currentLineSummary = action.payload
    },
    setServiceLinesForPurchase: (state, action) => {
      state.serviceLinesForPurchase = action.payload
    },
    incrementCost: (state, action) => {
      state.cost += action.payload
    },
    decrementCost: (state, action) => {
      state.cost -= action.payload
    },
    setCost: (state, action) => {
      state.cost = action.payload
    },
    incrementItems: (state, action) => {
      state.itemsPurchased += action.payload
    },
    decrementItems: (state, action) => {
      state.itemsPurchased -= action.payload
    },
    setItems: (state, action) => {
      state.itemsPurchased = action.payload
    },
  },
})

export const {setCurrentDesignerName, setCurrentDesignerDescription, setCurrentDesignerId, setCurrentLineId,
    setCurrentLineSummary, setCurrentLineTitle, setCost, setServiceLinesForPurchase, decrementCost,
  incrementCost, setItems, decrementItems, incrementItems} = frowSlice.actions

export default frowSlice.reducer;