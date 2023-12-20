import React from 'react';

export const NotificationMessage = ({ title }) => {
  return <h4 title={title}>{title}</h4>;
};

// export class NotificationMessage extends Component {

//     render() {
//         return <h4 title={this.props.title}>{this.props.title}</h4>
//     }
// }
