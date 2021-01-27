import SuperApp from './Core/SuperApp';
import Application from './Playable/Core/Application';
import Config from './config';

window.RATIO = {
    XLG: 2.15,
    LG: 1.99,
    MD: 1.76,
    SM: 1.65,
    XSM: 1.59,
    MN: 1.49,
    EMN: 1.32
}

window.superApp = new SuperApp(Application, {
    config: Config
});