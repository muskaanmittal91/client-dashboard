import React from "react";
import WizardFormFirstPage from "./WizardFormFirstPage";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";

const rootEl = document.getElementById("root");
/* class WizardForm extends Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        { <WizardFormFirstPage onSubmit={onSubmit} />}
      </div>
    );
  }
} */

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Profile</h2>
      <WizardFormFirstPage onSubmit={showResults} />
    </div>
  </Provider>,
  rootEl
);
