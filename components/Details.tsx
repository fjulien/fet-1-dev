import Link from "next/link";
import { FC } from "react";
import style from '../styles/details.module.css';
import { DetailLink, DetailsType } from "../types";

type Props = { details: DetailsType };

const Details: FC<Props> = ({ details }) => {
  const { title, contents, isOpen = false, isShow = false } = details;
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
        contents.filter((c)=>typeof c !== 'string' && c.isShow).map((content, index) => {
          if (instanceOfDetailsType(content)) {
            return (
              <li className={style.li} key={`${index}+${content.title}`}>
                <Details details={content} />
              </li>
            );
          } else if (instanceOfDetailLink(content)) {
            return (
              <li className={content.isNew? style.liNew : style.li} key={index}>
                <Link href={content.url}>{content.title}</Link>
              </li>
            );
          }
        })
      }
    </ul>
  </details>)
}

export default Details;