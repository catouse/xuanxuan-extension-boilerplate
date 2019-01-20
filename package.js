const path = require('path');
const fs = require('fs-extra');
const archiver = require('archiver');
const cpx = require('cpx');
const {spawn} = require('child_process');
const pkg = require('./src/package.json');

const createZipFromDir = (file, dir, destDir = false) => {
    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(file);
        const archive = archiver('zip', {
            zlib: {level: 9}
        });
        archive.on('error', reject);
        archive.on('end', resolve);
        archive.pipe(output);
        archive.directory(dir, destDir);
        archive.finalize();
    });
};

const webpackBuild = (verbose = false) => new Promise((resolve, reject) => {
    const cmd = spawn('npm', ['run', 'dist'], {shell: true, env: process.env, stdio: verbose ? 'inherit' : 'ignore'});
    cmd.on('close', resolve);
    cmd.on('error', reject);
});

const copyFiles = async () => {
    const extPkg = Object.assign({}, pkg);
    const {files} = extPkg;
    if (files) {
        delete extPkg.files;
    }
    await fs.outputJSON('./dist/package.json', extPkg, {spaces: 4});
    if (files && files.length) {
        for (const file of files) {
            cpx.copySync(path.join('./src', file), path.join('./dist', file));
        }
    }
};

const cleanDist = () => fs.emptyDir('./dist');

const createZip = () => createZipFromDir(`./release/${pkg.name}.${pkg.version}.zip`, './dist/');

const createPackage = async () => {
    await cleanDist();
    await webpackBuild();
    await copyFiles();
    await fs.ensureDir('./release');
    await createZip();
};

createPackage();
