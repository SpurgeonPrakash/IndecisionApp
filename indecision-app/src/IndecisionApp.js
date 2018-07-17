import React, { Component } from 'react';
import Header from './components/header/header.js';
import Action from './components/action/action.js';
import Options from './components/options/options.js';
import AddOption from './components/add-options/addOption.js';
import OptionModal from './components/options/optionModal/optionModal.js';
import './App.css';

class IndecisionApp extends Component {
    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.removeOneItem = this.removeOneItem.bind(this);
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        const json = localStorage.getItem('opt');
        console.log(json);
        const options = JSON.parse(json);
        console.log(options);
        // this.setState(()=>({options

        // }));
        this.setState(() => {
            return {
                options: options
            }
        });
    }

    componentDidUpdate(prevProps, previState) {
        if (previState.options.length !== this.state.options.length) {
            console.log("Saving Data");
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('opt', json);
        }
    }



    handleAddOption(option) {
        if (!option) {
            return `Enter Valid Option`;
        }
        
        else if (this.state.options.indexOf(option) > -1) {
            return 'Option You Entered is Already Exists'
        }
        else {
            this.setState((prevState) => {
                // console.log("jhgfjhgfjghf",this.state.options.indexOf(option));
                return {
                    
                    options: this.state.options.concat(option)
                }
            });
        }
    }

    removeAll() {
        this.setState(() => {
            return {
                options: []
            }
        }
        );
    }

    removeOneItem(option) {
        // console.log("jhgdv",option);
        this.setState((prevState) => ({
            options: prevState.options.filter((o) => {
                return o !== option;
            })
        }));
    }

    handlePick() {
        const rand = Math.floor(Math.random() * this.state.options.length);
        let choice = this.state.options[rand]
        alert(choice);
    }

    render() {
        //   const title = 'Indecision';
        //   const subtitle = 'Put your life in the hands of a computer';
        //   const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>
                <Header subtitle={this.state.subtitle} />
                <Action hasOptions={this.state.options.length > 0} getCourse={this.handlePick} />
                <Options options={this.state.options} remove={this.removeAll} removeOne={this.removeOneItem} />
                <AddOption handleAddOption={this.handleAddOption} />
                <OptionModal />
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;