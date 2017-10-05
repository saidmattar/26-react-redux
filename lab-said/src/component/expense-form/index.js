import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense
      ? {...props.expense}
      : {content: '', categoryId: props.categoryId };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.expense)
      this.setState({...props.expense});
    if(props.categoryId)
      this.setState({categoryId: props.categoryId});
  }

  handleChange(e){
    this.setState({content: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    if(!this.props.expense)
      this.setState({content: ''});
  }

  render(){
    return (
      <form className='expense-form' onSubmit={this.handleSubmit} >
        <input
          name='content'
          type='text'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange} required/>

        <input
          name='price'
          type='number'
          placeholder='price'
          value={this.state.value}
          onChange={this.handleChange} required/>

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }
}

export default ExpenseForm;
