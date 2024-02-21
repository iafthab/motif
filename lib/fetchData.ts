const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
  next: { tags: ["collection"] },
};

export const fetchData = async (URLPath: string) => {
  const res = await fetch(`${process.env.BASE_URL}${URLPath}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    next: { tags: [URLPath] },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch Data");
  }
  return res.json();
};
