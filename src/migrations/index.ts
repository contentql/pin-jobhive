import * as migration_20250127_115849 from './20250127_115849';

export const migrations = [
  {
    up: migration_20250127_115849.up,
    down: migration_20250127_115849.down,
    name: '20250127_115849'
  },
];
