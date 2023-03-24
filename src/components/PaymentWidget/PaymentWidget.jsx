import React, { Component } from 'react';
import { Container } from './PaymentWidget.styled';
import PaymentMethod from 'components/PaymentMethod/PaymentMethod';
import VisaPaymentForm from 'components/VisaPaymentForm/VisaPaymentForm';
import MasterCardPaymentForm from 'components/MasterCardPaymentForm/MasterCardPaymentForm';

const methods = Object.freeze({
  mastercard: 'mastercard',
  visa: 'visa',
  applePay: 'applepay',
});

class PaymentWidget extends Component {
  state = {
    selectedMethod: null,
  };
  selectPaymentMethod = method => () => {
    this.setState({ selectedMethod: method });
  };
  render() {
    const { selectedMethod } = this.state;
    return (
      <Container>
        <PaymentMethod
          selected={selectedMethod}
          onSelect={this.selectPaymentMethod}
        />

        {selectedMethod === methods.mastercard && <MasterCardPaymentForm />}
        {selectedMethod === methods.visa && <VisaPaymentForm />}
        {selectedMethod === methods.applePay && <div> Applepay Form</div>}
      </Container>
    );
  }
}

export default PaymentWidget;
