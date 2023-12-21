import React, { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistic } from './Statistic/Statistic';
import { Container } from './Container/Container';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonType = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage = ((good / total) * 100).toFixed(2);

  const handleClick = e => {
    console.log(e.target.name);
    switch (e.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Container title="Please leave feedback">
        <Feedback buttonType={buttonType} onClick={handleClick} />
      </Container>
      <Container title="Statistics">
        {!total ? (
          <NotificationMessage title="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={countPositiveFeedbackPercentage}
          />
        )}
      </Container>
    </div>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleClick = event => {
//     const { name } = event.target;
//     switch (name) {
//       case 'good':
//         this.setState(prevState => ({ good: prevState.good + 1 }));
//         break;
//       case 'neutral':
//         this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
//         break;
//       case 'bad':
//         this.setState(prevState => ({ bad: prevState.bad + 1 }));
//         break;
//       default:
//     }
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }
//   countPositiveFeedbackPercentage() {
//     const { good, neutral, bad } = this.state;
//     if (good + neutral + bad === 0) {
//       return;
//     }
//     return ((good / (good + neutral + bad)) * 100).toFixed(2);
//   }

//   render() {
//     const buttonType = ['good', 'neutral', 'bad'];
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     return (
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <Container title="Please leave feedback">
//           <Feedback buttonType={buttonType} onClick={this.handleClick} />
//         </Container>
//         <Container title="Statistics">
//           {!total ? (
//             <NotificationMessage title="There is no feedback" />
//           ) : (
//             <Statistic
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positiveFeedback={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Container>
//       </div>
//     );
//   }
// }
