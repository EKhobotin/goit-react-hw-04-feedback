import React from 'react';
import { FeedbackDiv, ButtonDiv, Button } from './Feedback.styled';

export const Feedback = ({ buttonType, onClick }) => {
  return (
    <FeedbackDiv>
      <ButtonDiv>
        {buttonType.map(el => (
          <Button onClick={onClick} name={el} key={el}>
            {el}
          </Button>
        ))}
      </ButtonDiv>
    </FeedbackDiv>
  );
};

// export class Feedback extends Component {

//     render() {

//         const { buttonType, onClick } = this.props;
//         // console.log(this.props);
//         return (
//             <FeedbackDiv >
//                 <ButtonDiv >
//                     {buttonType.map((el) => (
//                         <Button onClick={onClick} name={el} key={el}>{el}</Button>
//                     ))}
//                 </ButtonDiv>
//             </FeedbackDiv>
//         )
//     }
// }
