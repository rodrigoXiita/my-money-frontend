import consts from '../consts'
import axios from 'axios'
import {toastr} from "react-redux-toastr";
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions'

const BASE_URL = consts.API_URL
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
      type: 'BILLING_CYCLES_FETCHED',
      payload: request
    }
}

export function create(values){
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp=>{
                toastr.success('Sucesso', 'Operação Realizada com Sucesso')
                dispatch(init())
            })
            .catch( e => {
                e.response.data.errors.forEach( error => toastr.error('Erro', error) )
            });
    }
}

export function showUpdate(billingCycle) {
    return changeTabs(billingCycle, 'tabUpdate')
}
export function showDelete(billingCycle) {
    return changeTabs(billingCycle,'tabDelete')
}

function changeTabs(data, tab) {
    return [
        showTabs(tab),
        selectTab(tab),
        initialize('billingCycleForm', data)
    ]
}

export function init() {
    return[
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}
