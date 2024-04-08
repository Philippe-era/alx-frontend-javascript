export function taskFirst() {
  const first_task = 'I prefer const when I can.';
  return first_task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combine_task = 'But sometimes let';
  combine_task += getLast();

  return combine_task;
}
