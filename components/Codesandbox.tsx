import { CSSProperties, FC } from "react";

type Props = {
  src?: string,
  title?: string,
  allow?: string,
  sandbox?: string
}

const Codesandbox: FC<Props> = (props) => {
  const {
    src = "/hello-world-b5cpwn?fontsize=14&hidenavigation=1&theme=dark",
    title,
    allow = "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",
    sandbox = "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  } = props;
  const style: CSSProperties = {
    width: '100%',
    height: '500px', 
    border: 0, 
    borderRadius: '4px',
     overflow: 'hidden'
  }
  return (
    <iframe
      src={`https://codesandbox.io/embed${src}&fontsize=14&hidenavigation=1&theme=dark&view=editor`}
      style={style}
      title={title}
      allow={allow}
      sandbox={sandbox}
    ></iframe>
  )
}

export default Codesandbox;