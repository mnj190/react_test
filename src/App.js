import React, { Component } from "react";
import './App.css';
import TOC from "./components/TOC"
import ReadContent from "./components/ReadContent"
import Control from "./components/Control"
import Subject from "./components/Subject"
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "create",
      selected_content_id: 2,
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      subject: { title: "WEB", sub: "world wide web" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for information" },
        { id: 3, title: "JacaScript", desc: "JacaScript is for information" }
      ]
    }
  }

  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i++;
    }
  }

  getContent() {
    console.log("App render")
    var _title, _desc, _acticle = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _acticle = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      _acticle = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "create") {
      _acticle = <CreateContent onSubmit={function (_title, _desc) {
        console.log(_title, _desc);
        this.max_content_id++;
        var content = this.state.contents.concat(
          { id: this.max_content_id, title: _title, desc: _desc }
        )
        this.setState({
          contents: content
        });
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === "update") {
      _content = this.getReadContent();
      _acticle = <UpdateContent data={_content} onSubmit={function (_title, _desc) {
        console.log(_title, _desc);
        this.max_content_id++;
        var content = this.state.contents.concat(
          { id: this.max_content_id, title: _title, desc: _desc }
        )
        this.setState({
          contents: content
        });
      }.bind(this)}></UpdateContent>
    }
    return _acticle;
  }

  render() {

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome"
            })
          }.bind(this)}></Subject>
        <TOC onChangePage={function (id) {
          this.setState({
            mode: "read",
            selected_content_id: Number(id)
          })
        }.bind(this)} data={this.state.contents}></TOC>
        <Control onChangeMode={function (_mode) {
          this.setState({
            mode: _mode
          })
        }.bind(this)}></Control>

        {this.getContent()}

      </div>
    );
  }
}

export default App;
