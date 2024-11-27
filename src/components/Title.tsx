interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return (
    <h1 className="text-primary font-bold text-3xl text-center mb-14">
      {text}
    </h1>
  );
}

export default Title;
