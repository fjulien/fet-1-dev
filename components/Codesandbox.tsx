import { CSSProperties, FC } from "react";

type Props =  Partial<{
  src: string,
  title: string,
  allow: string,
  sandbox: string,
  paramsUrl?: {
    path:string,
    view: 'editor' 
  }
}>

const Codesandbox: FC<Props> = (props) => {
  const {
    src,
    title,
    allow = "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",
    sandbox = "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",
    paramsUrl
  } = props;

  
  const view = paramsUrl?.view || 'editor';
  const path = paramsUrl?.path || 'index.html';


  const style: CSSProperties = {
    width: '100%',
    height: '500px', 
    border: 0, 
    borderRadius: '4px',
     overflow: 'hidden'
  }
  return (
    <iframe
      src={`https://codesandbox.io/embed${src}&fontsize=14&hidenavigation=1&theme=dark&view=${view}&module=${path}`}
      style={style}
      title={title}
      allow={allow}
      sandbox={sandbox}
    ></iframe>
  )
}

export default Codesandbox;