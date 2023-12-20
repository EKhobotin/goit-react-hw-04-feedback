import React, { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistic } from "./Statistic/Statistic";
import { Container } from "./Container/Container";
import { NotificationMessage } from "./NotificationMessage/NotificationMessage";


export class App extends Component  {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  handleClick = (event) => { 
    const { name } = event.target;    
    switch (name) {
      case "good": this.setState((prevState) => ({ good: prevState.good + 1 }));
        break;
      case "neutral": this.setState((prevState)=>({neutral: prevState.neutral+1}))
        break;
      case "bad": this.setState((prevState) => ({ bad: prevState.bad + 1 }))
        break;
      default:
    }
   };
  
  countTotalFeedback() { 
    const { good, neutral, bad } = this.state
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage() {    
    const { good, neutral, bad } = this.state
    if (good + neutral + bad === 0) {return}
    return (good / (good + neutral + bad)*100).toFixed(2);
  }


  render() {
    
    const buttonType = ["good", "neutral", "bad"];
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback();
    return (<div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Container title = "Please leave feedback">
        <Feedback buttonType={buttonType} onClick={this.handleClick} />
      </Container>  
      <Container title="Statistics">
        {!total ? <NotificationMessage title="There is no feedback"/>:
      <Statistic good={good} neutral={neutral} bad={bad} total={total} positiveFeedback={this.countPositiveFeedbackPercentage()} />}
      </Container>
    </div>)
    
  };
};
