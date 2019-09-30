import moment from 'moment';
import { DEFAULT_DATE_FORMAT, DEFAULT_DAYS_OFFSET, DATE_REGEX } from './constants';

function replacer(match, date, offset, string) {
  return moment(date, DEFAULT_DATE_FORMAT)
    .add(DEFAULT_DAYS_OFFSET, 'days')
    .format(DEFAULT_DATE_FORMAT);
}

export const convert = text => text.replace(DATE_REGEX, replacer);

export const copyTextByElementId = (elementId, originElementId) => {
  const element = document.getElementById(elementId);

  element.select();
  element.setSelectionRange(0, 99999); /*For mobile devices*/

  document.execCommand('copy');

  const originElement = document.getElementById(originElementId);
  originElement.focus();
};
