export const sleep = <Promise>(duration: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, duration);
  })
} 