-- CreateTable
CREATE TABLE "Competicao" (
    "id" SERIAL NOT NULL,
    "ano" INTEGER NOT NULL,
    "campeaoId" INTEGER NOT NULL,
    "paisSede" TEXT NOT NULL,
    "numeroDeEquipes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Competicao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipes" (
    "id" SERIAL NOT NULL,
    "pais" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "golsPro" INTEGER NOT NULL,
    "golsContra" INTEGER NOT NULL,
    "saldoDeGols" INTEGER NOT NULL,
    "numeroDeVitorias" INTEGER NOT NULL,
    "numeroDeEmpates" INTEGER NOT NULL,
    "numeroDeDerrotas" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Equipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estadios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "cidade" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Estadios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partidas" (
    "id" SERIAL NOT NULL,
    "estadioId" INTEGER NOT NULL,
    "competicaoId" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "dataJogo" TIMESTAMP(3) NOT NULL,
    "fase" TEXT NOT NULL,
    "nomeEstadio" TEXT NOT NULL,
    "horaInicial" TIMESTAMP(3) NOT NULL,
    "vencedor" TEXT NOT NULL,
    "equipe1" TEXT NOT NULL,
    "equipe2" TEXT NOT NULL,
    "golsEquipe1" INTEGER NOT NULL,
    "golsEquipe2" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Partidas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComissaoTecnica" (
    "id" SERIAL NOT NULL,
    "equipeId" INTEGER NOT NULL,
    "passaporte" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "funcao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ComissaoTecnica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JogadorLinha" (
    "id" SERIAL NOT NULL,
    "equipeId" INTEGER NOT NULL,
    "passaporte" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "posicao" TEXT NOT NULL,
    "gols" INTEGER NOT NULL,
    "assistencias" INTEGER NOT NULL,
    "cartoesAmarelos" INTEGER NOT NULL,
    "cartoesVermelhos" INTEGER NOT NULL,
    "pais" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JogadorLinha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goleiro" (
    "id" SERIAL NOT NULL,
    "equipeId" INTEGER NOT NULL,
    "passaporte" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "defesas" INTEGER NOT NULL,
    "golsSofridos" INTEGER NOT NULL,
    "cartoesAmarelos" INTEGER NOT NULL,
    "cartoesVermelhos" INTEGER NOT NULL,
    "pais" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Goleiro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Competicao_ano_key" ON "Competicao"("ano");

-- AddForeignKey
ALTER TABLE "Competicao" ADD CONSTRAINT "Competicao_campeaoId_fkey" FOREIGN KEY ("campeaoId") REFERENCES "Equipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partidas" ADD CONSTRAINT "Partidas_competicaoId_fkey" FOREIGN KEY ("competicaoId") REFERENCES "Competicao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partidas" ADD CONSTRAINT "Partidas_estadioId_fkey" FOREIGN KEY ("estadioId") REFERENCES "Estadios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComissaoTecnica" ADD CONSTRAINT "ComissaoTecnica_equipeId_fkey" FOREIGN KEY ("equipeId") REFERENCES "Equipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JogadorLinha" ADD CONSTRAINT "JogadorLinha_equipeId_fkey" FOREIGN KEY ("equipeId") REFERENCES "Equipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goleiro" ADD CONSTRAINT "Goleiro_equipeId_fkey" FOREIGN KEY ("equipeId") REFERENCES "Equipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
