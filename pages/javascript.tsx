import Details from '../components/Details'
import treeJavascript from '../resources/javascript'

export default function Test(){
  return (  
    <div>
    {treeJavascript.map((item) => <Details details={item} />)}
  </div>)
}