interface Props {
  header: string;
  desc: string;
}

const PageHeaders = ({ header, desc }: Props) => {
  return (
    <>
      <h1 className="md:text-4xl min-[400px]:text-3xl text-2xl font-bold">
        {header}
      </h1>
      <p className="md:text-lg min-[400px]:text-base text-sm font-medium mt-2 text-neutral-300">
        {desc}
      </p>
    </>
  );
};

export default PageHeaders;
