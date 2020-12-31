import React, { Component } from "react";
import './App.css';

class Content extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    )
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul class="li"><a href="1.html">HTML</a></ul>
        <ul class="li"><a href="2.html">CSS</a></ul>
        <ul class="li"><a href="3.html">JavaScript </a></ul>
      </nav>
    )
  }
}

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>
          WEB
        </h1>
        world wild web
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
