import { Button } from "../ui/button";

const SecondaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      size="lg"
      variant="outline"
      className="w-full flex items-center gap-2 justify-center text-neutral-800 px-4 py-2 h-12 md:w-60"
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
