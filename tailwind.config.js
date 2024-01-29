module.exports = {
  plugins: [
    require('flowbite/plugin')
],
  content: ["./public/**/*.html"],
           ["./node_modules/flowbite"];
  
           theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      main: {
        1: "#2a2d33", //  主要文本 | 输入框输入文字
        2: "#646870", //  次要文本
        3: "#8e9197", //  图标hover | 辅助及说明文字 | 输入框placeholder
        4: "#bdbfc1" //  图标默认 | 按钮和输入框 hover | 输入框文字禁用态 | 禁用文字
      },
      line: {
        1: "#d5d5d6", //  按钮和输入框默认颜色
        2: "#e4e5e7", //  默认分割线颜色
        3: "#f0f1f3" //  二级分割线颜色
      },
      fill: {
        1: "#f5f7f9", // 背景颜色
        2: "#f0f6ff" // 背景 hover 颜色
      },
      aid: {
        1: "#3185fc",
        2: "#6ccedf",
        3: "#4caf50",
        4: "#ffcf00",
        5: "#f5323c",
        6: "#8d44ad",
        7: "#ff9535",
        8: "#cadefc",
        9: "#0d4c80",
        10: "#538fad",
        11: "#526652"
      },
      btn: {
        hover: "#006ac0", // button hover
        disabled: "#DDEAFC" // button disabled
      }
    },
    fontFamily: {
      main: [
        "-apple-system",
        "PingFang SC",
        "Helvetica",
        "Microsoft YaHei UI",
        "Microsoft YaHei"
      ]
    },
    fontSize: {
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px"
    },
    boxShadow: {
      filter: "0 3px 5px 0 rgb(0 0 0 / 5%), 0 6px 15px 0 rgb(0 0 0 / 5%)"
    },
    backgroundColor: (theme) => theme("colors"),

    extend: {
      width: {
        nav: "160px"
      },
      height: {
        header: "50px"
      },
      lineHeight: {
        14: "20px",
        16: "22px"
      }
    }
  }
};
