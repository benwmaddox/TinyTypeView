# Tiny Type View

An experiment in SPA view design. Intended to keep strong typing, a single model with all state, a small file size, and good enough performance.

## Structure

### Virtual Element

Representation of each html node. There are helper functions for every tag recognized by typescript (div, a, span, etc).

### State
Stores all state in one root model. State changes will be aggregated until a rebinding is requested. (Often on dom reload)

### Binder
Takes the state and applies the changes to the virtual elements as needed. Tries to minimize changes

### Render
Takes the virtual elements and updates the DOM.

## Special notes
There are some design restrictions that you should be aware of.  

* DOM elements will be cached when possible. 
* All instances in the State must have an ID. This is used for caching purposes.
* State items must be classes 
