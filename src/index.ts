import xext, {ExtensionData, DEBUG} from "./xext";

const extension: ExtensionData = {
    onAttach(ext: Xuanxuan.Extension) {
        if (DEBUG) {
            console.log(`Extension '${ext.displayName}' loaded from ${ext.mainFile}.`);
        }
    },
};

export default extension;
