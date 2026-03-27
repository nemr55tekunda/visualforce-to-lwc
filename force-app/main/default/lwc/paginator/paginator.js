import { LightningElement, api } from 'lwc';

export default class Paginator extends LightningElement {
    @api previousButtonDisabled;
    @api nextButtonDisabled;
    @api previousButtonDisabled;
    @api nextButtonDisabled;
    @api pageNumber = 1;
    @api itemLabel = 'results';
    @api currentPage = 1;
    @api totalPages = 1;

    get statusLabel() {
        return `Page ${this.currentPage} of ${this.totalPages} (${this.pageNumber} ${this.itemLabel})`;
    }
    }

    handlePrevious() {
        this.dispatchEvent(new CustomEvent('previous'));
    }

    handleNext() {
        this.dispatchEvent(new CustomEvent('next'));
    }
}