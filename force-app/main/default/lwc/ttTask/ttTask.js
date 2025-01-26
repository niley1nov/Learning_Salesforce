import { LightningElement, api } from 'lwc';

export default class TtTask extends LightningElement {
    @api task;
    @api columnId;

    handleDragStart(event) {
        event.dataTransfer.setData('text/plain', this.task.id);
        event.dataTransfer.setData('fromColumnId', this.columnId);
    }
}