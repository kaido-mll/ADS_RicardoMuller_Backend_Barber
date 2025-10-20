export function validarCpf(strCPF: string) {
    let Soma = 0;
    let Resto = 0;
    let i = 0;
    Soma = 0;
    if (!strCPF || strCPF.length !== 11 || /^(\d)\1+$/.test(strCPF)) return false;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

export function validarCnpj(strCNPJ: string): boolean {
    if (!strCNPJ || strCNPJ.length !== 14 || /^(\d)\1+$/.test(strCNPJ)) return false;

    let Soma = 0;
    let Resto = 0;
    let i = 0;

    // Pesos para os 12 primeiros dígitos
    const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    // Cálculo do primeiro dígito verificador
    for (i = 0; i < 12; i++) {
        Soma += parseInt(strCNPJ.charAt(i)) * pesos1[i];
    }
    Resto = Soma % 11;
    const digito1 = Resto < 2 ? 0 : 11 - Resto;

    if (parseInt(strCNPJ.charAt(12)) !== digito1) return false;

    // Cálculo do segundo dígito verificador
    Soma = 0; // Reset da soma
    for (i = 0; i < 13; i++) {
        Soma += parseInt(strCNPJ.charAt(i)) * pesos2[i];
    }
    Resto = Soma % 11;
    const digito2 = Resto < 2 ? 0 : 11 - Resto;

    if (parseInt(strCNPJ.charAt(13)) !== digito2) return false;

    return true;
}