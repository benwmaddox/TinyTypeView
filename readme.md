# Tiny Type View

An experiment in SPA view design. Intended to keep strong typing, a single model with all state, a small file size, and good enough performance.

## Structure

### Virtual Element

Representation of each html node. There are helper functions for every tag recognized by typescript (div, a, span, etc).

### Render
Takes the virtual elements and updates the DOM.

