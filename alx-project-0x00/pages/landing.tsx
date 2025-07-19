import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
    </div>
  )
}

const LandingPage = () => {
  return (
    <div className="p-10 space-y-4">
      <h1 className="text-2xl font-bold">Landing Page Buttons</h1>

      <div className="space-y-2">
        <h2 className="font-medium">Small Buttons</h2>
        <div className="flex gap-4">
          <Button title="Small SM" className="text-sm rounded-sm" />
          <Button title="Small MD" className="text-sm rounded-md" />
          <Button title="Small Full" className="text-sm rounded-full" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="font-medium">Medium Buttons</h2>
        <div className="flex gap-4">
          <Button title="Medium SM" className="text-base rounded-sm" />
          <Button title="Medium MD" className="text-base rounded-md" />
          <Button title="Medium Full" className="text-base rounded-full" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="font-medium">Large Buttons</h2>
        <div className="flex gap-4">
          <Button title="Large SM" className="text-lg rounded-sm" />
          <Button title="Large MD" className="text-lg rounded-md" />
          <Button title="Large Full" className="text-lg rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

