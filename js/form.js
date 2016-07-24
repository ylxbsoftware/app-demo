class Form {
  constructor(ele) {
    this.ele = ele;
  }

  _getFields() {
    return document.getElementById(this.ele);
  }

  setFields(content) {
    this._getFields().innerHTML = content;
  }
}

let form = new Form('content');
form.setFields('通过form class实现赋值内容');
