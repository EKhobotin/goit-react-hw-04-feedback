import React from 'react';

export const Container = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

// export class Container extends Component {
//   render() {
//     const { title, children } = this.props;
//     return (
//       <div>
//         <h3>{title}</h3>
//         {children}
//       </div>
//     );
//   }
// }
