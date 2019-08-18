// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    //不能有不规则的空格
    "no-irregular-whitespace": 2,
    //不能用多余的空格
    "no-multi-spaces": 0,
    //函数调用时 函数名与()之间不能有空格
    "no-spaced-func": 2,
    //一行结束后面不要有空格
    "no-trailing-spaces": 0,
    //逗号前后的空格
    "comma-spacing": 0,
    //对象字面量中冒号的前后空格
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],
    //大括号内是否允许不必要的空格
    "object-curly-spacing": [0, "never"],
    //小括号里面要不要有空格
    "space-in-parens": [0, "never"],
    //缩进风格
    "indent": ["off", 2],
    //return throw case后面要不要加空格
    "keyword-spacing": 0,
    //函数定义时括号前面要不要有空格
    "space-before-function-paren": [0, "always"],
  }
}
