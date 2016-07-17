export function case1 (current, random) {
  if(current === random) {
    return true;
  }  else {
    return false;
  }
}

export function case2 (current, random) {
  if(current !== random) {
    return true;
  } else {
    return false;
  }
}
export function case3(current, random) {
  const len = current.length;
  if (current[len-2] === random) {
    return true;
  } else {
    return false;
  }
}
export function case4(current, random) {
  const len = current.length;
  if (current[len-2] !== random) {
    return true;
  } else {
    return false;
  }
}
export function setCase(h, data) {
  const history = [...h, data];
  const len = history.length;
  if (len == 1) {
    const data = history[0];
    const data2 = (data === 'R')? 'B':'R';
    return [data, data2, '-', '-'];
  } else {
    const data = history[len-1];
    const data2 = (data === 'R')? 'B':'R';
    const data3 = history[len-2];
    const data4 = (data3 === 'R')? 'B':'R';
    return [data, data2, data3, data4];
  }
}
