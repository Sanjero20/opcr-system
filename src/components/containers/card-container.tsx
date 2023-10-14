import { Card } from '../ui/card';

type MainContainerProps = {
  children: React.ReactNode;
};

function CardContainer({ children }: MainContainerProps) {
  return <Card className="mx-auto h-full w-5/6 p-4">{children}</Card>;
}

export default CardContainer;