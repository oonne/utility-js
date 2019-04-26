let Time = {
    /**
     * 时间戳转字符
     * @param {String} dateString format YYYYMMDD 
     * @return {Date} 
     */
    getDate: function(dateString){
        let len = dateString.length;
        let arr;
        let ret;

        if(len === 8){
            arr = dateString.match(/^(\d{4})(\d{2})(\d{2})$/);
            ret = new Date(arr[1], arr[2] - 1, arr[3]);
        }else if(len === 14){
            arr = dateString.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/);
            ret = new Date(arr[1], arr[2] - 1, arr[3], arr[4], arr[5], arr[6]);
        }else{
            return null;
        }

        return ret;
    },
    /**
     * 字符转时间戳
     * @param {Date} 
     * @return {String} dateString format YYYYMMDD
     */
    getYYYYMMDD: function(dateObj){
        let year = dateObj.getFullYear();
        let month = dateObj.getMonth()+1;
        let date = dateObj.getDate();
        if(month<10){
            month = '0' + month;
        }
        if(date<10){
            date = '0' + date;
        }
        return [year, month, date].join('');
    },
}

module.exports = Time;