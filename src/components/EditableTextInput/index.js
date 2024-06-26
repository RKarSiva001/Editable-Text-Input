import {Component} from 'react'

class EditableTextInput extends Component {
  state = {
    input: '',
    button: false,
  }

  onChangeInputText = event => {
    this.setState({input: event.target.value})
  }

  onToggleButton = () => {
    this.setState(prevState => ({button: !prevState.button}))
  }

  render() {
    const {input, button} = this.state

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
