interface Props {
  header: string;
}

const SectionHeaderTwo = ({ header }: Props) => {
  return (
    <h1 className="sm:text-2xl min-[400px]:text-[21px] min-[350px]:text-[18px] text-base font-bold w-fit mb-6">
      {header}
    </h1>
  );
};

export default SectionHeaderTwo;
