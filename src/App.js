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
      mode: "welcome",
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
      _acticle = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    } else if (this.state.mode === "create") {
      _acticle = <CreateContent onSubmit={function (_title, _desc) {
        console.log(_title, _desc);
        this.max_content_id++;
        var _contents = Array.from(this.state.contents);
        _contents.push({ id: this.max_content_id, title: _title, desc: _desc })
        this.setState({
          contents: _contents,
          mode: "read",
          selected_content_id: this.max_content_id
        });
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === "update") {
      _content = this.getReadContent();
      console.log(_content);
      _acticle = <UpdateContent data={_content} onSubmit={function (_title, _desc, _id) {
        console.log("submit_data", _title.value, _desc, _id);
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while (i < _contents.length) {
          if (_contents[i].id === _id) {
            console.log("id확인");
            _contents[i] = { id: _id, title: _title, desc: _desc }
            break;
          }
          i++;
        }
        console.log("submit", _contents);
        this.setState({
          contents: _contents
        });
        this.setState({
          contents: _contents,
          mode: "read"
        })
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
          if (_mode === "delete") {
            if (window.confirm('really?')) {
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while (i < this.state.contents.length) {
                if (_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i, 1);
                  break;
                }
                i++;
              }
              this.setState({
                mode: "welcome",
                contents: _contents
              });
              alert("deleted!")
            }
          } else {
            this.setState({
              mode: _mode
            })
          };
        }.bind(this)}></Control>

        {this.getContent()}

      </div>
    );
  }
}

export default App;