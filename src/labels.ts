export type Lang = { 'de': string, 'en': string, 'ir': string };

interface Label {
    [key: string]: { [key: string] : Lang}
};

const labels: Label = {
    navigation: {
        home: {
            de: 'Home',
            en: 'Home',
            ir: 'صفحه'
        },
        about: {
            de: 'Über',
            en: 'About',
            ir: 'من'
        },
        appointments: {
            de: 'Termine',
            en: 'Appointments',
            ir: 'صفحه'
        },
        donation: {
            de: 'Spenden',
            en: 'Donate',
            ir: 'صفحه'
        },
        sermons: {
            de: 'Predigten',
            en: 'Sermons',
            ir: 'صفحه'
        }
    },
    welcome: {
        title: {
            de: 'Willkommen bei der Auferstehungskirche',
            en: 'Welcome to Rübenkamp Church',
            ir: 'خوش آمدید به کلیسای روبنکامپ'
        }
    },
    sermons: {
        title: {
            de: 'Predigten',
            en: 'Sermons',
            ir: 'صفحه'
        }
    },
    appointments: {
        title: {
            de: 'Termine',
            en: 'Appointments',
            ir: 'صفحه'
        }
    },
    about: {
        title: {
            de: 'Über uns',
            en: 'About',
            ir: 'من'            
        }
    }
};

export default labels;