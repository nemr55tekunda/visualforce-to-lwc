import { LightningElement } from 'lwc';

export default class Binding extends LightningElement {
    courseName = 'Placeholder';

    handleChange(event) {
        // Intentionally reading the wrong property to break the update flow
        this.courseName = event.detail.valueDoesNotExist;
    }
}
