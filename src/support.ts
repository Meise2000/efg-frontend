import App from './app';
import labels from './labels';
import { Page } from './page';

export class Support extends Page {

    constructor(section: HTMLElement, app: App) {
        super(section, app, labels.sermons.title);
    }

    display(): void {
    }
}

