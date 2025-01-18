export default function BankList({ data, onSelect }) {
  if (data.length === 0) {
    return (
      <p className="text-center text-gray-500">Tidak ada data ditemukan.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((bank, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-blue-100"
          onClick={() =>
            onSelect({
              id: bank[0],
              category: bank[1],
              code: bank[2],
              name: bank[3],
              address: bank[4],
              phone: bank[5],
              fax: bank[6],
              website: bank[7],
            })
          }
        >
          <h2 className="font-semibold text-lg">{bank[3]}</h2>
          <p className="text-sm">{bank[4]}</p>
        </div>
      ))}
    </div>
  );
}
