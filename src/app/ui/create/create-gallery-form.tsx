export default function CreateGalleryForm() {
  return (
    <form action="" className="space-y-4 mt-5 border rounded shadow p-6">
      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          갤러리 이름
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full border rounded px-3 py-2"
          placeholder="예: 음식"
          required
        />
        <p className="text-sm text-gray-500 mt-1">
          "갤러리"는 자동으로 붙습니다. (예: 음식 → 음식 갤러리)
        </p>
      </div>

      <div>
        <label htmlFor="url" className="block font-medium mb-1">
          URL
        </label>
        <input
          type="text"
          name="url"
          id="url"
          className="w-full border rounded px-3 py-2"
          placeholder="예: food"
          required
        />
        <p className="text-sm text-gray-500 mt-1">
          갤러리 경로에 사용될 URL (예: /gallery/food)
        </p>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-[#3b4890] text-white px-4 py-2 rounded hover:bg-[#2f3b75] disabled:opacity-50"
        >신청</button>
      </div>
    </form>
  );
}
