

=> custom hooks are used to in bigger application  for code readability and maintainability

=> best practice always name it with useXYXY, here i have moved my api call to custom hook called useRestaurentData

=> lazy and suspense are used to split component to seperate chunk - remove from index.js and create its own js and will be called only on demand.

Controlled components & Uncontrolled componenets

if component is controlled by parent -> controlled componenets (eg: accordian components which will have close and open state inside it)

if component is not controlled by parent -> Uncontrolled componenets (eg: if opeing and closing of child accordian is controlled by parent's props)