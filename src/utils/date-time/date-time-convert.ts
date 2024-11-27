export function hhmmConvert(isoString: string): string {
    const date = new Date(isoString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const result: string = `${hours}:${minutes}`
    return result;
}

export function secondToMinuteConvert(second: number): string {
    const minutes = Math.floor(second / 60);
    const seconds = second % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}