import App from './app';
import labels from './labels';
import { Page } from './page';

export class Appointments extends Page {

    constructor(section: HTMLElement, app: App) {
        super(section, app, labels.appointments.title);
    }

    display(): void {
    }

}