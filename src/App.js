import React, { Component } from "react";
import './App.css';
import TOC from "./components/TOC"
import ReadContent from "./components/ReadContent"
import Control from "./components/Control"
import Subject from "./components/Subject"
import CreateContent from "./components/CreateContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
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
  render() {
    console.log("App render")
    var _title, _desc, _acticle = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _acticle = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _acticle = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === "create") {
      _acticle = <CreateContent></CreateContent>
    }
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

        {_acticle}

      </div>
    );
  }
}

export default App;
