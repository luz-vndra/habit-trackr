export function getHour(timestamp: number): number {
  return new Date(timestamp).getHours();
}
