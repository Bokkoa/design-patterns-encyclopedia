import { proxy } from "valtio";

interface IState {
  sceneLoaded: boolean
  searchIndex: number
  searchCriteria: string
  patterns: {}
  selectedPattern: number | null
}

export const state = proxy<IState>({ 
  sceneLoaded: false,
  searchIndex: 0, 
  searchCriteria: '', 
  patterns: {}, 
  selectedPattern: null 
});