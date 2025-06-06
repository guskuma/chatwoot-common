import OpenAI from 'openai';

export interface NameGeneratorConfig {
  apiKey: string;
}

export class NameGenerator {
  private openai: OpenAI;

  constructor(config: NameGeneratorConfig) {
    this.openai = new OpenAI({
      apiKey: config.apiKey,
    });
  }

  /**
   * Gera um nome técnico para uma função baseado no displayName e description
   * O nome gerado segue o padrão snake_case e é adequado para usar em APIs
   * 
   * @param displayName - Nome amigável da função
   * @param description - Descrição da função
   * @returns Nome técnico no formato snake_case (ex: 'get_current_date', 'assign_conversation')
   */
  async generateFunctionName(displayName: string, description: string): Promise<string> {
    try {
      const prompt = `Você deve gerar um nome técnico para uma função baseado no nome amigável e descrição fornecidos.

REGRAS:
- Use apenas letras minúsculas, números e underscore (_)
- Use o padrão snake_case (ex: get_current_date, assign_conversation)
- O nome deve ser descritivo mas conciso (máximo 50 caracteres)
- Use verbos no infinitivo quando apropriado
- Não use artigos, preposições ou palavras desnecessárias
- O nome deve ser único e específico para a função

EXEMPLOS:
- "Recupera data e hora atual" → "get_current_datetime"
- "Transferir conversa para agente" → "assign_conversation" 
- "Buscar informações sobre procedimentos" → "query_procedure_info"
- "Criar evento no calendário" → "create_calendar_event"
- "Verificar disponibilidade de horário" → "check_time_availability"

ENTRADA:
Nome amigável: "${displayName}"
Descrição: "${description}"

Responda APENAS com o nome técnico gerado, sem explicações:`;

      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.1, // Baixa temperatura para respostas mais consistentes
        max_tokens: 50,
      });

      const generatedName = response.choices[0]?.message?.content?.trim();
      
      if (!generatedName) {
        throw new Error('Não foi possível gerar um nome para a função');
      }

      // Validação básica do nome gerado
      if (!/^[a-z][a-z0-9_]*[a-z0-9]$/.test(generatedName)) {
        throw new Error(`Nome gerado "${generatedName}" não segue o padrão esperado`);
      }

      return generatedName;
    } catch (error) {
      console.error('Erro ao gerar nome da função:', error);
      
      // Fallback: gera um nome básico baseado no displayName
      const fallbackName = displayName
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '') // Remove caracteres especiais
        .trim()
        .replace(/\s+/g, '_') // Substitui espaços por underscore
        .substring(0, 50); // Limita a 50 caracteres
      
      return fallbackName || 'custom_function';
    }
  }

  /**
   * Verifica se um nome é único em uma lista de nomes existentes
   * Se não for único, adiciona um sufixo numérico
   */
  ensureUniqueName(baseName: string, existingNames: string[]): string {
    let uniqueName = baseName;
    let counter = 1;
    
    while (existingNames.includes(uniqueName)) {
      uniqueName = `${baseName}_${counter}`;
      counter++;
    }
    
    return uniqueName;
  }
} 