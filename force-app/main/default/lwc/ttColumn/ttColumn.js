import { LightningElement, api } from 'lwc';

export default class TtColumn extends LightningElement {
    @api column;

    allowDrop(event) {
        event.preventDefault();
    }

    handleDrop(event) {
        event.preventDefault();
        const taskId = event.dataTransfer.getData('text/plain');
        const fromColumnId = event.dataTransfer.getData('fromColumnId');
        const toColumnId = this.column.id;

        this.dispatchEvent(
            new CustomEvent('taskdropped', {
                detail: { taskId, fromColumnId, toColumnId },
            })
        );
    }
}
