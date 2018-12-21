# VSTDA

This very simple Todo App demoes how props and state are passed between parent, child, and sibling components, with a UI designed to add and delete **toDoItem** objects to / from a **toDolist** array. 

Deployment: [1.0](https://vstda-apgfoxckhu.now.sh/)

## Current Bugs

1. Default priority value doesn't reset after editing a to-do.
2. Editing to-do text adds extra values to to-do object.

## Outline

```
toDolist = [{…},{…},{…},{…}]
```

```
toDoItem = {
    completed: false,
    editEnabled: false,
    priority: 1,
    text: "Pick up milk from the market" 
}
```

### Component Hierarchy
![Component Hierarchy](https://raw.githubusercontent.com/jezreeljay/react100-vstda/master/Wireframe/Component%20Hierarchy.png)

## Wireframe
![Wireframe](https://github.com/jezreeljay/react100-vstda/blob/master/Wireframe/Wireframe.png?raw=true)
