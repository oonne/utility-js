let assert = require('assert');
let {Cal, Time} = require('../Utils/index');

describe('Cal 计算', function() {
  it('根据小数位置生成浮点数', function() {
    let num = Cal.getFloatNum(314159265358, 11);
    assert.equal(num, 3.14159265358);
  });
  
  it('获取小数位置', function() {
    let num = Cal.getDecimalPlace(3.14159265358);
    assert.equal(num, 11);
  });
  
  it('四舍五入', function() {
    let num = Cal.getRound(4, 3.14159265358);
    assert.equal(num, 3.1416);
  });
  it('只入不舍', function() {
    let num = Cal.getCeil(4, 3.14159265358);
    assert.equal(num, 3.1416);
  });
  it('只舍不入', function() {
    let num = Cal.getFloor(4, 3.14159265358);
    assert.equal(num, 3.1415);
  });
});

describe('Time 时间和日期', function() {
  it('日期字符转时间戳', function() {
    let d1 = Time.getDate('20180420')
    assert.equal(d1 - new Date(2018, 03, 20), 0);
  });
  it('时间字符转时间戳', function() {
    let d2 = Time.getDate('20180420125015')
    assert.equal(d2 - new Date(2018, 03, 20, 12, 50, 15), 0);
  });
  it('时间戳转字符', function() {
    let d = Time.getYYYYMMDD(new Date(2018, 03, 20));
    assert.equal(d, '20180420');
  });
});

