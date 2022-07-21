import { MouseEventHandler } from 'react';

export type SelectPriceModalProps = {
    currentCurrency: string,
    currencies: string[],
    selectCurrency: MouseEventHandler<HTMLSpanElement>
}
