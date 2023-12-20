import React, {Component} from "react";
import { FeedbackDiv, ButtonDiv, Button } from "./Feedback.styled";

export class Feedback extends Component {  

    render() {   
        
        const { buttonType, onClick } = this.props;
        // console.log(this.props);
        return (
            <FeedbackDiv >                
                <ButtonDiv >
                    {buttonType.map((el) => (
                        <Button onClick={onClick} name={el} key={el}>{el}</Button>
                    ))}
                </ButtonDiv>
            </FeedbackDiv>
        )
    }
} 