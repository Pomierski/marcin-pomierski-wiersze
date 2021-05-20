import moment from 'moment';

moment().format('DD-MM-YYYY');

const polishMonths = [
  'Styczeń',
  'Luty',
  'Marzec',
  'Kwiecień',
  'Maj',
  'Czerwiec',
  'Lipiec',
  'Sierpień',
  'Wrzesień',
  'Październik',
  'Listopad',
  'Grudzień',
];

const polishMonthsNormalized = [
  'styczen',
  'luty',
  'marzec',
  'kwiecien',
  'maj',
  'czerwiec',
  'lipiec',
  'sierpien',
  'wrzesien',
  'pazdziernik',
  'listopad',
  'grudzien',
];

const getMonthFromDate = (date) => {
  date = moment(date);
  return polishMonths[date.month()];
};

const getLinkFromDate = (date) => {
  date = moment(date);
  return `/wiersze/${date.year()}/${polishMonthsNormalized[date.month()]}`;
};

const getMonthAndYear = (date) => {
  date = moment(date);
  const dateMonth = polishMonths[date.month()];

  return `${dateMonth} ${date.year()}`;
};

export { polishMonths, getMonthFromDate, getLinkFromDate, getMonthAndYear };
