import './styles.css';
import ReactFCCtest from 'react-fcctest';
import React from 'react';
import marked from 'marked';
const renderer = new marked.Renderer();

function App() {
  return (
    <div className="App">
      <ReactFCCtest />
      <TextBoxes />
    </div>
  );
}

class TextBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(text) {
    this.setState({
      markdown: text.target.value,
    });
  }

  render () {
    return (
    <div>
      <Editor markdown={this.state.markdown} onChange={this.handleChange} />
      <Previewer markdown={this.state.markdown} />
    </div>
    )
  }
}

const Editor = (props) => {
  return (
    <textarea id="editor" onChange={props.onChange} type="text" value={props.markdown} />
  )
}

const Previewer = (props) => {
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.markdown, { renderer: renderer })}} />
  )
}

const placeholder = `# This page helps you preview markdown text.`;

export default App;
