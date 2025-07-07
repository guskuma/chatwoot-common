"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PREDEFINED_FUNCTIONS = exports.CHATWOOT_FUNCTIONS = exports.CALENDAR_FUNCTIONS = exports.DATE_TIME_FUNCTIONS = void 0;
exports.getPredefinedFunction = getPredefinedFunction;
exports.getPredefinedFunctionsByCategory = getPredefinedFunctionsByCategory;
exports.getPredefinedFunctionCategories = getPredefinedFunctionCategories;
// Funções de utilidades de data e hora
exports.DATE_TIME_FUNCTIONS = [
    {
        name: 'get_current_datetime',
        displayName: 'Recupera data e hora atual',
        description: 'Retorna a data e hora atual no formato "Hoje é segunda-feira, 28 de Abril de 2025, 14:30."',
        category: 'Utilidades',
        toolType: 'predefined',
        strict: true,
        parameters: {
            type: 'object',
            properties: {},
            required: [],
            additionalProperties: false,
        },
    },
];
// Funções do Google Calendar
exports.CALENDAR_FUNCTIONS = [
    {
        name: 'list_calendar_events',
        displayName: 'Listar eventos do calendário',
        description: 'Consulta eventos em um calendário do Google Agenda em um período específico',
        category: 'Google Calendar',
        toolType: 'predefined',
        strict: true,
        parameters: {
            type: 'object',
            properties: {
                calendarId: {
                    type: 'string',
                    description: 'ID do calendário a ser consultado. Use "primary" para o calendário principal do usuário.',
                },
                startDate: {
                    type: 'string',
                    description: 'Data e hora de início do período (formato ISO: YYYY-MM-DDTHH:MM:SS)',
                },
                endDate: {
                    type: 'string',
                    description: 'Data e hora de fim do período (formato ISO: YYYY-MM-DDTHH:MM:SS)',
                },
            },
            required: ['calendarId', 'startDate', 'endDate'],
            additionalProperties: false,
        },
    },
    {
        name: 'check_time_slot_availability',
        displayName: 'Verificar disponibilidade de horário',
        description: 'Verifica se um determinado slot de tempo está disponível no Google Agenda',
        category: 'Google Calendar',
        toolType: 'predefined',
        strict: true,
        parameters: {
            type: 'object',
            properties: {
                calendarId: {
                    type: 'string',
                    description: 'ID do calendário a ser verificado. Use "primary" para o calendário principal do usuário.',
                },
                startTime: {
                    type: 'string',
                    description: 'Data e hora de início do slot (formato ISO: YYYY-MM-DDTHH:MM:SS)',
                },
                endTime: {
                    type: 'string',
                    description: 'Data e hora de fim do slot (formato ISO: YYYY-MM-DDTHH:MM:SS)',
                },
            },
            required: ['calendarId', 'startTime', 'endTime'],
            additionalProperties: false,
        },
    },
    {
        name: 'create_calendar_event',
        displayName: 'Criar evento no calendário',
        description: 'Cria um evento no Google Agenda se o slot de tempo estiver disponível',
        category: 'Google Calendar',
        toolType: 'predefined',
        strict: true,
        parameters: {
            type: 'object',
            properties: {
                calendarId: {
                    type: 'string',
                    description: 'ID do calendário onde o evento será criado. Use "primary" para o calendário principal do usuário.',
                },
                summary: {
                    type: 'string',
                    description: 'Título/resumo do evento',
                },
                description: {
                    type: ['string', 'null'],
                    description: 'Descrição detalhada do evento',
                },
                location: {
                    type: ['string', 'null'],
                    description: 'Local do evento',
                },
                startTime: {
                    type: 'string',
                    description: 'Data e hora de início do evento (formato ISO: YYYY-MM-DDTHH:MM:SS)',
                },
                endTime: {
                    type: 'string',
                    description: 'Data e hora de fim do evento (formato ISO: YYYY-MM-DDTHH:MM:SS)',
                },
                attendees: {
                    type: ['string', 'null'],
                    description: 'Lista de emails dos participantes, separados por vírgula',
                },
            },
            required: [
                'calendarId',
                'summary',
                'description',
                'location',
                'startTime',
                'endTime',
                'attendees',
            ],
            additionalProperties: false,
        },
    },
];
// Funções de gerenciamento de conversas do Chatwoot
exports.CHATWOOT_FUNCTIONS = [
    {
        name: 'assign_conversation',
        displayName: 'Transferir conversa (handoff)',
        description: 'Transfere uma conversa para outro agente ou equipe (handoff)',
        category: 'Chatwoot',
        toolType: 'predefined',
        strict: true,
        parameters: {
            type: 'object',
            properties: {
                assignee_id: {
                    type: 'integer',
                    description: 'ID do agente para o qual a conversa será transferida. Use null para desassociar.',
                },
                team_id: {
                    type: ['integer', 'null'],
                    description: 'ID da equipe para a qual a conversa será transferida. Opcional.',
                },
                message: {
                    type: 'string',
                    description: 'Mensagem explicando o motivo da transferência da conversa. Essa mensagem será enviada antes da transferência.',
                },
            },
            required: ['assignee_id', 'team_id', 'message'],
            additionalProperties: false,
        },
    },
    {
        name: 'send_message',
        displayName: 'Responder mensagem',
        description: 'Responde com uma mensagem de texto. Se for uma conversa de grupo, a mensagem será enviada para o grupo.',
        category: 'Chatwoot',
        toolType: 'predefined',
        strict: true,
        parameters: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                    description: 'Conteúdo da mensagem a ser enviada',
                },
            },
            required: ['message'],
            additionalProperties: false,
        },
    },
    {
        name: 'add_private_note',
        displayName: 'Adicionar nota privada',
        description: 'Adiciona uma nota privada na conversa que só é visível para agentes, não para o cliente',
        category: 'Chatwoot',
        toolType: 'predefined',
        strict: true,
        parameters: {
            type: 'object',
            properties: {
                note: {
                    type: 'string',
                    description: 'Conteúdo da nota privada a ser adicionada',
                },
            },
            required: ['note'],
            additionalProperties: false,
        },
    },
    {
        name: 'send_attachment',
        displayName: 'Enviar anexo',
        description: 'Envia um anexo (imagem, documento, etc.) para o cliente',
        category: 'Chatwoot',
        toolType: 'predefined',
        strict: true,
        parameters: {
            type: 'object',
            properties: {
                attachment_url: {
                    type: 'string',
                    description: 'URL pública do arquivo a ser anexado',
                },
                file_name: {
                    type: 'string',
                    description: 'Nome do arquivo que será mostrado ao cliente',
                },
            },
            required: ['attachment_url', 'file_name'],
            additionalProperties: false,
        },
    },
    {
        name: 'toggle_conversation_status',
        displayName: 'Alterar status da conversa',
        description: 'Altera o status de uma conversa (open, resolved, pending ou snoozed)',
        category: 'Chatwoot',
        toolType: 'predefined',
        strict: true,
        parameters: {
            type: 'object',
            properties: {
                status: {
                    type: 'string',
                    enum: ['open', 'resolved', 'pending', 'snoozed'],
                    description: 'Novo status da conversa',
                },
            },
            required: ['status'],
            additionalProperties: false,
        },
    },
    {
        name: 'get_messages',
        displayName: 'Recuperar mensagens da conversa',
        description: 'Recupera todas as mensagens de uma conversa específica em formato simplificado (role/content), incluindo metadados do contato e agente.',
        category: 'Chatwoot',
        toolType: 'predefined',
        strict: true,
        parameters: {
            type: 'object',
            properties: {},
            required: [],
            additionalProperties: false,
        },
    },
    {
        name: 'send_message_to',
        displayName: 'Enviar mensagem privada para um número de telefone',
        description: 'Envia uma mensagem privada para um número de telefone específico.',
        category: 'Chatwoot',
        toolType: 'predefined',
        strict: true,
        parameters: {
            type: 'object',
            properties: {
                phoneNumber: {
                    type: 'string',
                    description: 'Número de telefone do destinatário (incluindo código do país, ex: +5511999999999)',
                },
                message: {
                    type: 'string',
                    description: 'Mensagem a ser enviada',
                },
                contactName: {
                    type: 'string',
                    description: 'Nome do contato. Use string vazia ("") se não quiser definir nome.',
                },
                isPrivateNote: {
                    type: 'boolean',
                    description: 'Se true, envia como nota privada visível apenas para agentes (padrão: false)',
                },
            },
            required: ['phoneNumber', 'message', 'contactName', 'isPrivateNote'],
            additionalProperties: false,
        },
    },
];
// Array consolidado de todas as funções pré-definidas
exports.PREDEFINED_FUNCTIONS = [
    ...exports.DATE_TIME_FUNCTIONS,
    ...exports.CHATWOOT_FUNCTIONS,
    ...exports.CALENDAR_FUNCTIONS,
];
// Função helper para buscar função por nome
function getPredefinedFunction(name) {
    return exports.PREDEFINED_FUNCTIONS.find(func => func.name === name);
}
// Função helper para buscar funções por categoria
function getPredefinedFunctionsByCategory(category) {
    return exports.PREDEFINED_FUNCTIONS.filter(func => func.category === category);
}
// Função helper para obter todas as categorias disponíveis
function getPredefinedFunctionCategories() {
    const categories = exports.PREDEFINED_FUNCTIONS
        .map(func => func.category)
        .filter(Boolean);
    return [...new Set(categories)];
}
