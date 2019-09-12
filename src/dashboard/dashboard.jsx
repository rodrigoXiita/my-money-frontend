import React, {Component} from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getSummary} from './dashboardActions'
import {currencyFormat} from '../common/formaters/NumberFormat'

class Dashboard extends Component {

  componentDidMount() {
    this.props.getSummary()
  }

  render(){

    const{credit, debt} = this.props.summary

    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 1.0'/>
        <Content>
          <Row>
            <ValueBox cols='12 4' color='green' icon='bank' value={currencyFormat(credit)} text='Total de Créditos'/>
            <ValueBox cols='12 4' color='red' icon='credit-card' value={currencyFormat(debt)} text='Total de Débitos'/>
            <ValueBox cols='12 4' color='blue' icon='money' value={currencyFormat(credit - debt)} text='Valor Consolidado'/>
          </Row>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state =>({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
