import {Component} from 'react'

class EditableTextInput extends Component {
  state = {
    inputText: '',
    input: '',
    button: false,
  }

  onChangeInputText = event => {
    const {inputText, input} = this.state
    this.setState({inputText: event.target.value, input: inputText})
  }

  onToggleButton = () => {
    const {inputText, input} = this.state
    this.setState(prevState => ({button: !prevState.button}))
    this.setState({input: inputText})
  }

  render() {
    const {input, inputText, button} = this.state

    return (
      <>
        <div>
          <h1>Editable Text Input</h1>
          {button ? (
            <>
              <p>{input}</p>
              <button type="button" onClick={this.onToggleButton}>
                Edit
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={input}
                onChange={this.onChangeInputText}
              />
              <button type="button" onClick={this.onToggleButton}>
                Save
              </button>
            </>
          )}
        </div>
      </>
    )
  }
}

export default EditableTextInput
