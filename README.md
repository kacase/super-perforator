# Super Perforator

Local performance tracking and analysis for your TypeScript projects.

## Usage
Import the decorator where you need it. (Relative Imports available soon)
```typescript
import { perforate } from 'projects/super-perforator/src/lib/super-perforator.decorator';
```

Decorate the methods you would like to track:
```typescript
  @perforate() test() {
    return 'emptyr';
  }
```