
// useful functions:

export function buildImgUrl(path: string) {
    return `https://image.tmdb.org/t/p/original${path}`;
}

export function buildAvatarUrl(path: string) {
    return `https://image.tmdb.org/t/p/w200/${path}`;
}

export function formatTime(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}min`;
}
