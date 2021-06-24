import React from "react";

import { createStore, combineReducers } from "redux";

function reducer() {
  return <div></div>;
}

export default reducer;

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect,
    },
  };
};
const createPolicy = (name) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: 20,
    },
  };
};
const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
};
// Departments (reducers)
const claimHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
  } else {
    return oldListOfClaims;
  }
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  } else {
    return bagOfMoney;
  }
};
const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return listOfPolicies, action.payload.name;
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((policy) => policy != action.payload.name);
  }
  return listOfPolicies;
};

const ourDepartments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies,
});
console.clear();
const store = createStore(ourDepartments);
store.dispatch(createPolicy("ginty", 100));
store.dispatch(createClaim("ginty", 30));
console.log(store.getState());
