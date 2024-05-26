export function Footer() {
  return (
    <footer className="mt-14 flex flex-col items-center justify-center gap-2 py-6 text-sm text-slate-100">
      <p>
        Feito com ❤️ por <a href="/">Anderson Magro Mattei</a>
      </p>
      <p>Todos os direitos reservados © {new Date().getFullYear()}</p>
    </footer>
  );
}
