import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToRecord extends NavigationMixin(LightningElement) {
    @api recordId;
    @api label = 'View Record';
    @api autoNavigate = false; // Optional: auto-navigate on load
    
    connectedCallback() {
        if (this.autoNavigate && this.recordId) {
            this.performNavigation();
        }
    }
    
    navigate(event) {
        event.preventDefault();
        this.performNavigation();
    }
    
    performNavigation() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                actionName: 'view'
            }
        });
    }
}