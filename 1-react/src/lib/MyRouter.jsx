import React from "react";
import {getComponentName} from './utils'


export const routerContext = React.createContext({});
routerContext.displayName = "RouterContext"


export class Router extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      path : window.location.pathname
    }
    this.handleChangePath = this.handleChangePath.bind(this)
    this.handleOnpopstate = this.handleOnpopstate.bind(this)
  }

  handleChangePath(path){
    this.setState({path})
    window.history.pushState({}, "", path)
  }

  handleOnpopstate(event){
    const nextPath = event.state && event.state.path
    if(!nextPath) return;
    this.setState({path : nextPath})
  }

  componentDidMount(){
    window.addEventListener('popstate', this.handleOnpopstate)
    window.history.replaceState({path : this.state.path}, "")
  }
  componentWillUnmount(){
    window.removeEventListener('popstate', this.handleOnpopstate)
    }
  

  render(){
    const contextValue = {
      path : this.state.path,
      changePath : this.handleChangePath
    }

    
    return <routerContext.Provider value = {contextValue}>
      {this.props.children}
    </routerContext.Provider>
  }
}



export const Link = ({to, ...rest})=> (

  <routerContext.Consumer>
    {({path, changePath})=>{

    
    const handleClick = (e) => {
      e.preventDefault();
      if (to !== path) changePath(to)
    }
    return <a {...rest} href = {to} onClick={handleClick}/>
    }}
  </routerContext.Consumer>

)

export const withRouter = WrappedComponent => {
  
  const WithRouter = props => (
  
    <routerContext.Consumer>
      {({ path, changePath }) => {
    
      const navigate = nextPath => {
        if(path !== nextPath) changePath(nextPath)
      }

      const match = comparedPath => {
        return path === comparedPath
      }

      const params = () => {
        const params = new URLSearchParams(window.location.search)
        const paramsObject = {};
        for (const [key, value] of params){
          paramsObject[key] = value;
        }
        return paramsObject
      }
      const enhancedProps = {
        navigate,
        match,
        params
      }
      
        return <WrappedComponent {...props} {...enhancedProps}/>
      }

      }
    </routerContext.Consumer>
  )
  WithRouter.displayName = `WithRouter${getComponentName(WrappedComponent)}`

  return WithRouter
}

export const Routes = ({children}) => {
    return (
    <routerContext.Consumer>
      {({ path }) => (
        <>
          {React.Children.map(children, child => {

          // // 리액트 엘리먼트인지 검사한다
          //   if (!React.isValidElement(child)) return

          //   // 프레그먼트인지 검사한다
          //   if (child.type === React.Fragment) return

          //   // Route 컴포넌트인지 검사한다. 덕 타이핑
          //   if (!child.props.path || !child.props.element) return

          //   // Route에 등록된 컴포넌트가 요청한 경로에 해당하는지 검사한다.
          //   // 요청 경로에서 쿼리 문자열을 제거하고 비교한다.
          //   if (child.props.path !== path.replace(/\?.*$/, "")) return

          
          const propsElement = child.props.element
          const propsPath = child.props.path
            if(path == propsPath){
              return propsElement;
            }
          
          })}
        </>
      )}
    </routerContext.Consumer>
      )

  
  };

export const Route = () => null

