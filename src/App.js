import './styles.css';
import ReactFCCtest from 'react-fcctest';
import React from 'react';
import marked from 'marked';
const renderer = new marked.Renderer();

function App() {
  return (
    <div className="App">
      <Header />
      <ReactFCCtest />
      <TextBoxes />
    </div>
  );
}

const Header = () => {
  return (
    <div class="header-container">
      <h1>Simple Markdown Previewer</h1>
    </div>
  )
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
    <div class="md-container">
      <Editor markdown={this.state.markdown} onChange={this.handleChange} />
      <Previewer markdown={this.state.markdown} />
    </div>
    )
  }
}

const Editor = (props) => {
  return (
    <div>
      <h2 class="label">Input</h2>
      <textarea id="editor" class="editor" onChange={props.onChange} type="text" value={props.markdown} />
    </div>
  )
}

const Previewer = (props) => {
  return (
    <div>
      <h2 class="label">Output</h2>
      <div id="preview" class="preview" dangerouslySetInnerHTML={{ __html: marked(props.markdown, { renderer: renderer })}} />
    </div>
  )
}

const placeholder = 
`This page helps you preview markdown text.

 # This is an H1 Element.

 ## This is an H2 Element.

 [This is a Link.](www.google.com)

 \`\`\`This is a code block!\`\`\`
 
 > This is a quote

 - This is a list
   - This is a nested list

 **This is bolded text.**

 ![This is an image.](https://cdn.discordapp.com/avatars/132227983233515520/6ec6c62fccd13780a0a65da5d5b62ef8.png)

 \`\`\`
 And finally, this is a codeblock. 
 \`\`\`
`;

export default App;
