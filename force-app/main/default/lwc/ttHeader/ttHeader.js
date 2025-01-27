import { LightningElement } from 'lwc';
import TaskModal from 'c/ttTaskModal';

export default class TtHeader extends LightningElement {
    async handleCreateTaskClick() {
        const result = await TaskModal.open({
            size: 'medium',
            description: 'Provide details for the new task',
        });

        if (result) {
            this.dispatchEvent(
                new CustomEvent('createtask', {
                    detail: {
                        taskTitle: result.taskTitle,
                        taskDetails: result.taskDetails,
                    },
                })
            );
        }
    }
}
