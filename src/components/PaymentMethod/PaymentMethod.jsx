import { Button } from './PaymentMethod.styled';
import { FaCcMastercard, FaCcVisa, FaAppleAlt } from 'react-icons/fa';

const methods = Object.freeze({
  mastercard: 'mastercard',
  visa: 'visa',
  applePay: 'applepay',
});

const PaymentMethod = ({ selected, onSelect }) => {
  return (
    <>
      <Button
        selected={selected === methods.mastercard}
        onClick={onSelect(methods.mastercard)}
      >
        <FaCcMastercard size={36} /> MasterCard
      </Button>
      <Button
        selected={selected === methods.visa}
        onClick={onSelect(methods.visa)}
      >
        <FaCcVisa size={36} />
        Visa
      </Button>
      <Button
        selected={selected === methods.applePay}
        onClick={onSelect(methods.applePay)}
      >
        <FaAppleAlt size={36} />
        ApplePay
      </Button>
    </>
  );
};

export default PaymentMethod;
