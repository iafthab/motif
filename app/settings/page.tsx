import Header from "../components/Header";

const SettingsPage = () => {
  return (
    <main className="bg-gradient-to-r from-[#00030a] to-[#003362] w-full overflow-auto h-screen text-slate-300 scrollHide">
      <Header />
      <section className="px-4">
        <h2 className="font-bold text-4xl text-white py-4">Settings</h2>
      </section>
    </main>
  );
};

export default SettingsPage;
