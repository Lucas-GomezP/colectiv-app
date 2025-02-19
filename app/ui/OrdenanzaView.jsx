import ORDENANZA4236 from "../lib/ORDENANZA4236.json";

export default function OrdenanzaView() {
  return (
    <div className="">
      {ORDENANZA4236.map((item, index) => (
        <div key={`ordenanza-` + index}>
          <h3 className="font-semibold text-center">{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}