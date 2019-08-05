import React from 'react';
import logo from './logo.svg';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_style.css';
// import 'file-loader?name=[name].[ext]!./full_editor.html';
import 'froala-editor/js/plugins.pkgd.min.js';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

// Require Font Awesome.
// import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <FroalaEditor
        // model={this.state.content}
        // onModelChange={this.handleModelChange}
      />
    </div>
  );
}

export default App;
//       <FroalaEditor
//   tag='textarea'
//   config={{
//     placeholderText: 'Edit Your Content Here!',
//     charCounterCount: false
//   }}
//   />
//   <FroalaEditorImg
//   config={{
//     placeholderText: 'Edit Your Content Here!',
//     charCounterCount: false
//   }}
// />
// <FroalaEditorButton
// config={{
//   placeholderText: 'Edit Your Content Here!',
//   charCounterCount: false
// }}
// />
