import { LightningElement, track } from 'lwc';

export default class TtBoard extends LightningElement {
    @track columns = [
        {
            id: '1',
            title: 'To Do',
            tasks: [
                { id: '1', title: 'Task 1', details: 'Details for task 1' },
                { id: '2', title: 'Task 2', details: 'Details for task 2' },
            ],
        },
        {
            id: '2',
            title: 'In Progress',
            tasks: [
                { id: '3', title: 'Task 3', details: 'Details for task 3' },
            ],
        },
        {
            id: '3',
            title: 'Done',
            tasks: [
                { id: '4', title: 'Task 4', details: 'Details for task 4' },
            ],
        },
    ];

    handleTaskDropped(event) {
        const { taskId, fromColumnId, toColumnId } = event.detail;
        
        if(fromColumnId === toColumnId) {
            return;
        }

        const sourceColumn = this.columns.find(col => col.id === fromColumnId);
        const taskIndex = sourceColumn.tasks.findIndex(task => task.id === taskId);
        const [task] = sourceColumn.tasks.splice(taskIndex, 1);

        const targetColumn = this.columns.find(col => col.id === toColumnId);
        targetColumn.tasks.push(task);

        this.columns = [...this.columns];
    }
}