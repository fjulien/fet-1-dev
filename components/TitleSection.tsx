import { FC } from 'react';

type Props = {
  title: string;
  children?: React.ReactNode;
};

const TitleSection: FC<Props> = ({ title, children }) => {
  const url = title.replaceAll(' ', '-').toLowerCase();
  return (
    <h2 id={url}>
      <a href={`#${url}`}>#</a> {title} {children}
    </h2>
  );
};

export default TitleSection;
