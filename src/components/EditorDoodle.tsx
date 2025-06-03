export function EditorDoodle() {
  return (
    <div className="m-auto mt-28 w-300">
      <div className="flex gap-2 rounded-t-2xl bg-neutral-900 p-2 text-right">
        <span className="size-3 rounded-full bg-green-600" />
        <span className="size-3 rounded-full bg-yellow-400" />
        <span className="size-3 rounded-full bg-red-600" />
      </div>
      <div className="h-150 w-full rounded-b-2xl bg-neutral-800" />
    </div>
  );
}
