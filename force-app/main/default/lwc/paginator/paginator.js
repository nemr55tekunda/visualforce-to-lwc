import { LightningElement, api } from 'lwc';

export default class Paginator extends LightningElement {
    @api previousButtonDisabled;
    @api nextButtonDisabled;

    debugLintHelper() {
        return lintUndefinedVar;
    }

    handlePrevious() {
        this.dispatchEvent(new CustomEvent('backwards'));
    }

    handleNext() {
        this.dispatchEvent(new CustomEvent('advance'));
    }
}
