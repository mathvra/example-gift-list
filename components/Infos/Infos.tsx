export default function Infos() {
  return (
    <div className="flex flex-col container mx-auto py-6 font-primary-0 gap-4">
      <h1 className="text-center text-2xl font-bold">Lista de presentes</h1>
      <div className="flex flex-col gap-6">
        <p>
          Todos os presentes contém um link que leva direto para o site da loja,
          basta realizar a compra normalmente e enviar para o nosso endereço
        </p>
        <div>
          <h3 className="font-bold">Endereço para entrega:</h3>
          <p>
            Condomínio Arruda, R. Jasmim, 1550, bloco A, 1111 - Capim Macio,
            Natal/RN, 59999-999
          </p>
        </div>
      </div>
    </div>
  );
}
