
class Datejs {
    constructor(date){
        this.date = date? new Date(date): new Date()
    }
    format(formatStr){
        const year = this.date.getFullYear()
        const month = this.handler(this.date.getMonth() + 1)
        const day = this.handler(this.date.getDate())
        const hour = this.handler(this.date.getHours())
        const minutes = this.handler(this.date.getMinutes())
        const seconds = this.handler(this.date.getSeconds)
        const week = this.handlerWeek(this.date.getDay())
        console.log(week)
        return formatStr.replace('YYYY', year).replace('MM', month).replace('DD',day).replace('HH',hour).replace('mm', minutes).replace('ss', seconds).replace('dd', week)
    }
    handler(num){
        return num<10? '0' + num : num
    }
    handlerWeek(week) {
        let weekday = ''
        switch(week){
            case 0:
                weekday = '星期日'
                break;
            case 1:
                weekday = '星期一'
                break;
            case 2:
                weekday = '星期二'
                break;
            case 3:
                weekday = '星期三'
                break;
            case 4:
                weekday = '星期四'
                break;
            case 5:
                weekday ='星期五';
                break;
            default: 
                weekday = '星期六'
        }
        return weekday
    }
}
export default Datejs