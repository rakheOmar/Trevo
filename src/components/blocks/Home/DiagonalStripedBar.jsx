export default function DiagonalStripedBar() {
  return (
    <div className="w-full bg-background py-2">
      <div
        className="w-full h-[70px] relative overflow-hidden rounded-sm"
        style={{
          backgroundColor: "",
        }}
      >
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #363538 0px, #363538 2px, transparent 2px, transparent 8px)",
          }}
        />
      </div>
    </div>
  );
}
