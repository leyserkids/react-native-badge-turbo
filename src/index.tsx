import BadgeTurbo from './NativeBadgeTurbo';

/**
 * Get the badge count
 * @returns The badge count
 * @platform Android
 */
export function getBadgeCount(): Promise<number> {
  return BadgeTurbo.getBadgeCount();
}

/**
 * Set the badge count
 * @param count The badge count
 * @platform Android
 */
export function setBadgeCount(count: number): Promise<void> {
  return BadgeTurbo.setBadgeCount(count);
}

/**
 * Check if the badge is supported
 * @returns True if the badge is supported, false otherwise
 * @platform Android
 */
export function isBadgeSupported(): Promise<boolean> {
  return BadgeTurbo.isBadgeSupported();
}