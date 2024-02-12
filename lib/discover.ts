const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
};

export const fetchData = async (URLPath: string) => {
  const res = await fetch(`${process.env.BASE_URL}${URLPath}`, options);
  if (!res.ok) {
    throw new Error("Failed to fetch Data");
  }
  return res.json();
};
