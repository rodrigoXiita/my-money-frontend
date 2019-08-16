import {combineReducers} from 'redux'
import dashbordReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
  dashboard: dashbordReducer
})

export default rootReducer
