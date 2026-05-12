import Benefits from "@/component/Benifit/Benifit";

export const metadata = {
  title: "Benefits Page",
  description: "Our benefits and features section",
};

export default function BenefitsPage() {
  return (
    <main className="w-full min-h-screen">
      <Benefits />
    </main>
  );
}