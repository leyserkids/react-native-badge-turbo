import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    getBadgeCount(): Promise<number>;
    setBadgeCount(count: number): Promise<void>;
    isBadgeSupported(): Promise<boolean>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('BadgeTurbo');
