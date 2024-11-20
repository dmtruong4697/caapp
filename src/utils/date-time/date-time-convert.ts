export function hhmmConvert(isoString: string): string {
    const date = new Date(isoString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const result: string = `${hours}:${minutes}`
    return result;
}