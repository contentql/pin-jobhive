import * as migration_20250206_132042 from './20250206_132042';

export const migrations = [
  {
    up: migration_20250206_132042.up,
    down: migration_20250206_132042.down,
    name: '20250206_132042'
  },
];
