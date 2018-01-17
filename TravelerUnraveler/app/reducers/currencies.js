import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY, swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
    case SWAP_CURRENCY:
    default:
      return state;
  }
};

console.log(initialState);
console.log(reducer(initialState, swapCurrency()));
console.log(reducer(initialState, changeCurrencyAmount('222')));

export default reducer;
