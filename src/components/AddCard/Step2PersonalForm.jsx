export default function Step2PersonalForm() {
  return (
    <div className="space-y-4">
      {/* الموقف الوظيفي */}
      <div className="flex items-center gap-4">
        <label className="w-40 text-right text-sm font-medium text-gray-700">
          الموقف الوظيفي:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* المحافظة */}
      <div className="flex items-center gap-4">
        <label className="w-40 text-right text-sm font-medium text-gray-700">
          المحافظة:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* العنوان */}
      <div className="flex items-center gap-4">
        <label className="w-40 text-right text-sm font-medium text-gray-700">
          العنوان:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* المستمسكات */}
      <div className="flex items-center gap-4">
        <label className="w-40 text-right text-sm font-medium text-gray-700">
          المستمسكات:
        </label>
        <input
          type="file"
          className="flex-1 text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-ministry-green"
        />
      </div>
    </div>
  );
}
