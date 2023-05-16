import App from './app';
import labels from './labels';
import { Page } from './page';

export class About extends Page {

    constructor(section: HTMLElement, app: App) {
        super(section, app, labels.about.title);
    }

    display(): void {
    }
}