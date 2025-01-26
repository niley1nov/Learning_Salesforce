import { LightningElement, api } from 'lwc';

export default class TtTask extends LightningElement {
    @api task;
    @api columnId;

    handleDragStart(event) {
        event.dataTransfer.setData('text/plain', this.task.id);
        event.dataTransfer.setData('fromColumnId', this.columnId);
    }

    handleDeleteTask(event) {
        this.dispatchEvent(
            new CustomEvent('deletetask', {
                detail: { taskId: this.task.id, columnId: this.columnId },
                bubbles: true,
                composed: true,
            })
        );
    }
}
