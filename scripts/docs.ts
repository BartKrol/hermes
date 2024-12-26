import { getDoc } from "@/lib/docs";

async function main() {
  const docs = await getDoc("1EzTkLhM9z-FD-Yw7RdXBtmbzts1cfTgevHFTZdoSn1k");
  console.log(docs);
}

main();
