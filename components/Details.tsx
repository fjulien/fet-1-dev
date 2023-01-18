import { FC } from "react";
import style from '../styles/details.module.css';

interface Detail {
  title: string;
}

export interface DetailLink extends Detail {
  isNew?: boolean;
  url: string;
}

export interface DetailsType extends Detail {
  contents: Array<string | DetailsType | DetailLink>;
  isOpen?: boolean;
}
type Props = { details: DetailsType };

const Details: FC<Props> = ({ details }) => {
  const { title, contents, isOpen = false } = details;
  const instanceOfDetailsType = (data: any): data is DetailsType => {
    return typeof data !== "string" && "contents" in data;
  }

  const instanceOfDetailLink = (data: any): data is DetailLink => {
    return typeof data !== "string" && "url" in data;
  }

  return (<details open={isOpen} className={style.details}>
    <summary className={style.summary}>{title}</summary>
    <ul>
      {
        contents.map((content, index) => {
          if (instanceOfDetailsType(content)) {
            return (
              <li className={style.li} key={`${index}+${content.title}`}>
                <Details details={content} />
              </li>
            );
          } else if (instanceOfDetailLink(content)) {
            return (
              <li className={style.li} key={index}>
                <a className={content.isNew ? 'new' : ''} href={content.url}>{content.title}</a>
              </li>
            );
          }
          return <li className={style.li} key={`${index}+${content}`}>{content}</li>;
        })
      }
    </ul>
  </details>)
}

export default Details;