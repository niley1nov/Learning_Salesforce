import { LightningElement } from 'lwc';

export default class TtBoard extends LightningElement {
    columns = [
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
}
