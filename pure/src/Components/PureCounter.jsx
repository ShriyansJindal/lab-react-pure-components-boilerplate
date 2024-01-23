import { PureComponent } from 'react'

export default class PureCounter extends PureComponent {
    constructor(){
        super()
        this.state={
            count:0,
            toggle:false
        }
    }
  render() {
    console.log("This is a pure component")
    let {count,toggle}=this.state
    
    let handleClick =()=>{
        if( toggle){
            this.setState({count:count+1})
        }
    }
    return (
      <div>
        <h2>Pure Component</h2>
        <h3>{count}</h3>
        <button onClick={()=>{this.setState({toggle:!toggle})}}>Set Toggle</button>
        <button onClick={handleClick}>Counter</button>
      </div>
    )
  }
}
