import { siteConfig } from "@/config/site";

export type SubmitState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "success"; reference: string }
  | { status: "error"; message: string }
  | { status: "unconfigured" };

/** Referência legível para o pedido, ex.: KT-2610-4F7Q */
export function makeReference(prefix = "KT") {
  const d = new Date();
  const ym = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}`;
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${prefix}-${ym}-${rand}`;
}

/**
 * Envia o formulário para o endpoint configurado (NEXT_PUBLIC_FORM_ENDPOINT).
 * Sem endpoint, devolve "unconfigured" — nunca simula um envio bem-sucedido.
 */
export async function submitForm(form: HTMLFormElement, formName: string, refPrefix: string): Promise<SubmitState> {
  const endpoint = siteConfig.forms.endpoint;
  if (!endpoint) return { status: "unconfigured" };

  const data = new FormData(form);
  // Anti-spam: campo isco preenchido por bots
  if (String(data.get("empresa_site") ?? "").trim() !== "") return { status: "success", reference: makeReference(refPrefix) };
  data.delete("empresa_site");

  const reference = makeReference(refPrefix);
  data.append("_formulario", formName);
  data.append("_referencia", reference);
  data.append("_origem", typeof window !== "undefined" ? window.location.href : "");

  try {
    const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
    if (!res.ok) return { status: "error", message: `O servidor respondeu com o código ${res.status}. Tente novamente dentro de alguns minutos.` };
    let ref = reference;
    try {
      const json = await res.json();
      if (json && typeof json.reference === "string") ref = json.reference;
    } catch { /* resposta sem JSON */ }
    return { status: "success", reference: ref };
  } catch {
    return { status: "error", message: "Não foi possível enviar o pedido. Verifique a ligação à internet e tente novamente." };
  }
}
