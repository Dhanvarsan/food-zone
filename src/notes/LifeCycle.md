
lifes cycle -- 
parent constructor -> parent render -> child constructor -> child render
componentDidMount --- calls after the component render completed. - used to make api calls [same as useEffect(but both r not same),  after rendering will call api and render data again]
parent constructor -> parent render -> child constructor -> child render -> child componentDidMount -> parent componentDidMount

React lifecycle diagram --- 
render phase -- 
{
    Mount cycle --> componentDidMount // called only on 1st render
    constructor -> render called
},{
    update cycle --> componentDidUpdate // called on each susiquent render
    setState, props, forceUpdate
}
UnMounting --> {
    componentWillUnmount

}
commit phase --react updates the DOM -> this will happen once all the child component render process completed to update DOM at one shot (better performance)

if there are 2 child in one parent lifecyle
Parent Constructor -> Parent render -> Firstchild Constructor -> Firstchild render -> SecondChild Constructor -> SecondChild render -> 
Firstchild componentDidMount -> SecondChild componentDidMount -> parent componentDidMount

componentDidUpdate