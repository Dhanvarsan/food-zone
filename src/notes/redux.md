Redux is a centralized obj tht holds the state of the project
it consists of slices -> eg: cart slice, user slice
redux toolkit (latest one used)
write data in store ------------
add cart -> (clicked) -> dispatch(action) -> calls a function (reducer)=> this function updates the cart slice
read data from store -----------
selector (subscribing to the store)

install @reduxjs/toolkit and react-redux (bridge between redux and react)
build our store
connect our store to our app
slice(cart Slice)
dispatch(aciton)
selector(subscribing)

configStore will come from @reduxjs/toolkit

Provider will come from react-redux -{to provide store to our application}
