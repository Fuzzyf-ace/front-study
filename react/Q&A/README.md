### Why use const instead of let for useState?
When the component is rerendered, the function is executed again, creating a new scope, creating a new count variable, which has nothing to do with the previous variable. [From Stackoverflow](https://stackoverflow.com/questions/58860021/why-react-hook-usestate-uses-const-and-not-let)
#### We can use let, but we must use setState to update the state.
If we use let and use count++ to update the state, the component will not rerender. Always use setState to update the state.
```javascript
// This will not rerender the component
let [count, setCount] = useState(0);
count++;
```
### useState vs useReducer
useState is much simpler than useReducer; useReducer package the state and the function for updating the state together, which is more complex than useState.
We can use useState to replace useReducer by unboxing the state and the function for updating the state.


### useContext vs custom hook
useContext use a provider to provide the state and the function for updating the state, and then use useContext to get the state and the function for updating the state. 

### custom hook vs redux-react
custom hook and redux-react are both single source of truth, they are very similar. But custom hook is more simple than redux-react. For redux-react, we need to create a store, create a reducer, create a action, and then use dispatch to update the state. For custom hook, we just need to create a custom hook, and then use the custom hook to update the state. We can use custom hook to replace redux-react.
