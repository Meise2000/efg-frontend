import App from './app';
import labels from './labels';
import { Page } from './page';

interface Video {
    title: string;
    link: string;
}


export class Sermons extends Page {

    static #url = 'https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UCFLblMGuKiILOvEedNYdlGA';
    static #max = 12;
    static #sync = 1000 * 60 * 30;

    #latestUpdate: number;
    #template: HTMLTemplateElement;
    #root: HTMLDivElement;

    constructor(section: HTMLElement, app: App) {
        super(section, app, labels.sermons.title);
        this.#template = section.querySelector<HTMLTemplateElement>('template');
        this.#root = section.querySelector<HTMLDivElement>('div');
    }

    display(): void {
        if (this.#isOutOfSync()) {
            this.#updateVideos();
            this.#latestUpdate = Date.now();
        }
    }

    #isOutOfSync(): boolean {
        return !this.#latestUpdate || this.#latestUpdate + Sermons.#sync < Date.now();
    }

    #updateVideos(): void {
        fetch(Sermons.#url)
            .then(response => response.json())
            .then((data: { items: Video[] }) => {
                const videos = data.items.slice(0, Sermons.#max);
                this.#showVideos(videos);
            })
            .catch(error => {
                console.error(error);
            });
    }

    #showVideos(videos: Video[]): void {
        this.#root.innerHTML = '';
        for (const video of videos) {
            const template = this.#template.content.cloneNode(true) as HTMLElement;
            template.querySelector('h2').textContent = video.title;
            const id = video.link.substr(video.link.indexOf("=") + 1);
            template.querySelector('iframe').src = 'https://youtube.com/embed/' + id + '?controls=0&autoplay=0';
            this.#root.appendChild(template);
        }
    }
}
