export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>Não preencher <input type="text" name="empresa_site" tabIndex={-1} autoComplete="off" /></label>
    </div>
  );
}
