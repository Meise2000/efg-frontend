import App from './app';
import labels from './labels';
import { Page } from './page';

export class Welcome extends Page {

    constructor(section: HTMLElement, app: App) {
        super(section, app, labels.welcome.title);
    }

    display(): void {
    }

}