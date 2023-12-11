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
