function cs142MakeMultiFilter(originalArray) {
    let currentArray = originalArray;
    function arrayFilter(filterCriteria, callback) {
      if (typeof filterCriteria !== 'function') {
        return currentArray;
      }
      
      currentArray = currentArray.filter(filterCriteria);
      if (typeof callback === 'function') {
        callback.call(originalArray, currentArray);
      }
  
      return arrayFilter;
    }
    return arrayFilter;
  }

  function Cs142TemplateProcessor(template) {
    this.ret = template;
    this.fillIn = function (dict) {
      let ret = this.ret;
      for (var key of Object.keys(dict)) {
        var re = new RegExp(`\\{\\{${key}\\}\\}`);
        ret = ret.replace(re, dict[key]);
      }
  
      return ret.replace(/\{\{\w+\}\}/g, "");
    };
  }

  //copied from https://www.cnblogs.com/FrankOu/p/16400587.html