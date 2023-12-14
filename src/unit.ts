export function downloadFile(fn: string, str: string) {
  let blob = new Blob([str]);
  let element = document.createElement('a');
  let href = URL.createObjectURL(blob);
  element.setAttribute('href', href);
  element.setAttribute('download', fn);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

export function generateNumberArray(min: number, max: number): number[] {
  const result: number[] = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}


