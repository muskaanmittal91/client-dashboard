import ReactDOM from "react-dom";
import React,{Component} from "react";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  var str = JSON.stringify(values, null, 2);
  //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  window.alert(str);
  const fname=values.firstName;
  const lname=values.lastName;
  const email=values.email;
  const sex=values.sex;
  const card_number=values.card_number;
  const cvv=values.cvv;
  const card_name=values.card_holder_name;
  const rootEl = document.getElementById("root");
  ReactDOM.render(
    <div>
      <p>{str}</p>
      <p>{fname}</p>
      <p>{lname}</p>
      <p>{email}</p>
      <p>{sex}</p>
      <p>{card_number}</p>
      <p>{cvv}</p>
      <p>{card_name}</p>
      <a href="/WizardFormFirstPage">EDIT</a>
      
    </div>,
    rootEl
  );
});
