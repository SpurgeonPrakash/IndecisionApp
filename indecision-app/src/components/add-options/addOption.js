import React,{Component } from 'react';
class AddOption extends Component {

    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            errors:""
        }
    }

    handleAddOption(e) {
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
        const error=  this.props.handleAddOption(option);
        e.target.elements.option.value="";
        this.setState(()=>{
            return{ errors:error}
           
        });
     
    }
    render() {
      return (
        <div>
            { <p>{this.state.errors}</p>}
          <form onSubmit={this.handleAddOption}>
          
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }

  export default AddOption;