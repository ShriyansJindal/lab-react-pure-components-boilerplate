Simple Component - Simple components re-renders on every render irrespective of whether the props have changed or not. 

Pure Component : Pure Components doesn't re-renders on every render before re-rendering it will first check if the value of props are same or not if the value of props are same it will not re-render otherwise it will render again.Also it prevents unnecessary render. 

Pure component is better, because it prevents unnecessary renders by memorizing the ouput for the same props.
