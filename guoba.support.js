import setting from "./function/setting.js";
import lodash from "lodash";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { PluginName_en, PluginName_zh } from "./function/function.js";
export function supportGuoba() {
  return {
    pluginInfo: {
      name: `${PluginName_en}`,
      title: `${PluginName_zh}(${PluginName_en})`,
      author: PluginAuthor,
      authorLink: "https://gitee.com/yll14/",
      link: "https://gitee.com/yll14/plugin-framework",
      showInMenu: "auto",
      isV3: true,
      isV2: false,
      description: `一个低级的插件框架`,
      icon: "mdi:stove",
      iconColor: "#d19f56",
      iconPath: path.join(__dirname, "resources/icon.jpg"),
    },
    configInfo: {
      schemas: [
          {
            field: 'component.input',
            label: '输入框',
            helpMessage: '',
            bottomHelpMessage: '',
            component: 'Input',
            componentProps: {},
          },
          {
            field: 'component.textarea',
            label: '多行输入框',
            helpMessage: '',
            bottomHelpMessage: '',
            component: 'InputTextArea',
            componentProps: {},
          },
          {
            field: 'component.switch',
            label: '开关',
            helpMessage: '',
            bottomHelpMessage: '',
            component: 'Switch',
            componentProps: {},
          },
      ],
      getConfigData() {
        return setting.merge();
      },
      setConfigData(data, { Result }) {
        let config = {};
        for (let [keyPath, value] of Object.entries(data)) {
          lodash.set(config, keyPath, value);
        }
        config = lodash.merge({}, setting.merge, config);
        setting.analysis(config);
        return Result.ok({}, "保存成功~ 重启后生效");
      },
    },
  };
}
