type AboutCardProps = {
  title: string;
  content: string;
  className?: React.HTMLProps<HTMLElement>["className"];
  contentClassName?: React.ComponentProps<"div">["className"];
};

export default function AboutCard({
  title,
  content,
  className,
  contentClassName,
}: AboutCardProps) {
  return (
    <div className={`bg-white rounded-md p-4 w-full lg:w-2/4 ${className}`}>
      <h3 className="text-1xl font-bold mb-3">{title}</h3>
      <p
        className={`text-xs overflow-hidden leading-normal ${contentClassName}`}
      >
        {content}
      </p>
    </div>
  );
}
