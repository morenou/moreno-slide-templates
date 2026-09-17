import { PACK } from "@/lib/deck";

const FILE = PACK.fileBase;

const MIME: Record<string, string> = {
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  zip: "application/zip",
};

async function downloadNamed(filename: string) {
  const res = await fetch(`/downloads/${filename}`);
  if (!res.ok) throw new Error(`Could not download ${filename}`);
  const buf = await res.arrayBuffer();
  const ext = filename.split(".").pop() ?? "";
  const blob = new Blob([buf], { type: MIME[ext] ?? "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export async function downloadPptx() {
  await downloadNamed(`${FILE}.pptx`);
}

export async function downloadZip() {
  await downloadNamed(`${FILE}.zip`);
}
