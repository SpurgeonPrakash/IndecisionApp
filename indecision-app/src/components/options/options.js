import React from 'react';
import Option from './option/option.js';
const Options=(props)=>{
    return(
        <div>
          <button onClick={props.remove}>Remove All</button>
          {
            props.options.map((option) => <Option key={option} optionText={option} removeOneItem={props.removeOne} />)
          }
        </div>
    );
}
//   class Options extends React.Component {
//     // constructor(props) {
//     //   super(props);
//     //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }
//     // handleRemoveAll() {
        
//     //   console.log(this.state.options);
//     //   // alert('handleRemoveAll');
//     // }
//     render() {
//       return (
//         <div>
//           <button onClick={this.props.remove}>Remove All</button>
//           {
//             this.props.options.map((option) => <Option key={option} optionText={option} />)
//           }
//         </div>
//       );
//     }
//   } 

export default Options;