import React, { FC } from "react";


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

  // const details = { title, contents, isOpen };

  return (<details open={isOpen}>
    <summary>{title}</summary>
    <ul>
      {
        contents.map((content) => {
          if (instanceOfDetailsType(content)) {
            return (
              <li>
                <Details details={details} />
              </li>
            );
          } else if (instanceOfDetailLink(content)) {
            return (
              <li>
                <a className={content.isNew ? 'new' : ''} href={content.url}>{content.title}</a>
              </li>
            );
          }
          return <li>{content}</li>;
        })
      }
    </ul>
  </details>)
}

export default Details;