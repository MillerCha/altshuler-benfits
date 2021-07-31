import { Subject } from 'rxjs';

const subject = new Subject();

export const messageService = {
    sendMessage:  () => subject.next(),
    getMessage: () => subject.asObservable()
};