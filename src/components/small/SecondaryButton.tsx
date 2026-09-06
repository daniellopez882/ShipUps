import { Button } from "../ui/button";

const SecondaryButton = ({
  href,
  disabled,
  title,
  children,
}: {
  href?: string;
  disabled?: boolean;
  title?: string;
  children: React.ReactNode;
}) => {
  const className =
    "w-full flex items-center gap-2 justify-center text-neutral-800 px-4 py-2 h-12 md:w-60";
  if (href && !disabled) {
    return (
      <Button asChild size="lg" variant="outline" className={className}>
        <a href={href}>{children}</a>
      </Button>
    );
  }
  return (
    <Button size="lg" variant="outline" className={className} disabled={disabled} title={title}>
      {children}
    </Button>
  );
};

export default SecondaryButton;
