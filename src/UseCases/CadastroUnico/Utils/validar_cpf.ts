// utils/cpf.ts

/**
 * Remove tudo que não for dígito.
 */
export function limparCPF(entrada: string): string {
  return (entrada || "").replace(/\D/g, "");
}

/**
 * Retorna true se todos os dígitos são iguais (ex.: 00000000000).
 */
function todosDigitosIguais(cpf: string): boolean {
  return /^(\d)\1{10}$/.test(cpf);
}

/**
 * Calcula um dígito verificador do CPF.
 * @param base sequência base (9 dígitos para o 1º DV, 10 dígitos para o 2º DV)
 */
function calcularDigitoVerificador(base: string): number {
  const tamanho = base.length;
  const pesoInicial = tamanho + 1; // 10 para 9 dígitos, 11 para 10 dígitos
  const soma = base
    .split("")
    .reduce((acc, curr, idx) => acc + Number(curr) * (pesoInicial - idx), 0);

  const digito = (soma * 10) % 11;
  return digito === 10 ? 0 : digito;
}

/**
 * Valida um CPF (com ou sem máscara).
 */
export function validarCPF(entrada: string): boolean {
  const cpf = limparCPF(entrada);

  if (cpf.length !== 11) return false;
  if (todosDigitosIguais(cpf)) return false;

  const base9 = cpf.slice(0, 9);
  const dv1 = calcularDigitoVerificador(base9);
  if (dv1 !== Number(cpf[9])) return false;

  const base10 = cpf.slice(0, 10);
  const dv2 = calcularDigitoVerificador(base10);
  if (dv2 !== Number(cpf[10])) return false;

  return true;
}
