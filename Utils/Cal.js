let Cal = {
  /**
   * 根据数字和小数位置生成浮点数
   * @param {String} string: the number of the value  
   * @param {Int} decimal: the decimal place of the value 
   * @return {Float} real value
   */
  getFloatNum: (string, decimalPlace)=>{
    if (string === '') {
      return '';
    } else {
      let floatNum = '';
      let negative = false;
      let decimal = Number(decimalPlace);
      let arr = String(string).split('');
      if(arr[0]=='-'){
        negative = true;
        arr.splice(0,1);
      }
      while (arr.length<=decimal) {
        arr.unshift('0');
      }
      if (decimal) {
        arr.splice(-Number(decimal), 0, '.');
      }
      if (negative) {
        arr.unshift('-');
      }
      floatNum = parseFloat(arr.join(''));
      return floatNum;
    }
  },
  /**
   * 获取小数位置，支持科学记数法
   * @param {Float} num  
   * @return {Int} decimal place
   */
  getDecimalPlace: (num)=>{
    let eSplit = num.toString().split(/[eE]/);
    let len = (eSplit[0].split('.')[1] || '').length - (+(eSplit[1] || 0));
    return len > 0 ? len : 0;
  },
  /**
   * 去除小数点
   * @param {Float} num  
   * @return {Int} num
   */
  getString: (num) => {
    return Number(String(num).split('.').join(''));
  },
  /**
   * 根据浮点数把浮点数整理成整数
   * 过长的小数位会被丢弃
   * 过短的小数位补0
   * @param {Float} num  
   * @param {Int}  decimal 
   * @return {Int} num
   */
  getInt: (num, decimal)=>{
      let decimalLen = (num.toString().split('.')[1] || '').length;
      decimalLen = decimalLen > 0 ? decimalLen : 0;

      let str = String(num).split('.').join('');
      if (str[0]=='0') {
        str = str.substring(1)
      }
      let len = str.length;

      if (decimalLen>decimal) {
        return str.substr(0, len-decimalLen+decimal);
      } else if (decimal>decimalLen) {
        for (let i=0;i<decimal-decimalLen;i++) {
          str+='0';
        }
        return str;
      } else {
        return str;
      }
  },
  /**
   * 四舍五入
   * @decimalPlace {Int} 小数位置  
   * @originalNum {Float} 浮点数  
   * @return {Float} 
   */
  getRound (decimalPlace, originalNum){
    let originalDecimalPlace = this.getDecimalPlace(originalNum);
    let decimal = originalDecimalPlace-decimalPlace >= 0 ? (originalDecimalPlace-decimalPlace) : 0;
    let str = originalNum.toString().split('.').join('');
    let float = this.getFloatNum(str, decimal);

    float = Math.round(float);
    if (decimalPlace-originalDecimalPlace > 0) {
      float = float * Math.pow(10, decimalPlace-originalDecimalPlace)
    }

    return this.getFloatNum(float, decimalPlace);
  },
  /**
   * 只入不舍
   * @decimalPlace {Int} 小数位置  
   * @originalNum {Float} 浮点数  
   * @return {Float} 
   */
  getCeil (decimalPlace, originalNum){
    let originalDecimalPlace = this.getDecimalPlace(originalNum);
    let decimal = originalDecimalPlace-decimalPlace >= 0 ? (originalDecimalPlace-decimalPlace) : 0;
    let str = originalNum.toString().split('.').join('');
    let float = this.getFloatNum(str, decimal);

    float = Math.ceil(float);
    if (decimalPlace-originalDecimalPlace > 0) {
      float = float * Math.pow(10, decimalPlace-originalDecimalPlace)
    }

    return this.getFloatNum(float, decimalPlace);
  },
  /**
   * 只舍不如
   * @decimalPlace {Int} 小数位置  
   * @originalNum {Float} 浮点数  
   * @return {Float} 
   */
  getFloor (decimalPlace, originalNum){
    let originalDecimalPlace = this.getDecimalPlace(originalNum);
    let decimal = originalDecimalPlace-decimalPlace >= 0 ? (originalDecimalPlace-decimalPlace) : 0;
    let str = originalNum.toString().split('.').join('');
    let float = this.getFloatNum(str, decimal);

    float = Math.floor(float);
    if (decimalPlace-originalDecimalPlace > 0) {
      float = float * Math.pow(10, decimalPlace-originalDecimalPlace)
    }

    return this.getFloatNum(float, decimalPlace);
  },
  /**
   * 截断小数
   * @decimalPlace {Int} 小数位置  
   * @originalNum {Float} 浮点数  
   * @return {Float} 
   */
  getTrunc (decimalPlace, originalNum){
    let originalDecimalPlace = this.getDecimalPlace(originalNum);
    let decimal = originalDecimalPlace-decimalPlace >= 0 ? (originalDecimalPlace-decimalPlace) : 0;
    let str = originalNum.toString().split('.').join('');
    let float = this.getFloatNum(str, decimal);

    float = Math.trunc(float);
    if (decimalPlace-originalDecimalPlace > 0) {
      float = float * Math.pow(10, decimalPlace-originalDecimalPlace)
    }

    return this.getFloatNum(float, decimalPlace);
  },
}

module.exports = Cal;