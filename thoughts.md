Component thoughts

Use a VM (view model) term instead of component

Could have a property for events in the view model.  Can use it to watch for that class (any property changes on it)
ex/ this.events.watch(x => x.Property, (item) => {...});

Have a type enum for change tracking
    No Changes
    Child Changed
    Property Changed


Have template directly on VM and track it.

Have rendering property on each VM (interface, swappable?). Use it to say where in template the child VMs should be rendered, but each child VM handles its own template.  Ex/

div({}, [
    render(x => x.ChildProp)
])


Could have an incremental render based on the change tracking. Go to deepest child with a property changed, do all of its updates, mark that VM as done. Then in set timeout, to the next rendered item.  Easy enough to only do so many dom elements before next timeout.

Thoughts: How could I handle things that are simple for loops that need an index?  (ex, odd/even in containing array)

Thoughts: how to handle keyboard events, such as key down