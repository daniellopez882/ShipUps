import Mode from "@/components/small/Mode";
import Subtitle from "@/components/small/Subtitle";

const OperationModeSection = () => {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="flex flex-col gap-16 px-[30px] md:px-[150px] py-16"
    >
      <Subtitle id="how-it-works-heading" icon>
        <span className="font-bold">Operation</span> Mode
      </Subtitle>

      <Mode
        index={1}
        title="Connect"
        desc="You’re running your store on Shopify or any other platform. As a first step, you connect your store with our platform."
        imgSrc="/mode1.jpg"
        imgAlt="Illustration: a courier on a scooter with a delivery bag, following a route between map pins"
        reversed
      />
      <Mode
        index={2}
        title="Store"
        desc="Then you send us your inventory and the fun begins. We choose a delivery day together so your fulfilment is not interrupted."
        imgSrc="/mode2.jpg"
        imgAlt="Illustration: a warehouse worker in a hi-vis vest pushes a cart of parcels past storage shelves"
      />
      <Mode
        index={3}
        title="Ship"
        desc="We pick, pack and ship all incoming orders directly from our own warehouse, until 12pm on the same day."
        imgSrc="/mode3.jpg"
        imgAlt="Illustration: a courier on a scooter with parcels, a delivery drone and a city map"
        reversed
      />
    </section>
  );
};

export default OperationModeSection;
