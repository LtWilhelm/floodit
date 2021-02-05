export const randomInRange = (min: number, max: number) => Math.floor(Math.random() * max) + min;

export const getRandomFromArray = <T extends any>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];