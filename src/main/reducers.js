import {combineReducers} from 'redux'
import dashbordReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
  dashboard: dashbordReducer,
  tab: tabReducer
})

export default rootReducer
