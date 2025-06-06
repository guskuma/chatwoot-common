export interface NameGeneratorConfig {
    apiKey: string;
}
export declare class NameGenerator {
    private openai;
    constructor(config: NameGeneratorConfig);
    /**
     * Gera um nome técnico para uma função baseado no displayName e description
     * O nome gerado segue o padrão snake_case e é adequado para usar em APIs
     *
     * @param displayName - Nome amigável da função
     * @param description - Descrição da função
     * @returns Nome técnico no formato snake_case (ex: 'get_current_date', 'assign_conversation')
     */
    generateFunctionName(displayName: string, description: string): Promise<string>;
    /**
     * Verifica se um nome é único em uma lista de nomes existentes
     * Se não for único, adiciona um sufixo numérico
     */
    ensureUniqueName(baseName: string, existingNames: string[]): string;
}
