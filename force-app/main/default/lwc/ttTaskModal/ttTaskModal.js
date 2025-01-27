import { api, track } from 'lwc';
import LightningModal from 'lightning/modal';

export default class TaskModal extends LightningModal {
    @track taskTitle = '';
    @track taskDetails = '';
    @track errorMessage = '';

    get isCreateDisabled() {
        return !(this.taskTitle && this.taskDetails);
    }

    handleTitleChange(event) {
        this.taskTitle = event.target.value;
        this.errorMessage = '';
    }

    handleDetailsChange(event) {
        this.taskDetails = event.target.value;
        this.errorMessage = '';
    }

    handleCancel() {
        this.close();
    }

    handleCreate() {
        if (!this.taskTitle || !this.taskDetails) {
            this.errorMessage = 'Both Task Title and Task Details are required.';
            return;
        }

        this.close({
            taskTitle: this.taskTitle,
            taskDetails: this.taskDetails,
        });
    }
}
