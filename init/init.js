import yaml from "yaml";
import fs from "node:fs";
import { _PATH, PluginName_en, PluginPath } from "../function/function.js";
import path from "node:path";

export default new (class Init {
  async init() {
    try {
      await this.loadConfig();
      await this.globalVersion();
      await this.globalAuthor();
      return { boolean: true, msg: null };
    } catch (error) {
      return { boolean: false, msg: error };
    }
  }
  async loadConfig() {
    let configFolder = `${PluginPath}/config`;
    let defSetFolder = `${PluginPath}/defSet`;
    if (!fs.existsSync(configFolder)) {
      fs.mkdirSync(configFolder);
    }
    /*
    const configFilePath = `${configFolder}/config.yaml`;
    const defconfigFilePath = `${defSetFolder}/config.yaml`;
    if (!fs.existsSync(configFilePath)) {
      fs.copyFileSync(defconfigFilePath, configFilePath);
    } else {
      const defconfig = yaml.parse(fs.readFileSync(defconfigFilePath, "utf8"));
      let config = yaml.parse(fs.readFileSync(configFilePath, "utf8"));
      let updated = false;
      for (const key in defconfig) {
        if (!config.hasOwnProperty(key)) {
          config[key] = defconfig[key];
          updated = true;
        }
      }
      const updatedConfigYAML = yaml.stringify(config);
      fs.writeFileSync(configFilePath, updatedConfigYAML, "utf8");
      if (updated) {
        logger.info(logger.green(`[${PluginName_en}]${path.basename(configFilePath)}配置文件缺少键值，已从/defSet文件夹中更新`));
      }
    }
    */
    /*
        if(!fs.existsSync(`./plugins/${PluginName_en}/config/.yaml`)) {
          fs.copyFileSync(`./plugins/${PluginName_en}/defSet/.yaml`, `./plugins/${PluginName_en}/config/.yaml`)
        } else {
          let config = yaml.parse(fs.readFileSync(`./plugins/${PluginName_en}/config/.yaml`, `utf-8`))
          let configNT = config.nothingText || []
          config = config.
          let defcfg = yaml.parse(fs.readFileSync(`./plugins/${PluginName_en}/defSet/.yaml`, `utf-8`))
          let defcfgNT = defcfg.nothingText
          defcfg = defcfg.
          fs.writeFileSync(`./plugins/${PluginName_en}/config/.yaml`, yaml.stringify({ : [...new Set(config.concat(defcfg))], nothingText: [...new Set(configNT.concat(defcfgNT))] }), `utf-8`)
        }*/
  }
  async globalVersion() {
    let PluginVersion = JSON.parse(
      fs.readFileSync(`./plugins/${PluginName_en}/package.json`, `utf-8`),
    );
    PluginVersion = PluginVersion.version;
    global.PluginVersion = PluginVersion;
  }
  /* 云获取
  async globalAuthor() {
    let PluginAuthor = await fetch(`URL`).then(
      (res) => res.json(),
    );
    PluginAuthor = PluginAuthor.author;
    global.PluginAuthor = PluginAuthor;
  }
    */
  async globalAuthor() {
    let PluginAuthor = JSON.parse(
      fs.readFileSync(`./plugins/${PluginName_en}/package.json`, `utf-8`),
    );
    PluginAuthor = PluginAuthor.author;
    global.PluginAuthor = PluginAuthor;
  }
})();
