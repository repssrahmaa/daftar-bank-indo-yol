export default function Modal({ bank, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">{bank.name}</h2>
        <div className="text-sm space-y-3">
          <p>
            <strong>Alamat:</strong> {bank.address}
          </p>
          <p>
            <strong>Telepon:</strong> {bank.phone}
          </p>
          <p>
            <strong>Fax:</strong> {bank.fax}
          </p>
          <p>
            <a
              href={`http://${bank.website}`}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {bank.website}
            </a>
          </p>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
