import { fetchData } from "@/lib/fetchData";
import NavBar from "@/app/components/NavBar";
import Header from "@/app/components/Header";

const PersonDetails = async ({ params }: { params: { personId: string } }) => {
  const data = await fetchData(
    `/person/${params.personId}/combined_credits?language=en-US`
  );
  console.log(data);
  return (
    <main className=" bg-gradient-to-br from-[#31030e] to-[#890024] flex">
      <NavBar />
      <div className="w-full overflow-auto h-screen text-slate-300">
        <Header />
        <section className="p-4">
          <br />
        </section>
      </div>
    </main>
  );
};

export default PersonDetails;
