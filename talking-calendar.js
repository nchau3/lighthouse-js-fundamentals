const talkingCalendar = function(date) {
  let message = '';
  const convertMonth = function(num) {
    let month = '';
    switch (num) {
      case '01':
        month = ('January');
        break;
      case '02':
        month = ('February');
        break;
      case '03':
        month = ('March');
        break;
      case '04':
        month = ('April');
        break;
      case '05':
        month = ('May');
        break;
      case '06':
        month = ('June');
        break;
      case '07':
        month = ('July');
        break;
      case '08':
        month = ('August');
        break;
      case '09':
        month = ('September');
        break;
      case '10':
        month = ('October');
        break;
      case '11':
        month = ('November');
        break;
      case '12':
        month = ('December');
        break;
    } return month;
  };
  
  const month = convertMonth(date.slice(5, 7));

  const convertDay = function (num) {
    num = num.toString();
    let day = '';
    if ((num[1] === '1') && (num[0] !== '1')) {
      day = num + 'st';
    } else if ((num[1] === '2') && (num[0] !== '1')) {
      day = num + 'nd';
    } else if ((num[1] === '3') && (num[0] !== '1')) {
      day = num + 'rd';
    } else {
      day = num + 'th';
    }
    if (day[0] === '0') {
      day = day.slice(1);
    }
    return day;
  }

  const day = convertDay(date.slice(8));

  message = month + ' ' + day + ', ' + date.slice(0, 4);
  return message;
};

console.log(talkingCalendar("2017/12/04"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24")); 