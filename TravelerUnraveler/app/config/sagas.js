import { takeEvery } from 'redux-saga/effects';
import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION } from '../actions/currencies';

const getLatestRate = currency => fetch(`http://api.fixer.io/latest?base=${currency}`);
function* fetchLatestConversionRates(action) {
  console.log('TODO: Update the stuff', action);
  getLatestRate('USD')
    .then(res => res.json()).then(res => console(res));
  yield;
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}
