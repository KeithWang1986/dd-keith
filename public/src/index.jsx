import * as React from 'react';
import ReactDOM from 'react-dom';

import { LocaleProvider, LocaleValue, Button, en_US, zh_CN } from 'dd-keith-ui';

import './ext.js';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            "locale": zh_CN
        }
        this.ztreeId = "ztree" + ddCommon.GenerateUID();
    }

    OnClick(locale) {
        this.setState({
            "locale": locale
        });
    }

    render() {
        return (
            <LocaleProvider locale={this.state.locale}>
                <Button value="Button.confirm" size="lg" onClick={(props, e) => this.OnClick(zh_CN)} />
                <Button value="Button.cancel" size="sm" onClick={(props, e) => this.OnClick(en_US)} />
                <Button value="Button.cancel" size="nm" onClick={(props, e) => this.OnClick(en_US)} />
                <ul id={this.ztreeId} class="ztree"></ul>
            </LocaleProvider>
        );
    }

    componentDidMount() {
        $(document).ready(() => {
            $.fn.zTree.init($("#" + this.ztreeId), setting, zNodes);
        });
    }
}

ReactDOM.render(<App />, document.getElementById('root'));