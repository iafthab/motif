import { fetchData } from "@/lib/fetchData";
import Header from "@/app/components/Header";

const PersonDetails = async ({ params }: { params: { personId: string } }) => {
  const data = await fetchData(
    `/person/${params.personId}/combined_credits?language=en-US`
  );
  console.log(data);
  return (
    <main className="w-full bg-gradient-to-r from-[#31030e] to-[#890024] overflow-auto h-screen text-slate-300">
      <Header />
      <section className="p-4">
        <br />
      </section>
    </main>
  );
};

export default PersonDetails;
