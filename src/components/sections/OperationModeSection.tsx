import Mode from "@/components/small/Mode";
import Subtitle from "@/components/small/Subtitle";

const OperationalModeSection = () => {
  return (
    <div className="flex flex-col gap-16 px-[30px] md:px-[150px] py-16">
      <Subtitle icon>
        <span className="font-bold">Operation</span> Mode
      </Subtitle>

      <Mode
        index={1}
        title="Connect"
        desc="You’re currently running your store on Shopify, , or any other platform. As a first step, you’ll connect your store with our platform."
        imgSrc="/mode1.jpg"
        reversed
      />

      <Mode
        index={2}
        title="Store"
        desc="Then, you can send us your inventory and the fun begins. We’ll choose a delivery day together so your fulfilment is not interrupted."
        imgSrc="/mode2.jpg"
      />

      <Mode
        index={3}
        title="Ship"
        desc="We pick, pack and ship all incoming orders directly from our own warehouse until 12pm on the same day,"
        imgSrc="/mode3.jpg"
        reversed
      />
    </div>
  );
};

export default OperationalModeSection;
