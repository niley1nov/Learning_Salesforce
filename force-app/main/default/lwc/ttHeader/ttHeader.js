import { LightningElement } from 'lwc';

export default class TtHeader extends LightningElement {
    handleCreateTask() {
        this.dispatchEvent(new CustomEvent('createtask'));
    }
}