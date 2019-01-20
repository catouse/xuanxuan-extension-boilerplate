import {ExtensionData, DEBUG} from "./xext";
import AppView from './app';

const extension: ExtensionData = {
    onAttach(ext: Xuanxuan.Extension) {
        if (DEBUG) {
            console.log(`Extension '${ext.displayName}' loaded from ${ext.mainFile}.`);
        }
    },
    MainView: AppView
};

export default extension;
