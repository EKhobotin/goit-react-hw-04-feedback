import React, { Component } from "react";
import {StatisticWrap,StatisticItem } from "./Statistic.styled";

export class Statistic extends Component {
    
    render() {
        const {good, neutral, bad, total, positiveFeedback} =this.props      
   
        return (<StatisticWrap>
            <StatisticItem $good={good}>Good: <span>{good}</span>
            </StatisticItem>
            <StatisticItem $neutral={neutral}>Neutral: <span>{neutral}</span>
            </StatisticItem>
            <StatisticItem $bad={bad}>Bad: <span>{bad}</span>
            </StatisticItem>
            <StatisticItem $total={total}>Total: <span>{total}</span>
            </StatisticItem>
            <StatisticItem $positiveFeedback={positiveFeedback}>Positive feedback: <span>{positiveFeedback}%</span>
            </StatisticItem>
        </StatisticWrap>)
        
    }
}