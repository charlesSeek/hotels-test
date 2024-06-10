import React from 'react';
import './PriceBlock.css';

type PriceBlockProps = {
  currency: string;
  amount: number;
  saving: number | null;
}

const PriceBlock: React.FC<PriceBlockProps> = ({
  currency,
  amount,
  saving,
}) => {
  return (
    <div className='price-block' data-testid='price-component'>
      <div className='price-title'>
        1 night total ({currency})
      </div>
      <div className='price-amount'>
        <span className='currency'>$</span>
        <span className='amount'>{amount}</span>
      </div>
      {saving && <div className='price-saving'>Save ${saving}~</div>}
    </div>
  )
}

export default PriceBlock;