import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
// gets the amount 
  get amount() {
    return this._amount;
  }
 // gets the currency
  get currency() {
    return this._currency;
  }
 // sets the amount 
  set amount(amount) {
    this._amount = amount;
  }
 // sets the currency
  set currency(currency) {
    this._currency = currency;
  }
 // disoplays the full price
  displayFullPrice() {
    return `${this._amount} ${new Currency(this._currency.code, this._currency.name).displayFullCurrency()}`;
  }
   // formula for calculating converted price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

