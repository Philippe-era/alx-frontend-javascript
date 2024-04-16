export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';

  let finalword = '';
  set.forEach((element) => {
    if (element && element.startsWith(startString)) finalword += `${element.slice(startString.length)}-`;
  });

  return finalword.slice(0, finalword.length - 1);
}

