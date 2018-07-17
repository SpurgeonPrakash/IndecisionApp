import React from 'react';
const Option=(props)=>{
    return(
        <div>
          {props.optionText}
          <button onClick = { (e)=>{
              props.removeOneItem(props.optionText)
          }}>Remove</button>
        </div>
    );
}
//   class Option extends React.Component {
//     render() {
//       return (
//         <div>
//           {this.props.optionText}
//         </div>
//       );
//     }
//   }
  export default Option;