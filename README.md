# coco-toolbox

This repository contains a collection of utilities used within Twin Digital organization. The following utilities are currently available:

- `removeLeadingSlash`

## `removeLeadingSlash`

**Description:**

Removes leading slash from a path string.

**Usage:**

```
import { removeLeadingSlash } from './path/to/removeLeadingSlash.ts';

const path = '/example/path';
const sanitizedPath = removeLeadingSlash(path);
console.log(sanitizedPath); // 'example/path'
```