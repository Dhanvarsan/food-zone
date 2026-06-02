

=> custom hooks are used to in bigger application  for code readability and maintainability

=> best practice always name it with useXYXY, here i have moved my api call to custom hook called useRestaurentData

=> lazy and suspense are used to split component to seperate chunk - remove from index.js and create its own js and will be called only on demand.