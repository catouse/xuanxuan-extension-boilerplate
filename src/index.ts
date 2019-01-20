import xext, {DEBUG} from 'xext';
import AppView from './app';

const extension: ExtensionModule = {
    onAttach(ext: Xuanxuan.Extension) {
        if (DEBUG) {
            console.log(`Extension '${ext.displayName}' loaded from ${ext.mainFile}.`);
        }
    },
    MainView: AppView
};

export default extension;
