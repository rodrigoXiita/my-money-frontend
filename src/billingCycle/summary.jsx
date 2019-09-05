import React, {Component} from 'react'
import Grid from "../common/layout/grid";
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'
import {currencyFormat} from '../common/formaters/NumberFormat'

export default ({credit, debt}) => (
    <Grid cols={'12'}>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols={'12 4'} color={'green'} icon={'bank'} value={currencyFormat(credit)} text={'Total de Créditos'}/>
                <ValueBox cols={'12 4'} color={'red'} icon={'credit-card'} value={currencyFormat(debt)} text={'Total de Débitos'}/>
                <ValueBox cols={'12 4'} color={'blue'} icon={'money'} value={currencyFormat(credit - debt)} text={'Valor Consolidado'}/>
            </Row>
        </fieldset>
    </Grid>
)

