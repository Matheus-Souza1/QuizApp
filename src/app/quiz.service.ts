import { Injectable } from '@angular/core';

export interface IQuestion {
  question: string;
  answers: any[],
  answer: string;
}

@Injectable({
  providedIn: 'root'
})

export class QuizService {

  public score: number = 0;

  constructor() { }
  public questionIndex: number = 0;
  public questions: IQuestion[] = [
    {
      question: 'Qual dos seguintes serviços do Azure é usado para armazenar dados não estruturados como blobs, tabelas e filas?',
      answers: [
        { text: 'Azure SQL Database' },
        { text: 'Azure Cosmos DB' },
        { text: 'Azure Storage' },
        { text: 'Azure Data Lake Store' }
      ],
      answer: 'Azure Storage'
    },
    {
      question: 'Um grupo de recursos no Azure é usado para:',
      answers: [
        { text: 'Organizar recursos em uma única rede virtual' },
        { text: 'Agrupar recursos relacionados para gerenciamento e faturamento' },
        { text: 'Distribuir aplicativos em várias regiões geográficas' },
        { text: 'Alocar recursos de computação otimizados para cargas de trabalho intensivas' }
      ],
      answer: 'Agrupar recursos relacionados para gerenciamento e faturamento'
    },
    {
      question: 'Qual dos seguintes serviços do Azure é usado para criar e gerenciar clusters de máquinas virtuais para processamento paralelo e de alta performance?',
      answers: [
        { text: 'Azure Virtual Machines' },
        { text: 'Azure Kubernetes Service (AKS)' },
        { text: 'Azure Batch' },
        { text: 'Azure Functions' }
      ],
      answer: 'Azure Batch'
    },
    {
      question: 'Qual linguagem é frequentemente usada com o Azure Functions para escrever código de função sem a necessidade de provisionar ou gerenciar servidores?',
      answers: [
        { text: 'Python' },
        { text: 'Java' },
        { text: 'C#' },
        { text: 'JavaScript' }
      ],
      answer: 'JavaScript'
    },
    {
      question: 'Qual dos seguintes é um serviço de banco de dados totalmente gerenciado no Azure?',
      answers: [
        { text: 'Azure SQL Database' },
        { text: 'SQL Server em uma máquina virtual' },
        { text: 'MySQL instalado manualmente em uma máquina virtual' },
        { text: 'Oracle Database na nuvem' }
      ],
      answer: 'Azure SQL Database'
    },
    {
      question: 'Ao desenvolver aplicativos para o Azure, qual serviço é frequentemente usado para autenticar usuários e proteger recursos?',
      answers: [
        { text: 'Azure Active Directory' },
        { text: 'Azure Key Vault' },
        { text: 'Azure AD B2C' },
        { text: 'Azure Security Center' }
      ],
      answer: 'Azure Active Directory'
    },
    {
      question: 'Que tipo de autenticação é geralmente usada para conceder a um aplicativo acesso a recursos do Azure em nome de um usuário?',
      answers: [
        { text: 'Certificados' },
        { text: 'Senha compartilhada' },
        { text: 'Tokens de acesso' },
        { text: 'Chave de API' }
      ],
      answer: 'Tokens de acesso'
    },
    {
      question: 'Qual serviço do Azure permite que você crie pipelines de integração e automação para conectar aplicativos, dados e sistemas?',
      answers: [
        { text: 'Azure Logic Apps' },
        { text: 'Azure Functions' },
        { text: 'Azure Event Grid' },
        { text: 'Azure Service Bus' }
      ],
      answer: 'Azure Logic Apps'
    },
    {
      question: 'Quando você deseja implantar e gerenciar contêineres Docker no Azure, qual serviço é mais adequado?',
      answers: [
        { text: 'Azure Virtual Machines' },
        { text: 'Azure Container Instances' },
        { text: 'Azure Kubernetes Service (AKS)' },
        { text: 'Azure App Service' }
      ],
      answer: 'Azure Kubernetes Service (AKS)'
    },
    {
      question: 'Qual dos seguintes é usado para monitorar o consumo de recursos e otimizar os custos no Azure?',
      answers: [
        { text: 'Azure Security Center' },
        { text: 'Azure Cost Management and Billing' },
        { text: 'Azure Policy' },
        { text: 'Azure Resource Graph' }
      ],
      answer: 'Azure Cost Management and Billing'
    },
    {
      question: 'Ao criar uma solução que requer comunicação entre várias instâncias de aplicativos, qual serviço pode ser usado para criar um barramento de mensagens?',
      answers: [
        { text: 'Azure Event Grid' },
        { text: 'Azure Logic Apps' },
        { text: 'Azure Service Bus' },
        { text: 'Azure Functions' }
      ],
      answer: 'Azure Service Bus'
    },
    {
      question: 'Qual das seguintes opções é uma prática recomendada ao usar o Azure Front Door para rotear o tráfego?',
      answers: [
        { text: 'Encaminhar todo o tráfego para uma única região.' },
        { text: 'Usar apenas uma instância do Front Door para alta disponibilidade.' },
        { text: 'Usar regras de encaminhamento para direcionar o tráfego com base em URL, cabeçalhos, etc.' },
        { text: 'Desativar o uso de certificados SSL/TLS para melhorar o desempenho.' }
      ],
      answer: 'Usar regras de encaminhamento para direcionar o tráfego com base em URL, cabeçalhos, etc.'
    },
    {
      question: 'Qual serviço do Azure permite aos desenvolvedores adicionar autenticação baseada em identidade a seus aplicativos?',
      answers: [
        { text: 'Azure Active Directory' },
        { text: 'Azure Security Center' },
        { text: 'Azure Key Vault' },
        { text: 'Azure AD B2C' }
      ],
      answer: 'Azure Active Directory'
    },
    {
      question: 'Ao usar o Azure Key Vault, qual dos seguintes é armazenado de forma segura?',
      answers: [
        { text: 'Senhas em texto simples' },
        { text: 'Chaves de criptografia' },
        { text: 'Segredos publicamente compartilhados' },
        { text: 'Logs de auditoria' }
      ],
      answer: 'Chaves de criptografia'
    },
    {
      question: 'Qual serviço do Azure permite controlar o acesso a recursos com base em atributos de segurança?',
      answers: [
        { text: 'Azure Policy' },
        { text: 'Azure Security Center' },
        { text: 'Azure Active Directory' },
        { text: 'Azure AD B2C' }
      ],
      answer: 'Azure Policy'
    },
    {
      question: 'Qual serviço do Azure pode ser usado para proteger conexões de rede privada entre um ambiente local e uma rede virtual do Azure?',
      answers: [
        { text: 'Azure Security Center' },
        { text: 'Azure Active Directory' },
        { text: 'Azure VPN Gateway' },
        { text: 'Azure Bastion' }
      ],
      answer: 'Azure VPN Gateway'
    },
    {
      question: 'Qual dos seguintes serviços do Azure é usado para implantar aplicativos e serviços sem a necessidade de gerenciar a infraestrutura subjacente?',
      answers: [
        { text: 'Azure Virtual Machines' },
        { text: 'Azure Functions' },
        { text: 'Azure Container Instances' },
        { text: 'Azure App Service' }
      ],
      answer: 'Azure App Service'
    },
    {
      question: 'O que é um grupo de afinidade em relação aos recursos do Azure?',
      answers: [
        { text: 'Um grupo de recursos com políticas de acesso semelhantes.' },
        { text: 'Um grupo de máquinas virtuais conectadas a uma rede virtual.' },
        { text: 'Um grupo de recursos que compartilham uma política de preços.' },
        { text: 'Um grupo de recursos que são implantados na mesma região para otimizar a latência da rede.' }
      ],
      answer: 'Um grupo de recursos que são implantados na mesma região para otimizar a latência da rede.'
    },
    {
      question: 'Qual dos seguintes serviços do Azure é usado para criar e gerenciar bancos de dados NoSQL altamente disponíveis e distribuídos?',
      answers: [
        { text: 'Azure SQL Database' },
        { text: 'Azure Cosmos DB' },
        { text: 'Azure Cache for Redis' },
        { text: 'Azure Data Lake Store' }
      ],
      answer: 'Azure Cosmos DB'
    },
    {
      question: 'Qual linguagem de programação é frequentemente usada com o Azure Functions para criar funções serverless?',
      answers: [
        { text: 'C++' },
        { text: 'Python' },
        { text: 'Ruby' },
        { text: 'Swift' }
      ],
      answer: 'Python'
    },
    {
      question: 'Qual serviço do Azure é usado para implantar e gerenciar aplicativos web, móveis e API?',
      answers: [
        { text: 'Azure Functions' },
        { text: 'Azure App Service' },
        { text: 'Azure Logic Apps' },
        { text: 'Azure Service Bus' }
      ],
      answer: 'Azure App Service'
    },
    {
      question: 'Qual dos seguintes é um serviço de banco de dados relacional totalmente gerenciado no Azure?',
      answers: [
        { text: 'Azure SQL Database' },
        { text: 'Azure Cosmos DB' },
        { text: 'Azure Blob Storage' },
        { text: 'Azure Table Storage' }
      ],
      answer: 'Azure SQL Database'
    },
    {
      question: 'Qual tipo de autenticação é frequentemente usado para permitir que um aplicativo acesse recursos do Azure em nome do próprio aplicativo?',
      answers: [
        { text: 'Certificados de cliente' },
        { text: 'Token de acesso' },
        { text: 'Senha compartilhada' },
        { text: 'Chave de API' }
      ],
      answer: 'Token de acesso'
    },
    {
      question: 'Qual serviço do Azure permite a criação de pipelines de dados para transformar, enriquecer e mover dados entre várias fontes e destinos?',
      answers: [
        { text: 'Azure Data Factory' },
        { text: 'Azure Logic Apps' },
        { text: 'Azure Event Grid' },
        { text: 'Azure Service Bus' }
      ],
      answer: 'Azure Data Factory'
    },
    {
      question: 'Quando se trata de integração de identidade em aplicativos, qual serviço do Azure é frequentemente usado para federar identidades e permitir a autenticação única (SSO)?',
      answers: [
        { text: 'Azure Active Directory' },
        { text: 'Azure Key Vault' },
        { text: 'Azure AD B2C' },
        { text: 'Azure Security Center' }
      ],
      answer: 'Azure Active Directory'
    },
    {
      question: 'Qual serviço do Azure é usado para criar fluxos de trabalho automatizados que integram aplicativos, dados e sistemas?',
      answers: [
        { text: 'Azure Logic Apps' },
        { text: 'Azure Functions' },
        { text: 'Azure Event Grid' },
        { text: 'Azure Service Bus' }
      ],
      answer: 'Azure Logic Apps'
    },
    {
      question: 'Ao monitorar o desempenho de aplicativos no Azure, qual serviço permite coletar, analisar e atuar com base em dados de telemetria?',
      answers: [
        { text: 'Azure Insights' },
        { text: 'Azure Advisor' },
        { text: 'Azure Monitor' },
        { text: 'Azure Diagnostics' }
      ],
      answer: 'Azure Monitor'
    },
    {
      question: 'Qual dos seguintes serviços do Azure é usado para rotear eventos de uma fonte para um ou mais destinos, com base em assinaturas e filtros?',
      answers: [
        { text: 'Azure Event Hub' },
        { text: 'Azure Logic Apps' },
        { text: 'Azure Event Grid' },
        { text: 'Azure Service Bus' }
      ],
      answer: 'Azure Event Grid'
    },
    {
      question: 'Qual serviço do Azure é usado para fornecer acesso seguro a recursos da nuvem para usuários externos, parceiros ou clientes?',
      answers: [
        { text: 'Azure VPN Gateway' },
        { text: 'Azure AD B2C' },
        { text: 'Azure Front Door' },
        { text: 'Azure API Management' }
      ],
      answer: 'Azure API Management'
    },
    {
      question: 'Qual prática é recomendada ao projetar para alta disponibilidade usando o Azure?',
      answers: [
        { text: 'Usar um único servidor virtual para economizar custos.' },
        { text: 'Hospedar todos os recursos em uma única região.' },
        { text: 'Distribuir recursos em várias regiões geográficas.' },
        { text: 'Evitar o uso de balanceadores de carga para simplificar o gerenciamento.' }
      ],
      answer: 'Distribuir recursos em várias regiões geográficas.'
    },
    {
      question: 'Qual serviço do Azure permite armazenar e gerenciar chaves, senhas, certificados e outros segredos?',
      answers: [
        { text: 'Azure Key Vault' },
        { text: 'Azure Security Center' },
        { text: 'Azure Active Directory' },
        { text: 'Azure AD B2C' }
      ],
      answer: 'Azure Key Vault'
    },
    {
      question: 'Qual dos seguintes é uma prática recomendada para proteger recursos do Azure?',
      answers: [
        { text: 'Compartilhar senhas de administrador com colegas de equipe.' },
        { text: 'Armazenar senhas em texto simples em configurações de aplicativos.' },
        { text: 'Usar credenciais de serviço ao conectar aplicativos a recursos do Azure.' },
        { text: 'Evitar o uso de autenticação de dois fatores.' }
      ],
      answer: 'Usar credenciais de serviço ao conectar aplicativos a recursos do Azure.'
    },
    {
      question: 'Qual dos seguintes é um exemplo de ataque em que um invasor envia uma grande quantidade de solicitações para um serviço web, causando indisponibilidade?',
      answers: [
        { text: 'Ataque de injeção de SQL' },
        { text: 'Ataque de força bruta' },
        { text: 'Ataque de negação de serviço (DDoS)' },
        { text: 'taque de criptografia' }
      ],
      answer: 'Ataque de negação de serviço (DDoS)'
    },
    {
      question: "Qual dos seguintes serviços do Azure é usado para hospedar aplicativos e serviços em máquinas virtuais gerenciadas?",
      answers: [
        { text: "Azure App Service" },
        { text: "Azure Functions" },
        { text: "Azure Container Instances" },
        { text: "Azure Virtual Machines" }
      ],
      answer: "Azure Virtual Machines"
    },
    {
      question: "O que é um grupo de recursos no Azure?",
      answers: [
        { text: "Uma coleção de máquinas virtuais em uma rede virtual." },
        { text: "Um conjunto de serviços com escalabilidade automática." },
        { text: "Um agrupamento lógico de recursos relacionados para gerenciamento." },
        { text: "Um ambiente de desenvolvimento para aplicativos no Azure." }
      ],
      answer: "Um agrupamento lógico de recursos relacionados para gerenciamento."
    },
    {
      question: "Qual dos seguintes serviços do Azure é usado para criar e gerenciar bancos de dados NoSQL altamente escaláveis?",
      answers: [
        { text: "Azure SQL Database" },
        { text: "Azure Cosmos DB" },
        { text: "Azure Blob Storage" },
        { text: "Azure Table Storage" }
      ],
      answer: "Azure Cosmos DB"
    },
    {
      question: "Qual linguagem de programação é comumente usada com o Azure Functions para criar funções serverless?",
      answers: [
        { text: "Java" },
        { text: "C#" },
        { text: "Python" },
        { text: "Ruby" }
      ],
      answer: "C#"
    },
    {
      question: "Qual serviço do Azure é usado para criar pipelines de dados que extraem, transformam e carregam dados de várias fontes para destinos específicos?",
      answers: [
        { text: "Azure Data Factory" },
        { text: "Azure Logic Apps" },
        { text: "Azure Event Grid" },
        { text: "Azure Service Bus" }
      ],
      answer: "Azure Data Factory"
    },
    {
      question: "Qual serviço do Azure é usado para monitorar o desempenho e a disponibilidade de aplicativos e recursos?",
      answers: [
        { text: "Azure Monitor" },
        { text: "Azure Insights" },
        { text: "Azure Advisor" },
        { text: "Azure Diagnostics" }
      ],
      answer: "Azure Monitor"
    },
    {
      question: "Ao usar o Azure Active Directory, qual protocolo é comumente usado para autenticar aplicativos e usuários?",
      answers: [
        { text: "OAuth" },
        { text: "SAML" },
        { text: "OpenID Connect" },
        { text: "LDAP" }
      ],
      answer: "OpenID Connect"
    },
    {
      question: "Qual dos seguintes é uma prática recomendada para garantir a segurança de aplicativos no Azure?",
      answers: [
        { text: "Armazenar senhas em texto claro em configurações de aplicativos." },
        { text: "Compartilhar chaves de criptografia publicamente." },
        { text: "Evitar o uso de certificados SSL/TLS para reduzir a latência." },
        { text: "Usar HTTPS para proteger a comunicação entre aplicativos e usuários." }
      ],
      answer: "Usar HTTPS para proteger a comunicação entre aplicativos e usuários."
    },
    {
      question: "Qual dos seguintes é um exemplo de ataque em que um invasor tenta explorar vulnerabilidades em uma aplicação para executar código malicioso?",
      answers: [
        { text: "Ataque de negação de serviço (DDoS)" },
        { text: "Ataque de injeção de SQL" },
        { text: "Ataque de força bruta" },
        { text: "Ataque de cross-site scripting (XSS)" }
      ],
      answer: "Ataque de injeção de SQL"
    }
  ];

  public count: number = this.questions.length;

  getQuestions() {
    return this.questions;
  }
}
